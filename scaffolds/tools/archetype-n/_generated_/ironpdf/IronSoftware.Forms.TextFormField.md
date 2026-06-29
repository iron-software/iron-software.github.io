<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.Forms.TextFormField.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `TextFormField` in IronPDF when a C# application works with PDF forms. It represents text box which accepts arbitrary user input.

`TextFormField` matters when an application needs to configure or invoke PDF forms from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `TextFormField`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Annotations`, `Choices`, `Client`, `DefaultAppearance`. Assign options or invoke methods on the instance to configure or perform the operation. The [draw text and bitmap](https://ironpdf.com/how-to/draw-text-and-bitmap/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain TextFormField from the relevant entry point in the IronPDF API
void Configure(TextFormField instance)
{
    var current = instance.Annotations;
    instance.SetDefaultFont();
}
```

For the broader workflow, see the [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) guide in the IronPDF C# documentation. For broader context, the PDF forms portion of the IronPDF C# API contains related types that work with `TextFormField` directly. `TextFormField` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `TextFormField` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `TextFormField` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `TextFormField`. Application code typically obtains or instantiates a single `TextFormField` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextFormField Class - IronPDF C# API Reference`
- v2 (human): `TextFormField: IronPDF PDF Forms in C#`
- v3 (balanced): `TextFormField Class | IronPDF C# PDF Forms`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TextFormField is the IronPDF class for PDF forms in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TextFormField class reference for C#: text box which accepts arbitrary user input.`
- v3 (balanced): `TextFormField (PDF Forms) in IronPDF for C#: text box which accepts arbitrary user input. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use TextFormField in IronPDF to work with PDF forms from C#, which provides text box which accepts arbitrary user input. TextFormField is in the IronSoftware.Forms namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain TextFormField?",
    "answer": "TextFormField is in the IronSoftware.Forms namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the TextFormField class used for in C#?",
    "answer": "TextFormField is the IronPDF class that text box which accepts arbitrary user input. It is part of the IronSoftware.Forms namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of TextFormField?",
    "answer": "Properties commonly used on TextFormField include Annotations, Choices, Client, DefaultAppearance. Each property configures one aspect of the PDF forms surface exposed by the class."
  },
  {
    "question": "How do you create a TextFormField in C#?",
    "answer": "Instantiate TextFormField directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).