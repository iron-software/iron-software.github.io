<!--
Archetype N-Lite / enum (docfx: "sealed class PaperSize : Enum") — IronPrint
Target page: https://ironsoftware.com/csharp/print/object-reference/api/IronPrint.PaperSize.html
Members verified against the live docfx page 2026-06-22:
A0, A1, A2, A3, A4, A5, B4, B5, Executive, Legal, Letter, PrinterDefault.
-->

## Injected overview (Markdown)

`PaperSize` chooses the sheet dimensions for a print job and is assigned to `PrintSettings.PaperSize`. Common values are `A4` and `Letter` for everyday documents and `Legal` for long forms, with `A3` and the larger `A0`, `A1`, and `A2` for posters and engineering drawings, plus `A5`, `B4`, `B5`, and `Executive` for smaller or specialty stock. `PrinterDefault` keeps whatever size the device is already set to. The [paper size guide](https://ironsoftware.com/csharp/print/how-to/set-paper-size/) shows the property in a print job, alongside the other [print settings](https://ironsoftware.com/csharp/print/how-to/print-settings/).

```csharp
settings.PaperSize = PaperSize.A4;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PaperSize Enum - IronPrint C# API Reference`
- v2 (human): `PaperSize: Set the Print Paper Size in C#`
- v3 (balanced): `PaperSize Enum | IronPrint C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the paper size for printing in C# with the IronPrint PaperSize enum: A0 to A5, B4, B5, Letter, Legal, Executive, or PrinterDefault.`
- v2 (human): `Set the sheet size for printing in C# with the IronPrint PaperSize enum: standard A and B sizes, Letter, Legal, Executive, or PrinterDefault.`
- v3 (balanced): `Reference for the IronPrint PaperSize enum in C#: A0 to A5, B4, B5, Letter, Legal, and Executive sizes via PrintSettings.PaperSize.`

---

## Structured data

**TechArticle abstract**

> Use PaperSize in IronPrint to pick the sheet size for printing through PrintSettings.PaperSize. It offers standard sizes including A0 to A5, B4, B5, Letter, Legal, and Executive, with PrinterDefault to keep the device's own setting.
