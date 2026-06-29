import json, re, os, sys, glob, argparse, platform, shutil, subprocess, zipfile, urllib, time
import xml.etree.ElementTree as ET
from urllib.request import urlretrieve
from apidocs import *
from statuslogger import StatusLogger

DOCS_BUILDING_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scaffolds")
ARCHETYPE_N_DIR = os.path.join(DOCS_BUILDING_DIR, "tools", "archetype-n")

# Archetype-N enhancement runs after DocFX generation by default; --no-enhancement disables it.
ENHANCE_ENABLED = True
ENHANCE_OPTS = {"force": False, "provider": None, "model": None}
DOCFX_EXECUTABLE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scaffolds", "tools", "docfx", "tools", "docfx.exe")
JAVA_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scaffolds", "tools", "jdk")

# A bare DocFX GUID marker (`<8e7c…-…>`) as it appears in a file name.
GUID_MARKER_RE = re.compile(r"<[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}>")
# The same marker as it appears inside an href value — raw or HTML/URL-encoded angle brackets.
GUID_MARKER_IN_HREF_RE = re.compile(
    r"(?:<|&lt;|%3C)[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(?:>|&gt;|%3E)"
)
# An href="…" / href='…' attribute (value contains neither quote character).
HREF_ATTR_RE = re.compile(r"(\bhref=)([\"'])([^\"']*)\2")
# An existing rel="canonical" link, in any attribute order — used to keep the canonical pass idempotent.
CANONICAL_LINK_RE = re.compile(r"<link\b[^>]*\brel=[\"']canonical[\"']", re.IGNORECASE)

def is_windows_os() -> bool:
    return platform.system() == "Windows"

def iter_html_files(directory:str):
    """Yield every .html/.htm file path under `directory`."""
    for root, dirs, files in os.walk(directory):
        for name in files:
            if name.lower().endswith((".html", ".htm")):
                yield os.path.join(root, name)

def strip_guid_markers(directory:str) -> int:
    """Remove DocFX's spurious `<GUID>` markers from file names and from href values.

    A known DocFX issue emits files like `Foo<8e7c…>.html` and `href="Foo<8e7c…>.html"`. The
    angle brackets are also invalid in Windows file names; removing these patterns allows the
    output be served and committed cross-platform. 
    
    Idempotent: a second run finds nothing to change. 
    
    Args:
        directory (string): path to a directory containing files with GUID markers
    
    Returns:
        int: the count of files/dirs renamed.
    """
    renamed = 0
    # Rename names bottom-up so a parent rename never invalidates a child path mid-walk.
    for root, dirs, files in os.walk(directory, topdown=False):
        for name in files + dirs:
            new_name = GUID_MARKER_RE.sub("", name)
            if new_name != name:
                os.replace(os.path.join(root, name), os.path.join(root, new_name))
                renamed += 1
    # Strip the marker from href values so the now-renamed targets still resolve.
    for html_path in iter_html_files(directory):
        with open(html_path, "r", encoding="utf-8", errors="ignore") as html_file:
            content = html_file.read()
        cleaned = HREF_ATTR_RE.sub(
            lambda m: f"{m.group(1)}{m.group(2)}{GUID_MARKER_IN_HREF_RE.sub('', m.group(3))}{m.group(2)}",
            content,
        )
        if cleaned != content:
            with open(html_path, "w", encoding="utf-8") as html_file:
                html_file.write(cleaned)
    return renamed

