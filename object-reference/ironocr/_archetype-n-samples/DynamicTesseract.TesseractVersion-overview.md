<!--
N-Lite/enum. Members verified 2026-06-23: Tesseract4, Tesseract5. DynamicTesseract namespace (distinct from IronOcr.TesseractVersion).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.TesseractVersion.html
-->

## Injected overview (Markdown)

`TesseractVersion` names the native Tesseract engine generation the dynamic loader binds to when it sets up the underlying OCR runtime. `Tesseract5` selects the current fifth-generation engine, the default and recommended choice for new work, while `Tesseract4` pins the older fourth-generation engine for projects that need the previous behavior. Most code never touches this value, since IronOCR loads a supported engine automatically. The [IronTesseract how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) covers configuring the engine for a read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TesseractVersion Enum - IronOCR C# Reference`
- v2 (human): `TesseractVersion: Pick the Engine in C#`
- v3 (balanced): `TesseractVersion Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select the native Tesseract engine generation in C# with the IronOCR TesseractVersion enum: Tesseract5 by default or Tesseract4 for older behavior.`
- v2 (human): `Pick which Tesseract engine the dynamic loader binds in C# with the IronOCR TesseractVersion enum: Tesseract5 for new work or Tesseract4.`
- v3 (balanced): `Reference for the DynamicTesseract TesseractVersion enum in C#: Tesseract5 and Tesseract4 native engine generations for IronOCR.`

---

## Structured data

**TechArticle abstract**

> Select the native Tesseract engine generation the dynamic loader binds in IronOCR for C# with TesseractVersion. Tesseract5 chooses the current fifth-generation engine and is the default, while Tesseract4 pins the older fourth-generation engine for projects that need it.
