<!--
N-Mid / interface (3 members). Frame C. No named implementor documented. IronPDF. Verified 2026-06-22.
Target: Iron.Pdf.Extensions.ymylmx
-->

## Injected overview (Markdown)

Implement `ymylmx` to declare the exact file version, NuGet package name, and NuGet package version that an IronPDF extension component requires at runtime. The interface lives in the `Iron.Pdf.Extensions` namespace and acts as a versioning contract: IronPDF's extension loader calls all three members to validate that a loaded assembly matches the expected dependency before activating it.

The three members divide cleanly by concern. `GetExpectedFileVersion()` returns a `Version` object representing the binary file version the extension was built against. `GetExpectedNuGetName()` returns the NuGet package identifier as a string, for example a package name like `IronPdf.Extensions.SomeFeature`. `GetExpectedNuGetVersion()` returns the NuGet version string for that package, enabling the loader to cross-check both the identity and the version of the dependency in a single pass.

Because the interface carries no state, an implementing class is typically a lightweight descriptor with no constructor arguments. The loader resolves implementors through reflection, so the class only needs to be visible to the extension host assembly. Coding against this contract rather than hard-coded strings keeps version mismatches detectable early, at load time, rather than at the point of first use.

Explore the broader IronPDF extension model at [https://ironpdf.com/docs/](https://ironpdf.com/docs/) and review dependency and compatibility guidance at [https://ironpdf.com/get-started/](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ymylmx Interface - IronPDF Extensions C# API`
- v2 (human): `ymylmx: IronPDF Extension Version Contract in C#`
- v3 (balanced): `ymylmx Interface | IronPDF Extensions C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ymylmx defines the IronPDF extension versioning contract in C#: implement it to declare expected file version, NuGet name, and NuGet version.`
- v2 (human): `Use ymylmx in IronPDF C# extensions to declare the required file version, NuGet package name, and version for safe runtime validation.`
- v3 (balanced): `Reference for the IronPDF ymylmx interface in C#: the extension versioning contract exposing GetExpectedFileVersion, NuGet name, and version.`

---

## Structured data

**TechArticle abstract**

> Implement ymylmx to supply the file version, NuGet package name, and NuGet package version that an IronPDF extension requires at load time. The interface is in the Iron.Pdf.Extensions namespace, shipped in IronPdf.dll, and its three members, GetExpectedFileVersion, GetExpectedNuGetName, and GetExpectedNuGetVersion, are called by the extension loader to validate dependency compatibility before the extension is activated.

**FAQPage entries**

```json
[
  {
    "question": "Where does ymylmx live in the IronPDF API?",
    "answer": "ymylmx is an interface in the Iron.Pdf.Extensions namespace, shipped in IronPdf.dll. Its base type is Object, and it declares three members: GetExpectedFileVersion, GetExpectedNuGetName, and GetExpectedNuGetVersion."
  },
  {
    "question": "How do you implement ymylmx for a custom IronPDF extension?",
    "answer": "Create a class in your extension assembly that implements ymylmx, returning the correct Version from GetExpectedFileVersion and the matching NuGet package identifier and version string from GetExpectedNuGetName and GetExpectedNuGetVersion. The IronPDF extension loader discovers the implementor via reflection and uses those values to confirm compatibility at load time."
  }
]
```