<!--
N-Full / interface. Frame C lead, Frame B abstract. Implementors: DocUnit, FontSize. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IDocUnit.html
-->

## Injected overview (Markdown)

When a position, size, or offset in a presentation has to be expressed in more than one measurement system, `IDocUnit` is the contract that holds the value and exposes it across units. The same underlying measurement is readable as `Inch`, `CM`, `MM`, `Point`, `Twips`, `EMU` (English Metric Units, PowerPoint's native integer unit), or `Percentage`, so a developer reads or writes whichever unit the surrounding code already uses without converting by hand. Each numeric property is nullable, so an unset unit stays absent rather than defaulting to zero.

The concrete implementors in IronPPT are `DocUnit`, the general-purpose measurement object used for element positions and dimensions, and `FontSize`, which specializes the contract for text sizing. Because both satisfy `IDocUnit`, code that lays out shapes and code that sizes runs can share the same unit-handling logic. A developer typically receives one of these from a layout or styling property rather than constructing it, then assigns the unit that matches the value at hand.

Working with the contract is a matter of setting one unit and reading another: assign `Inch` and read `EMU`, or set `Point` and read `MM`, letting the implementation handle the conversion. `ToString` returns a readable form of the held measurement, which is convenient for logging or diagnostics while positioning elements. Keep the nullable nature in mind, a property that was never set reads back as null rather than a converted zero.

```csharp
IDocUnit width = new DocUnit();
width.Inch = 2.5;
long? emu = width.EMU;
double? mm = width.MM;
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) positions and sizes elements on a slide, the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) sets dimensions where these units apply, and the [add image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) places content using measured offsets.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IDocUnit Interface - IronPPT C# API`
- v2 (human): `IDocUnit: Multi-Unit Measurements in C#`
- v3 (balanced): `IDocUnit Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IDocUnit is IronPPT's measurement contract in C#: read or write a value as Inch, CM, MM, Point, Twips, or EMU. Implemented by DocUnit and FontSize.`
- v2 (human): `Express presentation measurements in any unit in C# through IronPPT's IDocUnit contract: set Inch and read EMU, implemented by DocUnit and FontSize.`
- v3 (balanced): `Reference for the IronPPT IDocUnit interface in C#: the multi-unit measurement contract implemented by DocUnit and FontSize.`

---

## Structured data

**TechArticle abstract**

> IDocUnit is the measurement contract IronPPT uses in C# to hold a position or size and expose it across units. The same value reads as Inch, CM, MM, Point, Twips, EMU, or Percentage, each nullable so unset units stay absent. The concrete implementors are DocUnit, used for element positions and sizes, and FontSize, which specializes the contract for text.

**FAQPage entries**

```json
[
  {
    "question": "Where does IDocUnit live in the IronPPT API?",
    "answer": "IDocUnit is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and is implemented by the DocUnit and FontSize classes in IronPPT.Models."
  },
  {
    "question": "What implements IDocUnit in IronPPT?",
    "answer": "DocUnit and FontSize implement IDocUnit. DocUnit is the general measurement object for element positions and dimensions, while FontSize specializes the contract for text sizing and adds a HalfPoint property."
  },
  {
    "question": "How do you convert between units with IDocUnit?",
    "answer": "Set one unit and read another: assign Inch and read EMU, or set Point and read MM. The implementation performs the conversion. Each unit property is nullable, so a unit that was never set reads back as null rather than a converted zero."
  }
]
```
