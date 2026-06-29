<!--
N-Lite/enum (nested in DataMatrixWriter; namespace IronBarCode.DataMatrixWriter). Members verified 2026-06-23: Automatic (default), Square, Rectangular.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.DataMatrixWriter.DataMatrixShape.html
Consumer: DataMatrixWriter.CreateDataMatrix(value, shape, ...).
-->

## Injected overview (Markdown)

`DataMatrixShape` selects the outline of a Data Matrix code IronBarcode generates, passed as the `shape` argument to `DataMatrixWriter.CreateDataMatrix`. `Automatic`, the default, lets IronBarcode choose the dimensions to fit the data. `Square` forces equal width and height, the most widely supported form, and `Rectangular` allows differing width and height for layouts where a long, low symbol fits better. The [create 2D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-2d-barcodes/) covers writing Data Matrix codes.

```csharp
var matrix = DataMatrixWriter.CreateDataMatrix("12345", DataMatrixShape.Square);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DataMatrixShape Enum - IronBarcode C# API`
- v2 (human): `DataMatrixShape: Shape a Data Matrix in C#`
- v3 (balanced): `DataMatrixShape Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the Data Matrix outline in C# with the IronBarcode DataMatrixShape enum: Automatic, Square, or Rectangular, on DataMatrixWriter.CreateDataMatrix.`
- v2 (human): `Shape a Data Matrix code in C# with the IronBarcode DataMatrixShape enum: Automatic sizing, equal-sided Square, or Rectangular.`
- v3 (balanced): `Reference for the IronBarcode DataMatrixShape enum in C#: Automatic, Square, and Rectangular outlines for Data Matrix codes.`

---

## Structured data

**TechArticle abstract**

> Use DataMatrixShape in IronBarcode to select the outline of a generated Data Matrix code, passed to DataMatrixWriter.CreateDataMatrix. Automatic chooses dimensions to fit the data, Square forces equal width and height, and Rectangular allows differing width and height.
