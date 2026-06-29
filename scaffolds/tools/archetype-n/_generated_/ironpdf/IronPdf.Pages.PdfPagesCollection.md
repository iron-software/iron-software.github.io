<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Pages.PdfPagesCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF pages in IronPDF runs through `PdfPagesCollection`. It manages the collection of pages within a PDF document.

`PdfPagesCollection` matters when an application needs to configure or invoke PDF pages from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfPagesCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `Add`, `Clear`, `GetHashCode`, `RefreshPages`. Assign options or invoke methods on the instance to configure or perform the operation. The [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfPagesCollection from the relevant entry point in the IronPDF API
void Configure(PdfPagesCollection instance)
{
    instance.Add();
}
```

For the broader workflow, see the [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF pages portion of the IronPDF C# API contains related types that work with `PdfPagesCollection` directly. `PdfPagesCollection` instances inherit additional members from `ObservableCollection<IPdfPage>` that may be relevant in advanced scenarios. In application code, treat `PdfPagesCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfPagesCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfPagesCollection`. Application code typically obtains or instantiates a single `PdfPagesCollection` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPagesCollection Class - IronPDF C# API Reference`
- v2 (human): `PdfPagesCollection: IronPDF PDF Pages in C#`
- v3 (balanced): `PdfPagesCollection Class | IronPDF C# PDF Pages`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfPagesCollection is the IronPDF class for PDF pages in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfPagesCollection class reference for C#: manages the collection of pages within a PDF document.`
- v3 (balanced): `PdfPagesCollection (PDF Pages) in IronPDF for C#: manages the collection of pages within a PDF document. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF pages is driven through PdfPagesCollection from C# and manages the collection of pages within a PDF document. PdfPagesCollection is in the IronPdf.Pages namespace, derived from ObservableCollection<IPdfPage>. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is PdfPagesCollection located in the IronPDF object model?",
    "answer": "PdfPagesCollection is in the IronPdf.Pages namespace, shipped in IronPdf.dll. It derives from ObservableCollection<IPdfPage>."
  },
  {
    "question": "What is the PdfPagesCollection class used for in C#?",
    "answer": "PdfPagesCollection is the IronPDF class that manages the collection of pages within a PDF document. It is part of the IronPdf.Pages namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on PdfPagesCollection?",
    "answer": "Common methods include Add, Clear, GetHashCode, RefreshPages. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).