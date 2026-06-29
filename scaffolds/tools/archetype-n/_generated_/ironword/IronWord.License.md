<!--
N-Mid (static class, 4 members). Frame E (feature-fronted). IronWord.
Members verified 2026-06-23: IsLicensed (static bool get), LicenseKey (static string get/set),
DisableAppAnalytics() static void, IsValidLicense(string) static bool. Base Object; static class.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.License.html
-->

## Injected overview (Markdown)

Licensing for an IronWord application is handled in one place through the static `License` class. Setting a license key here is what removes the trial watermark and unlocks the library for production, and a developer typically does it once at application startup before any document work begins.

Assign your key to `LicenseKey` to apply it for the rest of the process. `IsLicensed` reports, as a `bool`, whether a valid key is currently in effect, which is useful for an environment check or a startup assertion. `IsValidLicense(string licenseKey)` tests a candidate key without applying it, so you can validate a value pulled from configuration before committing to it. `DisableAppAnalytics()` opts the process out of anonymous usage analytics. Because every member is static, set the key as early as possible, before the first `WordDocument` is created, so the whole run is licensed.

```csharp
using IronWord;

License.LicenseKey = "IRONWORD-MYKEY-1234";
bool licensed = License.IsLicensed;
```

The [Word to PDF how-to](https://ironsoftware.com/csharp/word/how-to/word-to-pdf/) and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) show the document workflows that run once the key is set.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronWord C# API`
- v2 (human): `License: Apply an IronWord Key in C#`
- v3 (balanced): `License Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronWord license in C# with the static License class: set LicenseKey, check IsLicensed, and validate a key with IsValidLicense.`
- v2 (human): `Unlock IronWord for production in C# with the static License class: set your LicenseKey at startup, then confirm it with IsLicensed.`
- v3 (balanced): `Reference for the IronWord License class in C#: set LicenseKey, read IsLicensed, validate with IsValidLicense, and disable analytics.`

---

## Structured data

**TechArticle abstract**

> Applying an IronWord license in C# runs through the static License class. Assign a key to LicenseKey at application startup to unlock the library and remove the trial watermark, read IsLicensed to confirm a valid key is in effect, and call IsValidLicense to test a candidate key without applying it. DisableAppAnalytics opts the process out of usage analytics.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronWord API?",
    "answer": "License is a static class in the IronWord namespace, shipped in IronWord.dll. It derives from Object and exposes the static LicenseKey property and IsLicensed, IsValidLicense, and DisableAppAnalytics members."
  },
  {
    "question": "How do you apply an IronWord license key in C#?",
    "answer": "Set License.LicenseKey to your key string as early as possible, before creating a WordDocument, so the whole process is licensed. Read License.IsLicensed to confirm the key took effect, or call IsValidLicense to validate a key before applying it."
  }
]
```
