<!--
N-Lite/enum (IronPPT.Enums, base Enum). Members verified: Deleted, New, NoChange, Updated.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.ElementStatus.html
-->

## Injected overview (Markdown)

`ElementStatus` records the change state of an element as a presentation is edited. `NoChange` means the element is untouched since it was loaded, `New` marks one that was added, `Updated` marks one that was modified, and `Deleted` marks one removed. The library uses the value to track what must be written when the document is saved.

```csharp
var status = ElementStatus.NoChange;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ElementStatus Enum - IronPPT C# API Reference`
- v2 (human): `ElementStatus: Track Element Changes in C#`
- v3 (balanced): `ElementStatus Enum | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Track an element change state in C# with the IronPPT ElementStatus enum: NoChange, New, Updated, and Deleted as a presentation is edited.`
- v2 (human): `See how IronPPT marks edits in C# with the ElementStatus enum: NoChange, New, Updated, or Deleted for each element in a deck.`
- v3 (balanced): `Reference for the IronPPT ElementStatus enum in C#: element change states NoChange, New, Updated, and Deleted during editing.`

---

## Structured data

**TechArticle abstract**

> ElementStatus records the change state of an element as a presentation is edited in IronPPT for C#. NoChange means the element is untouched since loading, New marks one that was added, Updated marks one that was modified, and Deleted marks one removed. The library uses the value to track what must be written on save.
