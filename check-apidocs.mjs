#!/usr/bin/env node
/**
 * check-apidocs.mjs — query a product's latest/known version and whether its docs are built
 * (Node port of check-apidocs.py). Output format matches the Python tool so the devops bash
 * pipeline can call either interchangeably.
 *
 *   node check-apidocs.mjs -p <code> [-n <name>] [-v <version>] [-V] [-a]
 *     -p/--product-code   product code (e.g. ironpdf)
 *     -n/--product-name   product display name (alternative to code)
 *     -v/--version        a specific version
 *     -V/--latest-version resolve the latest version
 *     -a/--docs-exists    also report whether the docs are built + their path
 */

import { parseArgs } from "node:util";
import {
  queryProductInfo,
  getProductVersion,
  checkIfProductAndVersionExists,
  getApidocPath,
} from "./apidocs.mjs";
import { StatusLogger } from "./statuslogger.mjs";

async function main() {
  const { values } = parseArgs({
    options: {
      "product-code": { type: "string", short: "p" },
      "product-name": { type: "string", short: "n" },
      "version": { type: "string", short: "v" },
      "latest-version": { type: "boolean", short: "V" },
      "docs-exists": { type: "boolean", short: "a" },
    },
    allowPositionals: true,
  });

  const productCode = values["product-code"] ?? null;
  const productName = values["product-name"] ?? null;
  const version = values["version"] ?? "";
  const getLatestVersion = Boolean(values["latest-version"]);
  const checkIfExists = Boolean(values["docs-exists"]);

  if (productCode === null && productName === null) {
    StatusLogger.error("Please specify product code or product name (-p , --product-code|-n, --product-name)");
    process.exit(1);
  }

  const productData = await queryProductInfo(productCode, productName);
  if (productData.product === null) {
    StatusLogger.error("Specified product does not exist");
    process.exit(1);
  }

  let output = "";
  output += `Name: ${productData.product.name}\n`;
  const productVersion = getProductVersion(productData, version, getLatestVersion);
  output += `Version: ${productVersion}\n`;
  if (checkIfExists) {
    const docsExists = checkIfProductAndVersionExists(productData, productVersion);
    output += `API Docs Built: ${docsExists ? "True" : "False"}\n`;
    if (docsExists) {
      output += `API Docs Path: ${getApidocPath(productData.product, productVersion)}`;
    }
  }
  console.log(output);
}

main();
