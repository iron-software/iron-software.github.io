<!--
GENERATED SAMPLE — Archetype N-Full (full/interface)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Bookmarks.IPdfBookMarkCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/interface — implementor list scanned from docfx; verify before publishing.
-->

## Injected overview (Markdown)

PDF bookmarks in IronPDF is exposed through the `IPdfBookMarkCollection` contract. It is the IronPDF contract for PDF bookmarks, so code can work with PDF bookmarks uniformly across implementors rather than binding to a concrete type.

Concrete implementors include `PdfBookMarkCollection`, `IronPDF concrete implementor`. Code that accepts `IPdfBookMarkCollection` works uniformly across these implementors, so applications can read or configure C# PDF features without binding to a specific concrete type.

Most of the usable surface is inherited. The members that carry everyday use of this contract are `Count`, `FirstBookmark`, `LastBookmark`, `Parent`; consult these first when implementing or consuming `IPdfBookMarkCollection`. The [bookmarks](https://ironpdf.com/how-to/bookmarks/) walks through typical use in the IronPDF C# documentation.

```csharp
using IronPdf;

// IPdfBookMarkCollection is consumed as the API surface for the family of implementors
void Consume(IPdfBookMarkCollection target)
{
    // Use members defined on the interface; concrete behavior follows the implementor
}
```

For collection-wide operations and end-to-end examples, see the IronPDF C# documentation for related guides. For collection-wide operations on `IPdfBookMarkCollection` instances, the IronPDF C# documentation lists the relevant container types and their methods. Concrete behavior depends on which implementor of `IPdfBookMarkCollection` is returned at runtime; consult the specific class reference for type-specific members. Polymorphic access through `IPdfBookMarkCollection` lets code work uniformly across the family of implementors, with a cast required only when type-specific behavior is needed. The reference tables below list the full set of members defined on `IPdfBookMarkCollection` along with any inherited members exposed through the contract. In a typical IronPDF C# workflow, `IPdfBookMarkCollection` appears as a parameter or return type at the boundary between the application and the IronPDF API. See the methods table below for the complete set of members defined directly on `IPdfBookMarkCollection`. Implementing `IPdfBookMarkCollection` directly in application code is uncommon; the typical pattern is to consume instances returned from the IronPDF API.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IPdfBookMarkCollection Interface - IronPDF C# API Reference`
- v2 (human): `IPdfBookMarkCollection: IronPDF PDF Bookmarks in C#`
- v3 (balanced): `IPdfBookMarkCollection Interface | IronPDF C# PDF Bookmarks`

**Meta-description (120-160 chars)**
- v1 (algorithm): `IPdfBookMarkCollection is the IronPDF interface for PDF bookmarks in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF IPdfBookMarkCollection interface reference for C#: the IronPDF interface for PDF bookmarks.`
- v3 (balanced): `IPdfBookMarkCollection (PDF Bookmarks) in IronPDF for C#: the IronPDF interface for PDF bookmarks. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use IPdfBookMarkCollection in IronPDF to work with PDF bookmarks from C#. IPdfBookMarkCollection is in the IronPdf.Bookmarks namespace. Concrete IronPDF types implement this contract; consumers depend on the interface rather than a specific implementor.

**FAQPage entries**

```json
[
  {
    "question": "What implements IPdfBookMarkCollection in IronPDF?",
    "answer": "Concrete implementors of IPdfBookMarkCollection in IronPDF include PdfBookMarkCollection. Code that accepts IPdfBookMarkCollection works uniformly across all implementors, with a cast to the concrete type only required when type-specific behavior is needed."
  },
  {
    "question": "How do you use IPdfBookMarkCollection in C# code?",
    "answer": "Accept IPdfBookMarkCollection as a parameter or return type in C# code that needs to work uniformly across IronPDF implementors. The interface defines the contract; concrete behavior is provided by the implementor returned at runtime."
  },
  {
    "question": "What is the difference between IPdfBookMarkCollection and a concrete implementor?",
    "answer": "IPdfBookMarkCollection is the interface contract; its concrete implementors carry the actual behavior. Reference IPdfBookMarkCollection when writing code that should work across multiple implementors; use a concrete type when a single implementor's behavior is required."
  },
  {
    "question": "Which namespace and assembly contain IPdfBookMarkCollection?",
    "answer": "IPdfBookMarkCollection is in the IronPdf.Bookmarks namespace, shipped in IronPdf.dll. Concrete classes such as PdfBookMarkCollection implement it."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/interface).