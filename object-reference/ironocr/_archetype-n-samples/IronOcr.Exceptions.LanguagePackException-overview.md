<!--
N-Lite/exception. Declared: public class LanguagePackException : Exception.
Chain: Object -> LanguagePackException (direct, verified on page).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Exceptions.LanguagePackException.html
-->

## Injected overview (Markdown)

Selecting an OCR language whose pack is missing or cannot load raises `LanguagePackException`. Confirm the language NuGet package is installed and referenced, that the language name and code are spelled correctly, and that any custom `.traineddata` file is present at the expected path before reading. The exception derives directly from `System.Exception`, so a catch on the base type handles it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LanguagePackException - IronOCR C# Reference`
- v2 (human): `LanguagePackException: Missing Language in C#`
- v3 (balanced): `LanguagePackException | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `LanguagePackException is thrown in C# when an IronOCR language pack is missing or cannot load. Install the language package and check the name.`
- v2 (human): `Hit LanguagePackException in C#? An IronOCR language pack is missing. Add the language NuGet package and confirm the language name is correct.`
- v3 (balanced): `Reference for LanguagePackException in C#: raised for a missing or unloadable IronOCR language pack. Derives directly from System.Exception.`

---

## Structured data

**TechArticle abstract**

> Selecting an OCR language whose pack is missing or cannot load raises LanguagePackException in C#. Confirm the language NuGet package is installed, that the language name and code are correct, and that any custom traineddata file is present before reading. It derives directly from System.Exception.
