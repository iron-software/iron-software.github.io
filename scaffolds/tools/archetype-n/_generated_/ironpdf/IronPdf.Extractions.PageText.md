<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.PageText.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PageText` is the object IronPDF C# code works with for text extraction. It represents text content for a single page Contains text extracted from a single page of a PDF document.

`PageText` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PageText`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `PageBounds`, `PageNumber`, `PositionedLines`, `Text`. Assign options or invoke methods on the instance to configure or perform the operation. The [draw text and bitmap](https://ironpdf.com/how-to/draw-text-and-bitmap/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new PageText();
var current = instance.PageBounds;
// Read or assign other properties such as PageNumber, PositionedLines
```

For the broader workflow, see the [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `PageText` directly. `PageText` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PageText` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PageText` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PageText`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PageText Class - IronPDF C# API Reference`
- v2 (human): `PageText: IronPDF Text Extraction in C#`
- v3 (balanced): `PageText Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PageText is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PageText class reference for C#: text content for a single page Contains text extracted from a single page...`
- v3 (balanced): `PageText (Text Extraction) in IronPDF for C#: text content for a single page Contains text extracted from a single page... See members and usage.`

---

## Structured data

**TechArticle abstract**

> PageText is the IronPDF C# entry point for text extraction. PageText is in the IronPdf.Extractions namespace. Text content for a single page Contains text extracted from a single page of a PDF document. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PageText live in the IronPDF API?",
    "answer": "PageText is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PageText class used for in C#?",
    "answer": "PageText is the IronPDF class that text content for a single page Contains text extracted from a single page of a PDF document. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PageText?",
    "answer": "Properties commonly used on PageText include PageBounds, PageNumber, PositionedLines, Text. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a PageText in C#?",
    "answer": "Instantiate PageText directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).