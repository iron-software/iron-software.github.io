<!--
N-Lite/enum. 487 members; salient subset named (English/EnglishBest/EnglishFast, ChineseSimplified, French, German, Arabic). Base Enum.
Consumed by IronTesseract.Language and AddSecondaryLanguage(OcrLanguage). Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrLanguage.html
-->

## Injected overview (Markdown)

Setting the natural language IronOCR reads runs through `OcrLanguage`, assigned to `IronTesseract.Language`. `English` is the default; each language also ships in a `Best` form (accurate, slower) and a `Fast` form (quicker), so `EnglishBest` and `EnglishFast` tune that trade-off. The enum covers most written languages, including `ChineseSimplified`, `French`, and `Arabic`. To read several languages in one pass, call `IronTesseract.AddSecondaryLanguage`. The [multiple languages how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-multiple-languages/) reads more than one at once, and the [custom language how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-custom-language/) loads a trained pack.

```csharp
ironTesseract.Language = OcrLanguage.EnglishBest;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrLanguage Enum - IronOCR C# API`
- v2 (human): `OcrLanguage: Set the OCR Language in C#`
- v3 (balanced): `OcrLanguage Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the OCR language in C# with the IronOCR OcrLanguage enum: English plus Best and Fast packs, assigned to IronTesseract.Language.`
- v2 (human): `Choose the language IronOCR reads in C# with the OcrLanguage enum: English, Chinese, French, and more, each in a Best or Fast pack.`
- v3 (balanced): `Reference for the IronOCR OcrLanguage enum in C#: English, ChineseSimplified, French, and Best/Fast packs set on IronTesseract.Language.`

---

## Structured data

**TechArticle abstract**

> Set the natural language IronOCR reads with OcrLanguage, assigned to IronTesseract.Language in C#. English is the default; each language ships in a Best form for accuracy and a Fast form for speed, and the enum covers most written languages such as ChineseSimplified, French, German, and Arabic. Call AddSecondaryLanguage to read several languages in one pass.
