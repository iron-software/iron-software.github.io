<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Engines.Chrome.ChromeClient.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`ChromeClient` is what IronPDF C# code uses for Chrome engine. It represents chrome client implementation which uses interop to satisfy functionality using native code ChromeClient utilize IronSoftware.JobQueue.JobQueueManager to queue requests to the native code.

`ChromeClient` matters when an application needs to configure or invoke Chrome engine from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ChromeClient`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `AddHtmlHeadersAndFooters`, `AddStamp`, `AddStamps`, `ApplyCookies`. Assign options or invoke methods on the instance to configure or perform the operation. The [ironpdf 2021 chrome rendering engine eap](https://ironpdf.com/how-to/ironpdf-2021-chrome-rendering-engine-eap/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain ChromeClient from the relevant entry point in the IronPDF API
void Configure(ChromeClient instance)
{
    instance.AddHtmlHeadersAndFooters();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the Chrome engine portion of the IronPDF C# API contains related types that work with `ChromeClient` directly. `ChromeClient` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ChromeClient` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ChromeClient` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ChromeClient`.

The full declaration uses the `ChromeClient<T>` generic form; docfx encodes generic arity as a numeric URL suffix, so the URL path reads `ChromeClient-1.html` even though the class name itself is the bare form with type parameters.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChromeClient Class - IronPDF C# API Reference`
- v2 (human): `ChromeClient: IronPDF Chrome Engine in C#`
- v3 (balanced): `ChromeClient Class | IronPDF C# Chrome Engine`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ChromeClient is the IronPDF class for Chrome engine in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ChromeClient class reference for C#: chrome client implementation which uses interop to satisfy functionality...`
- v3 (balanced): `ChromeClient (Chrome Engine) in IronPDF for C#: chrome client implementation which uses interop to satisfy functionality... See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, Chrome engine is driven through ChromeClient<T> from C#, which provides chrome client implementation which uses interop to satisfy functionality using native code ChromeClient utilize IronSoftware.JobQueue.JobQueueManager to queue requests to the native code. ChromeClient is in the IronPdf.Engines.Chrome namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is ChromeClient located in the IronPDF object model?",
    "answer": "ChromeClient is in the IronPdf.Engines.Chrome namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ChromeClient class used for in C#?",
    "answer": "ChromeClient is the IronPDF class that chrome client implementation which uses interop to satisfy functionality using native code ChromeClient utilize IronSoftware.JobQueue.JobQueueManager to queue requests to the native code. It is part of the IronPdf.Engines.Chrome namespace and is used through the IronPDF C# API."
  },
  {
    "question": "How do you create a ChromeClient in C#?",
    "answer": "Instantiate ChromeClient directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  },
  {
    "question": "What methods are available on ChromeClient?",
    "answer": "Common methods include AddHtmlHeadersAndFooters, AddStamp, AddStamps, ApplyCookies. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).