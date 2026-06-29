<!--
Archetype N-Mid, value type (struct; docfx renders it as "sealed class Margins : ValueType", S7) — IronPrint
Target page: https://ironsoftware.com/csharp/print/object-reference/api/IronPrint.Margins.html
Opener frame: E (feature-fronted). API verified against the live docfx page 2026-06-22.
Source note: the set-paper-margins example lists the order "top, right, bottom, left";
the docfx constructor is Margins(int left, int top, int right, int bottom). The reference
page wins on signatures (spec §4.4), so the constructor order is used here.
-->

## Injected overview (Markdown)

The blank space around printed content on each edge of the sheet lives in a `Margins` value, measured in millimeters. Set wider margins to meet binding or letterhead requirements, or tighter ones to fit more on the page. A `Margins` value is assigned to `PrintSettings.PaperMargins` and applied to the print driver before the page renders, so the output matches the chosen spacing regardless of the printer's own defaults.

Build one with the constructor that fits the job. `Margins(int uniformMargin)` applies an equal margin to all four sides. `Margins(int horizontal, int vertical)` sets matched left and right, top and bottom pairs. `Margins(int left, int top, int right, int bottom)` gives full control of each edge. The static `Margins.Zero` returns a borderless layout with every edge at zero.

After construction, the `Left`, `Top`, `Right`, and `Bottom` properties expose each edge for reading or adjustment. Because `PaperMargins` is a `Nullable<Margins>` on `PrintSettings`, leaving it null keeps the printer's own default margins; assign a `Margins` value only when a document needs specific spacing. The [set paper margins guide](https://ironsoftware.com/csharp/print/how-to/set-paper-margins/) shows the property in a complete print job.

```csharp
using IronPrint;

PrintSettings settings = new PrintSettings
{
    PaperMargins = new Margins(20, 15, 20, 15)
};
```

The [print settings guide](https://ironsoftware.com/csharp/print/how-to/print-settings/) covers the other options margins combine with, and the [paper size guide](https://ironsoftware.com/csharp/print/how-to/set-paper-size/) pairs sheet dimensions with margin spacing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Margins Struct - IronPrint C# API Reference`
- v2 (human): `Margins: Set Print Margins in C# with IronPrint`
- v3 (balanced): `Margins | IronPrint C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set print margins in C# with the IronPrint Margins value: top, right, bottom, and left in millimeters, assigned to PrintSettings.PaperMargins.`
- v2 (human): `Control print margins in C# with the IronPrint Margins value: set equal, paired, or per-edge spacing in millimeters, with code examples.`
- v3 (balanced): `Reference for the IronPrint Margins value in C#: set per-edge print margins in millimeters via PrintSettings.PaperMargins, with code examples.`

---

## Structured data

**TechArticle abstract**

> Setting per-edge print margins in C# runs through the IronPrint Margins value, measured in millimeters. Construct it for an equal margin on all sides, matched horizontal and vertical pairs, or full per-edge control, or use the static Margins.Zero for a borderless layout. The Left, Top, Right, and Bottom properties read each edge. Assign a Margins value to PrintSettings.PaperMargins; leaving that nullable property null keeps the printer's default margins.

**FAQPage entries**

```json
[
  {
    "question": "Where does Margins live in the IronPrint API?",
    "answer": "Margins is a value type in the IronPrint namespace, shipped in IronPrint.dll. It is assigned to the PrintSettings.PaperMargins property, which is a Nullable<Margins>, to set the margins for a print job."
  },
  {
    "question": "What unit does IronPrint use for print margins?",
    "answer": "Margins are measured in millimeters on all four edges. The values are passed to the print driver before rendering, so the output matches them regardless of the printer's default margins. Use new Margins(int uniformMargin) for an equal margin on every side, or Margins.Zero for a borderless layout."
  }
]
```
