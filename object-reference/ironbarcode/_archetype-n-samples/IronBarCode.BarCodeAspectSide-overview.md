<!--
N-Lite/enum. Members verified 2026-06-23: Horizontal, Vertical.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarCodeAspectSide.html
Consumer: GeneratedBarcode resize/aspect operations (barCodeAspectSide parameter).
-->

## Injected overview (Markdown)

`BarCodeAspectSide` chooses which dimension keeps its default ratio when IronBarcode resizes a generated barcode, so the other dimension stretches to fill the requested size. `Horizontal` keeps the width at the default ratio and stretches the height, and `Vertical` keeps the height at the default ratio and stretches the width. It is supplied to `GeneratedBarcode.KeepAspectRatio`. The [create 1D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-1d-barcodes/) covers sizing generated output.

```csharp
barcode.KeepAspectRatio(true, BarCodeAspectSide.Horizontal);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarCodeAspectSide Enum - IronBarcode C# API`
- v2 (human): `BarCodeAspectSide: Control Barcode Resizing in C#`
- v3 (balanced): `BarCodeAspectSide Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set which side keeps its ratio when resizing in C# with the IronBarcode BarCodeAspectSide enum: Horizontal stretches height, Vertical stretches width.`
- v2 (human): `Control how a generated barcode stretches in C# with the IronBarcode BarCodeAspectSide enum: keep width with Horizontal or height with Vertical.`
- v3 (balanced): `Reference for the IronBarcode BarCodeAspectSide enum in C#: Horizontal and Vertical options for resizing a generated barcode.`

---

## Structured data

**TechArticle abstract**

> Use BarCodeAspectSide in IronBarcode to choose which dimension keeps its default ratio when a generated barcode is resized. Horizontal keeps the width and stretches the height, while Vertical keeps the height and stretches the width, supplied to GeneratedBarcode.KeepAspectRatio.
