<!--
N-Mid (static class, 4 members). Frame F. IronOcr.
Members verified 2026-06-23: IsLicensed, LicenseKey (properties); DisableAppAnalytics(), IsValidLicense(String) (methods).
Disambiguation pair: Installation (also static, also carries LicenseKey/IsLicensed/IsValidLicense, plus install config).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.License.html
-->

## Injected overview (Markdown)

Apply an IronOCR license key across an application through `License`. Setting the key here removes the trial watermark and unlocks the library for every read in the process, so a single assignment at startup covers the whole app. It is the focused, licensing-only entry point, distinct from `Installation`, which exposes the same licensing members alongside broader install and logging configuration.

Set `LicenseKey` once, early, before the first OCR call. `IsLicensed` then reports whether the running instance is licensed, a quick check to confirm the key took effect, and `IsValidLicense` validates a candidate key string without committing it. `DisableAppAnalytics` opts the application out of usage analytics where that is required.

Because `License` is static, there is nothing to construct: assign and read its members directly. The same `LicenseKey`, `IsLicensed`, and `IsValidLicense` members are also reachable on `Installation`, so choose `License` when licensing is all you need and `Installation` when you are configuring paths, logging, or dependencies in the same place.

```csharp
IronOcr.License.LicenseKey = "IRONOCR-MYLICENSE-KEY-1EF01";
bool licensed = IronOcr.License.IsLicensed;
```

The [Iron Tesseract how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) shows a licensed read in context, and the [configure and set up Tesseract example](https://ironsoftware.com/csharp/ocr/examples/csharp-configure-setup-tesseract/) sets options around it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronOCR C# API Reference`
- v2 (human): `License: Apply an IronOCR Key in C#`
- v3 (balanced): `License Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronOCR license key in C# with the static License class: set LicenseKey, check IsLicensed, and validate a key with IsValidLicense.`
- v2 (human): `Set your IronOCR license in C# with the static License class: assign LicenseKey at startup to remove the watermark and unlock the library.`
- v3 (balanced): `Reference for IronOCR's static License class in C#: set LicenseKey, read IsLicensed, validate with IsValidLicense, and DisableAppAnalytics.`

---

## Structured data

**TechArticle abstract**

> Apply an IronOCR license key across an application in C# through the static License class. Assign LicenseKey once at startup to remove the trial watermark, read IsLicensed to confirm the key took effect, validate a candidate key with IsValidLicense, and opt out of usage data with DisableAppAnalytics. The same licensing members are also exposed on Installation.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronOCR API?",
    "answer": "License is a static class in the IronOcr namespace, shipped in IronOcr.dll. Assign and read its members directly without constructing an instance."
  },
  {
    "question": "What is the difference between License and Installation in IronOCR?",
    "answer": "Both are static classes that expose LicenseKey, IsLicensed, and IsValidLicense. License is the licensing-only entry point; Installation adds installation paths, logging, and dependency configuration alongside those licensing members."
  }
]
```
