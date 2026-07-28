#!/usr/bin/env python3
"""diff-apidocs.py — Diff the public API surface between two archived product versions.

Reads only the committed object-reference archive; nothing is downloaded and no build is triggered.
Identity comes from each version's xrefmap.yml, signatures from its DocFX api/*.html pages.

Examples:
    python diff-apidocs.py -p ironzip
    python diff-apidocs.py -p ironzip --from 2026.5.2 --to 2026.6.2
    python diff-apidocs.py -p ironpdf --namespace 'IronPdf.Rendering.*' --markdown
    python diff-apidocs.py -p ironzip --json --fail-on-breaking

Exit codes: 0 success, 1 tool error (unknown product, missing version), 2 breaking changes found
with --fail-on-breaking.
"""

import argparse
import os
import sys

# Some archived uids carry Unicode Private Use Area markers that DocFX emits for unresolvable type
# parameters (U+E000, U+E396 and U+E397 appear in ironpdf 2023.11.7, for example). Writing those to a
# legacy cp1252 Windows console raises UnicodeEncodeError and kills the run, so force UTF-8 here.
# Scoped to this entry point so the shared StatusLogger keeps its existing behaviour for other tools.
for _stream in (sys.stdout, sys.stderr):
    if hasattr(_stream, "reconfigure"):
        _stream.reconfigure(encoding="utf-8")

from apidiff.archive import (ArchiveError, load_product, require_supported, resolve_versions,
                             version_directory)
from apidiff.classify import diff_surfaces
from apidiff.filters import SurfaceFilter
from apidiff.model import BREAKING
from apidiff.render_json import render as render_json
from apidiff.render_markdown import render as render_markdown
from apidiff.render_text import render as render_text
from apidiff.surface import build_surface
from statuslogger import StatusLogger

# Committed diff artifacts live under docs/, which _config.yml already excludes from the Jekyll
# build, so they stay private to the repo.
ARTIFACT_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "docs", "api-diffs")

EXIT_OK = 0
EXIT_ERROR = 1
EXIT_BREAKING = 2


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="diff-apidocs",
        description="Diff the public API surface between two archived versions of an Iron Software product.",
    )
    parser.add_argument("-p", "--product-code", help="Product short code, e.g. ironzip")
    parser.add_argument("-n", "--product-name", help="Product display name, e.g. IronZIP")
    parser.add_argument("--from", dest="version_from", help="Older version (default: previous archived)")
    parser.add_argument("--to", dest="version_to", help="Newer version (default: newest archived)")
    parser.add_argument("--namespace", action="append", default=[],
                        help="Only report types matching this glob; repeatable")
    parser.add_argument("--exclude", action="append", default=[],
                        help="Skip types matching this glob; repeatable")
    parser.add_argument("--include-internal", action="store_true",
                        help="Include vendored/internal namespaces (excluded by default)")
    parser.add_argument("--all-visibility", action="store_true",
                        help="Include non-public declarations (public/protected only by default)")
    parser.add_argument("--json", nargs="?", const="", metavar="PATH",
                        help=f"Write JSON; defaults to {os.path.join('docs', 'api-diffs')}/<code>/<from>..<to>.json")
    parser.add_argument("--markdown", nargs="?", const="", metavar="PATH",
                        help="Write Markdown; defaults alongside the JSON artifact")
    parser.add_argument("--quiet", action="store_true", help="Suppress the terminal report")
    parser.add_argument("--no-warnings", action="store_true", help="Suppress parser warnings")
    parser.add_argument("--fail-on-breaking", action="store_true",
                        help="Exit 2 when breaking changes are found")
    parser.add_argument("--list-versions", action="store_true",
                        help="List the product's archived versions and exit")
    return parser


def _artifact_path(supplied: str, product_code: str, version_from: str, version_to: str, extension: str) -> str:
    if supplied:
        return os.path.abspath(supplied)
    return os.path.join(ARTIFACT_ROOT, product_code, f"{version_from}..{version_to}.{extension}")


def _write(path: str, content: str) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    # newline="" keeps the "\n" line endings the renderers emit, so the two ports stay byte-identical
    # on Windows as well as Linux.
    with open(path, "w", encoding="utf-8", newline="") as handle:
        handle.write(content)
    StatusLogger.progress(f"Wrote {path}")


def main(argv) -> int:
    args = build_parser().parse_args(argv)

    try:
        product = load_product(args.product_code, args.product_name)
        require_supported(product)

        if args.list_versions:
            from apidocs import list_archived_versions
            versions = list_archived_versions(product["code"])
            StatusLogger.title(f"{product['name']} ({product['code']}) — {len(versions)} archived versions")
            for version in versions:
                StatusLogger.message(f"  {version}")
            return EXIT_OK

        version_from, version_to, _ = resolve_versions(product, args.version_from, args.version_to)
        directory_from = version_directory(product, version_from)
        directory_to = version_directory(product, version_to)
    except ArchiveError as error:
        StatusLogger.error(str(error))
        return EXIT_ERROR

    surface_filter = SurfaceFilter(
        include_internal=args.include_internal,
        namespaces=args.namespace,
        excludes=args.exclude,
        public_only=not args.all_visibility,
    )

    surface_from = build_surface(directory_from, product["code"], version_from, surface_filter)
    surface_to = build_surface(directory_to, product["code"], version_to, surface_filter)
    result = diff_surfaces(surface_from, surface_to, product["name"])

    if not args.quiet:
        render_text(result, show_warnings=not args.no_warnings)

    if args.json is not None:
        _write(_artifact_path(args.json, product["code"], version_from, version_to, "json"), render_json(result))
    if args.markdown is not None:
        _write(_artifact_path(args.markdown, product["code"], version_from, version_to, "md"), render_markdown(result))

    if args.fail_on_breaking and result.by_severity(BREAKING):
        return EXIT_BREAKING
    return EXIT_OK


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
