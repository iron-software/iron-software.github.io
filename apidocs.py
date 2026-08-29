# /bin/env/python3
""" apidocs.py — Shared Product Version Management Utilities
"""

import requests, json, re
import os
import concurrent.futures
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

# Network timeout (seconds) for registry/metadata requests — keeps a flaky endpoint from hanging.
HTTP_TIMEOUT = 30

# API Endpoint Structure for each Package Manager (NuGet, NPM, PyPi + Maven Central)
NUGET_ENDPOINT_FORMAT = "https://api-v2v3search-0.nuget.org/query?q=packageid:{}"
NPM_ENDPOINT_FORMAT = "https://registry.npmjs.org/{package_name}"
PYPI_ENDPOINT_FORMAT = "https://pypi.org/pypi/{package_name}/json"
# Maven Central object storage. Versions come from maven-metadata.xml; each version's release
# date is read from the Last-Modified header of its .pom (see get_maven_package_versions).
MAVEN_REPOSITORY_BASE = "https://repo1.maven.org/maven2"

# Fully-qualified path to the `iron-product.json` file
PRODUCTS_CATALOG = os.path.join(os.path.dirname(os.path.abspath(__file__)), "iron-products.json")

# Fully-qualified path to the cache directory where all API Documentation reside post-generation.
APIDOCS_STORAGE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "object-reference")

# Reusable path template used to place generated API Documentation in their proper spots in the object-reference cache.
APIDOCS_DESTINATION_PATH_TEMPLATE = APIDOCS_STORAGE_PATH + os.path.sep + "{}" + os.path.sep + "{}"

# Directory names that live alongside the version directories under object-reference/<code>/ but are
# not versions. Anything listed here is skipped by list_archived_versions().
NON_VERSION_DIRECTORIES = {"_archetype-n-samples"}


def version_sort_key(version_string:str) -> tuple:
    """Sort key for an archived version directory name.

    The archive spans two numbering eras — the old build-number style (``2021.9.3650``,
    ``2022.11.10341``) and the modern ``YYYY.M.P`` style (``2026.6.1``) — but both are
    dot-separated integers, so a tuple of ints orders them correctly and, crucially, sorts
    ``2026.10.1`` after ``2026.9.1`` (which a lexical sort does not).

    Non-numeric components sort last within their position rather than raising, so an unexpected
    directory name degrades to a stable ordering instead of crashing the caller.

    Args:
        version_string (str): A version directory name.

    Returns:
        tuple: A comparable key of ``(is_non_numeric, value)`` pairs.
    """
    key = []
    for component in version_string.split("."):
        if component.isdigit():
            key.append((0, int(component), ""))
        else:
            key.append((1, 0, component))
    return tuple(key)


def list_archived_versions(product_code:str) -> list:
    """Return the versions already built into the object-reference cache, oldest first.

    Directory existence *is* the version index for this repo — there is no manifest to read — so
    this lists ``object-reference/<code>/`` and filters the non-version siblings.

    Args:
        product_code (str): A product's short code (e.g. ``ironzip``).

    Returns:
        list: Sorted version strings; empty when the product has no archive directory.
    """
    product_dir = os.path.join(APIDOCS_STORAGE_PATH, product_code)
    if not os.path.isdir(product_dir):
        return []

    versions = [
        entry for entry in os.listdir(product_dir)
        if entry not in NON_VERSION_DIRECTORIES and os.path.isdir(os.path.join(product_dir, entry))
    ]
    versions.sort(key=version_sort_key)
    return versions


def get_apidoc_path(info:dict, version_string:str) -> str:
    """Builds the storage path for a product's API documentation
    
    Args:
        info (dict): A product entry (source for iron-products.json).
        version (str): The product's version.

    Returns:
        str: the full path to a product's versioned API Documentation directory
    """
    destination_path = APIDOCS_DESTINATION_PATH_TEMPLATE.format(info["code"], version_string)
    return destination_path

def apidoc_already_exists(info:dict, version_string:str) -> bool:
    destination_path = get_apidoc_path(info, version_string)
    return os.path.exists(destination_path)

