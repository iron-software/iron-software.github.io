"""Machine-readable diff artifact.

Key order is fixed and every collection is sorted so the Python and Node ports produce byte-identical
files — that equality is the repo's dual-port parity gate.
"""

import json

from .model import SEVERITY_ORDER


def build(result) -> dict:
    """Return the JSON-serializable form of a diff."""
    types = {}
    for delta in result.deltas:
        bucket = types.setdefault(delta.type_uid, {"added": [], "removed": [], "changed": []})
        bucket[delta.kind].append({
            "uid": delta.uid,
            "display": delta.display,
            "severity": delta.severity,
            "target": delta.target,
            "before": delta.before,
            "after": delta.after,
            "reasons": list(delta.reasons),
        })

    return {
        "product": result.product_code,
        "productName": result.product_name,
        "from": result.version_from,
        "to": result.version_to,
        "generatedFrom": "xrefmap+html",
        "summary": {
            **result.summary(),
            "total": len(result.deltas),
            "typesFrom": len(result.surface_from.types) if result.surface_from else 0,
            "typesTo": len(result.surface_to.types) if result.surface_to else 0,
        },
        "severities": list(SEVERITY_ORDER),
        "types": [
            {"fqn": fqn, **{kind: types[fqn][kind] for kind in ("added", "removed", "changed")}}
            for fqn in sorted(types)
        ],
        "warnings": sorted(result.warnings),
    }


def render(result) -> str:
    """Serialize a diff as pretty-printed JSON with a trailing newline."""
    return json.dumps(build(result), indent=2, ensure_ascii=False) + "\n"
