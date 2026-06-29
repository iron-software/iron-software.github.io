<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Pages.LineTextObject.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `LineTextObject` in IronPDF when a C# application works with PDF pages. It represents a single line of text within a PDF page, combining multiple text chunks.

`LineTextObject` matters when an application needs to configure or invoke PDF pages from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `LineTextObject`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `ToJson`. Assign options or invoke methods on the instance to configure or perform the operation. The [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain LineTextObject from the relevant entry point in the IronPDF API
void Configure(LineTextObject instance)
{
    instance.ToJson();
}
```

For the broader workflow, see the [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) guide in the IronPDF C# documentation. For broader context, the PDF pages portion of the IronPDF C# API contains related types that work with `LineTextObject` directly. `LineTextObject` instances inherit additional members from `TextObject` that may be relevant in advanced scenarios. In application code, treat `LineTextObject` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `LineTextObject` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `LineTextObject`. Application code typically obtains or instantiates a single `LineTextObject` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LineTextObject Class - IronPDF C# API Reference`
- v2 (human): `LineTextObject: IronPDF PDF Pages in C#`
- v3 (balanced): `LineTextObject Class | IronPDF C# PDF Pages`

**Meta-description (120-160 chars)**
- v1 (algorithm): `LineTextObject is the IronPDF class for PDF pages in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF LineTextObject class reference for C#: represents a single line of text within a PDF page, combining multiple text...`
- v3 (balanced): `LineTextObject (PDF Pages) in IronPDF for C#: represents a single line of text within a PDF page, combining multiple text... See members and usage.`

---

## Structured data

**TechArticle abstract**

> LineTextObject is the IronPDF C# entry point for PDF pages, which provides a single line of text within a PDF page, combining multiple text chunks. LineTextObject is in the IronPdf.Pages namespace, derived from TextObject. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does LineTextObject live in the IronPDF API?",
    "answer": "LineTextObject is in the IronPdf.Pages namespace, shipped in IronPdf.dll. It derives from TextObject."
  },
  {
    "question": "What is the LineTextObject class used for in C#?",
    "answer": "LineTextObject is the IronPDF class that a single line of text within a PDF page, combining multiple text chunks. It is part of the IronPdf.Pages namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on LineTextObject?",
    "answer": "Common methods include ToJson. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).