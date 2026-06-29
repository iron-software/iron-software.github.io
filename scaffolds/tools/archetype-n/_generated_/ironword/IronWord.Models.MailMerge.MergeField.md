<!--
N-Mid (class, ctor + 4 props + ToString). Frame B (identity-by-role).
public class MergeField : Object. Verified 2026-06-23:
ctor (string name, string instruction, MergeFieldKind kind); Name, Instruction, Kind, RegionName (get-only); ToString().
Returned by MailMerge.GetFields() -> IReadOnlyList<MergeField> (verified on MailMerge page). Namespace IronWord.Models.MailMerge, IronWord.dll.
Target: IronWord.Models.MailMerge.MergeField.html
-->

## Injected overview (Markdown)

A `MergeField` is the record IronWord hands back for each merge field it discovers in a Word document, so a developer can inspect a template's fields before supplying data. Each one describes a single placeholder: the field name to match against a data source, the raw field instruction stored in the document, and what role the field plays.

Get the fields from a `MailMerge` by calling `GetFields`, which returns an `IReadOnlyList<MergeField>`. `Name` is the field name parsed from the instruction, the key to match against a column or dictionary entry. `Instruction` is the full field instruction text as stored (for example a `MERGEFIELD` directive). `Kind` is a `MergeFieldKind` that tells a regular value field apart from a region marker or a NEXT-record field, and `RegionName` carries the region name when the field begins or ends a repeating region, otherwise an empty string. `ToString` gives a readable summary of the field. Reading these is how you confirm a template's fields line up with the data before running the merge. The [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) covers replacing field text, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the document model these fields sit in.

```csharp
foreach (MergeField field in document.MailMerge.GetFields())
    Console.WriteLine(field.Name);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MergeField Class - IronWord C# API Reference`
- v2 (human): `MergeField: Inspect Word Merge Fields in C#`
- v3 (balanced): `MergeField Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Inspect discovered Word merge fields in C# with the IronWord MergeField class: Name, Instruction, Kind, and RegionName, returned by GetFields.`
- v2 (human): `Read the merge fields in a Word template with C# using IronWord MergeField: get the name, instruction, kind, and region for each discovered field.`
- v3 (balanced): `Reference for the IronWord MergeField class in C#: a discovered merge field's Name, Instruction, Kind, and RegionName from MailMerge.GetFields.`

---

## Structured data

**TechArticle abstract**

> MergeField is the record IronWord returns for each merge field discovered in a Word document in C#, retrieved through MailMerge.GetFields as an IReadOnlyList. It exposes Name, the full field Instruction, a MergeFieldKind, and RegionName for region markers, letting a developer confirm a template's fields before supplying merge data.

**FAQPage entries**

```json
[
  {
    "question": "Where does MergeField live in the IronWord API?",
    "answer": "MergeField is a class in the IronWord.Models.MailMerge namespace, shipped in IronWord.dll, with base type System.Object. MailMerge.GetFields returns an IReadOnlyList of MergeField, one per discovered field in the document."
  },
  {
    "question": "How do you list the merge fields in a Word document with C#?",
    "answer": "Call GetFields on the document's MailMerge to get an IReadOnlyList of MergeField, then read each field's Name, Instruction, Kind, and RegionName. Use GetFieldNames instead if only the names are needed."
  }
]
```
