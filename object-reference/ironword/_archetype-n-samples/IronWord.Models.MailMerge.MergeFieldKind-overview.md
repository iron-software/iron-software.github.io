<!--
N-Lite/enum. Type-safe enum (public sealed class MergeFieldKind : Enum).
Members verified 2026-06-23: Value, TableStart, TableEnd, NextRecord (value__ internal, omitted).
Consumed by MergeField.Kind. Namespace IronWord.Models.MailMerge, IronWord.dll.
Target: IronWord.Models.MailMerge.MergeFieldKind.html
-->

## Injected overview (Markdown)

`MergeFieldKind` identifies the role a merge field plays in a Word mail merge template, reported by `MergeField.Kind` when IronWord discovers a field. `Value` is the ordinary field whose text is replaced with a data value, the common case. `TableStart` and `TableEnd` mark the beginning and end of a repeating region (`TableStart:RegionName`) driven by a data table. `NextRecord` is a NEXT field that advances to the following record within the same template body. The [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) covers replacing field text in a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MergeFieldKind Enum - IronWord C# API Reference`
- v2 (human): `MergeFieldKind: Word Merge Field Roles in C#`
- v3 (balanced): `MergeFieldKind Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Classify Word merge fields in C# with the IronWord MergeFieldKind enum: Value, TableStart, TableEnd, and NextRecord, reported by MergeField.Kind.`
- v2 (human): `Tell IronWord merge field roles apart in C# with MergeFieldKind: a Value field, a TableStart or TableEnd region marker, or a NextRecord field.`
- v3 (balanced): `Reference for the IronWord MergeFieldKind enum in C#: Value, TableStart, TableEnd, and NextRecord roles for mail merge fields.`

---

## Structured data

**TechArticle abstract**

> MergeFieldKind identifies the role a merge field plays in an IronWord mail merge template for C#, reported by MergeField.Kind. Value is the ordinary replaceable field, TableStart and TableEnd mark a repeating region driven by a data table, and NextRecord advances to the next record within the template body.
