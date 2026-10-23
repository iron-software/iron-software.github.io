/**
 * classify.mjs — diff two Surfaces and classify each change (Node port of classify.py).
 *
 * Because an xrefmap uid encodes parameter *types*, a parameter-type change or a new overload always
 * surfaces as a removal plus an addition rather than a modification. A `changed` delta is therefore
 * specifically about return type, modifiers, accessors, parameter names, parameter defaults, and
 * base types — the things only the HTML declarations reveal.
 *
 * Every ordering here mirrors the Python port exactly, because byte-identical JSON between the two
 * is the repo's dual-port parity gate.
 */

import { parseDeclaration, simpleMemberName } from "./csharp.mjs";
import {
  ADDED, ADDITIVE, BREAKING, CHANGED, COSMETIC, REMOVED, SEVERITY_ORDER, bySeverity, makeDelta, summary,
} from "./model.mjs";

/**
 * How each modifier is judged when it appears or disappears, as
 * `[severityWhenAdded, reasonWhenAdded, severityWhenRemoved, reasonWhenRemoved]`.
 *
 * The table is exhaustive over the modifiers that actually occur in the archive so that common,
 * well-understood changes are explained rather than falling through to the generic "declaration
 * changed" verdict. Entries marked cosmetic are implementation detail a consumer never binds against.
 * Insertion order is load-bearing: it fixes the order reasons appear in, which the parity gate checks.
 */
export const MODIFIER_RULES = {
  sealed: [BREAKING, "sealed added (can no longer be inherited)",
    ADDITIVE, "sealed removed (can now be inherited)"],
  abstract: [BREAKING, "abstract added (must now be implemented)",
    ADDITIVE, "abstract removed"],
  virtual: [ADDITIVE, "virtual added (can now be overridden)",
    BREAKING, "virtual removed (can no longer be overridden)"],
  readonly: [BREAKING, "became readonly (assignment no longer permitted)",
    ADDITIVE, "readonly removed (assignment now permitted)"],
  // A const is inlined into the consumer's assembly, so moving either way is binary-breaking.
  const: [BREAKING, "became const", BREAKING, "no longer const"],
  // Flipping static changes the call syntax in both directions.
  static: [BREAKING, "became static", BREAKING, "no longer static"],
  async: [COSMETIC, "async added", COSMETIC, "async removed"],
  new: [COSMETIC, "new modifier added", COSMETIC, "new modifier removed"],
  override: [COSMETIC, "override added", COSMETIC, "override removed"],
  partial: [COSMETIC, "partial added", COSMETIC, "partial removed"],
  extern: [COSMETIC, "extern added", COSMETIC, "extern removed"],
  unsafe: [COSMETIC, "unsafe added", COSMETIC, "unsafe removed"],
  volatile: [COSMETIC, "volatile added", COSMETIC, "volatile removed"],
};

/** Visibility keywords ordered widest to narrowest; narrowing breaks consumers, widening does not. */
const VISIBILITY_ORDER = ["public", "protected", "internal", "private"];

/**
 * .NET naming convention for an interface: `I` followed by an upper-case letter. Used only to
 * decide whether an unverifiable base-list difference should be downgraded, never to assert one.
 */
const INTERFACE_SHAPED = /^I[A-Z]/;

/** Python-compatible string ordering (code point ascending). */
const compareStrings = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const difference = (a, b) => [...a].filter((value) => !b.has(value));
const sortedDifference = (a, b) => difference(a, b).sort(compareStrings);

function visibilityOf(modifiers) {
  for (const keyword of VISIBILITY_ORDER) if (modifiers.has(keyword)) return keyword;
  return "";
}

/** Property accessor changes. Losing an accessor breaks every caller that used it. */
function accessorReasons(before, after) {
  // Exactly one side has accessors: the member was converted between a field and a property. The uid
  // is unchanged, but field and property access compile differently, so this is binary-breaking.
  if ((before.accessors === null) !== (after.accessors === null)) {
    return [[BREAKING, before.accessors === null ? "field converted to a property" : "property converted to a field"]];
  }
  if (before.accessors === null || after.accessors === null) return [];

  const lost = sortedDifference(before.accessors, after.accessors);
  const gained = sortedDifference(after.accessors, before.accessors);
  const reasons = [];
  if (lost.length) reasons.push([BREAKING, `${lost.join(", ")} accessor removed`]);
  if (gained.length) reasons.push([ADDITIVE, `${gained.join(", ")} accessor added`]);
  return reasons;
}

