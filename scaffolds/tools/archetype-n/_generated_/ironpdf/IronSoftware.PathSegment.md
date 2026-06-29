<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.PathSegment.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with Iron Software API in IronPDF runs through `PathSegment`. It represents path segment.

`PathSegment` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PathSegment`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Coordinate`, `IsClose`, `SeparateFromPrevious`, `Type`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

var instance = new PathSegment();
var current = instance.Coordinate;
// Read or assign other properties such as IsClose, SeparateFromPrevious
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `PathSegment` directly. `PathSegment` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PathSegment` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PathSegment` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PathSegment`. Application code typically obtains or instantiates a single `PathSegment` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `PathSegment` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PathSegment Class - IronPDF C# API Reference`
- v2 (human): `PathSegment: IronPDF Iron Software API in C#`
- v3 (balanced): `PathSegment Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PathSegment is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PathSegment class reference for C#: path segment.`
- v3 (balanced): `PathSegment (Iron Software API) in IronPDF for C#: path segment. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PathSegment is the IronPDF C# entry point for Iron Software API, which provides path segment. PathSegment is in the IronSoftware namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PathSegment live in the IronPDF API?",
    "answer": "PathSegment is in the IronSoftware namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PathSegment class used for in C#?",
    "answer": "PathSegment is the IronPDF class that path segment. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PathSegment?",
    "answer": "Properties commonly used on PathSegment include Coordinate, IsClose, SeparateFromPrevious, Type. Each property configures one aspect of the Iron Software API surface exposed by the class."
  },
  {
    "question": "How do you create a PathSegment in C#?",
    "answer": "Instantiate PathSegment directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).