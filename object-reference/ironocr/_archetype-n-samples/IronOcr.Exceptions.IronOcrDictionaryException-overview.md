<!--
N-Lite/exception. Declared: public class IronOcrDictionaryException : IronOcrProductException. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Exceptions.IronOcrDictionaryException.html
-->

## Injected overview (Markdown)

A dictionary or language-pack problem during recognition surfaces as this exception, raised when a configured language or custom trained-data file cannot be located or loaded. Confirm the language name is correct, that the matching language pack is installed, and that any custom path points at a readable trained-data file before retrying. It extends `IronOcrProductException`, so a handler on that base type also catches it. The [custom language how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-custom-language/) covers adding language files correctly.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronOcrDictionaryException - IronOCR C# API`
- v2 (human): `IronOcrDictionaryException: OCR Language Error (C#)`
- v3 (balanced): `IronOcrDictionaryException | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronOcrDictionaryException is raised in C# when an IronOCR language or trained-data file cannot be loaded. Check the name, pack, and path.`
- v2 (human): `Fix OCR language errors in C#: IronOcrDictionaryException means a language pack or trained-data file is missing or unreadable. Verify the path.`
- v3 (balanced): `Reference for IronOcrDictionaryException in C#: raised for missing or unloadable IronOCR language packs and custom trained-data files.`

---

## Structured data

**TechArticle abstract**

> IronOcrDictionaryException is raised in C# when an IronOCR language pack or custom trained-data file cannot be located or loaded during recognition. Verify the language name, confirm the pack is installed, and check any custom file path before retrying. It extends IronOcrProductException.
