/**
 * model.mjs — records shared by the parsing, classification, and rendering stages
 * (Node port of model.py).
 */

/** Change classifications, most severe first. The order drives grouping in every renderer. */
export const BREAKING = "BREAKING";
export const ADDITIVE = "ADDITIVE";
export const COSMETIC = "COSMETIC";
export const SEVERITY_ORDER = [BREAKING, ADDITIVE, COSMETIC];

/** Delta kinds. */
export const ADDED = "added";
export const REMOVED = "removed";
export const CHANGED = "changed";

/** One member (method, property, field, or event) of a type. */
export function makeMember({ uid, kind, name, nameWithType, fullName, typeUid, declaration = "" }) {
  return { uid, kind, name, nameWithType, fullName, typeUid, declaration };
}

/** One type page: its own declaration plus the members documented on it. */
export function makeTypeEntry({ uid, name, namespace = "", declaration = "" }) {
  return { uid, name, namespace, declaration, members: new Map() };
}

/** The complete public API surface of one archived product version. */
export function makeSurface(productCode, version) {
  return { productCode, version, namespaces: new Set(), types: new Map(), warnings: [] };
}

export function memberCount(surface) {
  let total = 0;
  for (const entry of surface.types.values()) total += entry.members.size;
  return total;
}

/** A single reported change. */
export function makeDelta({ kind, severity, target, typeUid, uid, display, before = "", after = "", reasons = [] }) {
  return { kind, severity, target, typeUid, uid, display, before, after, reasons };
}

export function bySeverity(result, severity) {
  return result.deltas.filter((delta) => delta.severity === severity);
}

export function summary(result) {
  const counts = {};
  for (const severity of SEVERITY_ORDER) counts[severity.toLowerCase()] = bySeverity(result, severity).length;
  return counts;
}
