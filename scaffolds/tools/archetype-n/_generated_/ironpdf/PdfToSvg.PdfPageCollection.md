<!--
N-Mid (0 declared members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.PdfPageCollection class reference page.
-->

## Injected overview (Markdown)

When converting a PDF to SVG with IronPDF, `PdfPageCollection` gives you ordered, read-only access to every `PdfPage` in the document. It extends `ReadOnlyCollection<PdfPage>`, so the full set of standard .NET collection capabilities, including index access, `Count`, enumeration with `foreach`, and LINQ queries, are available without any additional setup.

Because `PdfPageCollection` inherits from `ReadOnlyCollection<PdfPage>`, the collection cannot be mutated directly. This design keeps the page list consistent with the source PDF throughout a conversion pipeline. Each element is a `PdfPage` that represents one page of the original document, and you can inspect or select pages before passing them to an SVG rendering step.

Typical use involves obtaining a `PdfPageCollection` from the conversion API, iterating over its `PdfPage` entries to apply per-page logic (such as filtering by page number or selecting a range), and then feeding the result into the SVG output stage. Because the type is a standard `ReadOnlyCollection<PdfPage>`, any method that accepts an `IList<PdfPage>` or `IEnumerable<PdfPage>` works with it directly.

```csharp
using PdfToSvg;

// Enumerate every page in the collection
foreach (PdfPage page in pdfPageCollection)
{
    Console.WriteLine($"Page index: {pdfPageCollection.IndexOf(page)}");
}
```

For broader context on PDF-to-SVG workflows in IronPDF, see the [IronPDF documentation hub](https://ironpdf.com/docs/) and the [PDF conversion how-to guides](https://ironpdf.com/how-to/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPageCollection Class - IronPDF C# API Reference`
- v2 (human): `PdfPageCollection: Access PDF Pages in C#`
- v3 (balanced): `PdfPageCollection Class | IronPDF C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `PdfPageCollection in IronPDF C# exposes a read-only ordered list of PdfPage objects for PDF-to-SVG conversion, extending ReadOnlyCollection<PdfPage>.`
- v2 (human): `Use PdfPageCollection in IronPDF to iterate and select pages from a PDF before SVG conversion, backed by ReadOnlyCollection<PdfPage> in C#.`
- v3 (balanced): `Reference for IronPDF's PdfPageCollection class in C#: a read-only, enumerable collection of PdfPage objects used in PDF-to-SVG workflows.`

---

## Structured data

**TechArticle abstract**

> PdfPageCollection provides ordered, read-only access to the PdfPage entries in a PDF document during IronPDF's PDF-to-SVG conversion pipeline. It extends ReadOnlyCollection of PdfPage, making standard .NET index access, Count, foreach enumeration, and LINQ available without additional setup. The collection cannot be mutated directly, keeping page state consistent throughout a conversion workflow.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfPageCollection live in the IronPDF API?",
    "answer": "PdfPageCollection is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It extends ReadOnlyCollection<PdfPage>, giving it standard .NET read-only list behaviour across PDF-to-SVG conversion workflows."
  },
  {
    "question": "How do you iterate over pages in a PdfPageCollection in C#?",
    "answer": "Use a foreach loop directly on the PdfPageCollection, since it extends ReadOnlyCollection<PdfPage>. You can also use index access via the inherited indexer, check Count for the total number of pages, or apply LINQ queries to filter or select specific PdfPage entries."
  }
]
```