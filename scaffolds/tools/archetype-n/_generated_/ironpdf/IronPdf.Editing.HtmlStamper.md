<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Editing.HtmlStamper.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `HtmlStamper` in IronPDF when a C# application works with PDF editing. It represents stamps rich HTML content onto PDF pages with full CSS/JavaScript support.

`HtmlStamper` matters when an application needs to configure or invoke PDF editing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `HtmlStamper`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CssMediaType`, `HtmlBaseUrl`. Assign options or invoke methods on the instance to configure or perform the operation. The [stamping](https://ironpdf.com/how-to/stamping/#html-stamper) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new HtmlStamper();
var current = instance.CssMediaType;
// Read or assign other properties such as HtmlBaseUrl, CssMediaType
```

For the broader workflow, see the [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) guide in the IronPDF C# documentation. For broader context, the PDF editing portion of the IronPDF C# API contains related types that work with `HtmlStamper` directly. `HtmlStamper` instances inherit additional members from `Stamper` that may be relevant in advanced scenarios. In application code, treat `HtmlStamper` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `HtmlStamper` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `HtmlStamper`. Application code typically obtains or instantiates a single `HtmlStamper` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HtmlStamper Class - IronPDF C# API Reference`
- v2 (human): `HtmlStamper: IronPDF PDF Editing in C#`
- v3 (balanced): `HtmlStamper Class | IronPDF C# PDF Editing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `HtmlStamper is the IronPDF class for PDF editing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF HtmlStamper class reference for C#: stamps rich HTML content onto PDF pages with full CSS/JavaScript support.`
- v3 (balanced): `HtmlStamper (PDF Editing) in IronPDF for C#: stamps rich HTML content onto PDF pages with full CSS/JavaScript support. See members and usage.`

---

## Structured data

**TechArticle abstract**

> HtmlStamper is the IronPDF C# entry point for PDF editing, which provides stamps rich HTML content onto PDF pages with full CSS/JavaScript support. HtmlStamper is in the IronPdf.Editing namespace, derived from Stamper. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does HtmlStamper live in the IronPDF API?",
    "answer": "HtmlStamper is in the IronPdf.Editing namespace, shipped in IronPdf.dll. It derives from Stamper."
  },
  {
    "question": "What is the HtmlStamper class used for in C#?",
    "answer": "HtmlStamper is the IronPDF class that stamps rich HTML content onto PDF pages with full CSS/JavaScript support. It is part of the IronPdf.Editing namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of HtmlStamper?",
    "answer": "Properties commonly used on HtmlStamper include CssMediaType, HtmlBaseUrl. Each property configures one aspect of the PDF editing surface exposed by the class."
  },
  {
    "question": "How do you create a HtmlStamper in C#?",
    "answer": "Instantiate HtmlStamper directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).