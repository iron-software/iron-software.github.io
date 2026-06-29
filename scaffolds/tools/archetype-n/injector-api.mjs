/** In-process wrapper over inject_archetype_n.mjs (JS port of injector_api.py). */
import { basename, resolve } from "node:path";
import * as inj from "./inject_archetype_n.mjs";

function registerNsRoot(targetPath) {
  const root = basename(targetPath).replace(/\.html$/, "").split(".")[0];
  if (root && root[0] === root[0].toUpperCase() && root[0] !== root[0].toLowerCase()) inj.KNOWN_NAMESPACE_ROOTS.add(root);
}

export function routeTreatment(targetHtml) {
  const d = inj.deriveTreatmentFromHtml(targetHtml);
  return d || ["full", "class"];
}

export function validate(samplePath, targetPath, { baseUrl, treatment, subVariant, apiDir }) {
  inj.setApiDir(apiDir);
  inj.setConfirmedTypes(null);
  registerNsRoot(targetPath);
  const pageUrl = baseUrl.replace(/\/+$/, "") + "/" + basename(targetPath);
  let parsed;
  try { parsed = inj.parseSample(inj.readTextNorm(samplePath)); }
  catch (e) { return { ok: false, hard: [{ severity: "HARD", rule: "parse-error", detail: e.message }], warn: [], prose_words: 0 }; }

  const targetHtml = inj.readTextNorm(targetPath);
  let findings = [];
  findings = findings.concat(inj.validateConstraints(parsed, treatment, subVariant));
  const prose = inj.stripCodeFencesPublic(parsed.overview_md);
  findings = findings.concat(inj.forbiddenScan(prose, "overview prose"));
  findings = findings.concat(inj.forbiddenScan(parsed.abstract, "TechArticle abstract"));
  parsed.faq.forEach((faq, i) => {
    findings = findings.concat(inj.forbiddenScan(faq.question || "", `FAQ[${i}].question`));
    findings = findings.concat(inj.forbiddenScan(faq.answer || "", `FAQ[${i}].answer`));
  });
  findings = findings.concat(inj.v12Validators(parsed, pageUrl, targetHtml));
  findings = findings.concat(inj.v121Validators(parsed, treatment));
  findings = findings.concat(inj.v123Validators(parsed, treatment));

  const hard = findings.filter((f) => f.severity === "HARD");
  const warn = findings.filter((f) => f.severity !== "HARD");
  return { ok: hard.length === 0, hard, warn, prose_words: inj.countProseWordsPublic(parsed.overview_md) };
}

export function injectPage(samplePath, targetPath, { baseUrl, product, productUrl, treatment, subVariant, variant = "v3" }) {
  inj.setApiDir(resolve(targetPath, ".."));
  inj.setConfirmedTypes(null);
  registerNsRoot(targetPath);
  const parsed = inj.parseSample(inj.readTextNorm(samplePath));
  const idx = { v1: 0, v2: 1, v3: 2 }[variant];
  const className = basename(targetPath).replace(/\.html$/, "").split(".").pop();
  const pageUrl = baseUrl.replace(/\/+$/, "") + "/" + basename(targetPath);
  const title = parsed.titles[idx];
  const description = parsed.descriptions[idx];
  const [overviewHtml, codeBlocks] = inj.mdOverviewToHtml(parsed.overview_md);
  const jsonld = inj.buildJsonld(className, pageUrl, title, description, parsed.abstract, parsed.faq, codeBlocks, subVariant, product, productUrl);
  const original = inj.readTextNorm(targetPath);
  const [spliced, stats] = inj.inject(original, className, pageUrl, overviewHtml, title, description, parsed.titles, parsed.descriptions, jsonld, treatment, subVariant, true);
  inj.writeTextEol(targetPath, spliced);
  stats.bytes_delta = spliced.length - original.length;
  stats.code_blocks = codeBlocks.length;
  stats.faq = parsed.faq.length;
  return stats;
}