def get_maven_package_versions(group_id:str, artifact_id:str) -> list:
    """Return the maven artifact's published versions, newest first.

    Each entry is ``{"v": <version>, "timestamp": <epoch seconds>, "lastModified": <raw header>}``,
    preserving the ``"v"`` key the rest of the tooling reads.

    Args:
        group_id (str): Artifact's group ID
        artifact_id (str): Artifact unique ID
    Returns:
        list: a list of available versions for the specified artifact
    """
    
    group_path = group_id.replace(".", "/")
    artifact_base_url = f"{MAVEN_REPOSITORY_BASE}/{group_path}/{artifact_id}"

    # 1. Fetch maven-metadata.xml for the full, authoritative version list.
    metadata_response = requests.get(f"{artifact_base_url}/maven-metadata.xml", timeout=HTTP_TIMEOUT)
    metadata_response.raise_for_status()
    metadata_root = ET.fromstring(metadata_response.content)
    version_strings = [el.text for el in metadata_root.findall("./versioning/versions/version") if el.text]

    # 2. For each version, HEAD its .pom and read Last-Modified as the release date. The HEADs are
    #    independent, so run them concurrently (dozens of versions × one round-trip each otherwise).
    def resolve_version(version_string:str):
        pom_url = f"{artifact_base_url}/{version_string}/{artifact_id}-{version_string}.pom"
        try:
            pom_head = requests.head(pom_url, allow_redirects=True, timeout=HTTP_TIMEOUT)
        except requests.RequestException:
            return None
        if pom_head.status_code != 200:
            return None
        last_modified = pom_head.headers.get("Last-Modified")
        release_timestamp = parsedate_to_datetime(last_modified).timestamp() if last_modified else 0.0
        return {"v": version_string, "timestamp": release_timestamp, "lastModified": last_modified}

    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as executor:
        versions = [entry for entry in executor.map(resolve_version, version_strings) if entry is not None]

    # 3. Newest first, so callers that take [0] as the latest version stay correct.
    versions.sort(key=lambda entry: entry["timestamp"], reverse=True)
    return versions

def get_pip_package_versions(package_name:str) -> dict:
    response = requests.get(url=PYPI_ENDPOINT_FORMAT.format(package_name = package_name), timeout=HTTP_TIMEOUT)
    data = response.json()
    return data["releases"]

def get_npm_package_versions(package_name:str) -> dict:
    response = requests.get(url=NPM_ENDPOINT_FORMAT.format(package_name = package_name), timeout=HTTP_TIMEOUT)
    data = response.json()
    return data["versions"]

def get_nuget_package_versions(package:str) -> dict:
    response = requests.get(url=NUGET_ENDPOINT_FORMAT.format(package), timeout=HTTP_TIMEOUT)
    data = response.json()
    return data["data"][0]["versions"]

def query_product_info(product_code:str, product_name:str=None) -> dict:
    selected_product=None
    package_versions=None
    latest_version=None
    with open(PRODUCTS_CATALOG, 'r') as file:
        products = json.load(file)


        for product in products["libraries"]:
            if product["code"] == product_code or (product_name is not None and product["name"] == product_name):
                selected_product = product
                break
        
        if selected_product is not None:
            if selected_product["packageType"] == "nuget":
                package_versions = get_nuget_package_versions(selected_product["packageName"])
            elif selected_product["packageType"] == "maven":
                package_versions = get_maven_package_versions(selected_product["groupId"], selected_product["artifactId"])
            elif selected_product["packageType"] == "pip":
                package_versions = get_pip_package_versions(selected_product["packageName"])
            elif selected_product["packageType"] == "npm":
                package_versions = get_npm_package_versions(selected_product["packageName"])
            
            if len(package_versions) > 0:
                if selected_product["packageType"] == "pip" or selected_product["packageType"] == "npm":
                    versions = list(package_versions.keys())
                    latest_version = package_versions[versions[-1]]
                    if selected_product["packageType"] == "pip":
                        latest_version = latest_version[0]
                    if "version" not in latest_version.keys():
                        latest_version["version"] = versions[-1]
                    product_versions = []
                    for version in versions:
                        package_version = package_versions[version]
                        if selected_product["packageType"] == "pip":
                            package_version = package_version[0]
                            package_version["version"] = version
                        product_versions.append(package_version)
                    package_versions = product_versions
                elif selected_product["packageType"] == "maven":
                    latest_version = package_versions[0]
                else:
                    latest_version = package_versions[-1]

    return {"product": selected_product, "available_versions": package_versions, "latest_version": latest_version}

def get_product_version(product_data:dict, version:str = "", get_latest_version:bool = True) -> str:
    version="N/A"
    if get_latest_version:
        if product_data["product"]["packageType"] == "maven":
            version = product_data["latest_version"]["v"]
        else:
            version = product_data["latest_version"]["version"]
    elif version != "":
        for product in product_data['available_versions']:
            if product_data["product"]["packageType"] == "maven":
                version = product["v"]
            else:
                version = product["version"]
    return version

def check_if_product_and_version_exists(product_data:dict, product_version:str)-> bool:
    exists = False
    for product in product_data["available_versions"]:
        version = ""
        if product_data["product"]["packageType"] == "maven":
            version = product["v"]
        else:
            version = product["version"]
        if version == product_version:
            exists = apidoc_already_exists(product_data["product"], product_version)
            break
    return exists
