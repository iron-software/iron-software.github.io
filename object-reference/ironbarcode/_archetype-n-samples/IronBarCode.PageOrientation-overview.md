<!--
N-Lite/enum. Members verified 2026-06-23: Portrait, Landscape.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.PageOrientation.html
Consumer: BarcodeResult.PageOrientation (read result).
-->

## Injected overview (Markdown)

`PageOrientation` reports the orientation of the page or image a barcode was read from, exposed on `BarcodeResult.PageOrientation` after a scan. `Portrait` means the image height is greater than its width, and `Landscape` means the width is greater than the height. Reading the value helps a workflow correlate a detected barcode with the original document layout. The [image orientation correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-orientation-correction/) covers handling rotated scans.

```csharp
PageOrientation orientation = result.PageOrientation;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PageOrientation Enum - IronBarcode C# API`
- v2 (human): `PageOrientation: Read Page Layout in C#`
- v3 (balanced): `PageOrientation Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read page orientation in C# with the IronBarcode PageOrientation enum: Portrait or Landscape, exposed on BarcodeResult.PageOrientation after a scan.`
- v2 (human): `Find a scanned page's layout in C# with the IronBarcode PageOrientation enum: Portrait when taller than wide, Landscape when wider than tall.`
- v3 (balanced): `Reference for the IronBarcode PageOrientation enum in C#: Portrait and Landscape values reported on a barcode read result.`

---

## Structured data

**TechArticle abstract**

> Use PageOrientation in IronBarcode to read the orientation of the page a barcode was scanned from, exposed on BarcodeResult.PageOrientation. Portrait means the image height exceeds its width, and Landscape means the width exceeds the height, helping correlate a barcode with the original layout.
