<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.PageMetadata.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PageMetadata` is the object IronPDF C# code works with for text extraction. It represents per-page metadata Contains information about a specific page, such as page number, table count, and word count.

`PageMetadata` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PageMetadata`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `PageBounds`, `PageNumber`, `TableCount`, `WordCount`. Assign options or invoke methods on the instance to configure or perform the operation. The [metadata](https://ironpdf.com/how-to/metadata/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new PageMetadata();
var current = instance.PageBounds;
// Read or assign other properties such as PageNumber, TableCount
```

For the broader workflow, see the [table of contents](https://ironpdf.com/how-to/table-of-contents/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `PageMetadata` directly. `PageMetadata` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PageMetadata` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PageMetadata` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PageMetadata`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PageMetadata Class - IronPDF C# API Reference`
- v2 (human): `PageMetadata: IronPDF Text Extraction in C#`
- v3 (balanced): `PageMetadata Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PageMetadata is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PageMetadata class reference for C#: per-page metadata Contains information about a specific page, such as page...`
- v3 (balanced): `PageMetadata (Text Extraction) in IronPDF for C#: per-page metadata Contains information about a specific page, such as page... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PageMetadata in IronPDF to work with text extraction from C#. PageMetadata is in the IronPdf.Extractions namespace. Per-page metadata Contains information about a specific page, such as page number, table count, and word count. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PageMetadata?",
    "answer": "PageMetadata is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PageMetadata class used for in C#?",
    "answer": "PageMetadata is the IronPDF class that per-page metadata Contains information about a specific page, such as page number, table count, and word count. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PageMetadata?",
    "answer": "Properties commonly used on PageMetadata include PageBounds, PageNumber, TableCount, WordCount. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a PageMetadata in C#?",
    "answer": "Instantiate PageMetadata directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).