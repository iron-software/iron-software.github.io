<!--
N-Mid (static class, 4 members). Frame F. IronPPT. Members verified: IsLicensed, LicenseKey, DisableAppAnalytics(), IsValidLicense(string). Base Object.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.License.html
-->

## Injected overview (Markdown)

Apply your IronPPT license key and clear the trial watermark through the static `License` class. Set a key once at application startup and every presentation created afterward saves as a fully licensed file, so this is the type a developer reaches for behind a search like "IronPPT license key C#".

`LicenseKey` is a static `string` property: assign your key to it before the first `PresentationDocument` is created, typically in `Main` or a startup routine. `IsLicensed` is a read-only `bool` that reports whether the key currently applied is valid, useful as a startup assertion. `IsValidLicense` checks a key string without applying it, which lets a build pipeline confirm a key before deployment. `DisableAppAnalytics` turns off anonymous usage reporting for environments that require it. Because every member is static, there is no instance to construct and the key applies process-wide for the lifetime of the run.

```csharp
IronPPT.License.LicenseKey = "IRONPPT-MYKEY-1234";
```

The [create empty presentation example](https://ironsoftware.com/csharp/ppt/examples/create-empty-presentation/) shows the first save where the key takes effect, and the [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) builds on a licensed document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronPPT C# API Reference`
- v2 (human): `License: Apply an IronPPT Key in C#`
- v3 (balanced): `License Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply an IronPPT license key in C# with the static License class: set LicenseKey, check IsLicensed, validate with IsValidLicense before saving.`
- v2 (human): `Activate IronPPT in C# with the static License class: set your LicenseKey at startup, confirm IsLicensed, and clear the trial watermark.`
- v3 (balanced): `Reference for the IronPPT License class in C#: set LicenseKey, read IsLicensed, and validate a key with IsValidLicense at startup.`

---

## Structured data

**TechArticle abstract**

> Applying an IronPPT license key in C# runs through the static License class. Assign your key to the LicenseKey property at application startup before the first PresentationDocument is created, then read IsLicensed to confirm it is valid. IsValidLicense checks a key without applying it, and DisableAppAnalytics turns off anonymous usage reporting. Every member is static, so the key applies process-wide.

**FAQPage entries**

```json
[
  {
    "question": "Where does License live in the IronPPT API?",
    "answer": "License is a static class in the IronPPT namespace, shipped in IronPPT.dll, deriving from Object. Set its LicenseKey property at startup before creating a PresentationDocument."
  },
  {
    "question": "How do you apply an IronPPT license key in C#?",
    "answer": "Assign your key to the static License.LicenseKey property before the first PresentationDocument is created, usually in Main. Read License.IsLicensed to confirm the key is valid, or call IsValidLicense to check a key without applying it."
  }
]
```
