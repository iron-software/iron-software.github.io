<!--
N-Lite/enum. Members verified 2026-06-23: Deleted, New, NoChange, Updated. Base Enum.
Target: IronWord.Models.Enums.ElementStatus.html
-->

## Injected overview (Markdown)

Track how a document element changed during editing with `ElementStatus`. `NoChange` is the steady state for untouched content, `New` marks an element added in the current pass, `Updated` flags one whose content was modified, and `Deleted` records an element removed from the document. Read these when reconciling edits or building a change summary. The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the element model these values describe.

```csharp
var status = ElementStatus.Updated;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ElementStatus Enum - IronWord C# API Reference`
- v2 (human): `ElementStatus: Track Edited Elements in C#`
- v3 (balanced): `ElementStatus Enum | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Track element edits in C# with the IronWord ElementStatus enum: NoChange, New, Updated, or Deleted state for a document element.`
- v2 (human): `See how a Word element changed in C# with the IronWord ElementStatus enum: NoChange, New, Updated, or Deleted.`
- v3 (balanced): `Reference for the IronWord ElementStatus enum in C#: NoChange is the steady state, with New, Updated, and Deleted edit markers.`

---

## Structured data

**TechArticle abstract**

> Track how a document element changed with IronWord ElementStatus in C#. NoChange is the steady state for untouched content, New marks an added element, Updated flags a modified one, and Deleted records a removal.
