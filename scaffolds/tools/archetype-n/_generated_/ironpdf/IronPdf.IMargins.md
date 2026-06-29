<!--
GENERATED SAMPLE — Archetype N-Full (full/interface)
Target page: https://ironpdf.com/object-reference/api/IronPdf.IMargins.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/interface — implementor list scanned from docfx; verify before publishing.
-->

## Injected overview (Markdown)

`IMargins` is what IronPDF hands back when C# code reads PDF generation. It represents document margin values, in millimeters, so code can work with PDF generation uniformly across implementors rather than binding to a concrete type.

Concrete implementors include `ChromePdfRenderOptions`, `IronPDF concrete implementor`. Code that accepts `IMargins` works uniformly across these implementors, so applications can read or configure C# PDF features without binding to a specific concrete type.

Most of the usable surface is inherited. The members that carry everyday use of this contract are `MarginBottom`, `MarginLeft`, `MarginRight`, `MarginTop`; consult these first when implementing or consuming `IMargins`. The [custom margins](https://ironpdf.com/how-to/custom-margins/) walks through typical use in the IronPDF C# documentation.

```csharp
using IronPdf;

// IMargins is consumed as the API surface for the family of implementors
void Consume(IMargins target)
{
    // Use members defined on the interface; concrete behavior follows the implementor
}
```

For collection-wide operations and end-to-end examples, see the IronPDF C# documentation for related guides. For collection-wide operations on `IMargins` instances, the IronPDF C# documentation lists the relevant container types and their methods. Concrete behavior depends on which implementor of `IMargins` is returned at runtime; consult the specific class reference for type-specific members. Polymorphic access through `IMargins` lets code work uniformly across the family of implementors, with a cast required only when type-specific behavior is needed. The reference tables below list the full set of members defined on `IMargins` along with any inherited members exposed through the contract. In a typical IronPDF C# workflow, `IMargins` appears as a parameter or return type at the boundary between the application and the IronPDF API. See the methods table below for the complete set of members defined directly on `IMargins`. Implementing `IMargins` directly in application code is uncommon; the typical pattern is to consume instances returned from the IronPDF API.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IMargins Interface - IronPDF C# API Reference`
- v2 (human): `IMargins: IronPDF PDF Generation in C#`
- v3 (balanced): `IMargins Interface | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `IMargins is the IronPDF interface for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF IMargins interface reference for C#: document margin values, in millimeters.`
- v3 (balanced): `IMargins (PDF Generation) in IronPDF for C#: document margin values, in millimeters. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use IMargins in IronPDF to work with PDF generation from C#, which provides document margin values, in millimeters. IMargins is in the IronPdf namespace. Concrete IronPDF types implement this contract; consumers depend on the interface rather than a specific implementor.

**FAQPage entries**

```json
[
  {
    "question": "What implements IMargins in IronPDF?",
    "answer": "Concrete implementors of IMargins in IronPDF include ChromePdfRenderOptions. Code that accepts IMargins works uniformly across all implementors, with a cast to the concrete type only required when type-specific behavior is needed."
  },
  {
    "question": "How do you use IMargins in C# code?",
    "answer": "Accept IMargins as a parameter or return type in C# code that needs to work uniformly across IronPDF implementors. The interface defines the contract; concrete behavior is provided by the implementor returned at runtime."
  },
  {
    "question": "What is the difference between IMargins and a concrete implementor?",
    "answer": "IMargins is the interface contract; its concrete implementors carry the actual behavior. Reference IMargins when writing code that should work across multiple implementors; use a concrete type when a single implementor's behavior is required."
  },
  {
    "question": "Which namespace and assembly contain IMargins?",
    "answer": "IMargins is in the IronPdf namespace, shipped in IronPdf.dll. Concrete classes such as ChromePdfRenderOptions implement it."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/interface).