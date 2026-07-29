"""Data records shared by the parsing, classification, and rendering stages."""

from dataclasses import dataclass, field


# Change classifications, most severe first. The order is used for grouping in every renderer.
BREAKING = "BREAKING"
ADDITIVE = "ADDITIVE"
COSMETIC = "COSMETIC"
SEVERITY_ORDER = (BREAKING, ADDITIVE, COSMETIC)

# Delta kinds.
ADDED = "added"
REMOVED = "removed"
CHANGED = "changed"


@dataclass
class Member:
    """One member (method, property, field, or event) of a type."""

    uid: str
    kind: str  # commentId prefix: M, P, F, or E
    name: str  # xrefmap `name`, e.g. "Contains(String)"
    name_with_type: str
    full_name: str
    type_uid: str  # owning type's uid
    declaration: str = ""  # C# declaration from the HTML page; "" when unavailable


@dataclass
class TypeEntry:
    """One type page: its own declaration plus the members documented on it."""

    uid: str  # fully-qualified type name
    name: str
    namespace: str
    declaration: str = ""  # e.g. "public class IronZipArchive : IronBaseArchive, IDisposable"
    # Interfaces from the page's Implements section, simple-named. Held separately from the
    # declaration because DocFX stopped inlining interfaces in the declaration line between the
    # 2026.6 and 2026.7 builds while this section stayed identical, so it is the stable source.
    implements: list = field(default_factory=list)
    members: dict = field(default_factory=dict)  # uid -> Member


@dataclass
class Surface:
    """The complete public API surface of one archived product version."""

    product_code: str
    version: str
    namespaces: set = field(default_factory=set)
    types: dict = field(default_factory=dict)  # uid -> TypeEntry
    warnings: list = field(default_factory=list)
    # Simple names of types the filter rejected. Declarations render base types by simple name, so a
    # namespace pattern cannot recognise them there; this set lets the classifier ignore base-list
    # entries that are not part of the documented surface.
    blocked_type_names: set = field(default_factory=set)

    def member_count(self) -> int:
        return sum(len(entry.members) for entry in self.types.values())


@dataclass
class Delta:
    """A single reported change.

    ``before``/``after`` hold declarations (or the member name when no declaration was available),
    and ``reasons`` explains *why* the classifier reached its verdict.
    """

    kind: str  # ADDED, REMOVED, or CHANGED
    severity: str  # BREAKING, ADDITIVE, or COSMETIC
    target: str  # "type", "member", or "namespace"
    type_uid: str
    uid: str
    display: str  # human-facing label, e.g. "IronZipArchive.Contains(String)"
    before: str = ""
    after: str = ""
    reasons: list = field(default_factory=list)


@dataclass
class DiffResult:
    """Everything a renderer needs."""

    product_code: str
    product_name: str
    version_from: str
    version_to: str
    deltas: list = field(default_factory=list)
    warnings: list = field(default_factory=list)
    surface_from: object = None
    surface_to: object = None

    def by_severity(self, severity: str) -> list:
        return [delta for delta in self.deltas if delta.severity == severity]

    def summary(self) -> dict:
        return {name.lower(): len(self.by_severity(name)) for name in SEVERITY_ORDER}
