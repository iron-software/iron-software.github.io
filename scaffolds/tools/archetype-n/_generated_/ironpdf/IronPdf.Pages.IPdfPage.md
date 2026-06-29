<!--
GENERATED SAMPLE — Archetype N-Full (full/interface)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Pages.IPdfPage.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/interface — implementor list scanned from docfx; verify before publishing.
-->

## Injected overview (Markdown)

Working with PDF pages through a shared contract runs through `IPdfPage`. It represents PDF document page interface, so code can work with PDF pages uniformly across implementors rather than binding to a concrete type.

Concrete implementors include `PdfPage`, `IronPDF concrete implementor`. Code that accepts `IPdfPage` works uniformly across these implementors, so applications can read or configure C# PDF features without binding to a specific concrete type.

Most of the usable surface is inherited. The members that carry everyday use of this contract are `Characters`, `Lines`, `PageRotation`, `PrintHeight`; consult these first when implementing or consuming `IPdfPage`.

```csharp
using IronPdf;

// IPdfPage is consumed as the API surface for the family of implementors
void Consume(IPdfPage target)
{
    // Use members defined on the interface; concrete behavior follows the implementor
}
```

For collection-wide operations and end-to-end examples, see the IronPDF C# documentation for related guides. For collection-wide operations on `IPdfPage` instances, the IronPDF C# documentation lists the relevant container types and their methods. Concrete behavior depends on which implementor of `IPdfPage` is returned at runtime; consult the specific class reference for type-specific members. Polymorphic access through `IPdfPage` lets code work uniformly across the family of implementors, with a cast required only when type-specific behavior is needed. The reference tables below list the full set of members defined on `IPdfPage` along with any inherited members exposed through the contract. In a typical IronPDF C# workflow, `IPdfPage` appears as a parameter or return type at the boundary between the application and the IronPDF API. See the methods table below for the complete set of members defined directly on `IPdfPage`. Implementing `IPdfPage` directly in application code is uncommon; the typical pattern is to consume instances returned from the IronPDF API. When iterating over a collection of `IPdfPage` instances, prefer the inherited members for portable code; downcast only when type-specific behavior is required.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IPdfPage Interface - IronPDF C# API Reference`
- v2 (human): `IPdfPage: IronPDF PDF Pages in C#`
- v3 (balanced): `IPdfPage Interface | IronPDF C# PDF Pages`

**Meta-description (120-160 chars)**
- v1 (algorithm): `IPdfPage is the IronPDF interface for PDF pages in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF IPdfPage interface reference for C#: PDF document page interface.`
- v3 (balanced): `IPdfPage (PDF Pages) in IronPDF for C#: PDF document page interface. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF pages is driven through IPdfPage from C#, which provides PDF document page interface. IPdfPage is in the IronPdf.Pages namespace, derived from IDocumentPage<IPdfPageObjectModel>. Concrete IronPDF types implement this contract; consumers depend on the interface rather than a specific implementor.

**FAQPage entries**

```json
[
  {
    "question": "What implements IPdfPage in IronPDF?",
    "answer": "Concrete implementors of IPdfPage in IronPDF include PdfPage. Code that accepts IPdfPage works uniformly across all implementors, with a cast to the concrete type only required when type-specific behavior is needed."
  },
  {
    "question": "How do you use IPdfPage in C# code?",
    "answer": "Accept IPdfPage as a parameter or return type in C# code that needs to work uniformly across IronPDF implementors. The interface defines the contract; concrete behavior is provided by the implementor returned at runtime."
  },
  {
    "question": "What is the difference between IPdfPage and a concrete implementor?",
    "answer": "IPdfPage is the interface contract; its concrete implementors carry the actual behavior. Reference IPdfPage when writing code that should work across multiple implementors; use a concrete type when a single implementor's behavior is required."
  },
  {
    "question": "Where is IPdfPage located in the IronPDF object model?",
    "answer": "IPdfPage is in the IronPdf.Pages namespace, shipped in IronPdf.dll. It extends IDocumentPage<IPdfPageObjectModel>. Concrete classes such as PdfPage implement it."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/interface).