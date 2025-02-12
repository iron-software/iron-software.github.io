import requests, json, re
import os

NUGET_ENDPOINT_FORMAT = "https://api-v2v3search-0.nuget.org/query?q=packageid:{}"
MAVEN_ENDPOINT_FORMAT = "https://search.maven.org/solrsearch/select?q=g:{groupId}+AND+a:{artifactId}&core=gav&rows=1000&wt=json"
NPM_ENDPOINT_FORMAT = "https://registry.npmjs.org/{package_name}"
PYPI_ENDPOINT_FORMAT = "https://pypi.org/pypi/{package_name}/json"
PRODUCTS_CATALOG = os.path.join(os.path.dirname(os.path.abspath(__file__)), "iron-products.json")
APIDOCS_STORAGE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "object-reference")
APIDOCS_DESTINATION_PATH_TEMPLATE = APIDOCS_STORAGE_PATH + os.path.sep + "{}" + os.path.sep + "{}"

def get_apidoc_path(info:dict, version_string:str) -> str:
    destination_path = APIDOCS_DESTINATION_PATH_TEMPLATE.format(info["code"], version_string)
    return destination_path

def apidoc_already_exists(info:dict, version_string:str) -> bool:
    destination_path = get_apidoc_path(info, version_string)
    return os.path.exists(destination_path)

def get_maven_package_versions(group_id:str, artifact_id:str) -> dict:
    response = requests.get(url=MAVEN_ENDPOINT_FORMAT.format(groupId = group_id, artifactId = artifact_id))
    data = response.json()
    versions = data["response"]["docs"];
    return versions;

def get_pip_package_versions(package_name:str) -> dict:
    response = requests.get(url=PYPI_ENDPOINT_FORMAT.format(package_name = package_name))
    data = response.json()
    versions = data["releases"];
    return versions;


def get_npm_package_versions(package_name:str) -> dict:
    response = requests.get(url=NPM_ENDPOINT_FORMAT.format(package_name = package_name))
    data = response.json()
    versions = data["versions"];
    return versions;

def get_nuget_package_versions(package:str) -> dict:
    response = requests.get(url=NUGET_ENDPOINT_FORMAT.format(package))
    data = response.json()
    versions = data["data"][0]["versions"];
    return versions;

def query_product_info(product_code:str, product_name:str=None) -> dict|None:
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
            elif product["packageType"] == "maven":
                package_versions = get_maven_package_versions(selected_product["groupId"], selected_product["artifactId"])
            elif product["packageType"] == "pip":
                package_versions = get_pip_package_versions(selected_product["packageName"])
            elif product["packageType"] == "npm":
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
