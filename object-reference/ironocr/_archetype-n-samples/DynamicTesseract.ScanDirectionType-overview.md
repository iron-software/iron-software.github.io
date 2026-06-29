<!--
N-Lite/enum. Members verified 2026-06-23: FromBottom, FromLeft, FromRight, FromTop, ScanBoth, ScanHorizontal, ScanNegative, ScanPositive, ScanVertical. Flags-style; salient values named.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ScanDirectionType.html
-->

## Injected overview (Markdown)

`ScanDirectionType` controls which way a low-level Leptonica scan traverses pixels while analyzing an image during preprocessing. The axis values, `ScanHorizontal` and `ScanVertical`, set the direction a run is read, with `ScanBoth` covering both axes. The edge values, `FromLeft`, `FromRight`, `FromTop`, and `FromBottom`, fix where a traversal starts, while `ScanPositive` and `ScanNegative` set the sweep sign. Most projects never set this directly, since IronOCR's higher-level reading and filter steps select a sensible direction on their own.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ScanDirectionType Enum - IronOCR C# Reference`
- v2 (human): `ScanDirectionType: Pixel Scan Axis in C#`
- v3 (balanced): `ScanDirectionType Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the pixel scan direction in C# with the IronOCR ScanDirectionType enum: ScanHorizontal, ScanVertical, FromLeft, FromTop, and related values.`
- v2 (human): `Control which way a Leptonica scan reads pixels in C# with the IronOCR ScanDirectionType enum: horizontal, vertical, or edge-anchored sweeps.`
- v3 (balanced): `Reference for the IronOCR ScanDirectionType enum in C#: horizontal and vertical axes plus edge and sign values for low-level pixel scans.`

---

## Structured data

**TechArticle abstract**

> Set the direction a low-level Leptonica pixel scan traverses an image in IronOCR for C# with ScanDirectionType. ScanHorizontal and ScanVertical fix the axis, ScanBoth covers both, and the FromLeft, FromRight, FromTop, and FromBottom values anchor where the sweep begins.
