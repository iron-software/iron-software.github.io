<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Editing.ImageStamper.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF editing in IronPDF is handled through `ImageStamper`. It represents stamps images onto PDF pages for logos, signatures, watermarks, and visual elements.

`ImageStamper` matters when an application needs to configure or invoke PDF editing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ImageStamper`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `ImageUri`. Assign options or invoke methods on the instance to configure or perform the operation. The [stamping](https://ironpdf.com/how-to/stamping/#image-stamper) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain ImageStamper from the relevant entry point in the IronPDF API
void Configure(ImageStamper instance)
{
    var current = instance.ImageUri;
    instance.CleanupTempFile();
}
```

For the broader workflow, see the [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF editing portion of the IronPDF C# API contains related types that work with `ImageStamper` directly. `ImageStamper` instances inherit additional members from `Stamper` that may be relevant in advanced scenarios. In application code, treat `ImageStamper` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ImageStamper` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ImageStamper`. Application code typically obtains or instantiates a single `ImageStamper` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageStamper Class - IronPDF C# API Reference`
- v2 (human): `ImageStamper: IronPDF PDF Editing in C#`
- v3 (balanced): `ImageStamper Class | IronPDF C# PDF Editing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ImageStamper is the IronPDF class for PDF editing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ImageStamper class reference for C#: stamps images onto PDF pages for logos, signatures, watermarks, and visual...`
- v3 (balanced): `ImageStamper (PDF Editing) in IronPDF for C#: stamps images onto PDF pages for logos, signatures, watermarks, and visual... See members and usage.`

---

## Structured data

**TechArticle abstract**

> ImageStamper is the IronPDF C# entry point for PDF editing, which provides stamps images onto PDF pages for logos, signatures, watermarks, and visual elements. ImageStamper is in the IronPdf.Editing namespace, derived from Stamper. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageStamper live in the IronPDF API?",
    "answer": "ImageStamper is in the IronPdf.Editing namespace, shipped in IronPdf.dll. It derives from Stamper."
  },
  {
    "question": "What is the ImageStamper class used for in C#?",
    "answer": "ImageStamper is the IronPDF class that stamps images onto PDF pages for logos, signatures, watermarks, and visual elements. It is part of the IronPdf.Editing namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ImageStamper?",
    "answer": "Properties commonly used on ImageStamper include ImageUri. Each property configures one aspect of the PDF editing surface exposed by the class."
  },
  {
    "question": "How do you create a ImageStamper in C#?",
    "answer": "Instantiate ImageStamper directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).