function modifierReasons(before, after) {
  const reasons = [];
  const gained = new Set(difference(after.modifiers, before.modifiers));
  const lost = new Set(difference(before.modifiers, after.modifiers));

  const oldVisibility = visibilityOf(before.modifiers);
  const newVisibility = visibilityOf(after.modifiers);
  if (oldVisibility && newVisibility && oldVisibility !== newVisibility) {
    if (VISIBILITY_ORDER.indexOf(newVisibility) > VISIBILITY_ORDER.indexOf(oldVisibility)) {
      reasons.push([BREAKING, `visibility narrowed from ${oldVisibility} to ${newVisibility}`]);
    } else {
      reasons.push([ADDITIVE, `visibility widened from ${oldVisibility} to ${newVisibility}`]);
    }
  }

  for (const [modifier, [addedSeverity, addedReason, removedSeverity, removedReason]] of Object.entries(MODIFIER_RULES)) {
    if (gained.has(modifier)) reasons.push([addedSeverity, addedReason]);
    else if (lost.has(modifier)) reasons.push([removedSeverity, removedReason]);
  }
  return reasons;
}

/** Parameter differences that survive an identical uid: names and default values. */
function parameterReasons(before, after) {
  const oldParams = before.parameters;
  const newParams = after.parameters;
  if (oldParams === null || newParams === null || oldParams.length !== newParams.length) return [];

  const reasons = [];
  for (let index = 0; index < oldParams.length; index++) {
    const old = oldParams[index];
    const fresh = newParams[index];
    if (old.default !== null && fresh.default === null) {
      reasons.push([BREAKING, `default value removed from '${fresh.name || old.name}'`]);
    } else if (old.default === null && fresh.default !== null) {
      reasons.push([ADDITIVE, `default value added to '${fresh.name}'`]);
    } else if (old.default !== fresh.default) {
      reasons.push([COSMETIC, `default for '${fresh.name}' changed: ${old.default} -> ${fresh.default}`]);
    }
    // Only breaks callers using named arguments, so it is reported but not counted breaking.
    if (old.name !== fresh.name) reasons.push([COSMETIC, `parameter renamed: ${old.name} -> ${fresh.name}`]);
  }
  return reasons;
}

/**
 * Base type and interface differences.
 *
 * Entries naming a filtered-out type are ignored. Declarations render base types by simple name, so
 * a namespace pattern cannot recognise them here — `IronSoftware.Deployment.BaseVersionFactory`
 * implements an obfuscated interface that DocFX renders as bare `qdygyu`, and that name changes on
 * every build. Without this the type reports a base removed plus a base added in every release.
 */
function baseReasons(before, after, blockedNames = new Set(), interfaces = new Set()) {
  const keep = (base) => !blockedNames.has(base) && !interfaces.has(base);
  let lost = before.bases.filter((base) => !after.bases.includes(base) && keep(base));
  let gained = after.bases.filter((base) => !before.bases.includes(base) && keep(base));

  // Anything interface-shaped that survived the `interfaces` exclusion had no Implements section to
  // corroborate it — interface pages never get one, and a few classes do not either. The declaration
  // line is not a trustworthy source for interfaces across DocFX versions (2026.7 stopped inlining
  // them), so such a difference is reported but not counted as breaking.
  const lostInterfaces = lost.filter((base) => INTERFACE_SHAPED.test(base));
  const gainedInterfaces = gained.filter((base) => INTERFACE_SHAPED.test(base));
  lost = lost.filter((base) => !lostInterfaces.includes(base));
  gained = gained.filter((base) => !gainedInterfaces.includes(base));

  const reasons = [];
  if (lost.length) reasons.push([BREAKING, `base type removed: ${lost.join(", ")}`]);
  if (gained.length) reasons.push([ADDITIVE, `base type added: ${gained.join(", ")}`]);
  if (lostInterfaces.length || gainedInterfaces.length) {
    const detail = [];
    if (lostInterfaces.length) detail.push(`no longer listed: ${lostInterfaces.join(", ")}`);
    if (gainedInterfaces.length) detail.push(`newly listed: ${gainedInterfaces.join(", ")}`);
    reasons.push([COSMETIC, `declaration interface list differs (${detail.join("; ")}) — unverifiable, `
      + "this page has no Implements section and DocFX renders the declaration's interface list "
      + "inconsistently across versions"]);
  }
  return reasons;
}

/**
 * Interface differences, taken from the type page's Implements section — the authoritative and
 * version-stable record of what a type implements. The declaration line is not.
 */
