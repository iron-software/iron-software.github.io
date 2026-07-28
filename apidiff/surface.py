"""Assemble a Surface for one archived version from its xrefmap and type pages."""

import os

from .declarations import parse_type_page
from .model import Member, Surface, TypeEntry
from .xrefmap import kind_of, page_stem, parse_xrefmap

MEMBER_KINDS = ("M", "P", "F", "E")


def _namespace_of(type_uid: str, namespaces: set) -> str:
    """Longest known namespace that prefixes the type uid.

    Longest-match matters for nested namespaces: ``IronPdf.Rendering.ChromePdfRenderer`` must resolve
    to ``IronPdf.Rendering`` rather than ``IronPdf``.
    """
    best = ""
    for namespace in namespaces:
        if type_uid.startswith(namespace + ".") and len(namespace) > len(best):
            best = namespace
    return best


def build_surface(version_dir: str, product_code: str, version: str, surface_filter) -> Surface:
    """Read one archived version directory into a Surface.

    xrefmap entries establish identity; each surviving type's HTML page is then opened once to
    attach declarations. Types the filter rejects are never opened, so a narrow ``--namespace``
    makes the run proportionally cheaper.

    Args:
        version_dir (str): Path to ``object-reference/<code>/<version>``.
        product_code (str): Product short code.
        version (str): Version string.
        surface_filter (SurfaceFilter): Decides which types and members are in scope.

    Returns:
        Surface: The version's filtered public API surface.
    """
    surface = Surface(product_code=product_code, version=version)
    entries = parse_xrefmap(os.path.join(version_dir, "xrefmap.yml"))

    # Pass 1 — namespaces and types, so member attribution has somewhere to land.
    #
    # Every namespace is retained locally for attribution, but only the ones the filter admits are
    # reported; otherwise `--exclude` would still surface namespace-level additions and removals for
    # the very namespaces it was asked to hide.
    all_namespaces = set()
    for uid, entry in entries.items():
        kind = kind_of(entry)
        if kind == "N":
            all_namespaces.add(uid)
            if surface_filter.allows_type(uid):
                surface.namespaces.add(uid)
        elif kind == "T" and surface_filter.allows_type(uid):
            surface.types[uid] = TypeEntry(uid=uid, name=entry.get("name", uid), namespace="")

    for type_uid, type_entry in surface.types.items():
        type_entry.namespace = _namespace_of(type_uid, all_namespaces)

    # Pass 2 — members, attributed to their owning type via the page their href points at.
    for uid, entry in entries.items():
        kind = kind_of(entry)
        if kind not in MEMBER_KINDS:
            continue
        name = entry.get("name", uid)
        if not surface_filter.allows_member(uid, name):
            continue
        owner = page_stem(entry)
        type_entry = surface.types.get(owner)
        if type_entry is None:
            # Either the owning type was filtered out, or the href pointed somewhere unexpected.
            continue
        type_entry.members[uid] = Member(
            uid=uid,
            kind=kind,
            name=name,
            name_with_type=entry.get("nameWithType", name),
            full_name=entry.get("fullName", uid),
            type_uid=owner,
        )

    # Pass 3 — attach declarations from each type's HTML page.
    api_dir = os.path.join(version_dir, "api")
    for type_uid, type_entry in surface.types.items():
        page_path = os.path.join(api_dir, type_uid + ".html")
        if not os.path.isfile(page_path):
            # Archived trees predating strip_guid_markers() can carry unresolvable page names. Fall
            # back to xrefmap-only identity for this type rather than aborting the whole diff.
            surface.warnings.append(f"{version}: no page for {type_uid} (identity only, no signatures)")
            continue
        with open(page_path, "r", encoding="utf-8", errors="replace") as handle:
            declarations = parse_type_page(handle.read())
        if not declarations:
            surface.warnings.append(f"{version}: no declarations parsed from {type_uid}.html")
            continue
        type_entry.declaration = declarations.get(type_uid, "")
        for member_uid, member in type_entry.members.items():
            member.declaration = declarations.get(member_uid, "")

    # Pass 4 — drop anything the visibility filter rejects now that declarations are known.
    for type_entry in list(surface.types.values()):
        if not surface_filter.allows_declaration(type_entry.declaration):
            del surface.types[type_entry.uid]
            continue
        for member_uid, member in list(type_entry.members.items()):
            if not surface_filter.allows_declaration(member.declaration):
                del type_entry.members[member_uid]

    return surface
