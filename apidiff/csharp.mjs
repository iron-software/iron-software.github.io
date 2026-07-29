/**
 * csharp.mjs — a deliberately small C# declaration reader (Node port of csharp.py).
 *
 * This is not a C# parser. It decomposes the single-line declarations DocFX renders into just the
 * parts the classifier compares — modifiers, type kind, base list, return type, parameters, and
 * property accessors — and is tolerant of anything it does not recognise, because an unparsed
 * fragment simply falls through to a raw string comparison.
 */

/**
 * Keywords that may precede the return type. `event`, `operator`, `implicit`, and `explicit` are
 * included so the tokens that follow them line up with the ordinary method/field shape.
 */
export const MODIFIERS = new Set([
  "public", "protected", "internal", "private", "static", "virtual", "abstract", "sealed",
  "override", "readonly", "const", "extern", "unsafe", "async", "new", "partial", "volatile",
  "event", "implicit", "explicit", "operator", "fixed", "delegate",
]);

/** Declaration keywords that mark a type rather than a member. */
export const TYPE_KINDS = new Set(["class", "interface", "enum", "struct", "record"]);

const OPENERS = "<([";
const CLOSERS = ">)]";

/**
 * Split on `separator` only where generic/parameter/array brackets are balanced, so
 * `Dictionary<string, int>` stays in one piece when splitting a parameter list on commas.
 */
export function splitTopLevel(text, separator) {
  const parts = [];
  let depth = 0;
  let current = "";
  for (const character of text) {
    if (OPENERS.includes(character)) depth += 1;
    // Clamped so a `>` from an operator declaration cannot drive the depth negative.
    else if (CLOSERS.includes(character)) depth = Math.max(0, depth - 1);

    if (character === separator && depth === 0) {
      parts.push(current);
      current = "";
    } else {
      current += character;
    }
  }
  parts.push(current);
  return parts.map((part) => part.trim());
}

/** Return `[start, end, inner]` for each balanced parenthesised group at depth zero. */
function topLevelParenGroups(text) {
  const groups = [];
  let depth = 0;
  let start = -1;
  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    if (character === "(") {
      if (depth === 0) start = index;
      depth += 1;
    } else if (character === ")" && depth > 0) {
      depth -= 1;
      if (depth === 0 && start >= 0) groups.push([start, index, text.slice(start + 1, index)]);
    }
  }
  return groups;
}

/** Split one parameter into its type, name, and default value. */
export function parseParameter(text) {
  const equals = text.indexOf("=");
  const body = equals >= 0 ? text.slice(0, equals) : text;
  const defaultValue = equals >= 0 ? text.slice(equals + 1).trim() : null;
  const tokens = splitTopLevel(body.trim(), " ").filter(Boolean);
  return {
    type: tokens.length > 1 ? tokens.slice(0, -1).join(" ") : "",
    name: tokens.length ? tokens[tokens.length - 1] : "",
    default: defaultValue,
    raw: text.trim(),
  };
}

/**
 * Decompose a rendered C# declaration.
 *
 * @returns {{modifiers:Set<string>, kind:string, bases:string[], return_type:string, name:string,
 *   parameters:Array|null, accessors:Set<string>|null, raw:string}}
 */
export function parseDeclaration(declaration) {
  const parsed = {
    modifiers: new Set(), kind: "", bases: [], return_type: "",
    name: "", parameters: null, accessors: null, raw: declaration,
  };
  if (!declaration) return parsed;

  let head = declaration;

  // 1. Property accessors, e.g. "{ get; protected set; }" at the end of the declaration.
  if (head.trimEnd().endsWith("}") && head.includes("{")) {
    const brace = head.lastIndexOf("{");
    const inner = head.slice(brace + 1, head.lastIndexOf("}"));
    const accessors = new Set();
    for (const clause of inner.split(";")) {
      const words = clause.split(/\s+/).filter(Boolean);
      const last = words[words.length - 1];
      if (last === "get" || last === "set" || last === "init") accessors.add(last);
    }
    parsed.accessors = accessors;
    head = head.slice(0, brace).trim();
  }

  // 2. Parameter list — the last top-level parenthesised group, so a tuple return type or a
  //    parenthesised default value inside the list is not mistaken for it.
  const groups = topLevelParenGroups(head);
  if (groups.length) {
    const [start, end, inner] = groups[groups.length - 1];
    parsed.parameters = inner.trim()
      ? splitTopLevel(inner, ",").filter(Boolean).map(parseParameter)
      : [];
    head = (head.slice(0, start) + head.slice(end + 1)).trim();
  }

  // 3. Base type / interface list, e.g. ": IronBaseArchive, IDisposable".
  const headParts = splitTopLevel(head, ":");
  if (headParts.length > 1) {
    head = headParts[0].trim();
    parsed.bases = splitTopLevel(headParts[headParts.length - 1], ",").filter(Boolean);
  }

  // 4. Leading modifiers, then either a type keyword or a return type plus name.
  const tokens = splitTopLevel(head, " ").filter(Boolean);
  while (tokens.length && MODIFIERS.has(tokens[0])) parsed.modifiers.add(tokens.shift());

  if (tokens.length && TYPE_KINDS.has(tokens[0])) {
    parsed.kind = tokens.shift();
    parsed.name = tokens.length ? tokens[0] : "";
  } else if (tokens.length > 1) {
    parsed.return_type = tokens.slice(0, -1).join(" ");
    parsed.name = tokens[tokens.length - 1];
  } else if (tokens.length) {
    // A constructor, or an operator whose name is its target type: no return type to record.
    parsed.name = tokens[0];
  }

  return parsed;
}

/**
 * The bare member name from a uid, without namespace, owning type, or parameter list.
 * `IronZip.IronZipArchive.Contains(System.String)` -> `Contains`.
 */
export function simpleMemberName(uid) {
  const withoutParams = uid.split("(", 1)[0];
  return withoutParams.includes(".") ? withoutParams.slice(withoutParams.lastIndexOf(".") + 1) : withoutParams;
}
