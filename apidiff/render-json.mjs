/**
 * render-json.mjs — machine-readable diff artifact (Node port of render_json.py).
 *
 * Key order is fixed and every collection is sorted so this and the Python port produce
 * byte-identical files — that equality is the repo's dual-port parity gate.
 */

import { SEVERITY_ORDER, summary } from "./model.mjs";

/** Return the JSON-serializable form of a diff. */
export function build(result) {
  const types = new Map();
  for (const delta of result.deltas) {
    if (!types.has(delta.typeUid)) types.set(delta.typeUid, { added: [], removed: [], changed: [] });
    types.get(delta.typeUid)[delta.kind].push({
      uid: delta.uid,
      display: delta.display,
      severity: delta.severity,
      target: delta.target,
      before: delta.before,
      after: delta.after,
      reasons: [...delta.reasons],
    });
  }

  const compareStrings = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

  return {
    product: result.productCode,
    productName: result.productName,
    from: result.versionFrom,
    to: result.versionTo,
    generatedFrom: "xrefmap+html",
    summary: {
      ...summary(result),
      total: result.deltas.length,
      typesFrom: result.surfaceFrom ? result.surfaceFrom.types.size : 0,
      typesTo: result.surfaceTo ? result.surfaceTo.types.size : 0,
    },
    severities: [...SEVERITY_ORDER],
    types: [...types.keys()].sort(compareStrings).map((fqn) => ({
      fqn,
      added: types.get(fqn).added,
      removed: types.get(fqn).removed,
      changed: types.get(fqn).changed,
    })),
    warnings: [...result.warnings].sort(compareStrings),
  };
}

/** Serialize a diff as pretty-printed JSON with a trailing newline. */
export function render(result) {
  return `${JSON.stringify(build(result), null, 2)}\n`;
}
