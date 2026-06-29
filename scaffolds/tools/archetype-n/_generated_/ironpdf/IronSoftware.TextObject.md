<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.TextObject.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Iron Software API in IronPDF is handled through `TextObject`. It represents document text object.

`TextObject` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `TextObject`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `BoundingBox`, `Client`, `Contents`, `ContentStart`. Assign options or invoke methods on the instance to configure or perform the operation. The [draw text and bitmap](https://ironpdf.com/how-to/draw-text-and-bitmap/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain TextObject from the relevant entry point in the IronPDF API
void Configure(TextObject instance)
{
    var current = instance.BoundingBox;
    instance.Clone();
}
```

For the broader workflow, see the [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) guide in the IronPDF C# documentation. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `TextObject` directly. `TextObject` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `TextObject` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `TextObject` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `TextObject`. Application code typically obtains or instantiates a single `TextObject` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextObject Class - IronPDF C# API Reference`
- v2 (human): `TextObject: IronPDF Iron Software API in C#`
- v3 (balanced): `TextObject Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TextObject is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TextObject class reference for C#: document text object.`
- v3 (balanced): `TextObject (Iron Software API) in IronPDF for C#: document text object. See members and usage.`

---

## Structured data

**TechArticle abstract**

> TextObject is the IronPDF C# entry point for Iron Software API, which provides document text object. TextObject is in the IronSoftware namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextObject live in the IronPDF API?",
    "answer": "TextObject is in the IronSoftware namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the TextObject class used for in C#?",
    "answer": "TextObject is the IronPDF class that document text object. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of TextObject?",
    "answer": "Properties commonly used on TextObject include BoundingBox, Client, Contents, ContentStart. Each property configures one aspect of the Iron Software API surface exposed by the class."
  },
  {
    "question": "What methods are available on TextObject?",
    "answer": "Common methods include Clone, GetGlyphInfo, ToJson. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).