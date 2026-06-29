<!--
GENERATED SAMPLE — Archetype N-Full (full/interface)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Pages.IPdfPageCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/interface — implementor list scanned from docfx; verify before publishing.
-->

## Injected overview (Markdown)

`IPdfPageCollection` is the contract IronPDF C# code works through for PDF pages. It represents collection of PDF pages, so code can work with PDF pages uniformly across implementors rather than binding to a concrete type.

Concrete implementors include `PdfPagesCollection`, `IronPDF concrete implementor`. Code that accepts `IPdfPageCollection` works uniformly across these implementors, so applications can read or configure C# PDF features without binding to a specific concrete type.

Most of the usable surface is inherited. The members that carry everyday use of this contract are `the `IPdfPageCollection` contract members`, `the `IPdfPageCollection` contract members`; consult these first when implementing or consuming `IPdfPageCollection`. The [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) walks through typical use in the IronPDF C# documentation.

```csharp
using IronPdf;

// IPdfPageCollection is consumed as the API surface for the family of implementors
void Consume(IPdfPageCollection target)
{
    // Use members defined on the interface; concrete behavior follows the implementor
}
```

For collection-wide operations and end-to-end examples, see the IronPDF C# documentation for related guides. For collection-wide operations on `IPdfPageCollection` instances, the IronPDF C# documentation lists the relevant container types and their methods. Concrete behavior depends on which implementor of `IPdfPageCollection` is returned at runtime; consult the specific class reference for type-specific members. Polymorphic access through `IPdfPageCollection` lets code work uniformly across the family of implementors, with a cast required only when type-specific behavior is needed. The reference tables below list the full set of members defined on `IPdfPageCollection` along with any inherited members exposed through the contract. In a typical IronPDF C# workflow, `IPdfPageCollection` appears as a parameter or return type at the boundary between the application and the IronPDF API. See the methods table below for the complete set of members defined directly on `IPdfPageCollection`. Implementing `IPdfPageCollection` directly in application code is uncommon; the typical pattern is to consume instances returned from the IronPDF API.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IPdfPageCollection Interface - IronPDF C# API Reference`
- v2 (human): `IPdfPageCollection: IronPDF PDF Pages in C#`
- v3 (balanced): `IPdfPageCollection Interface | IronPDF C# PDF Pages`

**Meta-description (120-160 chars)**
- v1 (algorithm): `IPdfPageCollection is the IronPDF interface for PDF pages in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF IPdfPageCollection interface reference for C#: collection of PDF pages.`
- v3 (balanced): `IPdfPageCollection (PDF Pages) in IronPDF for C#: collection of PDF pages. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use IPdfPageCollection in IronPDF to work with PDF pages from C#, which provides collection of PDF pages. IPdfPageCollection is in the IronPdf.Pages namespace, derived from IDocumentPageCollection<IPdfPage>. Concrete IronPDF types implement this contract; consumers depend on the interface rather than a specific implementor.

**FAQPage entries**

```json
[
  {
    "question": "What implements IPdfPageCollection in IronPDF?",
    "answer": "Concrete implementors of IPdfPageCollection in IronPDF include PdfPagesCollection. Code that accepts IPdfPageCollection works uniformly across all implementors, with a cast to the concrete type only required when type-specific behavior is needed."
  },
  {
    "question": "How do you use IPdfPageCollection in C# code?",
    "answer": "Accept IPdfPageCollection as a parameter or return type in C# code that needs to work uniformly across IronPDF implementors. The interface defines the contract; concrete behavior is provided by the implementor returned at runtime."
  },
  {
    "question": "What is the difference between IPdfPageCollection and a concrete implementor?",
    "answer": "IPdfPageCollection is the interface contract; its concrete implementors carry the actual behavior. Reference IPdfPageCollection when writing code that should work across multiple implementors; use a concrete type when a single implementor's behavior is required."
  },
  {
    "question": "Which namespace and assembly contain IPdfPageCollection?",
    "answer": "IPdfPageCollection is in the IronPdf.Pages namespace, shipped in IronPdf.dll. It extends IDocumentPageCollection<IPdfPage>. Concrete classes such as PdfPagesCollection implement it."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/interface).