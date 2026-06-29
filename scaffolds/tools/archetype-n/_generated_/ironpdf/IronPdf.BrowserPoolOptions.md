<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.BrowserPoolOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `BrowserPoolOptions`. It represents configuration options for the browser tab pool, which reuses browser tabs across renders to eliminate subprocess startup latency.

`BrowserPoolOptions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `BrowserPoolOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Enabled`, `IdleTimeoutSeconds`, `MaxIdleTabs`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

var instance = new BrowserPoolOptions();
var current = instance.Enabled;
// Read or assign other properties such as IdleTimeoutSeconds, MaxIdleTabs
instance.ToString();
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `BrowserPoolOptions` directly. `BrowserPoolOptions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `BrowserPoolOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `BrowserPoolOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `BrowserPoolOptions`. Application code typically obtains or instantiates a single `BrowserPoolOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BrowserPoolOptions Class - IronPDF C# API Reference`
- v2 (human): `BrowserPoolOptions: IronPDF PDF Generation in C#`
- v3 (balanced): `BrowserPoolOptions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `BrowserPoolOptions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF BrowserPoolOptions class reference for C#: configuration options for the browser tab pool, which reuses browser tabs...`
- v3 (balanced): `BrowserPoolOptions (PDF Generation) in IronPDF for C#: configuration options for the browser tab pool, which reuses browser tabs... See members and usage.`

---

## Structured data

**TechArticle abstract**

> BrowserPoolOptions is the IronPDF C# entry point for PDF generation, which provides configuration options for the browser tab pool, which reuses browser tabs across renders to eliminate subprocess startup latency. BrowserPoolOptions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does BrowserPoolOptions live in the IronPDF API?",
    "answer": "BrowserPoolOptions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the BrowserPoolOptions class used for in C#?",
    "answer": "BrowserPoolOptions is the IronPDF class that configuration options for the browser tab pool, which reuses browser tabs across renders to eliminate subprocess startup latency. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of BrowserPoolOptions?",
    "answer": "Properties commonly used on BrowserPoolOptions include Enabled, IdleTimeoutSeconds, MaxIdleTabs. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a BrowserPoolOptions in C#?",
    "answer": "Instantiate BrowserPoolOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).