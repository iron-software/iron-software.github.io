<!--
N-Mid (static, 4 members). Frame D. IronQr. Members verified 2026-06-22.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.License.html
-->

## Injected overview (Markdown)

Activating IronQR across an application runs through `License`, the static entry point for license keys. Set `License.LicenseKey` to your key once at application startup, before any QR code is read or written, and the key applies globally for the process. A valid license removes the trial limits from generated and scanned codes.

Three more members support the workflow. `License.IsLicensed` returns whether a valid key is currently applied, which works well as a startup smoke test. `License.IsValidLicense(string licenseKey)` checks a key string without applying it, so a configuration value can be validated before it is set. `License.DisableAppAnalytics()` opts the application out of anonymous usage reporting.

Because the members are static, set the key in one place such as `Program.cs` or a startup hook rather than before each operation. Confirm `IsLicensed` returns true in a smoke test so a missing or mistyped key surfaces during development. The [license keys guide](https://ironsoftware.com/csharp/qr/get-started/license-keys/) explains where to obtain and place the key.

```csharp
using IronQr;

License.LicenseKey = "IRONQR.MYLICENSE.KEY.1EF01";
bool licensed = License.IsLicensed;
```

The [get started guide](https://ironsoftware.com/csharp/qr/get-started/) covers first-run setup for a new IronQR project.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronQR C# API Reference`
- v2 (human): `License: Apply Your IronQR Key in C#`
- v3 (balanced): `License Class | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronQR license key in C# with the static License class. Set LicenseKey, check IsLicensed, and validate keys with IsValidLicense.`
- v2 (human): `License your IronQR app in C# with the static License class: set the key at startup, confirm IsLicensed, and validate keys before use.`
- v3 (balanced): `Reference for the IronQR License class in C#: set LicenseKey at startup, check IsLicensed, and validate keys, with code examples.`

---

## Structured data

**TechArticle abstract**

> Licensing an IronQR application in C# runs through the static License class. Set License.LicenseKey once at startup, before reading or writing any code, to apply the key globally and remove trial limits. Read License.IsLicensed to confirm the key was accepted, call License.IsValidLicense to test a key without applying it, and call License.DisableAppAnalytics to opt out of anonymous usage reporting.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronQR API?",
    "answer": "License is a static class in the IronQr namespace, shipped in IronQr.dll. Its members are static, so set License.LicenseKey and read License.IsLicensed directly without constructing an instance."
  },
  {
    "question": "How do you apply an IronQR license key in C#?",
    "answer": "Set License.LicenseKey to your key string once at application startup, before reading or writing any code. The key applies globally for the process. Place it in a startup path such as Program.cs, and read License.IsLicensed to confirm it was accepted."
  }
]
```
