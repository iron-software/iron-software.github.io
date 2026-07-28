"""Diff two Surfaces and classify each change as breaking, additive, or cosmetic.

Because an xrefmap uid encodes parameter *types*, a parameter-type change or a new overload always
surfaces as a removal plus an addition rather than a modification. A ``changed`` delta is therefore
specifically about return type, modifiers, accessors, parameter names, parameter defaults, and base
types — the things only the HTML declarations reveal.
"""

from .csharp import parse_declaration, simple_member_name
from .model import (ADDED, ADDITIVE, BREAKING, CHANGED, COSMETIC, Delta, DiffResult, REMOVED)

# How each modifier is judged when it appears or disappears, as
# ``modifier: (severity_when_added, reason_when_added, severity_when_removed, reason_when_removed)``.
#
# The table is exhaustive over the modifiers that actually occur in the archive so that common,
# well-understood changes are explained rather than falling through to the generic "declaration
# changed" verdict. Entries marked cosmetic are implementation detail a consumer never binds against.
MODIFIER_RULES = {
    "sealed": (BREAKING, "sealed added (can no longer be inherited)",
               ADDITIVE, "sealed removed (can now be inherited)"),
    "abstract": (BREAKING, "abstract added (must now be implemented)",
                 ADDITIVE, "abstract removed"),
    "virtual": (ADDITIVE, "virtual added (can now be overridden)",
                BREAKING, "virtual removed (can no longer be overridden)"),
    "readonly": (BREAKING, "became readonly (assignment no longer permitted)",
                 ADDITIVE, "readonly removed (assignment now permitted)"),
    # A const is inlined into the consumer's assembly, so moving either way is binary-breaking.
    "const": (BREAKING, "became const", BREAKING, "no longer const"),
    # Flipping static changes the call syntax in both directions.
    "static": (BREAKING, "became static", BREAKING, "no longer static"),
    "async": (COSMETIC, "async added", COSMETIC, "async removed"),
    "new": (COSMETIC, "new modifier added", COSMETIC, "new modifier removed"),
    "override": (COSMETIC, "override added", COSMETIC, "override removed"),
    "partial": (COSMETIC, "partial added", COSMETIC, "partial removed"),
    "extern": (COSMETIC, "extern added", COSMETIC, "extern removed"),
    "unsafe": (COSMETIC, "unsafe added", COSMETIC, "unsafe removed"),
    "volatile": (COSMETIC, "volatile added", COSMETIC, "volatile removed"),
}

# Visibility keywords ordered widest to narrowest; narrowing breaks consumers, widening does not.
VISIBILITY_ORDER = ("public", "protected", "internal", "private")


def _accessor_reasons(before: dict, after: dict) -> list:
    """Property accessor changes. Losing an accessor breaks every caller that used it."""
    # Exactly one side has accessors: the member was converted between a field and a property. The
    # uid is unchanged, but field and property access compile differently, so this is binary-breaking.
    if (before["accessors"] is None) != (after["accessors"] is None):
        if before["accessors"] is None:
            return [(BREAKING, "field converted to a property")]
        return [(BREAKING, "property converted to a field")]
    if before["accessors"] is None or after["accessors"] is None:
        return []
    lost = sorted(before["accessors"] - after["accessors"])
    gained = sorted(after["accessors"] - before["accessors"])
    reasons = []
    if lost:
        reasons.append((BREAKING, f"{', '.join(lost)} accessor removed"))
    if gained:
        reasons.append((ADDITIVE, f"{', '.join(gained)} accessor added"))
    return reasons


def _visibility_of(modifiers: frozenset) -> str:
    for keyword in VISIBILITY_ORDER:
        if keyword in modifiers:
            return keyword
    return ""


def _modifier_reasons(before: dict, after: dict) -> list:
    reasons = []
    gained = after["modifiers"] - before["modifiers"]
    lost = before["modifiers"] - after["modifiers"]

    old_visibility = _visibility_of(before["modifiers"])
    new_visibility = _visibility_of(after["modifiers"])
    if old_visibility and new_visibility and old_visibility != new_visibility:
        if VISIBILITY_ORDER.index(new_visibility) > VISIBILITY_ORDER.index(old_visibility):
            reasons.append((BREAKING, f"visibility narrowed from {old_visibility} to {new_visibility}"))
        else:
            reasons.append((ADDITIVE, f"visibility widened from {old_visibility} to {new_visibility}"))

    for modifier, (added_severity, added_reason, removed_severity, removed_reason) in MODIFIER_RULES.items():
        if modifier in gained:
            reasons.append((added_severity, added_reason))
        elif modifier in lost:
            reasons.append((removed_severity, removed_reason))
    return reasons


def _parameter_reasons(before: dict, after: dict) -> list:
    """Parameter differences that survive an identical uid: names and default values."""
    old_params, new_params = before["parameters"], after["parameters"]
    if old_params is None or new_params is None or len(old_params) != len(new_params):
        return []

    reasons = []
    for old, new in zip(old_params, new_params):
        if old["default"] is not None and new["default"] is None:
            reasons.append((BREAKING, f"default value removed from '{new['name'] or old['name']}'"))
        elif old["default"] is None and new["default"] is not None:
            reasons.append((ADDITIVE, f"default value added to '{new['name']}'"))
        elif old["default"] != new["default"]:
            reasons.append((COSMETIC, f"default for '{new['name']}' changed: {old['default']} -> {new['default']}"))
        if old["name"] != new["name"]:
            # Only breaks callers using named arguments, so it is reported but not counted breaking.
            reasons.append((COSMETIC, f"parameter renamed: {old['name']} -> {new['name']}"))
    return reasons


