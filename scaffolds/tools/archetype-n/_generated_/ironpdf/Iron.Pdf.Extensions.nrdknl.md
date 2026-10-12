<!--
N-Mid / interface (3 members). Frame C. No named implementors documented. IronPDF. Verified 2026-06-22.
Target: Iron.Pdf.Extensions.nrdknl
-->

## Injected overview (Markdown)

Implement `nrdknl` to declare the exact file version and NuGet package identity that an IronPDF extension component requires. The interface lives in the `Iron.Pdf.Extensions` namespace and exposes three methods: `GetExpectedFileVersion()`, which returns a `Version` object representing the minimum compatible binary version; `GetExpectedNuGetName()`, which returns the NuGet package name as a string; and `GetExpectedNuGetVersion()`, which returns the expected NuGet version string. Together, these three members give IronPDF's extension loader enough information to validate that the correct package, at the correct version, is present before the extension is activated.

The contract is particularly useful when building or distributing a custom IronPDF extension. Rather than hard-coding version checks in ad-hoc logic, an implementor centralises all compatibility metadata in one place. The loader can then call each method and compare the results against the installed assembly, surfacing a clear mismatch message instead of a cryptic runtime failure. This pattern keeps extension authors honest about their declared dependencies and makes automated compatibility audits straightforward.

Because no constructor is part of the contract, `nrdknl` is consumed through the interface reference, not through `new nrdknl()`. Any class in an extension assembly can implement it; the loader discovers the implementor at runtime and interrogates the three methods without needing to know the concrete type name.

For background on how IronPDF handles extensions and dependencies, see the [IronPDF documentation hub](https://ironpdf.com/docs/) and the [getting-started guide](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `nrdknl Interface - IronPDF Extensions C# API`
- v2 (human): `nrdknl: Extension Version Contract for IronPDF in C#`
- v3 (balanced): `nrdknl Interface | IronPDF Extensions C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `nrdknl defines the version and NuGet identity contract for IronPDF extensions in C#, exposing GetExpectedFileVersion, name, and version methods.`
- v2 (human): `Implement nrdknl in C# to declare the file version and NuGet package identity your IronPDF extension requires for compatibility validation.`
- v3 (balanced): `Reference for the IronPDF nrdknl interface in C#: the extension compatibility contract with GetExpectedFileVersion, name, and version members.`

---

## Structured data

**TechArticle abstract**

> Implement nrdknl to supply the file version and NuGet package identity that an IronPDF extension component requires. The interface, in the Iron.Pdf.Extensions namespace and shipped in IronPdf.dll, exposes GetExpectedFileVersion, GetExpectedNuGetName, and GetExpectedNuGetVersion. IronPDF's extension loader calls these methods to validate compatibility before activating the extension.

**FAQPage entries**

```json
[
  {
    "question": "Where does nrdknl live in the IronPDF API?",
    "answer": "nrdknl is an interface in the Iron.Pdf.Extensions namespace, shipped in IronPdf.dll. Its base type is Object, and it declares three members: GetExpectedFileVersion, GetExpectedNuGetName, and GetExpectedNuGetVersion."
  },
  {
    "question": "How do you implement nrdknl for a custom IronPDF extension?",
    "answer": "Create a class in your extension assembly that implements nrdknl, then return the required Version from GetExpectedFileVersion and the appropriate NuGet package name and version strings from GetExpectedNuGetName and GetExpectedNuGetVersion. IronPDF's loader discovers the implementor at runtime and uses those values to verify compatibility."
  }
]
```