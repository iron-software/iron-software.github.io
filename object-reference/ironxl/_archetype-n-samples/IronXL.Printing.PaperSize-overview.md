<!--
N-Lite/enum. Salient members named (large enum, 37 members): A4, Letter, Legal, A3, A5, Tabloid, EnvelopeDL, PrinterDefault. Full list verified 2026-06-23 in target HTML.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Printing.PaperSize.html
-->

## Injected overview (Markdown)

`PaperSize` sets the sheet size a worksheet uses when printed or exported, assigned to `IPrintSetup.PaperSize`. The common choices are `A4` and `Letter` for everyday documents, `Legal` for longer pages, `A3` and `Tabloid` for large layouts, and `A5` for compact output. Envelope sizes such as `EnvelopeDL` and many regional variants are also available, and `PrinterDefault` defers to the printer's own setting. The [Excel print setup example](https://ironsoftware.com/csharp/excel/examples/excel-print-setup/) configures the print area and page.

```csharp
worksheet.PrintSetup.PaperSize = PaperSize.A4;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PaperSize Enum - IronXL C# API Reference`
- v2 (human): `PaperSize: Set Excel Print Size in C#`
- v3 (balanced): `PaperSize Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the print sheet size in C# with the IronXL PaperSize enum: A4, Letter, Legal, A3, Tabloid, and more, on IPrintSetup.PaperSize.`
- v2 (human): `Choose the Excel print paper in C# with the IronXL PaperSize enum: A4 and Letter for everyday pages or Legal and Tabloid for larger ones.`
- v3 (balanced): `Reference for the IronXL PaperSize enum in C#: A4, Letter, Legal, A3, and many regional sizes set via IPrintSetup.PaperSize.`

---

## Structured data

**TechArticle abstract**

> Use PaperSize in IronXL to set the sheet size a worksheet uses when printed or exported, assigned to IPrintSetup.PaperSize. Common choices are A4 and Letter for everyday documents, Legal for longer pages, and A3 and Tabloid for large layouts, while PrinterDefault defers to the printer's own setting.
