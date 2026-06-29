<!--
N-Mid (class, ctor + 4 props). Frame D (task-gerund-fronted).
public class MailMergeOptions : Object. Verified 2026-06-23:
CaseInsensitiveFieldNames (bool, default true), NullValueReplacement (string, default empty),
RemoveUnusedFields (bool, default true), RemoveUnusedRegions (bool, default true).
Obtained via MailMerge.Options (get-only, verified on MailMerge page). Namespace IronWord.Models.MailMerge, IronWord.dll.
Target: IronWord.Models.MailMerge.MailMergeOptions.html
-->

## Injected overview (Markdown)

Controlling how a mail merge treats fields the data does not cover runs through `MailMergeOptions`. It collects the settings that decide what happens to merge fields with no matching value, what replaces a null, and whether unused fields and table regions stay in the finished document. The defaults match Microsoft Word's behaviour, so an unconfigured merge produces a clean result without any setup.

Reach the settings through the `Options` property of a `MailMerge`, which exposes a `MailMergeOptions` to adjust before running `Execute`. `CaseInsensitiveFieldNames` (default `true`) controls whether field-name lookups ignore case. `NullValueReplacement` (default an empty string) is the text substituted when the data source supplies a null. `RemoveUnusedFields` (default `true`) drops fields whose names never appear in the data, and `RemoveUnusedRegions` (default `true`) removes `TableStart`/`TableEnd` regions for which no rows were supplied. Set these before the merge so the result reflects the chosen handling. The [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) covers replacing field text in a document.

```csharp
mailMerge.Options.NullValueReplacement = "N/A";
mailMerge.Options.RemoveUnusedFields = false;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MailMergeOptions - IronWord C# API Reference`
- v2 (human): `MailMergeOptions: Tune Word Mail Merge in C#`
- v3 (balanced): `MailMergeOptions Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure a Word mail merge in C# with IronWord MailMergeOptions: case-insensitive names, null replacement, and removal of unused fields and regions.`
- v2 (human): `Control unmatched fields and missing values in a C# mail merge with IronWord MailMergeOptions, reached through the MailMerge.Options property.`
- v3 (balanced): `Reference for the IronWord MailMergeOptions class in C#: settings for field-name case, null replacement, and unused field and region removal.`

---

## Structured data

**TechArticle abstract**

> MailMergeOptions configures how an IronWord mail merge handles unmatched fields, missing values, and unused regions in C#. Reached through MailMerge.Options, it exposes CaseInsensitiveFieldNames, NullValueReplacement, RemoveUnusedFields, and RemoveUnusedRegions, with defaults matching Microsoft Word. Set them before calling Execute.

**FAQPage entries**

```json
[
  {
    "question": "Where does MailMergeOptions live in the IronWord API?",
    "answer": "MailMergeOptions is a class in the IronWord.Models.MailMerge namespace, shipped in IronWord.dll, with base type System.Object. Reach an instance through the Options property of a MailMerge and adjust it before calling Execute."
  },
  {
    "question": "How do you keep unused merge fields in an IronWord document?",
    "answer": "Set MailMerge.Options.RemoveUnusedFields to false; unused fields default to being removed. Use NullValueReplacement to substitute text for null data values, and RemoveUnusedRegions to control whether empty TableStart/TableEnd regions are dropped."
  }
]
```
