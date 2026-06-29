<!--
Archetype N-Mid, static class (thin: 4 members) — IronZip. Opener frame D (task-gerund).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.License.html
API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

Activating IronZip across an application runs through `License`, the static entry point for license keys. Set `License.LicenseKey` to your key once at application startup, before any archive is created, and the key applies globally for the process. A valid license removes the trial limits from created archives.

Three more members support the workflow. `License.IsLicensed` returns whether a valid key is currently applied, which works well as a startup smoke test. `License.IsValidLicense(string licenseKey)` checks a key string without applying it, so a configuration value can be validated before it is set. `License.DisableAppAnalytics()` opts the application out of anonymous usage reporting.

Because the members are static, set the key in one place such as `Program.cs` or a startup hook rather than before each archive operation. Confirm `IsLicensed` returns true in a smoke test so a missing or mistyped key surfaces during development. The [license keys guide](https://ironsoftware.com/csharp/zip/get-started/license-keys/) explains where to obtain and place the key.

```csharp
using IronZip;

License.LicenseKey = "IRONZIP.MYLICENSE.KEY.1EF01";
bool licensed = License.IsLicensed;
```

The [get started guide](https://ironsoftware.com/csharp/zip/get-started/) covers first-run setup for a new IronZip project.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronZip C# API Reference`
- v2 (human): `License: Apply Your IronZip Key in C#`
- v3 (balanced): `License Class | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronZip license key in C# with the static License class. Set LicenseKey, check IsLicensed, and validate keys with IsValidLicense.`
- v2 (human): `License your IronZip app in C# with the static License class: set the key at startup, confirm IsLicensed, and validate keys before use.`
- v3 (balanced): `Reference for the IronZip License class in C#: set LicenseKey at startup, check IsLicensed, and validate keys, with code examples.`

---

## Structured data

**TechArticle abstract**

> Licensing an IronZip application in C# runs through the static License class. Set License.LicenseKey once at startup, before creating any archive, to apply the key globally and remove trial limits. Read License.IsLicensed to confirm the key was accepted, call License.IsValidLicense to test a key without applying it, and call License.DisableAppAnalytics to opt out of anonymous usage reporting.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronZip API?",
    "answer": "License is a static class in the IronZip namespace, shipped in IronZip.dll. Its members are static, so set License.LicenseKey and read License.IsLicensed directly without constructing an instance."
  },
  {
    "question": "How do you apply an IronZip license key in C#?",
    "answer": "Set License.LicenseKey to your key string once at application startup, before creating any archive. The key applies globally for the process. Place it in a startup path such as Program.cs, and read License.IsLicensed to confirm it was accepted."
  }
]
```
