<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Bookmarks.PdfBookMark.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `PdfBookMark` in IronPDF when a C# application works with PDF bookmarks. It represents a single PDF bookmark (outline entry) for document navigation.

`PdfBookMark` matters when an application needs to configure or invoke PDF bookmarks from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfBookMark`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Bottom`, `Children`, `DestinationType`, `ItemId`. Assign options or invoke methods on the instance to configure or perform the operation. The [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfBookMark from the relevant entry point in the IronPDF API
void Configure(PdfBookMark instance)
{
    var current = instance.Bottom;
    instance.InsertBookMarkAfter();
}
```

For the broader workflow, see the [bookmarks](https://ironpdf.com/how-to/bookmarks/) guide in the IronPDF C# documentation. For broader context, the PDF bookmarks portion of the IronPDF C# API contains related types that work with `PdfBookMark` directly. `PdfBookMark` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfBookMark` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfBookMark` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfBookMark`. Application code typically obtains or instantiates a single `PdfBookMark` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfBookMark Class - IronPDF C# API Reference`
- v2 (human): `PdfBookMark: IronPDF PDF Bookmarks in C#`
- v3 (balanced): `PdfBookMark Class | IronPDF C# PDF Bookmarks`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfBookMark is the IronPDF class for PDF bookmarks in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfBookMark class reference for C#: represents a single PDF bookmark (outline entry) for document navigation.`
- v3 (balanced): `PdfBookMark (PDF Bookmarks) in IronPDF for C#: represents a single PDF bookmark (outline entry) for document navigation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF bookmarks is driven through PdfBookMark from C#, which provides a single PDF bookmark (outline entry) for document navigation. PdfBookMark is in the IronPdf.Bookmarks namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is PdfBookMark located in the IronPDF object model?",
    "answer": "PdfBookMark is in the IronPdf.Bookmarks namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfBookMark class used for in C#?",
    "answer": "PdfBookMark is the IronPDF class that a single PDF bookmark (outline entry) for document navigation. It is part of the IronPdf.Bookmarks namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfBookMark?",
    "answer": "Properties commonly used on PdfBookMark include Bottom, Children, DestinationType, ItemId. Each property configures one aspect of the PDF bookmarks surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfBookMark?",
    "answer": "Common methods include InsertBookMarkAfter, InsertBookMarkBefore. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).