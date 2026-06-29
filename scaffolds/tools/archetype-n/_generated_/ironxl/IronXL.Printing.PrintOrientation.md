<!--
N-Lite/enum. Members verified 2026-06-23: Default, Portrait, Landscape.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Printing.PrintOrientation.html
-->

## Injected overview (Markdown)

`PrintOrientation` sets whether a worksheet prints upright or sideways, assigned to `IPrintSetup.PrintOrientation`. `Portrait` is the standard tall layout for most reports, `Landscape` turns the page wide to fit broad tables and many columns, and `Default` leaves the orientation to the printer or template. The [Excel print setup example](https://ironsoftware.com/csharp/excel/examples/excel-print-setup/) configures orientation alongside the print area and paper size.

```csharp
worksheet.PrintSetup.PrintOrientation = PrintOrientation.Landscape;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PrintOrientation Enum - IronXL C# API`
- v2 (human): `PrintOrientation: Portrait or Landscape in C#`
- v3 (balanced): `PrintOrientation Enum | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the print orientation in C# with the IronXL PrintOrientation enum: Portrait, Landscape, or Default, on IPrintSetup.PrintOrientation.`
- v2 (human): `Choose how an Excel sheet prints in C# with the IronXL PrintOrientation enum: tall Portrait, wide Landscape, or printer Default.`
- v3 (balanced): `Reference for the IronXL PrintOrientation enum in C#: Portrait, Landscape, and Default page directions via IPrintSetup.`

---

## Structured data

**TechArticle abstract**

> Use PrintOrientation in IronXL to set whether a worksheet prints upright or sideways, assigned to IPrintSetup.PrintOrientation. Portrait is the standard tall layout for most reports, Landscape turns the page wide to fit broad tables, and Default leaves the orientation to the printer or template.
