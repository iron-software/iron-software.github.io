"""A deliberately small C# declaration reader.

This is not a C# parser. It decomposes the single-line declarations DocFX renders into just the
parts the classifier compares — modifiers, type kind, base list, return type, parameters, and
property accessors — and is tolerant of anything it does not recognise, because an unparsed
fragment simply falls through to a raw string comparison.
"""

# Keywords that may precede the return type. `event`, `operator`, `implicit`, and `explicit` are
# included so the tokens that follow them line up with the ordinary method/field shape.
MODIFIERS = frozenset({
    "public", "protected", "internal", "private", "static", "virtual", "abstract", "sealed",
    "override", "readonly", "const", "extern", "unsafe", "async", "new", "partial", "volatile",
    "event", "implicit", "explicit", "operator", "fixed", "delegate",
})

# Declaration keywords that mark a type rather than a member.
TYPE_KINDS = frozenset({"class", "interface", "enum", "struct", "record"})

OPENERS = "<(["
CLOSERS = ">)]"


def split_top_level(text: str, separator: str) -> list:
    """Split on ``separator`` only where generic/parameter/array brackets are balanced.

    Keeps ``Dictionary<string, int>`` in one piece when splitting a parameter list on commas.
    """
    parts, depth, current = [], 0, []
    for character in text:
        if character in OPENERS:
            depth += 1
        elif character in CLOSERS:
            # Clamped so a `>` from an operator declaration cannot drive the depth negative.
            depth = max(0, depth - 1)
        if character == separator and depth == 0:
            parts.append("".join(current))
            current = []
        else:
            current.append(character)
    parts.append("".join(current))
    return [part.strip() for part in parts]


def _top_level_paren_groups(text: str) -> list:
    """Return ``(start, end, inner)`` for each balanced parenthesised group at depth zero."""
    groups, depth, start = [], 0, -1
    for index, character in enumerate(text):
        if character == "(":
            if depth == 0:
                start = index
            depth += 1
        elif character == ")" and depth > 0:
            depth -= 1
            if depth == 0 and start >= 0:
                groups.append((start, index, text[start + 1:index]))
    return groups


def parse_parameter(text: str) -> dict:
    """Split one parameter into its type, name, and default value."""
    body, separator, default = text.partition("=")
    tokens = split_top_level(body.strip(), " ")
    tokens = [token for token in tokens if token]
    name = tokens[-1] if tokens else ""
    return {
        "type": " ".join(tokens[:-1]) if len(tokens) > 1 else "",
        "name": name,
        "default": default.strip() if separator else None,
        "raw": text.strip(),
    }


def parse_declaration(declaration: str) -> dict:
    """Decompose a rendered C# declaration.

    Returns a dict with ``modifiers`` (frozenset), ``kind`` (type keyword or ``""``), ``bases``
    (list), ``return_type``, ``name``, ``parameters`` (list of parse_parameter dicts or ``None``
    when the declaration has no parameter list), ``accessors`` (frozenset or ``None``), and ``raw``.
    """
    parsed = {
        "modifiers": frozenset(), "kind": "", "bases": [], "return_type": "",
        "name": "", "parameters": None, "accessors": None, "raw": declaration,
    }
    if not declaration:
        return parsed

    head = declaration

    # 1. Property accessors, e.g. "{ get; protected set; }" at the end of the declaration.
    if head.rstrip().endswith("}") and "{" in head:
        brace = head.rindex("{")
        inner = head[brace + 1:head.rindex("}")]
        accessors = set()
        for clause in inner.split(";"):
            words = clause.split()
            if words and words[-1] in ("get", "set", "init"):
                accessors.add(words[-1])
        parsed["accessors"] = frozenset(accessors)
        head = head[:brace].strip()

    # 2. Parameter list — the last top-level parenthesised group, so a tuple return type or a
    #    parenthesised default value inside the list is not mistaken for it.
    groups = _top_level_paren_groups(head)
    if groups:
        start, end, inner = groups[-1]
        parsed["parameters"] = [parse_parameter(part) for part in split_top_level(inner, ",") if part] if inner.strip() else []
        head = (head[:start] + head[end + 1:]).strip()

    # 3. Base type / interface list, e.g. ": IronBaseArchive, IDisposable".
    head_parts = split_top_level(head, ":")
    if len(head_parts) > 1:
        head = head_parts[0].strip()
        parsed["bases"] = [base for base in split_top_level(head_parts[-1], ",") if base]

    # 4. Leading modifiers, then either a type keyword or a return type plus name.
    tokens = [token for token in split_top_level(head, " ") if token]
    modifiers = set()
    while tokens and tokens[0] in MODIFIERS:
        modifiers.add(tokens.pop(0))
    parsed["modifiers"] = frozenset(modifiers)

    if tokens and tokens[0] in TYPE_KINDS:
        parsed["kind"] = tokens.pop(0)
        parsed["name"] = tokens[0] if tokens else ""
    elif len(tokens) > 1:
        parsed["return_type"] = " ".join(tokens[:-1])
        parsed["name"] = tokens[-1]
    elif tokens:
        # A constructor, or an operator whose name is its target type: no return type to record.
        parsed["name"] = tokens[0]

    return parsed


def simple_member_name(uid: str) -> str:
    """The bare member name from a uid, without namespace, owning type, or parameter list.

    ``IronZip.IronZipArchive.Contains(System.String)`` -> ``Contains``.
    """
    without_params = uid.split("(", 1)[0]
    return without_params.rsplit(".", 1)[-1] if "." in without_params else without_params
