"""Changelog-style Markdown report, breaking changes first."""

from .model import CHANGED, SEVERITY_ORDER

HEADING = {
    "BREAKING": "Breaking changes",
    "ADDITIVE": "Additions",
    "COSMETIC": "Cosmetic",
}


def render(result) -> str:
    """Return the Markdown body for a diff."""
    summary = result.summary()
    lines = [
        f"# {result.product_name} API changes: {result.version_from} -> {result.version_to}",
        "",
        f"Generated from the object-reference archive (xrefmap + DocFX declarations). "
        f"**{summary['breaking']} breaking**, {summary['additive']} additive, {summary['cosmetic']} cosmetic.",
        "",
    ]

    if not result.deltas:
        lines.append("No public API changes.")
        lines.append("")
        return "\n".join(lines)

    for severity in SEVERITY_ORDER:
        deltas = result.by_severity(severity)
        if not deltas:
            continue
        lines.append(f"## {HEADING[severity]} ({len(deltas)})")
        lines.append("")

        current_type = None
        for delta in deltas:
            if delta.type_uid != current_type:
                current_type = delta.type_uid
                lines.append(f"### `{current_type}`" if current_type else "### Namespaces")
                lines.append("")
            if delta.kind == CHANGED:
                lines.append(f"- **{delta.display}** changed")
                lines.append(f"  - was: `{delta.before}`")
                lines.append(f"  - now: `{delta.after}`")
            else:
                verb = "added" if delta.kind == "added" else "removed"
                lines.append(f"- **{delta.display}** {verb}")
                if delta.before or delta.after:
                    lines.append(f"  - `{delta.before or delta.after}`")
            for reason in delta.reasons:
                lines.append(f"  - {reason}")
        lines.append("")

    if result.warnings:
        lines.append(f"## Warnings ({len(result.warnings)})")
        lines.append("")
        for warning in sorted(result.warnings)[:50]:
            lines.append(f"- {warning}")
        lines.append("")

    return "\n".join(lines)
