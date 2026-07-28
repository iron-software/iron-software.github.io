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
# `Iron.Pdf.Extensions` is a backstop for the existing archive: it holds only obfuscator-generated
# types whose names change on every build (auxkyk/auxkyl in ironpdf 2025.12.2, kjmakb/kjmakc in
# 2026.1.3, bnubqp/bnubqq in 2026.6.1), which would otherwise report 2 breaking + 2 additive changes
# in every IronPDF diff forever. scaffolds/filterConfig.yml now excludes them at generation time, but
# that only affects future builds — all 73 already-archived IronPDF versions still contain them.
BLOCK_NS = re.compile(r"\.Internal\b|Interop|grpc|Pdfium|BouncyCastle|GrpcLayer|^Iron\.Pdf\.Extensions\b", re.I)

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
        """Whether a member belongs in the reported surface."""
        if name in COMPILER_GENERATED_MEMBERS or uid.endswith("." + COMPILER_GENERATED_MEMBERS[0]):
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
