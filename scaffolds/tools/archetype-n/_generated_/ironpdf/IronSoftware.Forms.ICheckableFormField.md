<!--
GENERATED SAMPLE — Archetype N-Full (full/interface)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.Forms.ICheckableFormField.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/interface — implementor list scanned from docfx; verify before publishing.
-->

## Injected overview (Markdown)

Working with PDF forms through a shared contract runs through `ICheckableFormField`. It is the IronPDF contract for PDF forms, so code can work with PDF forms uniformly across implementors rather than binding to a concrete type.

Concrete implementors include `CheckboxFormField`, `RadioFormField`. Code that accepts `ICheckableFormField` works uniformly across these implementors, so applications can read or configure C# PDF features without binding to a specific concrete type.

Most of the usable surface is inherited. The members that carry everyday use of this contract are `SetDefaultFont(String, Int32, Color)`, `Annotations`, `Choices`, `DefaultAppearance`; consult these first when implementing or consuming `ICheckableFormField`. The [create forms](https://ironpdf.com/how-to/create-forms/) walks through typical use in the IronPDF C# documentation.

```csharp
using IronPdf;

// ICheckableFormField is consumed as the API surface for the family of implementors
void Consume(ICheckableFormField target)
{
    // Use members defined on the interface; concrete behavior follows the implementor
}
```

For collection-wide operations and end-to-end examples, see the IronPDF C# documentation for related guides. For collection-wide operations on `ICheckableFormField` instances, the IronPDF C# documentation lists the relevant container types and their methods. Concrete behavior depends on which implementor of `ICheckableFormField` is returned at runtime; consult the specific class reference for type-specific members. Polymorphic access through `ICheckableFormField` lets code work uniformly across the family of implementors, with a cast required only when type-specific behavior is needed. The reference tables below list the full set of members defined on `ICheckableFormField` along with any inherited members exposed through the contract. In a typical IronPDF C# workflow, `ICheckableFormField` appears as a parameter or return type at the boundary between the application and the IronPDF API. See the methods table below for the complete set of members defined directly on `ICheckableFormField`. Implementing `ICheckableFormField` directly in application code is uncommon; the typical pattern is to consume instances returned from the IronPDF API.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ICheckableFormField Interface - IronPDF C# API Reference`
- v2 (human): `ICheckableFormField: IronPDF PDF Forms in C#`
- v3 (balanced): `ICheckableFormField Interface | IronPDF C# PDF Forms`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ICheckableFormField is the IronPDF interface for PDF forms in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ICheckableFormField interface reference for C#: the IronPDF interface for PDF forms.`
- v3 (balanced): `ICheckableFormField (PDF Forms) in IronPDF for C#: the IronPDF interface for PDF forms. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use ICheckableFormField in IronPDF to work with PDF forms from C#. ICheckableFormField is in the IronSoftware.Forms namespace, derived from IFormField. Concrete IronPDF types implement this contract; consumers depend on the interface rather than a specific implementor.

**FAQPage entries**

```json
[
  {
    "question": "What implements ICheckableFormField in IronPDF?",
    "answer": "Concrete implementors of ICheckableFormField in IronPDF include CheckboxFormField, RadioFormField. Code that accepts ICheckableFormField works uniformly across all implementors, with a cast to the concrete type only required when type-specific behavior is needed."
  },
  {
    "question": "How do you use ICheckableFormField in C# code?",
    "answer": "Accept ICheckableFormField as a parameter or return type in C# code that needs to work uniformly across IronPDF implementors. The interface defines the contract; concrete behavior is provided by the implementor returned at runtime."
  },
  {
    "question": "What is the difference between ICheckableFormField and a concrete implementor?",
    "answer": "ICheckableFormField is the interface contract; its concrete implementors carry the actual behavior. Reference ICheckableFormField when writing code that should work across multiple implementors; use a concrete type when a single implementor's behavior is required."
  },
  {
    "question": "Which namespace and assembly contain ICheckableFormField?",
    "answer": "ICheckableFormField is in the IronSoftware.Forms namespace, shipped in IronPdf.dll. It extends IFormField. Concrete classes such as CheckboxFormField, RadioFormField implement it."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/interface).