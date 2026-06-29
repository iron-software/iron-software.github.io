<!--
N-Lite/enum. Members verified 2026-06-23: None, ReadOnly, FormFilling, CommentsOnly, TrackChanges.
Consumer verified: WordDocumentProtectionSettings.Type.
Target: IronWord.Models.Enums.ProtectionType.html — base type Enum.
-->

## Injected overview (Markdown)

Decide how much editing a protected document permits by setting `ProtectionType` on `WordDocumentProtectionSettings.Type`. `None` leaves the document fully editable, `ReadOnly` blocks all changes, `FormFilling` allows entries in form fields while locking the rest of the content, `CommentsOnly` permits comments but no edits, and `TrackChanges` forces every edit to be recorded as a tracked revision.

```csharp
var settings = new WordDocumentProtectionSettings { Type = ProtectionType.ReadOnly };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ProtectionType Enum - IronWord C# API Reference`
- v2 (human): `ProtectionType: Restrict Word Editing in C#`
- v3 (balanced): `ProtectionType Enum | IronWord C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set document protection in C# with the IronWord ProtectionType enum: None, ReadOnly, FormFilling, CommentsOnly, or TrackChanges, via WordDocumentProtectionSettings.`
- v2 (human): `Choose how much editing a Word document allows in C# with ProtectionType: ReadOnly, FormFilling, CommentsOnly, or TrackChanges.`
- v3 (balanced): `Reference for the IronWord ProtectionType enum in C#: None, ReadOnly, FormFilling, CommentsOnly, and TrackChanges restrictions.`

---

## Structured data

**TechArticle abstract**

> Decide how much editing a protected document permits with ProtectionType in IronWord, set on WordDocumentProtectionSettings.Type. None leaves the document editable, ReadOnly blocks all changes, FormFilling allows only form entries, CommentsOnly permits comments, and TrackChanges records every edit as a revision.
