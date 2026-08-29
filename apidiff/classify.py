"""Diff two Surfaces and classify each change as breaking, additive, or cosmetic.

Because an xrefmap uid encodes parameter *types*, a parameter-type change or a new overload always
surfaces as a removal plus an addition rather than a modification. A ``changed`` delta is therefore
specifically about return type, modifiers, accessors, parameter names, parameter defaults, and base
types — the things only the HTML declarations reveal.
"""

import re

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

# .NET naming convention for an interface: `I` followed by an upper-case letter. Used only to decide
# whether an unverifiable base-list difference should be downgraded, never to assert a change.
INTERFACE_SHAPED = re.compile(r"^I[A-Z]")


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


def _base_reasons(before: dict, after: dict, blocked_names: frozenset = frozenset(),
                  interfaces: frozenset = frozenset()) -> list:
    """Base *class* differences taken from the declaration line.

    Interfaces are deliberately excluded here and compared from the page's Implements section
    instead (see ``_implements_reasons``): DocFX stopped inlining them in the declaration between the
    2026.6 and 2026.7 builds, so reading them from the declaration reports a rendering change as
    dozens of removals. ``interfaces`` carries the names to ignore for exactly that reason.

    Entries naming a filtered-out type are also ignored. Declarations render base types by simple
    name, so a namespace pattern cannot recognise them here — `IronSoftware.Deployment.
    BaseVersionFactory` implements an obfuscated interface DocFX renders as bare `qdygyu`, and that
    name changes on every build.
    """
    def keep(base: str) -> bool:
        return base not in blocked_names and base not in interfaces

    lost = [base for base in before["bases"] if base not in after["bases"] and keep(base)]
    gained = [base for base in after["bases"] if base not in before["bases"] and keep(base)]

    # Anything interface-shaped that survived the `interfaces` exclusion had no Implements section to
    # corroborate it — interface pages never get one, and a few classes do not either. The
    # declaration line is not a trustworthy source for interfaces across DocFX versions (2026.7
    # stopped inlining them), so such a difference is reported but not counted as breaking.
    lost_interfaces = [base for base in lost if INTERFACE_SHAPED.match(base)]
    gained_interfaces = [base for base in gained if INTERFACE_SHAPED.match(base)]
    lost = [base for base in lost if base not in lost_interfaces]
    gained = [base for base in gained if base not in gained_interfaces]

    reasons = []
    if lost:
        reasons.append((BREAKING, f"base type removed: {', '.join(lost)}"))
    if gained:
        reasons.append((ADDITIVE, f"base type added: {', '.join(gained)}"))
    if lost_interfaces or gained_interfaces:
        detail = []
        if lost_interfaces:
            detail.append(f"no longer listed: {', '.join(lost_interfaces)}")
        if gained_interfaces:
            detail.append(f"newly listed: {', '.join(gained_interfaces)}")
        reasons.append((COSMETIC, (
            f"declaration interface list differs ({'; '.join(detail)}) — unverifiable, this page has "
            f"no Implements section and DocFX renders the declaration's interface list inconsistently "
            f"across versions"
        )))
    return reasons


def _implements_reasons(before: list, after: list, blocked_names: frozenset = frozenset()) -> list:
    """Interface differences, taken from the type page's Implements section.

    This section is the authoritative and version-stable record of what a type implements; the
    declaration line is not.
    """
    before_set = {name for name in before if name not in blocked_names}
    after_set = {name for name in after if name not in blocked_names}
    lost = sorted(before_set - after_set)
    gained = sorted(after_set - before_set)
    reasons = []
    if lost:
        reasons.append((BREAKING, f"interface no longer implemented: {', '.join(lost)}"))
    if gained:
        reasons.append((ADDITIVE, f"interface now implemented: {', '.join(gained)}"))
    return reasons


def _normalize_bases(declaration: str) -> str:
    """Collapse the punctuation left behind after names are removed from a base list."""
    return re.sub(r"[\s,:]+", " ", declaration).strip()


def _without_blocked(declaration: str, blocked_names: frozenset) -> str:
    """Drop whole-word occurrences of filtered-out type names from a declaration.

    Longest name first, which is load-bearing in two ways. `IEnumerable` is a whole-word match inside
    `IEnumerable<Cell>` (``<`` is a non-word character), so removing the short name first would leave
    a stray ``<Cell>`` and the long name would then match nothing. And because the caller passes a
    set, iterating it unsorted made the result depend on PYTHONHASHSEED — the same diff produced
    different counts run to run.
    """
    for name in sorted(blocked_names, key=len, reverse=True):
        declaration = re.sub(rf"(?<![A-Za-z0-9_]){re.escape(name)}(?![A-Za-z0-9_])", "", declaration)
    return declaration


def compare_declarations(before_text: str, after_text: str, blocked_names: frozenset = frozenset(),
                         before_implements: list = None, after_implements: list = None) -> list:
    """Return ``(severity, reason)`` pairs describing how two declarations differ.

    An empty list means the declarations are equivalent. A difference no specific rule explains is
    reported as breaking, since an unexplained signature change is more likely to matter than not —
    the raw before/after is always shown so the reader can judge.
    """
    interfaces = frozenset((before_implements or []) + (after_implements or []))
    implements_reasons = _implements_reasons(before_implements or [], after_implements or [], blocked_names)

    if before_text == after_text:
        return implements_reasons
    if not before_text or not after_text:
        # One side had no page to parse; the identity is unchanged, so there is nothing to claim.
        return implements_reasons
    # Declarations that differ only by the name of a filtered-out type are equivalent as far as the
    # documented surface goes. Checking here rather than after the rules run matters: otherwise every
    # such difference would be filtered out of the reasons list and then trip the fallback below.
    if blocked_names and _without_blocked(before_text, blocked_names) == _without_blocked(after_text, blocked_names):
        return implements_reasons

    before = parse_declaration(before_text)
    after = parse_declaration(after_text)

    reasons = []
    if before["return_type"] != after["return_type"]:
        reasons.append((BREAKING, f"type changed: {before['return_type']} -> {after['return_type']}"))
    reasons.extend(_modifier_reasons(before, after))
    reasons.extend(_accessor_reasons(before, after))
    reasons.extend(_parameter_reasons(before, after))
    reasons.extend(_base_reasons(before, after, blocked_names, interfaces))
    reasons.extend(implements_reasons)

    if not reasons:
        # Declarations differing only in how interfaces are rendered are equivalent; the
        # Implements comparison above is the authority on whether anything really changed.
        stripped_before = _without_blocked(before_text, interfaces)
        stripped_after = _without_blocked(after_text, interfaces)
        if _normalize_bases(stripped_before) != _normalize_bases(stripped_after):
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

    # A base type filtered out of either side is not documented surface, so ignore it in both.
    blocked_names = frozenset(surface_from.blocked_type_names | surface_to.blocked_type_names)

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

        reasons = compare_declarations(before_type.declaration, after_type.declaration, blocked_names,
                                       before_type.implements, after_type.implements)
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
            reasons = compare_declarations(before_member.declaration, after_member.declaration, blocked_names)
            if reasons:
                result.deltas.append(Delta(
                    CHANGED, _severity_of(reasons), "member", type_uid, uid, after_member.name_with_type,
                    before=before_member.declaration, after=after_member.declaration,
                    reasons=[reason for _, reason in reasons],
                ))

    result.deltas.sort(key=_delta_sort_key)
    return result
