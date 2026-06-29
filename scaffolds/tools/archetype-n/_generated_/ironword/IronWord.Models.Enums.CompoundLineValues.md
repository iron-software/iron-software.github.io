<!--
N-Lite/enum. Members verified 2026-06-23: Simple, Double, ThickThin, ThinThick, Triple.
Salient: Simple (plain single line) first, then Double, Triple, ThickThin, ThinThick. Consumed by TextOutlineEffect.CompoundLineType (verified).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.CompoundLineValues.html
-->

## Injected overview (Markdown)

Set how many parallel lines a text outline draws with `CompoundLineValues`, applied on `TextOutlineEffect.CompoundLineType`. `Simple` draws one plain line, the usual choice, while `Double` and `Triple` stack two or three even lines. `ThickThin` pairs a heavy line with a light one and `ThinThick` reverses that order for a different emphasis. The [text outline effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-text-outline-effect/) covers outlining text.

```csharp
outlineEffect.CompoundLineType = CompoundLineValues.Simple;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CompoundLineValues Enum - IronWord C# API`
- v2 (human): `CompoundLineValues: Outline Line Styles in C#`
- v3 (balanced): `CompoundLineValues Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the compound line style in C# with the IronWord CompoundLineValues enum: Simple, Double, Triple, ThickThin, or ThinThick, on CompoundLineType.`
- v2 (human): `Choose how a text outline draws in C# with IronWord's CompoundLineValues enum: a Simple single line, stacked Double or Triple, or ThickThin pairs.`
- v3 (balanced): `Reference for the IronWord CompoundLineValues enum in C#: Simple, Double, Triple, ThickThin, and ThinThick outline styles.`

---

## Structured data

**TechArticle abstract**

> CompoundLineValues sets how many parallel lines a text outline draws in IronWord, applied on TextOutlineEffect.CompoundLineType. Simple draws one line, Double and Triple stack two or three, and ThickThin and ThinThick pair a heavy line with a light one in either order.
