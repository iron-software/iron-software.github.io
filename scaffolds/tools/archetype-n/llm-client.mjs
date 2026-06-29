/**
 * Provider-agnostic LLM client (JS port of llm_client.py). Stdlib-only via
 * global fetch (Node >= 18). Claude default, OpenAI fallback; .env loaded from
 * the repo root without overriding the real environment.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

export const DEFAULT_CLAUDE_MODEL = "claude-sonnet-4-6";
export const DEFAULT_OPENAI_MODEL = "gpt-4o";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

export class NoProviderError extends Error {}
export class LLMError extends Error {}

export function loadDotenv(start = HERE) {
  let d = start;
  for (;;) {
    const env = join(d, ".env");
    if (existsSync(env)) { parseEnv(env); return; }
    if (existsSync(join(d, "iron-products.json")) || existsSync(join(d, ".git"))) return;
    const parent = dirname(d);
    if (parent === d) return;
    d = parent;
  }
}

function parseEnv(envPath) {
  for (const raw of readFileSync(envPath, "utf-8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !(key in process.env)) process.env[key] = val;
  }
}

export function resolveProvider(explicit = null) {
  const choice = (explicit || process.env.ARCHETYPE_N_PROVIDER || "").trim().toLowerCase();
  const hasClaude = !!(process.env.CLAUDE_API_KEY || process.env.ANTHROPIC_API_KEY);
  const hasOpenai = !!process.env.OPENAI_API_KEY;
  if (choice === "claude" || choice === "anthropic") {
    if (!hasClaude) throw new NoProviderError("ARCHETYPE_N_PROVIDER=claude but no CLAUDE_API_KEY/ANTHROPIC_API_KEY set");
    return "claude";
  }
  if (choice === "openai" || choice === "gpt") {
    if (!hasOpenai) throw new NoProviderError("ARCHETYPE_N_PROVIDER=openai but no OPENAI_API_KEY set");
    return "openai";
  }
  if (hasClaude) return "claude";
  if (hasOpenai) return "openai";
  throw new NoProviderError("no LLM API key found (set CLAUDE_API_KEY or OPENAI_API_KEY)");
}

export function defaultModel(provider) {
  if (process.env.ARCHETYPE_N_MODEL) return process.env.ARCHETYPE_N_MODEL;
  return provider === "claude" ? DEFAULT_CLAUDE_MODEL : DEFAULT_OPENAI_MODEL;
}

export async function generate(system, user, { provider = null, model = null, maxTokens = 4000, temperature = 0.4, timeout = 120000 } = {}) {
  const prov = resolveProvider(provider);
  const mdl = model || defaultModel(prov);
  return prov === "claude"
    ? await generateClaude(system, user, mdl, maxTokens, temperature, timeout)
    : await generateOpenai(system, user, mdl, maxTokens, temperature, timeout);
}

async function postJson(url, headers, payload, timeout) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  let resp;
  try {
    resp = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload), signal: ctrl.signal });
  } catch (e) {
    throw new LLMError(`network error calling ${url}: ${e.message}`);
  } finally {
    clearTimeout(t);
  }
  if (!resp.ok) {
    let detail = "";
    try { detail = (await resp.text()).slice(0, 500); } catch {}
    throw new LLMError(`HTTP ${resp.status} from ${url}: ${detail}`);
  }
  return await resp.json();
}

async function generateClaude(system, user, model, maxTokens, temperature, timeout) {
  const apiKey = process.env.CLAUDE_API_KEY || process.env.ANTHROPIC_API_KEY || "";
  const data = await postJson(ANTHROPIC_URL, {
    "content-type": "application/json", "x-api-key": apiKey, "anthropic-version": ANTHROPIC_VERSION,
  }, { model, max_tokens: maxTokens, temperature, system, messages: [{ role: "user", content: user }] }, timeout);
  const text = (data.content || []).filter((p) => p.type === "text").map((p) => p.text).join("");
  const u = data.usage || {};
  return { provider: "claude", model: data.model || model, text, usage: { input_tokens: u.input_tokens || 0, output_tokens: u.output_tokens || 0 } };
}

async function generateOpenai(system, user, model, maxTokens, temperature, timeout) {
  const apiKey = process.env.OPENAI_API_KEY || "";
  const data = await postJson(OPENAI_URL, {
    "Content-Type": "application/json", Authorization: `Bearer ${apiKey}`,
  }, { model, messages: [{ role: "system", content: system }, { role: "user", content: user }], max_tokens: maxTokens, temperature }, timeout);
  const choices = data.choices || [];
  const text = choices.length ? (choices[0].message?.content || "") : "";
  const u = data.usage || {};
  return { provider: "openai", model: data.model || model, text, usage: { input_tokens: u.prompt_tokens || 0, output_tokens: u.completion_tokens || 0 } };
}

loadDotenv();

const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/"));
if (isMain) {
  try { const p = resolveProvider(); console.log(`provider=${p} model=${defaultModel(p)}`); }
  catch (e) { console.log(`no provider: ${e.message}`); }
}
