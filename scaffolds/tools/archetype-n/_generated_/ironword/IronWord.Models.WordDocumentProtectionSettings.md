<!--
N-Full (WordDocumentProtectionSettings, 5 props, 2 ctors). Frame F (imperative). IronWord.
Members verified 2026-06-23: AllowedStyles(List<string>, get-only), Password(string), RestrictFormatting(bool), Type(ProtectionType), UnprotectedRegions(List<UnprotectedRegion>, get-only). Ctors () and (ProtectionType, string).
Cross-class verified: UnprotectedRegion is in IronWord.Models; Type is ProtectionType enum.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.WordDocumentProtectionSettings.html
-->

## Injected overview (Markdown)

Use `WordDocumentProtectionSettings` to lock down a Word document so readers can open it but cannot freely change it. It gathers the protection mode, an optional password, and the formatting and region rules that decide what editing the document still permits, giving you one object to describe how a file is protected.

You construct the settings and apply them when you save a protected document. The simplest path is the constructor that takes a `ProtectionType` and a password, which sets the protection level and the unlock secret in one step; the parameterless constructor lets you fill the properties individually instead. Either way the configured object describes the restrictions the saved file enforces.

The `Type` property is a `ProtectionType` that names the protection mode, and `Password` holds the secret a reader needs to lift the restriction. `RestrictFormatting` toggles whether formatting changes are blocked, while `AllowedStyles` is a read-only `List<string>` of the style names that remain editable when formatting is restricted, so you can permit a known set of styles and freeze the rest. `UnprotectedRegions` is a read-only `List<UnprotectedRegion>` marking the spans that stay editable inside an otherwise locked document, each region pinned by a start and end `ContentElement`. Add the styles and regions you want to leave open, set the type and password, and the saved document applies exactly those exceptions to the protection.

```csharp
using IronWord.Models;

var protection = new WordDocumentProtectionSettings(
    ProtectionType.ReadOnly, "secret");
protection.RestrictFormatting = true;
```

The [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) covers changing document content, the [edit text example](https://ironsoftware.com/csharp/word/examples/edit-text/) shows an edit in code, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows the element model that unprotected regions point into.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WordDocumentProtectionSettings - IronWord C# API`
- v2 (human): `Protect a Word Document in C# | IronWord`
- v3 (balanced): `WordDocumentProtectionSettings | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Protect Word documents in C# with the IronWord WordDocumentProtectionSettings class: set ProtectionType, Password, RestrictFormatting, and unprotected regions.`
- v2 (human): `Lock a Word file in C# with the IronWord WordDocumentProtectionSettings class: choose the protection type, set a password, and allow specific styles or regions.`
- v3 (balanced): `Reference for the IronWord WordDocumentProtectionSettings class in C#: set protection type, password, formatting restriction, allowed styles, and open regions.`

---

## Structured data

**TechArticle abstract**

> Protecting a Word document in C# goes through the IronWord WordDocumentProtectionSettings class. Type, a ProtectionType, sets the mode and Password holds the unlock secret, while RestrictFormatting blocks formatting changes. AllowedStyles lists the styles that stay editable and UnprotectedRegions lists the spans left open. Construct it with a ProtectionType and password, then apply it when saving the protected file.

**FAQPage entries**

```json
[
  {
    "question": "Where does WordDocumentProtectionSettings live in the IronWord API?",
    "answer": "WordDocumentProtectionSettings is a class in the IronWord.Models namespace, shipped in IronWord.dll, with Object as its base type. Construct it with a ProtectionType and password, then apply it when saving to enforce the protection."
  },
  {
    "question": "How do you password-protect a Word document in C#?",
    "answer": "Create a WordDocumentProtectionSettings with a ProtectionType and a password through its constructor, set RestrictFormatting if formatting should be locked, and apply the settings when you save. The saved file then requires the password to remove the restriction."
  },
  {
    "question": "How do you leave part of a protected document editable?",
    "answer": "Add UnprotectedRegion entries to the UnprotectedRegions list, each pinned by a start and end ContentElement, and list editable style names in AllowedStyles. Those regions and styles stay open while the rest of the document is restricted."
  }
]
```
