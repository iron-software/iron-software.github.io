import shutil, subprocess, sys, os, getopt, re, json
from apidocs import *
from statuslogger import *


def main(arguments):
    product_code = None
    product_name = None
    version = None
    get_latest_version = False
    check_if_exists = False

    opts, args = getopt.getopt(arguments, "p:n:v:Va", ["product-code=", "product-name=", "version=", "latest-version", "docs-exists"])
    for opt, arg in opts:
        if opt in ("-p", "--product-code"):
            product_code = arg
        elif opt in ("-n", "--product-name"):
            product_name = arg
        elif opt in ("-v", "--version"):
            version = arg
        elif opt in ("-V", "--latest-version"):
            get_latest_version = True
        elif opt in ("-a", "--docs-exists"):
            check_if_exists = True
    
    if product_code is None and product_name is None:
        StatusLogger.error("Please specify product code or product name (-p , --product-code|-n, --product-name)")
        exit(1)
    else:
        product_data = query_product_info(product_code, product_name)
        if product_data['product'] is None:
            StatusLogger.error("Specified product does not exist")
            exit(1)
        else:
            output = ""
            name = product_data["product"]["name"]
            output += f"Name: {name}\n"
            product_version = get_product_version(product_data, version, get_latest_version)
            output += f"Version: {product_version}\n"
            if check_if_exists:
                docs_exists = check_if_product_and_version_exists(product_data, product_version)
                output += f"API Docs Built: {str(docs_exists)}\n"
                if docs_exists:
                    docs_path = get_apidoc_path(product_data["product"], product_version)
                    output += f"API Docs Path: {docs_path}"
            print(output)
if __name__ == "__main__":
    main(sys.argv[1:])