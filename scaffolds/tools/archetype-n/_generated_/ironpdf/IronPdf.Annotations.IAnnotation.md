<!--
GENERATED SAMPLE — Archetype N-Full (full/interface)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Annotations.IAnnotation.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/interface — implementor list scanned from docfx; verify before publishing.
-->

## Injected overview (Markdown)

`IAnnotation` is the contract IronPDF C# code works through for PDF annotations. It represents PDF document annotation, so code can work with PDF annotations uniformly across implementors rather than binding to a concrete type.

Concrete implementors include `LinkAnnotation`, `TextAnnotation`. Code that accepts `IAnnotation` works uniformly across these implementors, so applications can read or configure C# PDF features without binding to a specific concrete type.

Most of the usable surface is inherited. The members that carry everyday use of this contract are `AnnotationIndex`, `Color`, `Contents`, `DocumentId`; consult these first when implementing or consuming `IAnnotation`.

```csharp
using IronPdf;

// IAnnotation is consumed as the API surface for the family of implementors
void Consume(IAnnotation target)
{
    // Use members defined on the interface; concrete behavior follows the implementor
}
```

For collection-wide operations and end-to-end examples, see the IronPDF C# documentation for related guides. For collection-wide operations on `IAnnotation` instances, the IronPDF C# documentation lists the relevant container types and their methods. Concrete behavior depends on which implementor of `IAnnotation` is returned at runtime; consult the specific class reference for type-specific members. Polymorphic access through `IAnnotation` lets code work uniformly across the family of implementors, with a cast required only when type-specific behavior is needed. The reference tables below list the full set of members defined on `IAnnotation` along with any inherited members exposed through the contract. In a typical IronPDF C# workflow, `IAnnotation` appears as a parameter or return type at the boundary between the application and the IronPDF API. See the methods table below for the complete set of members defined directly on `IAnnotation`. Implementing `IAnnotation` directly in application code is uncommon; the typical pattern is to consume instances returned from the IronPDF API. When iterating over a collection of `IAnnotation` instances, prefer the inherited members for portable code; downcast only when type-specific behavior is required.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IAnnotation Interface - IronPDF C# API Reference`
- v2 (human): `IAnnotation: IronPDF PDF Annotations in C#`
- v3 (balanced): `IAnnotation Interface | IronPDF C# PDF Annotations`

**Meta-description (120-160 chars)**
- v1 (algorithm): `IAnnotation is the IronPDF interface for PDF annotations in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF IAnnotation interface reference for C#: PDF document annotation.`
- v3 (balanced): `IAnnotation (PDF Annotations) in IronPDF for C#: PDF document annotation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> IAnnotation is the IronPDF C# entry point for PDF annotations, which provides PDF document annotation. IAnnotation is in the IronPdf.Annotations namespace. Concrete IronPDF types implement this contract; consumers depend on the interface rather than a specific implementor.

**FAQPage entries**

```json
[
  {
    "question": "What implements IAnnotation in IronPDF?",
    "answer": "Concrete implementors of IAnnotation in IronPDF include LinkAnnotation, TextAnnotation. Code that accepts IAnnotation works uniformly across all implementors, with a cast to the concrete type only required when type-specific behavior is needed."
  },
  {
    "question": "How do you use IAnnotation in C# code?",
    "answer": "Accept IAnnotation as a parameter or return type in C# code that needs to work uniformly across IronPDF implementors. The interface defines the contract; concrete behavior is provided by the implementor returned at runtime."
  },
  {
    "question": "What is the difference between IAnnotation and a concrete implementor?",
    "answer": "IAnnotation is the interface contract; its concrete implementors carry the actual behavior. Reference IAnnotation when writing code that should work across multiple implementors; use a concrete type when a single implementor's behavior is required."
  },
  {
    "question": "Where does IAnnotation live in the IronPDF API?",
    "answer": "IAnnotation is in the IronPdf.Annotations namespace, shipped in IronPdf.dll. Concrete classes such as LinkAnnotation, TextAnnotation implement it."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/interface).