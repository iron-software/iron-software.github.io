<!--
N-Lite/exception. Declared: public class IronOcrLicensingException : IronOcrProductException.
Chain: Object -> IronOcrProductException -> IronOcrLicensingException (verified on page).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Exceptions.IronOcrLicensingException.html
-->

## Injected overview (Markdown)

When IronOCR runs without a valid license, it throws `IronOcrLicensingException`. Set a correct `License.LicenseKey` before any OCR call, and verify the key matches your product and has not expired. As a subtype of `IronOcrProductException`, it is also caught by a handler on that base type. See the [IronOCR licensing page](https://ironsoftware.com/csharp/ocr/licensing/) for keys and activation.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronOcrLicensingException - IronOCR C# Reference`
- v2 (human): `IronOcrLicensingException: License Error in C#`
- v3 (balanced): `IronOcrLicensingException | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronOcrLicensingException is thrown in C# when IronOCR is not properly licensed. Set a valid License.LicenseKey before running OCR to resolve it.`
- v2 (human): `Hit IronOcrLicensingException in C#? IronOCR has no valid license. Set License.LicenseKey before OCR calls and confirm the key is current.`
- v3 (balanced): `Reference for IronOcrLicensingException in C#: raised when IronOCR lacks a valid license. A subtype of IronOcrProductException.`

---

## Structured data

**TechArticle abstract**

> When IronOCR runs without a valid license in C#, it throws IronOcrLicensingException. Set a correct License.LicenseKey before any OCR call and confirm the key matches your product and has not expired. It derives from IronOcrProductException, so a base-type catch also handles it.
