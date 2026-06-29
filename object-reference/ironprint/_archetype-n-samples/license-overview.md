<!--
Archetype N-Mid, static class (thin: 4 members) — IronPrint
Target page: https://ironsoftware.com/csharp/print/object-reference/api/IronPrint.License.html
Opener frame: D (task-gerund-fronted). API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

Activating IronPrint across an application runs through `License`, the static entry point for license keys. Set `License.LicenseKey` to your key once at application startup, before any printing call, and the key applies globally for the process. A valid license removes the trial limits from printed output.

Three more members support the workflow. `License.IsLicensed` returns whether a valid key is currently applied, which is useful as a startup smoke test. `License.IsValidLicense(string licenseKey)` checks a key string without applying it, so a configuration value can be validated before it is set. `License.DisableAppAnalytics()` opts the application out of anonymous usage reporting.

Because the members are static, set the key in one place such as `Program.cs` or a startup hook rather than per print job. Confirm `IsLicensed` returns true in a smoke test so a missing or mistyped key surfaces during development instead of in production. The [license keys guide](https://ironsoftware.com/csharp/print/get-started/license-keys/) explains where to obtain and place the key.

```csharp
using IronPrint;

License.LicenseKey = "IRONPRINT.MYLICENSE.KEY.1EF01";
bool licensed = License.IsLicensed;
```

The [get started guide](https://ironsoftware.com/csharp/print/get-started/) covers first-run setup, and the [IronPrint documentation](https://ironsoftware.com/csharp/print/docs/) collects the printing how-tos a licensed project will use next.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronPrint C# API Reference`
- v2 (human): `License: Apply Your IronPrint Key in C#`
- v3 (balanced): `License Class | IronPrint C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronPrint license key in C# with the static License class. Set LicenseKey, check IsLicensed, and validate keys with IsValidLicense.`
- v2 (human): `License your IronPrint app in C# with the static License class: set the key at startup, confirm IsLicensed, and validate keys before use.`
- v3 (balanced): `Reference for the IronPrint License class in C#: set LicenseKey at startup, check IsLicensed, and validate keys, with code examples.`

---

## Structured data

**TechArticle abstract**

> Licensing an IronPrint application in C# runs through the static License class. Set License.LicenseKey once at startup, before any printing call, to apply the key globally for the process and remove trial limits. Read License.IsLicensed to confirm the key was accepted, call License.IsValidLicense to test a key without applying it, and call License.DisableAppAnalytics to opt out of anonymous usage reporting.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronPrint API?",
    "answer": "License is a static class in the IronPrint namespace, shipped in IronPrint.dll. Its members are static, so set License.LicenseKey and read License.IsLicensed directly without constructing an instance."
  },
  {
    "question": "How do you apply an IronPrint license key in C#?",
    "answer": "Set License.LicenseKey to your key string once at application startup, before any printing call. The key applies globally for the process. Place it in a startup path such as Program.cs rather than per print job. Read License.IsLicensed to confirm it was accepted."
  }
]
```