function implementsReasons(before, after, blockedNames = new Set()) {
  const beforeSet = new Set(before.filter((name) => !blockedNames.has(name)));
  const afterSet = new Set(after.filter((name) => !blockedNames.has(name)));
  const lost = sortedDifference(beforeSet, afterSet);
  const gained = sortedDifference(afterSet, beforeSet);
  const reasons = [];
  if (lost.length) reasons.push([BREAKING, `interface no longer implemented: ${lost.join(", ")}`]);
  if (gained.length) reasons.push([ADDITIVE, `interface now implemented: ${gained.join(", ")}`]);
  return reasons;
}

/** Collapse the punctuation left behind after names are removed from a base list. */
function normalizeBases(declaration) {
  return declaration.replace(/[\s,:]+/g, " ").trim();
}

/**
 * Drop whole-word occurrences of filtered-out type names from a declaration.
 *
 * Longest name first, which is load-bearing: `IEnumerable` is a whole-word match inside
 * `IEnumerable<Cell>` (`<` is a non-word character), so removing the short name first would leave a
 * stray `<Cell>` and the long name would then match nothing. Sorting also keeps the result
 * independent of Set iteration order, matching the Python port exactly.
 */
function withoutBlocked(declaration, blockedNames) {
  let result = declaration;
  for (const name of [...blockedNames].sort((a, b) => b.length - a.length)) {
    result = result.replace(
      new RegExp(`(?<![A-Za-z0-9_])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![A-Za-z0-9_])`, "g"), "");
  }
  return result;
}

/**
 * Return `[severity, reason]` pairs describing how two declarations differ. An empty list means they
 * are equivalent. A difference no specific rule explains is reported as breaking, since an
 * unexplained signature change is more likely to matter than not — the raw before/after is always
 * shown so the reader can judge.
 */
export function compareDeclarations(beforeText, afterText, blockedNames = new Set(),
  beforeImplements = [], afterImplements = []) {
  const interfaces = new Set([...beforeImplements, ...afterImplements]);
  const implementsResult = implementsReasons(beforeImplements, afterImplements, blockedNames);

  if (beforeText === afterText) return implementsResult;
  // One side had no page to parse; the identity is unchanged, so there is nothing to claim.
  if (!beforeText || !afterText) return implementsResult;
  // Declarations that differ only by the name of a filtered-out type are equivalent as far as the
  // documented surface goes. Checking here rather than after the rules run matters: otherwise every
  // such difference would be filtered out of the reasons list and then trip the fallback below.
  if (blockedNames.size
    && withoutBlocked(beforeText, blockedNames) === withoutBlocked(afterText, blockedNames)) {
    return implementsResult;
  }

  const before = parseDeclaration(beforeText);
  const after = parseDeclaration(afterText);

  const reasons = [];
  if (before.return_type !== after.return_type) {
    reasons.push([BREAKING, `type changed: ${before.return_type} -> ${after.return_type}`]);
  }
  reasons.push(...modifierReasons(before, after));
  reasons.push(...accessorReasons(before, after));
  reasons.push(...parameterReasons(before, after));
  reasons.push(...baseReasons(before, after, blockedNames, interfaces));
  reasons.push(...implementsResult);

  if (reasons.length === 0) {
    // Declarations differing only in how interfaces are rendered are equivalent; the Implements
    // comparison above is the authority on whether anything really changed.
    const strippedBefore = withoutBlocked(beforeText, interfaces);
    const strippedAfter = withoutBlocked(afterText, interfaces);
    if (normalizeBases(strippedBefore) !== normalizeBases(strippedAfter)) {
      reasons.push([BREAKING, "declaration changed"]);
    }
  }
  return reasons;
}

function severityOf(reasons) {
  const severities = new Set(reasons.map(([severity]) => severity));
  if (severities.has(BREAKING)) return BREAKING;
  return severities.has(ADDITIVE) ? ADDITIVE : COSMETIC;
}

function compareDeltas(a, b) {
  const severity = SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity);
  if (severity !== 0) return severity;
  return compareStrings(a.typeUid, b.typeUid)
    || compareStrings(a.display, b.display)
    || compareStrings(a.uid, b.uid);
}

