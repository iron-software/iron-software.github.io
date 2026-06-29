<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.FontObject.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `FontObject` in IronPDF when a C# application works with Iron Software API. It represents document font object.

`FontObject` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `FontObject`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Ascent`, `BaseFont`, `BBoxBottom`, `BBoxLeft`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain FontObject from the relevant entry point in the IronPDF API
void Configure(FontObject instance)
{
    var current = instance.Ascent;
    instance.GetHashCode();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `FontObject` directly. `FontObject` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `FontObject` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `FontObject` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `FontObject`. Application code typically obtains or instantiates a single `FontObject` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `FontObject` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontObject Class - IronPDF C# API Reference`
- v2 (human): `FontObject: IronPDF Iron Software API in C#`
- v3 (balanced): `FontObject Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `FontObject is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF FontObject class reference for C#: document font object.`
- v3 (balanced): `FontObject (Iron Software API) in IronPDF for C#: document font object. See members and usage.`

---

## Structured data

**TechArticle abstract**

> FontObject is the IronPDF C# entry point for Iron Software API, which provides document font object. FontObject is in the IronSoftware namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does FontObject live in the IronPDF API?",
    "answer": "FontObject is in the IronSoftware namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the FontObject class used for in C#?",
    "answer": "FontObject is the IronPDF class that document font object. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of FontObject?",
    "answer": "Properties commonly used on FontObject include Ascent, BaseFont, BBoxBottom, BBoxLeft. Each property configures one aspect of the Iron Software API surface exposed by the class."
  },
  {
    "question": "What methods are available on FontObject?",
    "answer": "Common methods include GetHashCode, ToJson. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).