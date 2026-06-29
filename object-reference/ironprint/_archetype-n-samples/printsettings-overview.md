<!--
Archetype N-Full, class — IronPrint
Target page: https://ironsoftware.com/csharp/print/object-reference/api/IronPrint.PrintSettings.html
Opener frame: B (identity-by-role). API verified against the live docfx page 2026-06-22.
Source note: the print-settings example states Flatten "default false ... will be flattened",
which is self-contradictory (S7); the default is not asserted here to avoid propagating it.
-->

## Injected overview (Markdown)

`PrintSettings` is the configuration object you hand to a print call to control how a document reaches paper. It carries the printer choice, copy count, paper size and orientation, margins, and output quality, and it is accepted as the optional argument to every `Printer` method. One settings object can be reused across several jobs or adjusted per call. The defaults suit most documents, so only the properties that differ from a standard print need to be set.

Create one with `new PrintSettings()` for an empty configuration, or read the static `PrintSettings.DefaultSettings` for a populated baseline to adjust. The properties fall into three groups. Paper setup covers `PaperSize`, `PaperOrientation`, and `PaperMargins`, the last a `Nullable<Margins>` that falls back to the printer's own margins when left null. Output quality covers `Dpi`, `Grayscale`, and `Flatten`, where `Flatten` renders form fields and images before printing. Job control covers `NumberOfCopies`, `PrinterName`, and `Tray`.

Several values are advisory rather than guaranteed. `NumberOfCopies` can be capped by the platform, so a multi-copy request may yield a single copy. `PrinterName` and `Tray` are ignored when the user selects a device in a print dialog, and `Tray` applies only on Windows. To target a printer reliably, read [the printer names](https://ironsoftware.com/csharp/print/how-to/retrieve-printer-names/) first and assign one to `PrinterName` before calling `Printer.Print`.

```csharp
using IronPrint;

PrintSettings settings = new PrintSettings
{
    PaperSize = PaperSize.A4,
    PaperOrientation = PaperOrientation.Landscape,
    NumberOfCopies = 3
};
Printer.Print("report.pdf", settings);
```

The [print settings guide](https://ironsoftware.com/csharp/print/how-to/print-settings/) walks through every option, the [paper size guide](https://ironsoftware.com/csharp/print/how-to/set-paper-size/) and [paper orientation guide](https://ironsoftware.com/csharp/print/how-to/set-paper-orientation/) cover layout, and the [grayscale printing guide](https://ironsoftware.com/csharp/print/how-to/grayscale-printing/) covers monochrome output.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PrintSettings Class - IronPrint C# API`
- v2 (human): `PrintSettings: Configure C# Printing in IronPrint`
- v3 (balanced): `PrintSettings Class | IronPrint C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure printing in C# with the IronPrint PrintSettings class: paper size, orientation, margins, copies, DPI, grayscale, and printer name.`
- v2 (human): `Control how documents print in C# with the IronPrint PrintSettings class: set paper, copies, quality, and the target printer, with code examples.`
- v3 (balanced): `Reference for the IronPrint PrintSettings class in C#: set paper size, orientation, margins, copies, DPI, and printer name, with code examples.`

---

## Structured data

**TechArticle abstract**

> Configuring how a document prints in C# runs through the IronPrint PrintSettings class. It groups paper setup (PaperSize, PaperOrientation, PaperMargins), output quality (Dpi, Grayscale, Flatten), and job control (NumberOfCopies, PrinterName, Tray). Build one with new PrintSettings or start from the static DefaultSettings, then pass it to a Printer method. Some values are advisory: NumberOfCopies may be capped, and PrinterName and Tray are ignored when a print dialog is used.

**FAQPage entries**

```json
[
  {
    "question": "Where does PrintSettings live in the IronPrint API?",
    "answer": "PrintSettings is a class in the IronPrint namespace, shipped in IronPrint.dll. Construct it with new PrintSettings(), or read the static PrintSettings.DefaultSettings for a baseline, then pass it to a Printer print or dialog method."
  },
  {
    "question": "Why does NumberOfCopies sometimes print only one copy?",
    "answer": "NumberOfCopies is advisory. On some platforms the print subsystem cannot reproduce multiple copies from a single job, so the value is ignored and one copy is printed. Loop the print call when an exact copy count is required."
  },
  {
    "question": "Why is PrinterName ignored when printing in C#?",
    "answer": "PrinterName and Tray are ignored when the user chooses a device in a print dialog, since the dialog selection takes precedence. Set PrinterName and call Printer.Print directly for silent printing to a specific device. Tray applies only on Windows."
  }
]
```