def apply_canonical_tags(directory:str, canonical_base_url:str) -> int:
    """Ensure every HTML page under `directory` carries a `<link rel="canonical">`.

    The canonical href is `canonical_base_url` + the page's path relative to `directory`. DocFX
    already injects canonical tags via its template, so for DocFX output this only backfills pages
    that lack one; JavaDoc has none, so all of its pages receive one. 
    
    Idempotent. A page that already declares a canonical link is left untouched. 
    
    Args:
        directory (string): Path to a versioned API documentation directory
        canonical_base_url (string): A product Base URL associated with the API documentation directory
    
    Returns:
        int: the count of pages updated.
    """
    base = canonical_base_url.rstrip("/") + "/"
    updated = 0
    for html_path in iter_html_files(directory):
        with open(html_path, "r", encoding="utf-8", errors="ignore") as html_file:
            content = html_file.read()
        if CANONICAL_LINK_RE.search(content):
            continue  # already canonicalized, keep the pass idempotent
        relative_url = os.path.relpath(html_path, directory).replace(os.sep, "/")
        tag = f'<link rel="canonical" href="{base}{relative_url}">'
        if re.search(r"</head>", content, re.IGNORECASE):
            content = re.sub(r"</head>", tag + "\n</head>", content, count=1, flags=re.IGNORECASE)
        else:
            content = tag + "\n" + content
        with open(html_path, "w", encoding="utf-8") as html_file:
            html_file.write(content)
        updated += 1
    return updated

def get_docfx_canonical_prefix(info:dict) -> str:
    """The product's canonical URL prefix as declared in its docfx.<code>.json (globalMetadata).

    Falls back to the legacy `https://<domain><path>/object-reference/` shape when the config has
    no explicit prefix, so a page always gets a sensible canonical target.

    Args:
        info (dict): 
    Returns:
        string: The DocFX canonical URL prefix for a product
    """
    config_path = os.path.join(DOCS_BUILDING_DIR, f"docfx.{info['code']}.json")
    try:
        with open(config_path, "r", encoding="utf-8") as config_file:
            config = json.load(config_file)
        prefix = config.get("build", {}).get("globalMetadata", {}).get("canonicalUrlPrefix")
        if prefix:
            return prefix
    except (OSError, ValueError):
        pass
    return f"https://{info['domain']}{info['path']}/object-reference/"

def run_enhancement(info:dict, build_output_dir:str):
    """Archetype-N post-DocFX enhancement

    Operates on the freshly-built `…/object-reference/api/` pages before they are
    archived, so the cached copy already carries the injected overviews. Reuses a
    per-product generation cache (token-free) and authors any missing page via an
    LLM (Claude default, OpenAI fallback). .NET/DocFX only — never aborts the build.
    """
    api_dir = os.path.join(DOCS_BUILDING_DIR, build_output_dir, "api")
    if not os.path.isdir(api_dir):
        StatusLogger.notice("No api/ directory found; skipping Archetype-N enhancement.")
        return
    try:
        if ARCHETYPE_N_DIR not in sys.path:
            sys.path.insert(0, ARCHETYPE_N_DIR)
        import enhance as archetype_n
        StatusLogger.progress("Archetype-N: enhancing API reference pages...")
        summary = archetype_n.enhance(
            api_dir, info["code"],
            force=ENHANCE_OPTS["force"], provider=ENHANCE_OPTS["provider"],
            model=ENHANCE_OPTS["model"], log=lambda m: StatusLogger.info(m))
        if summary.get("no_provider") and summary.get("generated", 0) == 0 and summary.get("skipped", 0):
            StatusLogger.warning(
                "Archetype-N: no LLM API key set, only cached pages were injected. "
                "Set CLAUDE_API_KEY or OPENAI_API_KEY to author missing pages.")
        StatusLogger.info(
            f"Archetype-N: injected {summary['injected']} page(s) "
            f"(generated {summary['generated']}, reused {summary['reused']}, "
            f"preserved {summary['preserved']}, failed {summary['failed']}, "
            f"skipped {summary['skipped']}).")
    except Exception as error:
        StatusLogger.warning(f"Archetype-N enhancement skipped: {error}")

def get_jar_executable_path() -> str:
    if is_windows_os():
        return os.path.join(JAVA_PATH, "windows", "bin", "jar.exe")
    else:
        return os.path.join(JAVA_PATH, "linux", "bin", "jar")

