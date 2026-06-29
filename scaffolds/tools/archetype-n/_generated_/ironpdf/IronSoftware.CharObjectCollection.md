<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.CharObjectCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with Iron Software API in IronPDF runs through `CharObjectCollection`. It is part of the IronPDF Iron Software API API.

`CharObjectCollection` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `CharObjectCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Count`, `IsReadOnly`, `Item[Int32]`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain CharObjectCollection from the relevant entry point in the IronPDF API
void Configure(CharObjectCollection instance)
{
    var current = instance.Count;
    instance.Add();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `CharObjectCollection` directly. `CharObjectCollection` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `CharObjectCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `CharObjectCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `CharObjectCollection`. Application code typically obtains or instantiates a single `CharObjectCollection` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CharObjectCollection Class - IronPDF C# API Reference`
- v2 (human): `CharObjectCollection: IronPDF Iron Software API in C#`
- v3 (balanced): `CharObjectCollection Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `CharObjectCollection is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF CharObjectCollection class reference for C#: the IronPDF class for Iron Software API.`
- v3 (balanced): `CharObjectCollection (Iron Software API) in IronPDF for C#: the IronPDF class for Iron Software API. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, Iron Software API is driven through CharObjectCollection from C#. CharObjectCollection is in the IronSoftware namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is CharObjectCollection located in the IronPDF object model?",
    "answer": "CharObjectCollection is in the IronSoftware namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the CharObjectCollection class used for in C#?",
    "answer": "CharObjectCollection is the IronPDF class that belongs to the IronSoftware namespace. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of CharObjectCollection?",
    "answer": "Properties commonly used on CharObjectCollection include Count, IsReadOnly, Item[Int32]. Each property configures one aspect of the Iron Software API surface exposed by the class."
  },
  {
    "question": "What methods are available on CharObjectCollection?",
    "answer": "Common methods include Add, Clear, Contains, CopyTo. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).