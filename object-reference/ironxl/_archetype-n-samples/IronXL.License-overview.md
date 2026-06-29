<!--
N-Mid (static class, 4 members). Frame F (imperative). IronXL.
Members verified 2026-06-22: IsLicensed, LicenseKey, DisableAppAnalytics(), IsValidLicense(String). Base Object, namespace IronXL.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.License.html
-->

## Injected overview (Markdown)

Apply an IronXL license key across a whole application through `License`. Setting a key here removes the trial watermark and unlocks production use without per-call configuration, so the same value covers every workbook the process touches. It is the static entry point a developer reaches for when moving an IronXL project from evaluation to deployment.

Assign the key once at startup with the static `LicenseKey` property, before the first `WorkBook` is created or loaded. A key can also be supplied through a .NET Framework Web.config or App.config file, or through appsettings.json on .NET Core, under the `IronXL.LicenseKey` name instead of in code. Check `IsLicensed` to confirm a valid key is active, and call `IsValidLicense` with a candidate string to test a key before relying on it. `DisableAppAnalytics` opts the application out of analytics where that is required. Because every member is static, there is nothing to construct and the settings apply globally for the lifetime of the process.

```csharp
using IronXL;

License.LicenseKey = "YOUR-LICENSE-KEY";
bool active = License.IsLicensed;
```

The [license keys guide](https://ironsoftware.com/csharp/excel/get-started/license-keys/) walks through applying a key, and the [getting started guide](https://ironsoftware.com/csharp/excel/get-started/) sets up a first project.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronXL C# API Reference`
- v2 (human): `License: Apply an IronXL Key in C#`
- v3 (balanced): `License Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronXL license key in C# with the static License class: set LicenseKey, check IsLicensed, and validate a key with IsValidLicense.`
- v2 (human): `Activate IronXL across your C# app with the static License class: set the LicenseKey, confirm IsLicensed, and remove the trial watermark.`
- v3 (balanced): `Reference for the IronXL License class in .NET: set LicenseKey, read IsLicensed, and call IsValidLicense to check a key before use.`

---

## Structured data

**TechArticle abstract**

> Applying an IronXL license key across a C# application runs through the static License class. Set the LicenseKey property at startup, or supply the key through Web.Config, App.Config, or appsettings.json. IsLicensed reports whether a valid key is active, IsValidLicense tests a candidate key, and DisableAppAnalytics opts out of analytics. Every member is static, so the settings apply globally.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronXL API?",
    "answer": "License is a static class in the IronXL namespace, shipped in IronXL.dll, deriving from System.Object. Set its LicenseKey property to activate IronXL across the application."
  },
  {
    "question": "How do you apply an IronXL license key in C#?",
    "answer": "Assign your key to the static License.LicenseKey property at application startup, before creating or loading a WorkBook. You can also place the key in a Web.config or App.config file, or in appsettings.json, under IronXL.LicenseKey. Read License.IsLicensed to confirm it is active."
  }
]
```
