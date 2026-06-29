<!--
Archetype N-Lite / enum (docfx: "sealed class PaperOrientation : Enum") — IronPrint
Target page: https://ironsoftware.com/csharp/print/object-reference/api/IronPrint.PaperOrientation.html
Members verified against the live docfx page 2026-06-22: Automatic, Landscape, Portrait.
-->

## Injected overview (Markdown)

`PaperOrientation` selects how the page is rotated for a print job and is assigned to `PrintSettings.PaperOrientation`. `Portrait` prints upright for standard documents, `Landscape` prints sideways for wide tables and spreadsheets, and `Automatic` follows the document's own orientation. The [paper orientation guide](https://ironsoftware.com/csharp/print/how-to/set-paper-orientation/) shows the property in a complete print job, alongside the other [print settings](https://ironsoftware.com/csharp/print/how-to/print-settings/).

```csharp
settings.PaperOrientation = PaperOrientation.Landscape;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PaperOrientation Enum - IronPrint C# API`
- v2 (human): `PaperOrientation: Set Page Rotation in C#`
- v3 (balanced): `PaperOrientation Enum | IronPrint C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set page rotation for printing in C# with the IronPrint PaperOrientation enum: choose Portrait, Landscape, or Automatic via PrintSettings.`
- v2 (human): `Choose how pages print in C# with the IronPrint PaperOrientation enum: Portrait, Landscape, or Automatic, applied through PrintSettings.`
- v3 (balanced): `Reference for the IronPrint PaperOrientation enum in C#: Portrait, Landscape, and Automatic page rotation via PrintSettings.PaperOrientation.`

---

## Structured data

**TechArticle abstract**

> Use PaperOrientation in IronPrint to set page rotation for a print job through PrintSettings.PaperOrientation. Portrait prints upright, Landscape prints sideways for wide content, and Automatic follows the document's own orientation.
