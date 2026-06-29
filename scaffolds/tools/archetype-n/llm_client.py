"""Provider-agnostic LLM client for in-build Archetype-N generation.

Stdlib-only (urllib). No third-party SDK, no ore-foundry dependency.

Provider selection (locked decision):
    CLAUDE_API_KEY present  -> Anthropic Messages API   (default)
    else OPENAI_API_KEY     -> OpenAI chat/completions   (fallback)
    else                    -> raises NoProviderError    (caller skips + warns)

Override the auto-detect with ARCHETYPE_N_PROVIDER=claude|openai (or the
`provider=` arg) and the model with ARCHETYPE_N_MODEL (or `model=`).

Keys are read from the process environment; a `.env` file at the repo root is
loaded first (without overriding values already set in the environment).
"""
from __future__ import annotations

import json
import os
import urllib.error
import urllib.request
from pathlib import Path

# Default models per provider. Overridable via ARCHETYPE_N_MODEL / model= arg.
DEFAULT_CLAUDE_MODEL = "claude-sonnet-4-6"
DEFAULT_OPENAI_MODEL = "gpt-4o"

ANTHROPIC_URL = "https://api.anthropic.com/v1/messages"
ANTHROPIC_VERSION = "2023-06-01"
OPENAI_URL = "https://api.openai.com/v1/chat/completions"


class NoProviderError(RuntimeError):
    """Raised when enhancement is requested but no API key is configured."""


class LLMError(RuntimeError):
    """Raised on a transport / API error after the request was attempted."""


# ---------------------------------------------------------------------------
# .env loading
# ---------------------------------------------------------------------------

def load_dotenv(start: "Path | str | None" = None) -> None:
    """Load KEY=VALUE pairs from the nearest `.env` walking up from `start`
    (default: this file's directory). Does NOT override variables already set
    in the real environment. Silent no-op when no `.env` exists.
    """
    here = Path(start) if start else Path(__file__).resolve()
    if here.is_file():
        here = here.parent
    for d in [here, *here.parents]:
        env = d / ".env"
        if env.is_file():
            _parse_env_into_environ(env)
            return
        # Stop at the repo root (don't climb into unrelated parent dirs).
        if (d / "iron-products.json").is_file() or (d / ".git").exists():
            return


def _parse_env_into_environ(env_path: Path) -> None:
    for raw in env_path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        key = key.strip()
        # strip optional surrounding quotes
        val = val.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = val


# ---------------------------------------------------------------------------
# Provider resolution
# ---------------------------------------------------------------------------

def resolve_provider(explicit: "str | None" = None) -> str:
    """Return 'claude' or 'openai'. Precedence: explicit arg >
    ARCHETYPE_N_PROVIDER env > key auto-detect. Raises NoProviderError when the
    chosen (or only available) provider has no key."""
    choice = (explicit or os.environ.get("ARCHETYPE_N_PROVIDER") or "").strip().lower()
    has_claude = bool(os.environ.get("CLAUDE_API_KEY") or os.environ.get("ANTHROPIC_API_KEY"))
    has_openai = bool(os.environ.get("OPENAI_API_KEY"))

    if choice in ("claude", "anthropic"):
        if not has_claude:
            raise NoProviderError("ARCHETYPE_N_PROVIDER=claude but no CLAUDE_API_KEY/ANTHROPIC_API_KEY set")
        return "claude"
    if choice in ("openai", "gpt"):
        if not has_openai:
            raise NoProviderError("ARCHETYPE_N_PROVIDER=openai but no OPENAI_API_KEY set")
        return "openai"
    # auto-detect: Claude default, OpenAI fallback
    if has_claude:
        return "claude"
    if has_openai:
        return "openai"
    raise NoProviderError("no LLM API key found (set CLAUDE_API_KEY or OPENAI_API_KEY)")


def default_model(provider: str) -> str:
    env_model = os.environ.get("ARCHETYPE_N_MODEL")
    if env_model:
        return env_model
    return DEFAULT_CLAUDE_MODEL if provider == "claude" else DEFAULT_OPENAI_MODEL


# ---------------------------------------------------------------------------
# Generation
# ---------------------------------------------------------------------------

def generate(system: str, user: str, *, provider: "str | None" = None,
             model: "str | None" = None, max_tokens: int = 4000,
             temperature: float = 0.4, timeout: int = 120) -> dict:
    """Send one (system, user) turn and return
    {provider, model, text, usage:{input_tokens, output_tokens}}.

    Raises NoProviderError (no key) or LLMError (transport/API failure)."""
    prov = resolve_provider(provider)
    mdl = model or default_model(prov)
    if prov == "claude":
        return _generate_claude(system, user, mdl, max_tokens, temperature, timeout)
    return _generate_openai(system, user, mdl, max_tokens, temperature, timeout)


def _post_json(url: str, headers: dict, payload: dict, timeout: int) -> dict:
    body = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=body, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        detail = ""
        try:
            detail = e.read().decode("utf-8")[:500]
        except Exception:
            pass
        raise LLMError(f"HTTP {e.code} from {url}: {detail}") from e
    except urllib.error.URLError as e:
        raise LLMError(f"network error calling {url}: {e.reason}") from e


def _generate_claude(system: str, user: str, model: str, max_tokens: int,
                     temperature: float, timeout: int) -> dict:
    api_key = os.environ.get("CLAUDE_API_KEY") or os.environ.get("ANTHROPIC_API_KEY", "")
    headers = {
        "content-type": "application/json",
        "x-api-key": api_key,
        "anthropic-version": ANTHROPIC_VERSION,
    }
    payload = {
        "model": model,
        "max_tokens": max_tokens,
        "temperature": temperature,
        "system": system,
        "messages": [{"role": "user", "content": user}],
    }
    data = _post_json(ANTHROPIC_URL, headers, payload, timeout)
    parts = data.get("content", [])
    text = "".join(p.get("text", "") for p in parts if p.get("type") == "text")
    usage = data.get("usage", {})
    return {
        "provider": "claude",
        "model": data.get("model", model),
        "text": text,
        "usage": {
            "input_tokens": usage.get("input_tokens", 0),
            "output_tokens": usage.get("output_tokens", 0),
        },
    }


def _generate_openai(system: str, user: str, model: str, max_tokens: int,
                     temperature: float, timeout: int) -> dict:
    api_key = os.environ.get("OPENAI_API_KEY", "")
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}",
    }
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        "max_tokens": max_tokens,
        "temperature": temperature,
    }
    data = _post_json(OPENAI_URL, headers, payload, timeout)
    choices = data.get("choices", [])
    text = choices[0].get("message", {}).get("content", "") if choices else ""
    usage = data.get("usage", {})
    return {
        "provider": "openai",
        "model": data.get("model", model),
        "text": text,
        "usage": {
            "input_tokens": usage.get("prompt_tokens", 0),
            "output_tokens": usage.get("completion_tokens", 0),
        },
    }


# Load .env on import so callers (enhance.py / generate_overview.py) see keys.
load_dotenv()


if __name__ == "__main__":
    # Smoke test: report the resolved provider/model without making a call.
    try:
        p = resolve_provider()
        print(f"provider={p} model={default_model(p)}")
    except NoProviderError as e:
        print(f"no provider: {e}")
