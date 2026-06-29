<!--
N-Lite/enum. Members verified 2026-06-23: Inline, Square, Tight, Behind, InFront.
Base: System.Object (public sealed class TextWrapStyle : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.TextWrapStyle.html
-->

## Injected overview (Markdown)

Control how body text flows around a picture with `TextWrapStyle`, the wrapping mode you assign when an image shares space with paragraph text. `Inline` keeps the picture in the text line, `Square` wraps text in a rectangle around it, and `Tight` hugs the image contours. `Behind` places the picture under the text and `InFront` floats it over the text. The [add image to Word document](https://ironsoftware.com/csharp/word/how-to/add-image/) walkthrough shows where this fits.

```csharp
var wrap = TextWrapStyle.Square;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextWrapStyle Enum - IronWord C# API Reference`
- v2 (human): `TextWrapStyle: Wrap Text Around Images in C#`
- v3 (balanced): `TextWrapStyle Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how text wraps around an image in C# with the IronWord TextWrapStyle enum: Inline, Square, Tight, Behind, or InFront placement.`
- v2 (human): `Choose how Word text flows around a picture in C# with TextWrapStyle: keep it inline, wrap Square or Tight, or float it Behind or InFront.`
- v3 (balanced): `Reference for the IronWord TextWrapStyle enum in C#: Inline, Square, Tight, Behind, and InFront image text-wrapping modes.`

---

## Structured data

**TechArticle abstract**

> Control how text flows around an image in IronWord with TextWrapStyle. Inline keeps the picture in the text line, Square wraps text in a rectangle, and Tight hugs the contours, while Behind and InFront layer the image under or over the text.
