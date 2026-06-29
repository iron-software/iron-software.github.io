<!--
N-Full / interface. Frame C. No concrete implementor in api dir; contract returned by WorkSheet.PrintSetup. Members Copies/Draft/FitHeight/FitWidth/FooterMargin/HeaderMargin/HResolution/LeftToRight/NoColor/Notes/PageStart/PaperSize/PrintOrientation/Scale/UsePage/VResolution verified. WorkSheet.PrintSetup cross-ref verified 2026-06-23.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Printing.IPrintSetup.html
-->

## Injected overview (Markdown)

When a spreadsheet needs to print the way it does in Excel, fitted to a page, in the right orientation, and at a chosen scale, `IPrintSetup` carries those settings. A developer uses it to control how a worksheet renders on paper or to a print-ready PDF: paper size, portrait or landscape, page scaling, margins, and the print quality fields that govern resolution and color. It is the contract behind the Page Setup dialog, exposed so that a generated workbook prints correctly without a person opening the file and adjusting it by hand. Each worksheet carries its own print setup, so multi-sheet workbooks can print each tab differently.

A developer reaches an `IPrintSetup` through the worksheet: `WorkSheet.PrintSetup` returns the instance for that sheet. There is no constructor, because the print configuration belongs to the worksheet and is edited in place. Settings written through it are stored with the sheet and applied whenever the workbook is printed or exported, so the usual flow loads or builds a `WorkSheet`, adjusts its `PrintSetup`, and saves.

The most-used members shape the printed page. `PaperSize` and `PrintOrientation` set the sheet and direction, while `Scale` adjusts print size and `FitWidth` and `FitHeight` constrain the content to a number of pages across and down. `HeaderMargin` and `FooterMargin` position the running header and footer, `Copies` and `PageStart` control the print run, and `LeftToRight` sets page ordering. The quality and rendering fields, namely `HResolution`, `VResolution`, `Draft`, `NoColor`, `Notes`, and `UsePage`, tune output for fast proofs or grayscale printing. Set `PaperSize` and `PrintOrientation` first, then fit-to-page if the content overflows.

```csharp
IPrintSetup printSetup = sheet.PrintSetup;
printSetup.PaperSize = PaperSize.A4;
printSetup.FitWidth = 1;
```

The [Excel print setup example](https://ironsoftware.com/csharp/excel/examples/excel-print-setup/) configures a sheet for printing, covering paper size, orientation, and fit-to-page, the [WorkSheet reference](https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.WorkSheet.html) documents the `PrintSetup` property that returns it, and the [PaperSize reference](https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Printing.PaperSize.html) lists every supported sheet size.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IPrintSetup Interface - IronXL C# API Reference`
- v2 (human): `IPrintSetup: Excel Print Settings in C#`
- v3 (balanced): `IPrintSetup Interface | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IPrintSetup is the IronXL contract for Excel print settings in C#: set PaperSize, PrintOrientation, Scale, FitWidth, FitHeight, and margins.`
- v2 (human): `Control how a spreadsheet prints in C# through IronXL's IPrintSetup: paper size, orientation, scaling, fit-to-page, margins, and print quality.`
- v3 (balanced): `Reference for the IronXL IPrintSetup interface in C#: the contract WorkSheet.PrintSetup returns for paper size, orientation, and fit-to-page.`

---

## Structured data

**TechArticle abstract**

> IPrintSetup is the IronXL contract for a worksheet's print settings in C#. WorkSheet.PrintSetup returns it, and PaperSize, PrintOrientation, Scale, FitWidth, and FitHeight shape the printed page. HeaderMargin and FooterMargin position running headers, Copies and PageStart control the run, and HResolution, VResolution, Draft, and NoColor tune output quality. Settings are stored with the sheet and saved with the workbook.

**FAQPage entries**

```json
[
  {
    "question": "Where does IPrintSetup live in the IronXL API?",
    "answer": "IPrintSetup is an interface in the IronXL.Printing namespace, shipped in IronXL.dll. The WorkSheet.PrintSetup property returns the IPrintSetup for that worksheet."
  },
  {
    "question": "What returns an IPrintSetup in IronXL?",
    "answer": "WorkSheet.PrintSetup returns the IPrintSetup for a given worksheet. There is no public constructor; the print configuration belongs to the sheet, so it is edited in place and saved with the workbook."
  },
  {
    "question": "How do you set the paper size and fit an Excel sheet to one page in C#?",
    "answer": "Get WorkSheet.PrintSetup, set PaperSize and PrintOrientation, then set FitWidth and FitHeight to constrain the content to a number of pages across and down. Scale adjusts the print size directly."
  }
]
```