def build_java_apidoc(info:dict, version_string:str):
    StatusLogger.title(f"Building {info['name']} JavaDoc — v{version_string}")

    # Navigate to script directory
    os.chdir(DOCS_BUILDING_DIR)

    javadoc_jar_filename = f"ironpdf-{version_string}-javadoc-java11-javadoc.jar"
    javadoc_jar_alternate_filename = f"ironpdf-{version_string}-javadoc.jar"

    javadoc_jar_location = f"https://github.com/iron-software/IronPDF-for-Java/releases/download/{version_string}/{javadoc_jar_filename}"
    javadoc_jar_alternate_location = f"https://github.com/iron-software/IronPDF-for-Java/releases/download/{version_string}/{javadoc_jar_alternate_filename}"
    javadoc_download_path = os.path.join(DOCS_BUILDING_DIR, "output", info["domain"], "java")
    javadoc_destination_path = APIDOCS_DESTINATION_PATH_TEMPLATE.format(info["code"], version_string)
    # The JavaDoc tree root is served at the `…/object-reference/api/` URL segment.
    java_canonical_base = f"https://{info['domain']}{info['path']}/object-reference/api/"

    # Cleanup any existing download directory
    try:
        if os.path.exists(javadoc_download_path):
            shutil.rmtree(javadoc_download_path)
    except PermissionError:
        StatusLogger.warning("Download directory is locked; retrying in 60s...")
        time.sleep(60)
        if os.path.exists(javadoc_download_path):
            shutil.rmtree(javadoc_download_path)

    os.makedirs(javadoc_download_path, exist_ok=True)
    jar_file_path = os.path.join(javadoc_download_path, javadoc_jar_filename)
    StatusLogger.progress(f"Downloading JavaDoc jar from GitHub releases ({version_string})...")
    try:
        urllib.request.urlretrieve(javadoc_jar_location, jar_file_path)
    except urllib.error.HTTPError:
        StatusLogger.notice("Primary jar name not found; trying the alternate name...")
        try:
            urllib.request.urlretrieve(javadoc_jar_alternate_location, jar_file_path)
        except urllib.error.HTTPError:
            StatusLogger.error(f"No JavaDoc jar published for {info['name']} v{version_string}; skipping.")
            return

    # Extract the contents of the JAR file
    StatusLogger.progress("Extracting JavaDoc jar...")
    jar_executable = get_jar_executable_path()
    subprocess.run([jar_executable, 'xf', javadoc_jar_filename], cwd=javadoc_download_path, check=True)

    # Post-generation: canonical tags (JavaDoc emits none of its own).
    StatusLogger.progress("Applying canonical link tags...")
    canonical_count = apply_canonical_tags(javadoc_download_path, java_canonical_base)
    StatusLogger.info(f"Added canonical tags to {canonical_count} JavaDoc page(s).")

    # Move the completed JavaDoc content into the /public/ directory for Firebase deployment
    StatusLogger.progress(f"Archiving to {javadoc_destination_path}...")
    if os.path.exists(javadoc_destination_path):
        shutil.rmtree(javadoc_destination_path)
    os.makedirs(javadoc_destination_path, exist_ok=True)

    for root, dirs, files in os.walk(javadoc_download_path):
        for file in files:
            source_file = os.path.join(root, file)
            relative_path = os.path.relpath(root, javadoc_download_path)
            destination_dir = os.path.join(javadoc_destination_path, relative_path)
            os.makedirs(destination_dir, exist_ok=True)
            shutil.copy(source_file, destination_dir)

    StatusLogger.success(f"Built {info['name']} JavaDoc v{version_string}.")

def archive_tree(source_dir:str, destination_dir:str) -> int:
    """Copy every file under `source_dir` into `destination_dir`, preserving the
    relative tree and overwriting existing files.

    Merges into an existing destination and works on any Python 3.x. This is the
    same resilient walk-copy the JavaDoc path uses; it replaces
    `shutil.copytree(..., dirs_exist_ok=True)`, which is 3.8+ only and raises on a
    pre-existing tree on older runtimes — a failure that would otherwise leave the
    assembled output in scaffolds/output without ever reaching ./object-reference.

    Returns the number of files copied (0 means the source produced no output).
    """
    copied = 0
    for root, dirs, files in os.walk(source_dir):
        relative_path = os.path.relpath(root, source_dir)
        target_dir = destination_dir if relative_path == "." else os.path.join(destination_dir, relative_path)
        os.makedirs(target_dir, exist_ok=True)
        for name in files:
            shutil.copy2(os.path.join(root, name), os.path.join(target_dir, name))
            copied += 1
    return copied

