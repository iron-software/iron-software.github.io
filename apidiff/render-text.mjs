/** render-text.mjs — terminal report, grouped breaking -> additive -> cosmetic (port of render_text.py). */

import { StatusLogger } from "../statuslogger.mjs";
import { ADDED, BREAKING, ADDITIVE, CHANGED, COSMETIC, REMOVED, SEVERITY_ORDER, bySeverity, summary } from "./model.mjs";

/** Leading glyph per delta kind. */
const MARKER = { [ADDED]: "+", [REMOVED]: "-", [CHANGED]: "~" };

const SEVERITY_LOGGER = {
  [BREAKING]: StatusLogger.error,
  [ADDITIVE]: StatusLogger.success,
  [COSMETIC]: StatusLogger.debug,
};

function renderWarnings(result, showWarnings) {
  if (!showWarnings || !result.warnings.length) return;
  StatusLogger.warning(`\n${result.warnings.length} warning(s):`);
  for (const warning of result.warnings.slice(0, 20)) StatusLogger.warning(`  ${warning}`);
  if (result.warnings.length > 20) StatusLogger.warning(`  ... and ${result.warnings.length - 20} more`);
}

/** Print a diff to the terminal. */
export function render(result, showWarnings = true) {
  StatusLogger.title(
    `${result.productName} (${result.productCode})  ${result.versionFrom} -> ${result.versionTo}`,
  );

  if (!result.deltas.length) {
    StatusLogger.success("No public API changes.");
    renderWarnings(result, showWarnings);
    return;
  }

  for (const severity of SEVERITY_ORDER) {
    const deltas = bySeverity(result, severity);
    if (!deltas.length) continue;
    const log = SEVERITY_LOGGER[severity];
    StatusLogger.notice(`\n${severity}  (${deltas.length})`);

    let currentType = null;
    for (const delta of deltas) {
      if (delta.typeUid !== currentType) {
        currentType = delta.typeUid;
        StatusLogger.info(`  ${currentType || "namespaces"}`);
      }
      log(`    ${MARKER[delta.kind]} ${delta.display}`);
      if (delta.kind === CHANGED) {
        StatusLogger.message(`        was: ${delta.before}`);
        StatusLogger.message(`        now: ${delta.after}`);
      } else if (delta.before || delta.after) {
        StatusLogger.message(`        ${delta.before || delta.after}`);
      }
      for (const reason of delta.reasons) StatusLogger.message(`        . ${reason}`);
    }
  }

  const counts = summary(result);
  StatusLogger.title(
    `\nSummary: ${counts.breaking} breaking, ${counts.additive} additive, ${counts.cosmetic} cosmetic`,
  );
  renderWarnings(result, showWarnings);
}
