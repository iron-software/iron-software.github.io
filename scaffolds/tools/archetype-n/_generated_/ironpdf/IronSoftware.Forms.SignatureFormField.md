<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.Forms.SignatureFormField.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF forms in IronPDF runs through `SignatureFormField`. It is part of the IronPDF PDF forms API.

`SignatureFormField` matters when an application needs to configure or invoke PDF forms from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `SignatureFormField`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Annotations`, `Choices`, `Client`, `DefaultAppearance`. Assign options or invoke methods on the instance to configure or perform the operation. The [create forms](https://ironpdf.com/how-to/create-forms/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain SignatureFormField from the relevant entry point in the IronPDF API
void Configure(SignatureFormField instance)
{
    var current = instance.Annotations;
    instance.SetDefaultFont();
}
```

For the broader workflow, see the [edit forms](https://ironpdf.com/how-to/edit-forms/) guide in the IronPDF C# documentation. For broader context, the PDF forms portion of the IronPDF C# API contains related types that work with `SignatureFormField` directly. `SignatureFormField` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `SignatureFormField` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `SignatureFormField` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `SignatureFormField`. Application code typically obtains or instantiates a single `SignatureFormField` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SignatureFormField Class - IronPDF C# API Reference`
- v2 (human): `SignatureFormField: IronPDF PDF Forms in C#`
- v3 (balanced): `SignatureFormField Class | IronPDF C# PDF Forms`

**Meta-description (120-160 chars)**
- v1 (algorithm): `SignatureFormField is the IronPDF class for PDF forms in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF SignatureFormField class reference for C#: the IronPDF class for PDF forms.`
- v3 (balanced): `SignatureFormField (PDF Forms) in IronPDF for C#: the IronPDF class for PDF forms. See members and usage.`

---

## Structured data

**TechArticle abstract**

> SignatureFormField handles PDF forms in IronPDF from C#. SignatureFormField is in the IronSoftware.Forms namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is SignatureFormField defined in?",
    "answer": "SignatureFormField is in the IronSoftware.Forms namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the SignatureFormField class used for in C#?",
    "answer": "SignatureFormField is the IronPDF class that belongs to the IronSoftware.Forms namespace. It is part of the IronSoftware.Forms namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of SignatureFormField?",
    "answer": "Properties commonly used on SignatureFormField include Annotations, Choices, Client, DefaultAppearance. Each property configures one aspect of the PDF forms surface exposed by the class."
  },
  {
    "question": "How do you create a SignatureFormField in C#?",
    "answer": "Instantiate SignatureFormField directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).