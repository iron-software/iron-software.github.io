<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Bookmarks.PdfBookMarkCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF bookmarks in IronPDF is handled through `PdfBookMarkCollection`. It manages a collection of PDF bookmarks (document outline) for navigation.

`PdfBookMarkCollection` matters when an application needs to configure or invoke PDF bookmarks from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfBookMarkCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Count`, `FirstBookmark`, `LastBookmark`, `Parent`. Assign options or invoke methods on the instance to configure or perform the operation. The [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfBookMarkCollection from the relevant entry point in the IronPDF API
void Configure(PdfBookMarkCollection instance)
{
    var current = instance.Count;
    instance.AddBookMarkAtEnd();
}
```

For the broader workflow, see the [bookmarks](https://ironpdf.com/how-to/bookmarks/) guide in the IronPDF C# documentation. For broader context, the PDF bookmarks portion of the IronPDF C# API contains related types that work with `PdfBookMarkCollection` directly. `PdfBookMarkCollection` instances inherit additional members from `PdfClientAccessor` that may be relevant in advanced scenarios. In application code, treat `PdfBookMarkCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfBookMarkCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfBookMarkCollection`. Application code typically obtains or instantiates a single `PdfBookMarkCollection` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfBookMarkCollection Class - IronPDF C# API Reference`
- v2 (human): `PdfBookMarkCollection: IronPDF PDF Bookmarks in C#`
- v3 (balanced): `PdfBookMarkCollection Class | IronPDF C# PDF Bookmarks`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfBookMarkCollection is the IronPDF class for PDF bookmarks in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfBookMarkCollection class reference for C#: manages a collection of PDF bookmarks (document outline) for navigation.`
- v3 (balanced): `PdfBookMarkCollection (PDF Bookmarks) in IronPDF for C#: manages a collection of PDF bookmarks (document outline) for navigation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfBookMarkCollection handles PDF bookmarks in IronPDF from C# and manages a collection of PDF bookmarks (document outline) for navigation. PdfBookMarkCollection is in the IronPdf.Bookmarks namespace, derived from PdfClientAccessor. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is PdfBookMarkCollection defined in?",
    "answer": "PdfBookMarkCollection is in the IronPdf.Bookmarks namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor."
  },
  {
    "question": "What is the PdfBookMarkCollection class used for in C#?",
    "answer": "PdfBookMarkCollection is the IronPDF class that manages a collection of PDF bookmarks (document outline) for navigation. It is part of the IronPdf.Bookmarks namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfBookMarkCollection?",
    "answer": "Properties commonly used on PdfBookMarkCollection include Count, FirstBookmark, LastBookmark, Parent. Each property configures one aspect of the PDF bookmarks surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfBookMarkCollection?",
    "answer": "Common methods include AddBookMarkAtEnd, AddBookMarkAtStart, GetAllBookmarks, GetBookmarkAfter. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).