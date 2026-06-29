<!--
N-Lite/enum. IronOcr. Frame F. Verified 2026-06-23 against OrientationDetectionMode.html.
Members (salience: production default first): Balanced, Fast, Detailed, ExtremeDetailed. (docfx renders sealed class : Enum -> enum.)
-->

## Injected overview (Markdown)

Choose `OrientationDetectionMode` to set how hard IronOCR works to detect the rotation angle of pages in an `OcrInput`. `Balanced` trades speed against accuracy and is the right pick for default or production reads. `Fast` favors speed for draft or bulk processing, while `Detailed` and `ExtremeDetailed` spend more time for higher accuracy, with `ExtremeDetailed` even recovering skewed text. The `Detailed` and `ExtremeDetailed` modes require the `IronOcr.Extensions.AdvancedScan` package and are unavailable on Windows x86 and Mac ARM.

```csharp
input.OrientationDetectionMode = OrientationDetectionMode.Balanced;
```

The [detect page rotation how-to](https://ironsoftware.com/csharp/ocr/how-to/detect-page-rotation/) shows orientation detection in context.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OrientationDetectionMode Enum - IronOCR C#`
- v2 (human): `OrientationDetectionMode: Page Angle in C#`
- v3 (balanced): `OrientationDetectionMode Enum | IronOCR C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set page rotation detection in C# with the IronOCR OrientationDetectionMode enum: Balanced, Fast, Detailed, and ExtremeDetailed accuracy modes.`
- v2 (human): `Pick how hard IronOCR works to find page angle in C#: Balanced for production, Fast for bulk, Detailed and ExtremeDetailed for accuracy.`
- v3 (balanced): `Reference for the IronOCR OrientationDetectionMode enum in C#: choose Balanced, Fast, Detailed, or ExtremeDetailed orientation detection.`

---

## Structured data

**TechArticle abstract**

> Setting how IronOCR detects page rotation in C# uses the OrientationDetectionMode enumeration on an OcrInput. Balanced suits production reads, Fast favors speed for bulk work, and Detailed and ExtremeDetailed spend more time for higher accuracy, with ExtremeDetailed recovering skewed text. Detailed and ExtremeDetailed need the IronOcr.Extensions.AdvancedScan package and are unavailable on Windows x86 and Mac ARM.
