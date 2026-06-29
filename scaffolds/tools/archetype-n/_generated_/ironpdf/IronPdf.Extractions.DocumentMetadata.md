<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.DocumentMetadata.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Text extraction in IronPDF is handled through `DocumentMetadata`. It represents document level metadata Contains information about the entire document, such as total pages and table counts.

`DocumentMetadata` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `DocumentMetadata`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `PageMetadata`, `TableCount`, `TotalPages`. Assign options or invoke methods on the instance to configure or perform the operation. The [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new DocumentMetadata();
var current = instance.PageMetadata;
// Read or assign other properties such as TableCount, TotalPages
```

For the broader workflow, see the [metadata](https://ironpdf.com/how-to/metadata/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `DocumentMetadata` directly. `DocumentMetadata` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `DocumentMetadata` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `DocumentMetadata` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `DocumentMetadata`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocumentMetadata Class - IronPDF C# API Reference`
- v2 (human): `DocumentMetadata: IronPDF Text Extraction in C#`
- v3 (balanced): `DocumentMetadata Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `DocumentMetadata is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF DocumentMetadata class reference for C#: document level metadata Contains information about the entire document...`
- v3 (balanced): `DocumentMetadata (Text Extraction) in IronPDF for C#: document level metadata Contains information about the entire document... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use DocumentMetadata in IronPDF to work with text extraction from C#. DocumentMetadata is in the IronPdf.Extractions namespace. Document level metadata Contains information about the entire document, such as total pages and table counts. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain DocumentMetadata?",
    "answer": "DocumentMetadata is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the DocumentMetadata class used for in C#?",
    "answer": "DocumentMetadata is the IronPDF class that document level metadata Contains information about the entire document, such as total pages and table counts. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of DocumentMetadata?",
    "answer": "Properties commonly used on DocumentMetadata include PageMetadata, TableCount, TotalPages. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a DocumentMetadata in C#?",
    "answer": "Instantiate DocumentMetadata directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).