/** Compare two Surfaces and return every classified change. */
export function diffSurfaces(surfaceFrom, surfaceTo, productName) {
  const result = {
    productCode: surfaceFrom.productCode,
    productName,
    versionFrom: surfaceFrom.version,
    versionTo: surfaceTo.version,
    deltas: [],
    warnings: [...surfaceFrom.warnings, ...surfaceTo.warnings],
    surfaceFrom,
    surfaceTo,
  };

  // A base type filtered out of either side is not documented surface, so ignore it in both.
  const blockedNames = new Set([...surfaceFrom.blockedTypeNames, ...surfaceTo.blockedTypeNames]);

  // Namespaces.
  for (const namespace of sortedDifference(surfaceFrom.namespaces, surfaceTo.namespaces)) {
    result.deltas.push(makeDelta({
      kind: REMOVED, severity: BREAKING, target: "namespace", typeUid: "", uid: namespace,
      display: namespace, before: namespace, reasons: ["namespace removed"],
    }));
  }
  for (const namespace of sortedDifference(surfaceTo.namespaces, surfaceFrom.namespaces)) {
    result.deltas.push(makeDelta({
      kind: ADDED, severity: ADDITIVE, target: "namespace", typeUid: "", uid: namespace,
      display: namespace, after: namespace, reasons: ["namespace added"],
    }));
  }

  const fromTypeUids = new Set(surfaceFrom.types.keys());
  const toTypeUids = new Set(surfaceTo.types.keys());

  // Types.
  for (const typeUid of sortedDifference(fromTypeUids, toTypeUids)) {
    const entry = surfaceFrom.types.get(typeUid);
    result.deltas.push(makeDelta({
      kind: REMOVED, severity: BREAKING, target: "type", typeUid, uid: typeUid, display: typeUid,
      before: entry.declaration || typeUid, reasons: ["type removed"],
    }));
  }
  for (const typeUid of sortedDifference(toTypeUids, fromTypeUids)) {
    const entry = surfaceTo.types.get(typeUid);
    result.deltas.push(makeDelta({
      kind: ADDED, severity: ADDITIVE, target: "type", typeUid, uid: typeUid, display: typeUid,
      after: entry.declaration || typeUid, reasons: ["type added"],
    }));
  }

  // Types present in both: their own declaration, then their members.
  const shared = [...fromTypeUids].filter((uid) => toTypeUids.has(uid)).sort(compareStrings);
  for (const typeUid of shared) {
    const beforeType = surfaceFrom.types.get(typeUid);
    const afterType = surfaceTo.types.get(typeUid);

    const typeReasons = compareDeclarations(beforeType.declaration, afterType.declaration, blockedNames,
      beforeType.implementsList, afterType.implementsList);
    if (typeReasons.length) {
      result.deltas.push(makeDelta({
        kind: CHANGED, severity: severityOf(typeReasons), target: "type", typeUid, uid: typeUid,
        display: typeUid, before: beforeType.declaration, after: afterType.declaration,
        reasons: typeReasons.map(([, reason]) => reason),
      }));
    }

    const beforeMemberUids = new Set(beforeType.members.keys());
    const afterMemberUids = new Set(afterType.members.keys());
    const removedUids = sortedDifference(beforeMemberUids, afterMemberUids);
    const addedUids = sortedDifference(afterMemberUids, beforeMemberUids);

    // A removed and an added member sharing a simple name is one overload signature change, not two
    // unrelated events; note it on both so the report reads correctly.
    const removedNames = new Set(removedUids.map(simpleMemberName));
    const addedNames = new Set(addedUids.map(simpleMemberName));
    const overloaded = new Set([...removedNames].filter((name) => addedNames.has(name)));

    for (const uid of removedUids) {
      const member = beforeType.members.get(uid);
      const reasons = ["member removed"];
      if (overloaded.has(simpleMemberName(uid))) reasons.push("overload signature change (see the matching addition)");
      result.deltas.push(makeDelta({
        kind: REMOVED, severity: BREAKING, target: "member", typeUid, uid,
        display: member.nameWithType, before: member.declaration || member.fullName, reasons,
      }));
    }
    for (const uid of addedUids) {
      const member = afterType.members.get(uid);
      const reasons = ["member added"];
      if (overloaded.has(simpleMemberName(uid))) reasons.push("overload signature change (see the matching removal)");
      result.deltas.push(makeDelta({
        kind: ADDED, severity: ADDITIVE, target: "member", typeUid, uid,
        display: member.nameWithType, after: member.declaration || member.fullName, reasons,
      }));
    }

    const sharedMembers = [...beforeMemberUids].filter((uid) => afterMemberUids.has(uid)).sort(compareStrings);
    for (const uid of sharedMembers) {
      const beforeMember = beforeType.members.get(uid);
      const afterMember = afterType.members.get(uid);
      const memberReasons = compareDeclarations(beforeMember.declaration, afterMember.declaration, blockedNames);
      if (memberReasons.length) {
        result.deltas.push(makeDelta({
          kind: CHANGED, severity: severityOf(memberReasons), target: "member", typeUid, uid,
          display: afterMember.nameWithType, before: beforeMember.declaration, after: afterMember.declaration,
          reasons: memberReasons.map(([, reason]) => reason),
        }));
      }
    }
  }

  result.deltas.sort(compareDeltas);
  return result;
}

export { bySeverity, summary };
