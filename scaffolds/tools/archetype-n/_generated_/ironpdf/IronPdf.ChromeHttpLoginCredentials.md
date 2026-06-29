<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.ChromeHttpLoginCredentials.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`ChromeHttpLoginCredentials` is what IronPDF C# code uses for PDF generation. It represents credentials for IronPdf's embedded Chrome browser to log-in to an intranet, extranet or website, impersonating a user.

`ChromeHttpLoginCredentials` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ChromeHttpLoginCredentials`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `NetworkPassword`, `NetworkUsername`. Assign options or invoke methods on the instance to configure or perform the operation. The [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new ChromeHttpLoginCredentials();
var current = instance.NetworkPassword;
// Read or assign other properties such as NetworkUsername, NetworkPassword
instance.Finalize();
```

For the broader workflow, see the [add images to pdfs](https://ironpdf.com/how-to/add-images-to-pdfs/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `ChromeHttpLoginCredentials` directly. `ChromeHttpLoginCredentials` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ChromeHttpLoginCredentials` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ChromeHttpLoginCredentials` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ChromeHttpLoginCredentials`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChromeHttpLoginCredentials Class - IronPDF C# API Reference`
- v2 (human): `ChromeHttpLoginCredentials: IronPDF PDF Generation in C#`
- v3 (balanced): `ChromeHttpLoginCredentials Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ChromeHttpLoginCredentials is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ChromeHttpLoginCredentials class reference for C#: provides credentials for IronPdf's embedded Chrome browser to log-in to an...`
- v3 (balanced): `ChromeHttpLoginCredentials (PDF Generation) in IronPDF for C#: provides credentials for IronPdf's embedded Chrome browser to log-in to an... See members...`

---

## Structured data

**TechArticle abstract**

> Use ChromeHttpLoginCredentials in IronPDF to work with PDF generation from C#, which provides credentials for IronPdf's embedded Chrome browser to log-in to an intranet, extranet or website, impersonating a user. ChromeHttpLoginCredentials is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain ChromeHttpLoginCredentials?",
    "answer": "ChromeHttpLoginCredentials is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ChromeHttpLoginCredentials class used for in C#?",
    "answer": "ChromeHttpLoginCredentials is the IronPDF class that credentials for IronPdf's embedded Chrome browser to log-in to an intranet, extranet or website, impersonating a user. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ChromeHttpLoginCredentials?",
    "answer": "Properties commonly used on ChromeHttpLoginCredentials include NetworkPassword, NetworkUsername. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a ChromeHttpLoginCredentials in C#?",
    "answer": "Instantiate ChromeHttpLoginCredentials directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).