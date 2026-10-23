"""Terminal report, grouped breaking -> additive -> cosmetic."""

from statuslogger import StatusLogger

from .model import ADDED, ADDITIVE, BREAKING, CHANGED, COSMETIC, REMOVED, SEVERITY_ORDER

# Leading glyph per delta kind.
MARKER = {ADDED: "+", REMOVED: "-", CHANGED: "~"}

SEVERITY_LOGGER = {
    BREAKING: StatusLogger.error,
    ADDITIVE: StatusLogger.success,
    COSMETIC: StatusLogger.debug,
}


def render(result, show_warnings: bool = True) -> None:
    """Print a diff to the terminal."""
    StatusLogger.title(
        f"{result.product_name} ({result.product_code})  {result.version_from} -> {result.version_to}"
    )

    if not result.deltas:
        StatusLogger.success("No public API changes.")
        _render_warnings(result, show_warnings)
        return

    for severity in SEVERITY_ORDER:
        deltas = result.by_severity(severity)
        if not deltas:
            continue
        log = SEVERITY_LOGGER[severity]
        StatusLogger.notice(f"\n{severity}  ({len(deltas)})")

        current_type = None
        for delta in deltas:
            if delta.type_uid != current_type:
                current_type = delta.type_uid
                StatusLogger.info(f"  {current_type or 'namespaces'}")
            log(f"    {MARKER[delta.kind]} {delta.display}")
            if delta.kind == CHANGED:
                StatusLogger.message(f"        was: {delta.before}")
                StatusLogger.message(f"        now: {delta.after}")
            elif delta.before or delta.after:
                StatusLogger.message(f"        {delta.before or delta.after}")
            for reason in delta.reasons:
                StatusLogger.message(f"        . {reason}")

    summary = result.summary()
    StatusLogger.title(
        f"\nSummary: {summary['breaking']} breaking, {summary['additive']} additive, "
        f"{summary['cosmetic']} cosmetic"
    )
    _render_warnings(result, show_warnings)


def _render_warnings(result, show_warnings: bool) -> None:
    if not show_warnings or not result.warnings:
        return
    StatusLogger.warning(f"\n{len(result.warnings)} warning(s):")
    for warning in result.warnings[:20]:
        StatusLogger.warning(f"  {warning}")
    if len(result.warnings) > 20:
        StatusLogger.warning(f"  ... and {len(result.warnings) - 20} more")
