/** surface.mjs — assemble a Surface for one archived version (Node port of surface.py). */

import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import { parseImplements, parseTypePage } from "./declarations.mjs";
import { makeMember, makeSurface, makeTypeEntry } from "./model.mjs";
import { kindOf, pageStem, parseXrefmap } from "./xrefmap.mjs";

const MEMBER_KINDS = new Set(["M", "P", "F", "E"]);

/**
 * Longest known namespace that prefixes the type uid. Longest-match matters for nested namespaces:
 * `IronPdf.Rendering.ChromePdfRenderer` must resolve to `IronPdf.Rendering`, not `IronPdf`.
 */
function namespaceOf(typeUid, namespaces) {
  let best = "";
  for (const namespace of namespaces) {
    if (typeUid.startsWith(`${namespace}.`) && namespace.length > best.length) best = namespace;
  }
  return best;
}

/**
 * Read one archived version directory into a Surface.
 *
 * xrefmap entries establish identity; each surviving type's HTML page is then opened once to attach
 * declarations. Types the filter rejects are never opened, so a narrow `--namespace` makes the run
 * proportionally cheaper.
 */
export function buildSurface(versionDir, productCode, version, surfaceFilter) {
  const surface = makeSurface(productCode, version);
  const entries = parseXrefmap(join(versionDir, "xrefmap.yml"));

  // Pass 1 — namespaces and types, so member attribution has somewhere to land.
  //
  // Every namespace is retained locally for attribution, but only the ones the filter admits are
  // reported; otherwise `--exclude` would still surface namespace-level additions and removals for
  // the very namespaces it was asked to hide.
  const allNamespaces = new Set();
  for (const [uid, entry] of Object.entries(entries)) {
    const kind = kindOf(entry);
    if (kind === "N") {
      allNamespaces.add(uid);
      if (surfaceFilter.allowsType(uid)) surface.namespaces.add(uid);
    } else if (kind === "T") {
      if (surfaceFilter.allowsType(uid)) {
        surface.types.set(uid, makeTypeEntry({ uid, name: entry.name ?? uid }));
      } else {
        // Remember the simple name so the classifier can ignore it in a base list.
        surface.blockedTypeNames.add(uid.slice(uid.lastIndexOf(".") + 1));
      }
    }
  }
  for (const [typeUid, typeEntry] of surface.types) {
    typeEntry.namespace = namespaceOf(typeUid, allNamespaces);
  }

  // Pass 2 — members, attributed to their owning type via the page their href points at.
  for (const [uid, entry] of Object.entries(entries)) {
    const kind = kindOf(entry);
    if (!MEMBER_KINDS.has(kind)) continue;
    const name = entry.name ?? uid;
    if (!surfaceFilter.allowsMember(uid, name)) continue;
    const owner = pageStem(entry);
    const typeEntry = surface.types.get(owner);
    // Either the owning type was filtered out, or the href pointed somewhere unexpected.
    if (!typeEntry) continue;
    typeEntry.members.set(uid, makeMember({
      uid,
      kind,
      name,
      nameWithType: entry.nameWithType ?? name,
      fullName: entry.fullName ?? uid,
      typeUid: owner,
    }));
  }

  // Pass 3 — attach declarations from each type's HTML page.
  const apiDir = join(versionDir, "api");
  for (const [typeUid, typeEntry] of surface.types) {
    const pagePath = join(apiDir, `${typeUid}.html`);
    if (!existsSync(pagePath) || !statSync(pagePath).isFile()) {
      // Archived trees predating stripGuidMarkers() can carry unresolvable page names. Fall back to
      // xrefmap-only identity for this type rather than aborting the whole diff.
      surface.warnings.push(`${version}: no page for ${typeUid} (identity only, no signatures)`);
      continue;
    }
    const pageHtml = readFileSync(pagePath, "utf-8");
    const declarations = parseTypePage(pageHtml);
    typeEntry.implementsList = parseImplements(pageHtml);
    if (Object.keys(declarations).length === 0) {
      surface.warnings.push(`${version}: no declarations parsed from ${typeUid}.html`);
      continue;
    }
    typeEntry.declaration = declarations[typeUid] ?? "";
    for (const member of typeEntry.members.values()) {
      member.declaration = declarations[member.uid] ?? "";
    }
  }

  // Pass 4 — drop anything the visibility filter rejects now that declarations are known.
  for (const [typeUid, typeEntry] of [...surface.types]) {
    if (!surfaceFilter.allowsDeclaration(typeEntry.declaration)) {
      surface.types.delete(typeUid);
      continue;
    }
    for (const [memberUid, member] of [...typeEntry.members]) {
      if (!surfaceFilter.allowsDeclaration(member.declaration)) typeEntry.members.delete(memberUid);
    }
  }

  return surface;
}
