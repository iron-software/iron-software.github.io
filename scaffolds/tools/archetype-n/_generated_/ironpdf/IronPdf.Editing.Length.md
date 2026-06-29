<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Editing.Length.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF editing in IronPDF is handled through `Length`. It represents a value with a specific measurement unit.

`Length` matters when an application needs to configure or invoke PDF editing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `Length`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `DPI`, `Unit`, `Value`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain Length from the relevant entry point in the IronPDF API
void Configure(Length instance)
{
    var current = instance.DPI;
    instance.ToCentimeter();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF editing portion of the IronPDF C# API contains related types that work with `Length` directly. `Length` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `Length` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `Length` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `Length`. Application code typically obtains or instantiates a single `Length` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `Length` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Length Class - IronPDF C# API Reference`
- v2 (human): `Length: IronPDF PDF Editing in C#`
- v3 (balanced): `Length Class | IronPDF C# PDF Editing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `Length is the IronPDF class for PDF editing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF Length class reference for C#: represents a value with a specific measurement unit.`
- v3 (balanced): `Length (PDF Editing) in IronPDF for C#: represents a value with a specific measurement unit. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use Length in IronPDF to work with PDF editing from C#, which provides a value with a specific measurement unit. Length is in the IronPdf.Editing namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain Length?",
    "answer": "Length is in the IronPdf.Editing namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the Length class used for in C#?",
    "answer": "Length is the IronPDF class that a value with a specific measurement unit. It is part of the IronPdf.Editing namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of Length?",
    "answer": "Properties commonly used on Length include DPI, Unit, Value. Each property configures one aspect of the PDF editing surface exposed by the class."
  },
  {
    "question": "How do you create a Length in C#?",
    "answer": "Instantiate Length directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).