<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.Forms.ComboboxFormField.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `ComboboxFormField` in IronPDF when a C# application works with PDF forms. It represents list of items selectable by the user.

`ComboboxFormField` matters when an application needs to configure or invoke PDF forms from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ComboboxFormField`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `AllowCustomOption`, `AllowMultipleSelections`, `Annotations`, `Choices`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain ComboboxFormField from the relevant entry point in the IronPDF API
void Configure(ComboboxFormField instance)
{
    var current = instance.AllowCustomOption;
    instance.SetDefaultFont();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF forms portion of the IronPDF C# API contains related types that work with `ComboboxFormField` directly. `ComboboxFormField` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ComboboxFormField` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ComboboxFormField` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ComboboxFormField`. Application code typically obtains or instantiates a single `ComboboxFormField` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ComboboxFormField Class - IronPDF C# API Reference`
- v2 (human): `ComboboxFormField: IronPDF PDF Forms in C#`
- v3 (balanced): `ComboboxFormField Class | IronPDF C# PDF Forms`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ComboboxFormField is the IronPDF class for PDF forms in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ComboboxFormField class reference for C#: list of items selectable by the user.`
- v3 (balanced): `ComboboxFormField (PDF Forms) in IronPDF for C#: list of items selectable by the user. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use ComboboxFormField in IronPDF to work with PDF forms from C#. ComboboxFormField is in the IronSoftware.Forms namespace. List of items selectable by the user. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain ComboboxFormField?",
    "answer": "ComboboxFormField is in the IronSoftware.Forms namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ComboboxFormField class used for in C#?",
    "answer": "ComboboxFormField is the IronPDF class that list of items selectable by the user. It is part of the IronSoftware.Forms namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ComboboxFormField?",
    "answer": "Properties commonly used on ComboboxFormField include AllowCustomOption, AllowMultipleSelections, Annotations, Choices. Each property configures one aspect of the PDF forms surface exposed by the class."
  },
  {
    "question": "How do you create a ComboboxFormField in C#?",
    "answer": "Instantiate ComboboxFormField directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).