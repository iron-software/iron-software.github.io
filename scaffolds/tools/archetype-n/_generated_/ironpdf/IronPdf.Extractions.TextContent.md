<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.TextContent.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `TextContent` in IronPDF when a C# application works with text extraction. It represents extracted text content outside of tables Provides methods to access text content for the entire document or specific pages.

`TextContent` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `TextContent`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `PageTexts`, `RawText`. Assign options or invoke methods on the instance to configure or perform the operation. The [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new TextContent();
var current = instance.PageTexts;
// Read or assign other properties such as RawText, PageTexts
instance.GetText();
```

For the broader workflow, see the [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `TextContent` directly. `TextContent` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `TextContent` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `TextContent` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `TextContent`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextContent Class - IronPDF C# API Reference`
- v2 (human): `TextContent: IronPDF Text Extraction in C#`
- v3 (balanced): `TextContent Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TextContent is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TextContent class reference for C#: extracted text content outside of tables Provides methods to access text...`
- v3 (balanced): `TextContent (Text Extraction) in IronPDF for C#: extracted text content outside of tables Provides methods to access text... See members and usage.`

---

## Structured data

**TechArticle abstract**

> TextContent handles text extraction in IronPDF from C#. TextContent is in the IronPdf.Extractions namespace. Extracted text content outside of tables Provides methods to access text content for the entire document or specific pages. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is TextContent defined in?",
    "answer": "TextContent is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the TextContent class used for in C#?",
    "answer": "TextContent is the IronPDF class that extracted text content outside of tables Provides methods to access text content for the entire document or specific pages. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of TextContent?",
    "answer": "Properties commonly used on TextContent include PageTexts, RawText. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a TextContent in C#?",
    "answer": "Instantiate TextContent directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).