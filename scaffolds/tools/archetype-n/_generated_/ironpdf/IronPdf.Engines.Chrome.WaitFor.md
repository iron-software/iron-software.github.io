<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Engines.Chrome.WaitFor.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with Chrome engine in IronPDF runs through `WaitFor`. It represents managed wrapper of wait-for configurations.

`WaitFor` matters when an application needs to configure or invoke Chrome engine from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `WaitFor`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `AllFontsLoaded`, `HtmlElementByClassName`, `HtmlElementById`, `HtmlElementByName`. Assign options or invoke methods on the instance to configure or perform the operation. The [waitfor](https://ironpdf.com/how-to/waitfor/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain WaitFor from the relevant entry point in the IronPDF API
void Configure(WaitFor instance)
{
    instance.AllFontsLoaded();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the Chrome engine portion of the IronPDF C# API contains related types that work with `WaitFor` directly. `WaitFor` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `WaitFor` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `WaitFor` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `WaitFor`. Application code typically obtains or instantiates a single `WaitFor` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WaitFor Class - IronPDF C# API Reference`
- v2 (human): `WaitFor: IronPDF Chrome Engine in C#`
- v3 (balanced): `WaitFor Class | IronPDF C# Chrome Engine`

**Meta-description (120-160 chars)**
- v1 (algorithm): `WaitFor is the IronPDF class for Chrome engine in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF WaitFor class reference for C#: a managed wrapper of wait-for configurations.`
- v3 (balanced): `WaitFor (Chrome Engine) in IronPDF for C#: a managed wrapper of wait-for configurations. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, Chrome engine is driven through WaitFor from C#, which provides managed wrapper of wait-for configurations. WaitFor is in the IronPdf.Engines.Chrome namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is WaitFor located in the IronPDF object model?",
    "answer": "WaitFor is in the IronPdf.Engines.Chrome namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the WaitFor class used for in C#?",
    "answer": "WaitFor is the IronPDF class that managed wrapper of wait-for configurations. It is part of the IronPdf.Engines.Chrome namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on WaitFor?",
    "answer": "Common methods include AllFontsLoaded, HtmlElementByClassName, HtmlElementById, HtmlElementByName. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).