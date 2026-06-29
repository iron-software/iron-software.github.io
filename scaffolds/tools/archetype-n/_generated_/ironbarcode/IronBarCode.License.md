<!--
N-Mid (static, 4 members). Frame D. IronBarcode. Members verified 2026-06-23: LicenseKey, IsLicensed, IsValidLicense(String), DisableAppAnalytics().
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.License.html
-->

## Injected overview (Markdown)

Activating IronBarcode across an application runs through `License`, the static entry point for license keys. Set `License.LicenseKey` to your key once at application startup, before any barcode is read or written, and the key applies globally for the process. A valid license removes the trial limits from generated and scanned barcodes.

Three more members support the workflow. `License.IsLicensed` returns whether a valid key is currently applied, which works well as a startup smoke test. `License.IsValidLicense(string licenseKey)` checks a key string without applying it, so a configuration value can be validated before it is set. `License.DisableAppAnalytics()` opts the application out of anonymous usage reporting.

Because the members are static, set the key in one place such as `Program.cs` or a startup hook rather than before each operation. Confirm `IsLicensed` returns true in a smoke test so a missing or mistyped key surfaces during development rather than in production. The [license keys guide](https://ironsoftware.com/csharp/barcode/get-started/license-keys/) explains where to obtain and place the key.

```csharp
using IronBarCode;

License.LicenseKey = "IRONBARCODE.MYLICENSE.KEY.1EF01";
bool licensed = License.IsLicensed;
```

The [get started guide](https://ironsoftware.com/csharp/barcode/get-started/) covers first-run setup for a new IronBarcode project.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License - IronBarcode C# API Reference`
- v2 (human): `License: Apply Your IronBarcode Key in C#`
- v3 (balanced): `License Class | IronBarcode .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronBarcode license key in C# with the static License class. Set LicenseKey, check IsLicensed, and validate keys with IsValidLicense.`
- v2 (human): `License your IronBarcode app in C# with the static License class: set the key at startup, confirm IsLicensed, and validate keys before use.`
- v3 (balanced): `Reference for the IronBarcode License class in C#: set LicenseKey at startup, check IsLicensed, and validate keys, with code examples.`

---

## Structured data

**TechArticle abstract**

> Licensing an IronBarcode application in C# runs through the static License class. Set License.LicenseKey once at startup, before reading or writing any barcode, to apply the key globally and remove trial limits. Read License.IsLicensed to confirm the key was accepted, call License.IsValidLicense to test a key without applying it, and call License.DisableAppAnalytics to opt out of anonymous usage reporting.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronBarcode API?",
    "answer": "License is a static class in the IronBarCode namespace, shipped in IronBarCode.dll, with base type Object. Its members are static, so set License.LicenseKey and read License.IsLicensed directly without constructing an instance."
  },
  {
    "question": "How do you apply an IronBarcode license key in C#?",
    "answer": "Set License.LicenseKey to your key string once at application startup, before reading or writing any barcode. The key applies globally for the process. Place it in a startup path such as Program.cs, and read License.IsLicensed to confirm it was accepted."
  }
]
```