def build_dotnet_apidoc(info:dict, version_string:str):
    StatusLogger.title(f"Building {info['name']} .NET API docs — v{version_string}")

    # Variable Initialization
    homepage_index = "homepages/{}/index.md".format(info["code"])
    homepage_toc = "homepages/{}/toc.yml".format(info["code"])
    homepage_version = "homepages/{}/version.json".format(info["code"])
    docfx_config_file = 'docfx.{}.json'.format(info["code"])
    binary_dir = "bin/{}".format(info["packageName"])
    nupkg_url = "https://www.nuget.org/api/v2/package/{}/{}".format(info["packageName"], version_string)
    nupkg_path = "bin/{package}/{package}.nupkg".format(package = info["packageName"])
    build_output_dir = "output/{}{}/object-reference/".format(info["domain"], info["path"])
    # Use the frozen, import-time storage path (get_apidoc_path) rather than
    # recomputing os.path.abspath(__file__) here: a preceding build chdir's into
    # scaffolds/ and never restores cwd, so a runtime abspath would resolve the
    # destination to scaffolds/object-reference/... instead of ./object-reference/.
    apidocs_storage_dir = get_apidoc_path(info, version_string)
    apidocs_template_header = "- name: {} .NET API - v{}\n".format(info["name"], version_string)

    # Navigate to script directory
    os.chdir(DOCS_BUILDING_DIR)

    # Cleanup
    shutil.rmtree('api/', ignore_errors=True)
    os.makedirs('api', exist_ok=True)

    shutil.copy(homepage_index, 'api/index.md')
    shutil.copy(homepage_toc, 'toc.yml')

    shutil.rmtree(build_output_dir, ignore_errors=True)
    shutil.rmtree(binary_dir, ignore_errors=True)
    os.makedirs(binary_dir, exist_ok=True)
    os.makedirs(build_output_dir, exist_ok=True)

    # Fetch latest binaries
    StatusLogger.progress(f"Fetching NuGet package {info['packageName']} {version_string}...")
    urlretrieve(nupkg_url, nupkg_path)

    with zipfile.ZipFile(nupkg_path, 'r') as zip_ref:
        zip_ref.extractall(binary_dir)
    os.remove(nupkg_path)

    # The .nuspec inside the package follows its published ID casing, which can
    # differ from packageName (e.g. IronZIP.nuspec for packageName "IronZip"), so
    # locate it by extension rather than assuming the exact file name.
    nuspec_matches = glob.glob(os.path.join(binary_dir, "*.nuspec"))
    if not nuspec_matches:
        raise FileNotFoundError(
            f"No .nuspec found in {binary_dir} after extracting {info['packageName']} {version_string}")
    nuspec_file = nuspec_matches[0]

    current_version = ""
    # Extract current version from nuspec
    with open(nuspec_file, 'r', encoding="utf-8") as file:
        contents = file.read()
        current_version = re.search("<version>(.+)<\\/version>", contents, re.MULTILINE).groups()[0]

    # Write version to JSON
    version_data = f'{{"_version":"{current_version}"}}'
    with open(homepage_version, 'w') as version_file:
        version_file.write(version_data)

    # Update toc.yml
    toc_file = 'toc.yml'
    with open(toc_file, 'r+') as file:
        content = file.read()
        new_content = apidocs_template_header + content.split('\n', 1)[1]
        file.truncate(0)
        file.seek(0)
        file.write(new_content)

    docfx_command = []
    # Build docs
    if not is_windows_os():
        docfx_command = ['mono', DOCFX_EXECUTABLE_PATH, docfx_config_file]
    else:
        docfx_command = [DOCFX_EXECUTABLE_PATH, docfx_config_file]
    
    try:
        StatusLogger.progress(f"Running DocFX ({docfx_config_file})...")
        subprocess.run(docfx_command, check=True)

        # Post-generation tasks — run before archiving so the cached copy is already clean.
        StatusLogger.progress("Stripping DocFX GUID markers from file names and hrefs...")
        renamed = strip_guid_markers(build_output_dir)
        StatusLogger.info(f"Removed GUID markers from {renamed} path(s).")

        StatusLogger.progress("Applying canonical link tags...")
        canonical_count = apply_canonical_tags(build_output_dir, get_docfx_canonical_prefix(info))
        StatusLogger.info(f"Backfilled canonical tags on {canonical_count} page(s) (DocFX's template emits the rest).")

        # Post-generation: Archetype-N SEO overview injection (default on; --no-enhancement disables).
        if ENHANCE_ENABLED:
            run_enhancement(info, build_output_dir)

        StatusLogger.progress(f"Archiving to {apidocs_storage_dir}...")
        copied = archive_tree(build_output_dir, apidocs_storage_dir)
        if copied == 0:
            StatusLogger.warning(
                f"No files under {build_output_dir} to archive — check the DocFX "
                f"'dest' in {docfx_config_file}; nothing was copied to {apidocs_storage_dir}.")
        else:
            StatusLogger.info(f"Archived {copied} file(s) to {apidocs_storage_dir}.")
        StatusLogger.success(f"Built {info['name']} .NET API v{version_string}.")
    except subprocess.CalledProcessError:
        StatusLogger.error(f"DocFX build failed for {info['packageName']} v{version_string}.")
    except Exception as error:
        StatusLogger.error(f"Post-build/archive step failed for {info['name']} v{version_string}: {error}")
    finally:
        time.sleep(20)

