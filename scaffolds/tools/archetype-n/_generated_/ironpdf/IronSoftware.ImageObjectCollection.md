<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.ImageObjectCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with Iron Software API in IronPDF runs through `ImageObjectCollection`. It represents observable collection of image objects.

`ImageObjectCollection` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ImageObjectCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `IsReadOnly`, `Items`. Assign options or invoke methods on the instance to configure or perform the operation. The [image to PDF](https://ironpdf.com/how-to/image-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain ImageObjectCollection from the relevant entry point in the IronPDF API
void Configure(ImageObjectCollection instance)
{
    var current = instance.IsReadOnly;
    instance.Add();
}
```

For the broader workflow, see the [PDF image flatten csharp](https://ironpdf.com/how-to/pdf-image-flatten-csharp/) guide in the IronPDF C# documentation. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `ImageObjectCollection` directly. `ImageObjectCollection` instances inherit additional members from `ObservableCollection<ImageObject>` that may be relevant in advanced scenarios. In application code, treat `ImageObjectCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ImageObjectCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ImageObjectCollection`. Application code typically obtains or instantiates a single `ImageObjectCollection` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageObjectCollection Class - IronPDF C# API Reference`
- v2 (human): `ImageObjectCollection: IronPDF Iron Software API in C#`
- v3 (balanced): `ImageObjectCollection Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ImageObjectCollection is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ImageObjectCollection class reference for C#: observable collection of image objects.`
- v3 (balanced): `ImageObjectCollection (Iron Software API) in IronPDF for C#: observable collection of image objects. See members and usage.`

---

## Structured data

**TechArticle abstract**

> ImageObjectCollection handles Iron Software API in IronPDF from C#, which provides observable collection of image objects. ImageObjectCollection is in the IronSoftware namespace, derived from ObservableCollection<ImageObject>. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is ImageObjectCollection defined in?",
    "answer": "ImageObjectCollection is in the IronSoftware namespace, shipped in IronPdf.dll. It derives from ObservableCollection<ImageObject>."
  },
  {
    "question": "What is the ImageObjectCollection class used for in C#?",
    "answer": "ImageObjectCollection is the IronPDF class that observable collection of image objects. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ImageObjectCollection?",
    "answer": "Properties commonly used on ImageObjectCollection include IsReadOnly, Items. Each property configures one aspect of the Iron Software API surface exposed by the class."
  },
  {
    "question": "What methods are available on ImageObjectCollection?",
    "answer": "Common methods include Add, Clear, GetHashCode, Remove. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).