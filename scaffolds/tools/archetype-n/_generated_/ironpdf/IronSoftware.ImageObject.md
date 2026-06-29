<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.ImageObject.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`ImageObject` is the object IronPDF C# code works with for Iron Software API. It represents an image object embedded within a PDF page.

`ImageObject` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ImageObject`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `BoundingBox`, `Client`, `DocumentId`, `Image`. Assign options or invoke methods on the instance to configure or perform the operation. The [image to PDF](https://ironpdf.com/how-to/image-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain ImageObject from the relevant entry point in the IronPDF API
void Configure(ImageObject instance)
{
    var current = instance.BoundingBox;
    instance.Clone();
}
```

For the broader workflow, see the [page orientation rotation](https://ironpdf.com/how-to/page-orientation-rotation/) guide in the IronPDF C# documentation. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `ImageObject` directly. `ImageObject` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ImageObject` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ImageObject` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ImageObject`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageObject Class - IronPDF C# API Reference`
- v2 (human): `ImageObject: IronPDF Iron Software API in C#`
- v3 (balanced): `ImageObject Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ImageObject is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ImageObject class reference for C#: represents an image object embedded within a PDF page.`
- v3 (balanced): `ImageObject (Iron Software API) in IronPDF for C#: represents an image object embedded within a PDF page. See members and usage.`

---

## Structured data

**TechArticle abstract**

> ImageObject handles Iron Software API in IronPDF from C#, which provides an image object embedded within a PDF page. ImageObject is in the IronSoftware namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is ImageObject defined in?",
    "answer": "ImageObject is in the IronSoftware namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ImageObject class used for in C#?",
    "answer": "ImageObject is the IronPDF class that an image object embedded within a PDF page. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ImageObject?",
    "answer": "Properties commonly used on ImageObject include BoundingBox, Client, DocumentId, Image. Each property configures one aspect of the Iron Software API surface exposed by the class."
  },
  {
    "question": "What methods are available on ImageObject?",
    "answer": "Common methods include Clone, ToJson. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).