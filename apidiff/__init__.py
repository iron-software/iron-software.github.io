"""apidiff — API surface diffing for the object-reference archive.

Reads two built version directories under ``object-reference/<code>/`` and reports what changed in
the public API surface between them, classified as breaking, additive, or cosmetic.

Two committed sources are combined:

* ``xrefmap.yml`` supplies member *identity* (uid + kind + parameter types) for the whole product.
* ``api/<Type>.html`` supplies the *signature* detail xrefmap lacks — modifiers, return types,
  base types, default parameter values, and property accessors.

Nothing is downloaded; the archive is the only input. See ``docs/api-surface-diff-plan.md``.
"""
