<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.CidGlyphWidths.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `CidGlyphWidths` in IronPDF when a C# application works with Iron Software API. It represents font glyph widths object.

`CidGlyphWidths` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `CidGlyphWidths`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `IsArray`, `Values`, `ValuesList`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain CidGlyphWidths from the relevant entry point in the IronPDF API
void Configure(CidGlyphWidths instance)
{
    var current = instance.IsArray;
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `CidGlyphWidths` directly. `CidGlyphWidths` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `CidGlyphWidths` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `CidGlyphWidths` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `CidGlyphWidths`. Application code typically obtains or instantiates a single `CidGlyphWidths` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `CidGlyphWidths` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CidGlyphWidths Class - IronPDF C# API Reference`
- v2 (human): `CidGlyphWidths: IronPDF Iron Software API in C#`
- v3 (balanced): `CidGlyphWidths Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `CidGlyphWidths is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF CidGlyphWidths class reference for C#: font glyph widths object.`
- v3 (balanced): `CidGlyphWidths (Iron Software API) in IronPDF for C#: font glyph widths object. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, Iron Software API is driven through CidGlyphWidths from C#, which provides font glyph widths object. CidGlyphWidths is in the IronSoftware namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is CidGlyphWidths located in the IronPDF object model?",
    "answer": "CidGlyphWidths is in the IronSoftware namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the CidGlyphWidths class used for in C#?",
    "answer": "CidGlyphWidths is the IronPDF class that font glyph widths object. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of CidGlyphWidths?",
    "answer": "Properties commonly used on CidGlyphWidths include IsArray, Values, ValuesList. Each property configures one aspect of the Iron Software API surface exposed by the class."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).