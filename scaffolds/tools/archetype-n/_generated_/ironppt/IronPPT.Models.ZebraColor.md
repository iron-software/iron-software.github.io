<!--
N-Mid class (2 props + 2 ctors). Frame C (when-fronted). IronPPT. Base Object.
Members verified 2026-06-23 against IronPPT.Models.ZebraColor.html:
ZebraColor(Color, Color), ZebraColor(string, string), Color1 (Color), Color2 (Color).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.ZebraColor.html
-->

## Injected overview (Markdown)

When a table or repeating element should alternate between two banding colors, `ZebraColor` pairs them. The object holds the two colors that alternate row by row, the striped pattern that makes a long table easier to read, so a developer supplies the pair once rather than coloring each band by hand.

Build a `ZebraColor` at the point the alternating fill is needed and assign it where banding is expected. Both colors are set together through the constructor: one overload takes two `Color` objects, the other takes two hex or named color strings, so the pair can come from existing `Color` values or straight from string literals.

`Color1` and `Color2` expose the two banding colors and stay editable after construction, so an established pattern can be retuned without rebuilding it. Order matters: `Color1` is the first band and `Color2` the second, and they then repeat in sequence. Choose colors with enough contrast that the banding reads at a glance but not so much that it competes with the content.

```csharp
var zebra = new ZebraColor("#FFFFFF", "#EEEEEE");
```

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) covers building slide content, and the [Color reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Color.html) details the color type each band uses.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ZebraColor Class - IronPPT C# API Reference`
- v2 (human): `ZebraColor: Alternating Band Colors in C#`
- v3 (balanced): `ZebraColor Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set alternating band colors in C# with the IronPPT ZebraColor class: pass two Color objects or two color strings, then read Color1 and Color2.`
- v2 (human): `Define a two-color banding pattern in C# with the IronPPT ZebraColor class: pair the colors for alternating rows in a table.`
- v3 (balanced): `Reference for the IronPPT ZebraColor class in C#: hold two alternating band colors through Color1 and Color2 for striped rows.`

---

## Structured data

**TechArticle abstract**

> Pair two alternating band colors in C# with the IronPPT ZebraColor class. One constructor takes two Color objects and another takes two color strings, and Color1 and Color2 expose the first and second bands afterwards. The pair repeats row by row to produce a striped, easier-to-read table, and both colors stay editable after construction.

**FAQPage entries**

```json
[
  {
    "question": "Where does ZebraColor live in the IronPPT API?",
    "answer": "ZebraColor is a class in the IronPPT.Models namespace, shipped in IronPPT.dll, deriving from Object. It holds the two alternating band colors, Color1 and Color2, used for striped, banded content."
  },
  {
    "question": "How do you set alternating row colors in C#?",
    "answer": "Construct a ZebraColor with two colors, either two Color objects or two color strings, and assign it where banding is needed. Color1 is the first band and Color2 the second; both remain editable after construction."
  }
]
```
