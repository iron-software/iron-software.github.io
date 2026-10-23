/** render-markdown.mjs — changelog-style report, breaking first (port of render_markdown.py). */

import { ADDED, CHANGED, SEVERITY_ORDER, bySeverity, summary } from "./model.mjs";

const HEADING = {
  BREAKING: "Breaking changes",
  ADDITIVE: "Additions",
  COSMETIC: "Cosmetic",
};

/** Return the Markdown body for a diff. */
export function render(result) {
  const counts = summary(result);
  const lines = [
    `# ${result.productName} API changes: ${result.versionFrom} -> ${result.versionTo}`,
    "",
    "Generated from the object-reference archive (xrefmap + DocFX declarations). "
    + `**${counts.breaking} breaking**, ${counts.additive} additive, ${counts.cosmetic} cosmetic.`,
    "",
  ];

  if (!result.deltas.length) {
    lines.push("No public API changes.", "");
    return lines.join("\n");
  }

  for (const severity of SEVERITY_ORDER) {
    const deltas = bySeverity(result, severity);
    if (!deltas.length) continue;
    lines.push(`## ${HEADING[severity]} (${deltas.length})`, "");

    let currentType = null;
    for (const delta of deltas) {
      if (delta.typeUid !== currentType) {
        currentType = delta.typeUid;
        lines.push(currentType ? `### \`${currentType}\`` : "### Namespaces", "");
      }
      if (delta.kind === CHANGED) {
        lines.push(`- **${delta.display}** changed`);
        lines.push(`  - was: \`${delta.before}\``);
        lines.push(`  - now: \`${delta.after}\``);
      } else {
        lines.push(`- **${delta.display}** ${delta.kind === ADDED ? "added" : "removed"}`);
        if (delta.before || delta.after) lines.push(`  - \`${delta.before || delta.after}\``);
      }
      for (const reason of delta.reasons) lines.push(`  - ${reason}`);
    }
    lines.push("");
  }

  if (result.warnings.length) {
    lines.push(`## Warnings (${result.warnings.length})`, "");
    const sorted = [...result.warnings].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    for (const warning of sorted.slice(0, 50)) lines.push(`- ${warning}`);
    lines.push("");
  }

  return lines.join("\n");
}
