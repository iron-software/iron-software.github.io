import json, re, os, platform, shutil, subprocess, zipfile, urllib, time
import xml.etree.ElementTree as ET
from urllib.request import urlretrieve
from apidocs import *
from statuslogger import StatusLogger

DOCS_BUILDING_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scaffolds")
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
    """Remove DocFX's spurious `<GUID>` markers from file names and from href values (item 4).

    A known DocFX issue emits files like `Foo<8e7c…>.html` and `href="Foo<8e7c…>.html"`. The
    angle brackets are also invalid in Windows file names, so stripping them is what lets the
    output be served and committed cross-platform. Ported from devops.ironsoftware's
    makedocs.common.sh. Idempotent: a second run finds nothing to change. Returns the count of
    files/dirs renamed.
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
    """Ensure every HTML page under `directory` carries a `<link rel="canonical">` (item 6).

    The canonical href is `canonical_base_url` + the page's path relative to `directory`. DocFX
    already injects canonical tags via its template, so for DocFX output this only backfills pages
    that lack one; JavaDoc has none, so all of its pages receive one. Idempotent — a page that
    already declares a canonical link is left untouched. Returns the count of pages updated.
    """
    base = canonical_base_url.rstrip("/") + "/"
    updated = 0
    for html_path in iter_html_files(directory):
        with open(html_path, "r", encoding="utf-8", errors="ignore") as html_file:
            content = html_file.read()
        if CANONICAL_LINK_RE.search(content):
            continue  # already canonicalized — keep the pass idempotent
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
    nuspec_file = "{}/{}.nuspec".format(binary_dir, info["packageName"])
    build_output_dir = "output/{}{}/object-reference/".format(info["domain"], info["path"])
    apidocs_storage_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "object-reference", info["code"], version_string)
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

        StatusLogger.progress(f"Archiving to {apidocs_storage_dir}...")
        os.makedirs(apidocs_storage_dir, exist_ok=True)
        shutil.copytree(build_output_dir, apidocs_storage_dir, dirs_exist_ok=True)
        StatusLogger.success(f"Built {info['name']} .NET API v{version_string}.")
    except subprocess.CalledProcessError:
        StatusLogger.error(f"DocFX build failed for {info['packageName']} v{version_string}.")
    finally:
        time.sleep(20)

def main():
    """Build any object-reference documentation that is missing from the archive."""
    StatusLogger.title("Iron Software API Documentation Generator")
    with open(PRODUCTS_CATALOG, 'r') as file:
        products = json.load(file)

    for product in products["libraries"]:
        package_type = product["packageType"]
        StatusLogger.progress(f"Checking {product['name']} ({package_type})...")
        # Isolate each product so one failed registry query / build never aborts the whole run.
        try:
            if package_type == "nuget":
                package_versions = get_nuget_package_versions(product["packageName"])
                for package_version in package_versions:
                    if not apidoc_already_exists(product, package_version["version"]):
                        build_dotnet_apidoc(product, package_version["version"])
            elif package_type == "maven":
                package_versions = get_maven_package_versions(product["groupId"], product["artifactId"])
                for package_version in package_versions:
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
