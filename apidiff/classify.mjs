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

function baseReasons(before, after) {
  const lost = before.bases.filter((base) => !after.bases.includes(base));
  const gained = after.bases.filter((base) => !before.bases.includes(base));
  const reasons = [];
  if (lost.length) reasons.push([BREAKING, `base type or interface removed: ${lost.join(", ")}`]);
  if (gained.length) reasons.push([ADDITIVE, `base type or interface added: ${gained.join(", ")}`]);
  return reasons;
}

/**
 * Return `[severity, reason]` pairs describing how two declarations differ. An empty list means they
 * are equivalent. A difference no specific rule explains is reported as breaking, since an
 * unexplained signature change is more likely to matter than not — the raw before/after is always
 * shown so the reader can judge.
 */
export function compareDeclarations(beforeText, afterText) {
  if (beforeText === afterText) return [];
  // One side had no page to parse; the identity is unchanged, so there is nothing to claim.
  if (!beforeText || !afterText) return [];

  const before = parseDeclaration(beforeText);
  const after = parseDeclaration(afterText);

  const reasons = [];
  if (before.return_type !== after.return_type) {
    reasons.push([BREAKING, `type changed: ${before.return_type} -> ${after.return_type}`]);
  }
  reasons.push(...modifierReasons(before, after));
  reasons.push(...accessorReasons(before, after));
  reasons.push(...parameterReasons(before, after));
  reasons.push(...baseReasons(before, after));

  if (reasons.length === 0) reasons.push([BREAKING, "declaration changed"]);
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

    const typeReasons = compareDeclarations(beforeType.declaration, afterType.declaration);
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
      const memberReasons = compareDeclarations(beforeMember.declaration, afterMember.declaration);
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