def _base_reasons(before: dict, after: dict) -> list:
    lost = [base for base in before["bases"] if base not in after["bases"]]
    gained = [base for base in after["bases"] if base not in before["bases"]]
    reasons = []
    if lost:
        reasons.append((BREAKING, f"base type or interface removed: {', '.join(lost)}"))
    if gained:
        reasons.append((ADDITIVE, f"base type or interface added: {', '.join(gained)}"))
    return reasons


def compare_declarations(before_text: str, after_text: str) -> list:
    """Return ``(severity, reason)`` pairs describing how two declarations differ.

    An empty list means the declarations are equivalent. A difference no specific rule explains is
    reported as breaking, since an unexplained signature change is more likely to matter than not —
    the raw before/after is always shown so the reader can judge.
    """
    if before_text == after_text:
        return []
    if not before_text or not after_text:
        # One side had no page to parse; the identity is unchanged, so there is nothing to claim.
        return []

    before = parse_declaration(before_text)
    after = parse_declaration(after_text)

    reasons = []
    if before["return_type"] != after["return_type"]:
        reasons.append((BREAKING, f"type changed: {before['return_type']} -> {after['return_type']}"))
    reasons.extend(_modifier_reasons(before, after))
    reasons.extend(_accessor_reasons(before, after))
    reasons.extend(_parameter_reasons(before, after))
    reasons.extend(_base_reasons(before, after))

    if not reasons:
        reasons.append((BREAKING, "declaration changed"))
    return reasons


def _severity_of(reasons: list) -> str:
    severities = {severity for severity, _ in reasons}
    if BREAKING in severities:
        return BREAKING
    return ADDITIVE if ADDITIVE in severities else COSMETIC


def _delta_sort_key(delta: Delta) -> tuple:
    from .model import SEVERITY_ORDER
    return (SEVERITY_ORDER.index(delta.severity), delta.type_uid, delta.display, delta.uid)


def diff_surfaces(surface_from, surface_to, product_name: str) -> DiffResult:
    """Compare two Surfaces and return every classified change."""
    result = DiffResult(
        product_code=surface_from.product_code,
        product_name=product_name,
        version_from=surface_from.version,
        version_to=surface_to.version,
        warnings=list(surface_from.warnings) + list(surface_to.warnings),
        surface_from=surface_from,
        surface_to=surface_to,
    )

    # Namespaces.
    for namespace in sorted(surface_from.namespaces - surface_to.namespaces):
        result.deltas.append(Delta(REMOVED, BREAKING, "namespace", "", namespace, namespace,
                                   before=namespace, reasons=["namespace removed"]))
    for namespace in sorted(surface_to.namespaces - surface_from.namespaces):
        result.deltas.append(Delta(ADDED, ADDITIVE, "namespace", "", namespace, namespace,
                                   after=namespace, reasons=["namespace added"]))

    # Types.
    for type_uid in sorted(set(surface_from.types) - set(surface_to.types)):
        entry = surface_from.types[type_uid]
        result.deltas.append(Delta(REMOVED, BREAKING, "type", type_uid, type_uid, type_uid,
                                   before=entry.declaration or type_uid, reasons=["type removed"]))
    for type_uid in sorted(set(surface_to.types) - set(surface_from.types)):
        entry = surface_to.types[type_uid]
        result.deltas.append(Delta(ADDED, ADDITIVE, "type", type_uid, type_uid, type_uid,
                                   after=entry.declaration or type_uid, reasons=["type added"]))

    # Types present in both: their own declaration, then their members.
    for type_uid in sorted(set(surface_from.types) & set(surface_to.types)):
        before_type = surface_from.types[type_uid]
        after_type = surface_to.types[type_uid]

        reasons = compare_declarations(before_type.declaration, after_type.declaration)
        if reasons:
            result.deltas.append(Delta(
                CHANGED, _severity_of(reasons), "type", type_uid, type_uid, type_uid,
                before=before_type.declaration, after=after_type.declaration,
                reasons=[reason for _, reason in reasons],
            ))

        removed_uids = sorted(set(before_type.members) - set(after_type.members))
        added_uids = sorted(set(after_type.members) - set(before_type.members))

        # A removed and an added member sharing a simple name is one overload signature change, not
        # two unrelated events; note it on both so the report reads correctly.
        removed_names = {simple_member_name(uid) for uid in removed_uids}
        added_names = {simple_member_name(uid) for uid in added_uids}
        overloaded = removed_names & added_names

        for uid in removed_uids:
            member = before_type.members[uid]
            reason_list = ["member removed"]
            if simple_member_name(uid) in overloaded:
                reason_list.append("overload signature change (see the matching addition)")
            result.deltas.append(Delta(REMOVED, BREAKING, "member", type_uid, uid,
                                       member.name_with_type, before=member.declaration or member.full_name,
                                       reasons=reason_list))
        for uid in added_uids:
            member = after_type.members[uid]
            reason_list = ["member added"]
            if simple_member_name(uid) in overloaded:
                reason_list.append("overload signature change (see the matching removal)")
            result.deltas.append(Delta(ADDED, ADDITIVE, "member", type_uid, uid,
                                       member.name_with_type, after=member.declaration or member.full_name,
                                       reasons=reason_list))

        for uid in sorted(set(before_type.members) & set(after_type.members)):
            before_member = before_type.members[uid]
            after_member = after_type.members[uid]
            reasons = compare_declarations(before_member.declaration, after_member.declaration)
            if reasons:
                result.deltas.append(Delta(
                    CHANGED, _severity_of(reasons), "member", type_uid, uid, after_member.name_with_type,
                    before=before_member.declaration, after=after_member.declaration,
                    reasons=[reason for _, reason in reasons],
                ))

    result.deltas.sort(key=_delta_sort_key)
    return result
