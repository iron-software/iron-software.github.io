"""Noise control for the reported surface.

Three independent filters, all applied while a Surface is being built so filtered types never cost
an HTML read:

1. Vendored/internal namespaces (on by default, ``--include-internal`` to disable).
2. Compiler-generated members that are not real API surface.
3. Operator-supplied ``--namespace`` / ``--exclude`` globs.
"""

import re
from fnmatch import fnmatchcase

# Namespaces that are vendored or internal infrastructure rather than product surface. The first six
# alternatives are kept in sync with BLOCK_NS in scaffolds/tools/archetype-n/facts.py.
#
# `Iron.Pdf.Extensions` holds only obfuscator-generated types whose names change on every build
# (auxkyk/auxkyl in ironpdf 2025.12.2, kjmakb/kjmakc in 2026.1.3, bnubqp/bnubqq in 2026.6.1,
# qdygyt/qdygyu in 2026.7.2), which would otherwise report changes in every IronPDF diff forever.
# scaffolds/filterConfig.yml excludes them at generation time, but only for builds that pick that
# change up — every already-archived IronPDF version still contains them, so this stays regardless.
#
# Deliberately unanchored: member uids embed fully-qualified parameter types, so the namespace has to
# match mid-string too (see SurfaceFilter.allows_member). The literal dots keep it from colliding
# with the legitimate `IronPdf.Extensions` namespace, which has no dot between Iron and Pdf.
# `Interop` carries a word boundary that facts.py's copy lacks. Without it the alternative also
# matches `System.Runtime.InteropServices`, which is a legitimate BCL namespace — harmless when only
# type uids were tested, but once member uids are tested it wrongly drops every member taking a
# HandleRef (134 of ironocr 2026.7.2's 1522 members). `Interop\b` still matches a real `…​.Interop.…`
# namespace, since the following dot is a word boundary.
BLOCK_NS = re.compile(r"\.Internal\b|Interop\b|grpc|Pdfium|BouncyCastle|GrpcLayer|Iron\.Pdf\.Extensions\b", re.I)

# Compiler-generated members DocFX still emits. `value__` is the backing field every enum gets; it
# appears in the xrefmap (12 entries in irondrawing/2022.9.8843 alone) but is not API surface.
COMPILER_GENERATED_MEMBERS = ("value__",)

# Declarations a consumer can bind against. DocFX's filterConfig.yml already restricts output to the
# public surface, so this is a safety net for anything that slips through.
PUBLIC_PREFIXES = ("public", "protected")


class SurfaceFilter:
    """Decides which types and members appear in a Surface."""

    def __init__(self, include_internal: bool = False, namespaces: list = None, excludes: list = None,
                 public_only: bool = True):
        self.include_internal = include_internal
        self.namespaces = list(namespaces or [])
        self.excludes = list(excludes or [])
        self.public_only = public_only

    def allows_type(self, type_uid: str) -> bool:
        """Whether a type belongs in the reported surface, based on its uid alone."""
        if not self.include_internal and BLOCK_NS.search(type_uid):
            return False
        # --namespace is an allow-list: when any pattern is given, the uid must match one of them.
        if self.namespaces and not any(fnmatchcase(type_uid, pattern) for pattern in self.namespaces):
            return False
        if any(fnmatchcase(type_uid, pattern) for pattern in self.excludes):
            return False
        return True

    def allows_member(self, uid: str, name: str) -> bool:
        """Whether a member belongs in the reported surface.

        A member uid embeds the fully-qualified types of its parameters, e.g.
        ``LicensingException.#ctor(Iron.Pdf.Extensions.bnubqp)``. Applying BLOCK_NS to the whole uid
        — not just the owning type — therefore also drops members whose *parameters* come from a
        blocked namespace. Those are not usable public surface (the parameter type is undocumented),
        and when the parameter is an obfuscated type the uid changes on every build, which would
        otherwise report the member as removed-and-added in every single release.
        """
        if name in COMPILER_GENERATED_MEMBERS or uid.endswith("." + COMPILER_GENERATED_MEMBERS[0]):
            return False
        if not self.include_internal and BLOCK_NS.search(uid):
            return False
        return True

    def allows_declaration(self, declaration: str) -> bool:
        """Whether a declaration is part of the bindable surface.

        An empty declaration means the HTML page did not yield one; those are kept, because the
        xrefmap only ever lists what DocFX chose to document in the first place.
        """
        if not self.public_only or not declaration:
            return True
        return declaration.split(" ", 1)[0] in PUBLIC_PREFIXES