def parse_args():
    ap = argparse.ArgumentParser(description="Build Iron Software object-reference API docs.")
    ap.add_argument("--no-enhancement", action="store_true",
                    help="skip the Archetype-N SEO overview injection that runs after DocFX")
    ap.add_argument("--enhance-force", action="store_true",
                    help="regenerate cached Archetype-N overviews (POLISHED_PRESERVED still preserved)")
    ap.add_argument("--provider", choices=("claude", "openai"), default=None,
                    help="LLM provider for overview generation (default: auto-detect by API key)")
    ap.add_argument("--model", default=None, help="override the LLM model")
    ap.add_argument("--code", default=None, help="only build this product code (e.g. ironpdf)")
    ap.add_argument("--version", default=None, help="only build this version string")
    return ap.parse_args()

def main():
    """Build any object-reference documentation that is missing from the archive."""
    args = parse_args()
    global ENHANCE_ENABLED, ENHANCE_OPTS
    ENHANCE_ENABLED = not args.no_enhancement
    ENHANCE_OPTS = {"force": args.enhance_force, "provider": args.provider, "model": args.model}

    StatusLogger.title("Iron Software API Documentation Generator")
    with open(PRODUCTS_CATALOG, 'r') as file:
        products = json.load(file)

    for product in products["libraries"]:
        if args.code and product["code"] != args.code:
            continue
        package_type = product["packageType"]
        StatusLogger.progress(f"Checking {product['name']} ({package_type})...")
        # Isolate each product so one failed registry query / build never aborts the whole run.
        try:
            if package_type == "nuget":
                package_versions = get_nuget_package_versions(product["packageName"])
                for package_version in package_versions:
                    if args.version and package_version["version"] != args.version:
                        continue
                    if not apidoc_already_exists(product, package_version["version"]):
                        build_dotnet_apidoc(product, package_version["version"])
            elif package_type == "maven":
                package_versions = get_maven_package_versions(product["groupId"], product["artifactId"])
                for package_version in package_versions:
                    if args.version and package_version["v"] != args.version:
                        continue
                    if not apidoc_already_exists(product, package_version["v"]):
                        build_java_apidoc(product, package_version["v"])
            else:
                # pip / npm / docker docs come from separate tooling — nothing to generate here.
                StatusLogger.notice(f"{package_type} docs are generated by separate tooling; skipping {product['name']}.")
        except Exception as error:
            StatusLogger.error(f"Failed processing {product['name']}: {error}")

    StatusLogger.success("API documentation generation complete.")


if __name__ == "__main__":
    main()
