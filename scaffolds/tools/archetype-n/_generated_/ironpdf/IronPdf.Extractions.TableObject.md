<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.TableObject.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`TableObject` is what IronPDF C# code uses for text extraction. It represents an extracted table with structural information Contains the data and metadata for a table extracted from a PDF document.

`TableObject` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `TableObject`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `BoundingBox`, `ColumnCount`, `DataRows`, `HasHeaders`. Assign options or invoke methods on the instance to configure or perform the operation. The [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new TableObject();
var current = instance.BoundingBox;
// Read or assign other properties such as ColumnCount, DataRows
instance.GetCell();
```

For the broader workflow, see the [metadata](https://ironpdf.com/how-to/metadata/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `TableObject` directly. `TableObject` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `TableObject` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `TableObject` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `TableObject`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableObject Class - IronPDF C# API Reference`
- v2 (human): `TableObject: IronPDF Text Extraction in C#`
- v3 (balanced): `TableObject Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TableObject is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TableObject class reference for C#: represents an extracted table with structural information Contains the data...`
- v3 (balanced): `TableObject (Text Extraction) in IronPDF for C#: represents an extracted table with structural information Contains the data... See members and usage.`

---

## Structured data

**TechArticle abstract**

> TableObject is the IronPDF C# entry point for text extraction. TableObject is in the IronPdf.Extractions namespace. An extracted table with structural information Contains the data and metadata for a table extracted from a PDF document. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableObject live in the IronPDF API?",
    "answer": "TableObject is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the TableObject class used for in C#?",
    "answer": "TableObject is the IronPDF class that an extracted table with structural information Contains the data and metadata for a table extracted from a PDF document. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of TableObject?",
    "answer": "Properties commonly used on TableObject include BoundingBox, ColumnCount, DataRows, HasHeaders. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a TableObject in C#?",
    "answer": "Instantiate TableObject directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).