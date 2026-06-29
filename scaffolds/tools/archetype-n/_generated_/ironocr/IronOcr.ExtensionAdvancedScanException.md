<!--
N-Lite/exception. Declared: public class ExtensionAdvancedScanException : Exception. Chain: Object -> Exception -> ExtensionAdvancedScanException. Verified 2026-06-23.
Raised by the advanced-scan ML reads (ReadDocumentAdvanced/ReadPhoto/ReadPassport/etc.) when the ML extension fails.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.ExtensionAdvancedScanException.html
-->

## Injected overview (Markdown)

`ExtensionAdvancedScanException` signals that an advanced-scan read failed inside IronOCR's machine-learning extension, the path behind the advanced document, photo, passport, and license-plate reads. It is typically thrown when the required ML model files are missing or cannot load, or when the engine cannot process the supplied input. Confirm the machine learning models directory is populated, the input is readable, and the advanced-scan dependencies are installed, then retry. It derives directly from `Exception`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ExtensionAdvancedScanException - IronOCR C# API`
- v2 (human): `ExtensionAdvancedScanException in C#`
- v3 (balanced): `ExtensionAdvancedScanException | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ExtensionAdvancedScanException reports an advanced-scan failure in IronOCR for C#: check the ML models directory, the input, and dependencies.`
- v2 (human): `Handle advanced-scan failures in C# with IronOCR's ExtensionAdvancedScanException: confirm the ML models and input before retrying the read.`
- v3 (balanced): `Reference for IronOCR's ExtensionAdvancedScanException in C#: raised when the machine-learning advanced-scan read cannot complete.`

---

## Structured data

**TechArticle abstract**

> ExtensionAdvancedScanException signals that an advanced-scan read failed inside IronOCR's machine-learning extension in C#, the path behind the advanced document, photo, passport, and license-plate reads. It is usually thrown when the ML model files are missing or unloadable or the input cannot be processed. Check the machine learning models directory, the input, and the advanced-scan dependencies before retrying. It derives from Exception.
