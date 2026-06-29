<!--
Archetype N-Mid, static class (4 members) — IronWebScraper. Frame D.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.License.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

Activating IronWebScraper across an application runs through `License`, the static entry point for license keys. Set `License.LicenseKey` to your key once at application startup, before any crawl begins, and the key applies globally for the process. A valid license removes the trial limits from scraping runs.

Three more members support the workflow. `License.IsLicensed` returns whether a valid key is currently applied, which works well as a startup smoke test. `License.IsValidLicense(string licenseKey)` checks a key string without applying it, so a configuration value can be validated before it is set. `License.DisableAppAnalytics()` opts the application out of anonymous usage reporting.

Because the members are static, set the key in one place such as `Program.cs` or a startup hook rather than before each crawl. Confirm `IsLicensed` returns true in a smoke test so a missing or mistyped key surfaces during development. The [license keys guide](https://ironsoftware.com/csharp/webscraper/get-started/license-keys/) explains where to obtain and place the key.

```csharp
using IronWebScraper;

License.LicenseKey = "IRONWEBSCRAPER.MYLICENSE.KEY.1EF01";
bool licensed = License.IsLicensed;
```

The [IronWebScraper documentation](https://ironsoftware.com/csharp/webscraper/docs/) collects the guides a licensed project will use next.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License - IronWebScraper C# API Reference`
- v2 (human): `License: Apply Your IronWebScraper Key in C#`
- v3 (balanced): `License Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronWebScraper license key in C# with the static License class. Set LicenseKey, check IsLicensed, and validate keys with IsValidLicense.`
- v2 (human): `License your IronWebScraper app in C# with the static License class: set the key at startup, confirm IsLicensed, and validate keys before use.`
- v3 (balanced): `Reference for the IronWebScraper License class in C#: set LicenseKey at startup, check IsLicensed, and validate keys, with code examples.`

---

## Structured data

**TechArticle abstract**

> Licensing an IronWebScraper application in C# runs through the static License class. Set License.LicenseKey once at startup, before any crawl, to apply the key globally and remove trial limits. Read License.IsLicensed to confirm the key was accepted, call License.IsValidLicense to test a key without applying it, and call License.DisableAppAnalytics to opt out of anonymous usage reporting.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronWebScraper API?",
    "answer": "License is a static class in the IronWebScraper namespace, shipped in IronWebScraper.dll. Its members are static, so set License.LicenseKey and read License.IsLicensed directly without constructing an instance."
  },
  {
    "question": "How do you apply an IronWebScraper license key in C#?",
    "answer": "Set License.LicenseKey to your key string once at application startup, before any crawl begins. The key applies globally for the process. Place it in a startup path such as Program.cs, and read License.IsLicensed to confirm it was accepted."
  }
]
```
