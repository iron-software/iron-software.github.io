"""Resolve a product and a pair of archived versions, entirely offline.

Directory existence under ``object-reference/<code>/`` is the whole version index — there is no
manifest — so every lookup here is a filesystem read. Nothing contacts a package registry, which is
what lets the tool run on a machine with no network and no credentials.
"""

import json
import os

from apidocs import PRODUCTS_CATALOG, get_apidoc_path, list_archived_versions, version_sort_key

# Only DocFX-generated (.NET) products carry the xrefmap.yml + api/*.html pair this tool reads.
SUPPORTED_PACKAGE_TYPES = ("nuget",)


class ArchiveError(Exception):
    """A resolution failure with a message already written for the operator."""


def load_product(product_code: str = None, product_name: str = None) -> dict:
    """Return a product's catalog entry from iron-products.json.

    Raises:
        ArchiveError: when neither identifier is given, or no entry matches.
    """
    if not product_code and not product_name:
        raise ArchiveError("Please specify product code or product name (-p, --product-code | -n, --product-name)")

    with open(PRODUCTS_CATALOG, "r", encoding="utf-8") as handle:
        catalog = json.load(handle)

    for product in catalog["libraries"]:
        if (product_code and product["code"] == product_code) or (product_name and product["name"] == product_name):
            return product

    known = ", ".join(sorted(product["code"] for product in catalog["libraries"]))
    raise ArchiveError(f"Specified product does not exist. Known product codes: {known}")


def supported_product_codes() -> list:
    """Product codes this tool can diff, in catalog order."""
    with open(PRODUCTS_CATALOG, "r", encoding="utf-8") as handle:
        catalog = json.load(handle)
    return [
        product["code"] for product in catalog["libraries"]
        if product.get("packageType") in SUPPORTED_PACKAGE_TYPES and list_archived_versions(product["code"])
    ]


def require_supported(product: dict) -> None:
    """Reject products whose docs are not DocFX output.

    Raises:
        ArchiveError: for JavaDoc/pip/npm products such as ironpdfjava.
    """
    package_type = product.get("packageType")
    if package_type not in SUPPORTED_PACKAGE_TYPES:
        raise ArchiveError(
            f"{product['code']} is a {'JavaDoc' if package_type == 'maven' else package_type} product "
            f"(packageType: {package_type}).\n"
            f"Signature diffing is not yet supported. Supported: {', '.join(supported_product_codes())}"
        )


# Distance stand-in for a component that cannot be compared numerically, so it always ranks last.
_INCOMPARABLE = 10 ** 9


def _nearest(version: str, available: list, limit: int = 5) -> list:
    """Archived versions closest to the requested one, nearest first.

    Candidates are ranked first by *how deep* the first differing component is — sharing a major
    version matters more than a small difference in it, so 2026.5.9 suggests 2026.5.2 ahead of
    2025.1.1 — and only then by the size of that difference.
    """
    target = version_sort_key(version)

    def distance(candidate: str) -> tuple:
        key = version_sort_key(candidate)
        for index, (left, right) in enumerate(zip(target, key)):
            if left != right:
                magnitude = abs(left[1] - right[1]) if left[0] == right[0] == 0 else _INCOMPARABLE
                # Negated so a difference appearing later (a longer shared prefix) sorts first.
                return (-index, magnitude, candidate)
        return (-len(target), 0, candidate)

    return sorted(available, key=distance)[:limit]


def require_version(product: dict, version: str, available: list) -> None:
    """Raise unless the version has a built directory in the archive.

    Raises:
        ArchiveError: with the nearest archived versions listed.
    """
    if version in available:
        return
    suggestions = ", ".join(_nearest(version, available)) if available else "(none archived)"
    raise ArchiveError(
        f"{product['code']} {version} is not in the archive.\n"
        f"Nearest archived: {suggestions}\n"
        f"Run update-apidocs to build it."
    )


def resolve_versions(product: dict, version_from: str = None, version_to: str = None) -> tuple:
    """Resolve the pair of versions to diff.

    With neither given, the two newest archived versions are used. With only one given, the other
    end is the newest archived version.

    Returns:
        tuple: ``(version_from, version_to, available_versions)``, oldest end first.

    Raises:
        ArchiveError: when the archive holds too few versions, or a requested one is missing.
    """
    available = list_archived_versions(product["code"])
    if not available:
        raise ArchiveError(f"No archived versions found for {product['code']} under object-reference/.")

    if not version_from and not version_to:
        if len(available) < 2:
            raise ArchiveError(
                f"{product['code']} has only one archived version ({available[0]}); nothing to diff against."
            )
        return available[-2], available[-1], available

    if version_from and not version_to:
        version_to = available[-1]
    elif version_to and not version_from:
        version_from = available[-1]

    require_version(product, version_from, available)
    require_version(product, version_to, available)

    if version_from == version_to:
        raise ArchiveError(f"--from and --to are both {version_from}; nothing to diff.")

    # Report oldest to newest regardless of the order the operator supplied them.
    if version_sort_key(version_from) > version_sort_key(version_to):
        version_from, version_to = version_to, version_from
    return version_from, version_to, available


def version_directory(product: dict, version: str) -> str:
    """Path to one archived version directory.

    Raises:
        ArchiveError: when the directory exists but holds no xrefmap.yml.
    """
    path = get_apidoc_path(product, version)
    if not os.path.isfile(os.path.join(path, "xrefmap.yml")):
        raise ArchiveError(f"{product['code']} {version} has no xrefmap.yml at {path}; the build may be incomplete.")
    return path
