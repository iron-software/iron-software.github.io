import json, re, os, platform, shutil, subprocess, zipfile, urllib, time
import xml.etree.ElementTree as ET
from urllib.request import urlretrieve
from apidocs import *

DOCS_BUILDING_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scaffolds")
DOCFX_EXECUTABLE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scaffolds", "tools", "docfx", "tools", "docfx.exe")
JAVA_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scaffolds", "tools", "jdk")

def is_windows_os() -> bool:
    return platform.system() == "Windows"

def get_jar_executable_path() -> str:
    if is_windows_os():
        return os.path.join(JAVA_PATH, "windows", "bin", "jar.exe")
    else:
        return os.path.join(JAVA_PATH, "linux", "bin", "jar")

def build_java_apidoc(info:dict, version_string:str):
    # Navigate to script directory
    os.chdir(DOCS_BUILDING_DIR)
    
    javadoc_jar_filename = f"ironpdf-{version_string}-javadoc-java11-javadoc.jar"
    javadoc_jar_alternate_filename = f"ironpdf-{version_string}-javadoc.jar"

    javadoc_jar_location = f"https://github.com/iron-software/IronPDF-for-Java/releases/download/{version_string}/{javadoc_jar_filename}"
    javadoc_jar_alternate_location = f"https://github.com/iron-software/IronPDF-for-Java/releases/download/{version_string}/{javadoc_jar_alternate_filename}"
    javadoc_download_path = os.path.join(DOCS_BUILDING_DIR, "output", info["domain"], "java")
    javadoc_destination_path = APIDOCS_DESTINATION_PATH_TEMPLATE.format(info["code"], version_string)

    # Cleanup any existing download directory
    try:
        if os.path.exists(javadoc_download_path):
            shutil.rmtree(javadoc_download_path)
    except PermissionError:
        time.sleep(60)
        if os.path.exists(javadoc_download_path):
            shutil.rmtree(javadoc_download_path)

    os.makedirs(javadoc_download_path, exist_ok=True)
    jar_file_path = os.path.join(javadoc_download_path, javadoc_jar_filename)
    try:
        urllib.request.urlretrieve(javadoc_jar_location, jar_file_path)
    except urllib.error.HTTPError:
        try:
            urllib.request.urlretrieve(javadoc_jar_alternate_location, jar_file_path)
        except urllib.error.HTTPError:
            return

    # Extract the contents of the JAR file
    jar_executable = get_jar_executable_path();
    subprocess.run([jar_executable, 'xf', javadoc_jar_filename], cwd=javadoc_download_path, check=True)

    # Move the completed JavaDoc content into the /public/ directory for Firebase deployment
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

def build_dotnet_apidoc(info:dict, version_string:str):
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
    shutil.rmtree(build_output_dir, ignore_errors=True)
    shutil.rmtree(binary_dir, ignore_errors=True)
    os.makedirs(binary_dir, exist_ok=True)
    os.makedirs(build_output_dir, exist_ok=True)

    # Fetch latest binaries
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
        subprocess.run(docfx_command, check=True)
        os.makedirs(apidocs_storage_dir, exist_ok=True)
        shutil.copytree(build_output_dir, apidocs_storage_dir, dirs_exist_ok=True)
    except subprocess.CalledProcessError:
        print("ERROR BUILDING " + info["packageName"] + " version " + version_string)
    finally:
        time.sleep(20)

# Open and read the JSON file
with open(PRODUCTS_CATALOG, 'r') as file:
    products = json.load(file)

    for product in products["libraries"]:
       if product["packageType"] == "nuget":
           package_versions = get_nuget_package_versions(product["packageName"])
           for package_version in package_versions:
               if not apidoc_already_exists(product, package_version["version"]):
                   build_dotnet_apidoc(product, package_version["version"])
       elif product["packageType"] == "maven":
           package_versions = get_maven_package_versions(product["groupId"], product["artifactId"])
           for package_version in package_versions:
               if not apidoc_already_exists(product, package_version["v"]):
                   build_java_apidoc(product, package_version["v"])
       elif product["packageType"] == "pip":
           pass
       elif product["packageType"] == "npm":
           pass
    