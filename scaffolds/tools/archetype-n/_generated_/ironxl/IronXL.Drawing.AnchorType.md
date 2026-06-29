<!--
N-Lite/enum. Members verified 2026-06-23: MoveAndResize, MoveDontResize, DontMoveAndResize.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.AnchorType.html
-->

## Injected overview (Markdown)

`AnchorType` sets how a drawing such as an image follows the cells beneath it when those cells are resized or moved, assigned to `Position.AnchorType`. `MoveAndResize` keeps the drawing locked to its cells so it shifts and stretches with them, `MoveDontResize` moves the drawing but holds its size, and `DontMoveAndResize` pins it in place regardless of cell changes. The [worksheet images how-to](https://ironsoftware.com/csharp/excel/how-to/add-extract-remove-worksheet-images/) shows placing and anchoring an image.

```csharp
position.AnchorType = AnchorType.MoveAndResize;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AnchorType Enum - IronXL C# API Reference`
- v2 (human): `AnchorType: Anchor Excel Images in C#`
- v3 (balanced): `AnchorType Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how a drawing follows cells in C# with the IronXL AnchorType enum: MoveAndResize, MoveDontResize, or DontMoveAndResize, on Position.AnchorType.`
- v2 (human): `Control how Excel images react to cell changes in C# with the IronXL AnchorType enum, from full MoveAndResize to a pinned DontMoveAndResize.`
- v3 (balanced): `Reference for the IronXL AnchorType enum in C#: MoveAndResize, MoveDontResize, and DontMoveAndResize anchoring for worksheet drawings.`

---

## Structured data

**TechArticle abstract**

> Use AnchorType in IronXL to set how a drawing follows the cells beneath it when they are resized or moved, assigned to Position.AnchorType. MoveAndResize shifts and stretches the drawing with its cells, MoveDontResize moves it but holds its size, and DontMoveAndResize pins it in place.
