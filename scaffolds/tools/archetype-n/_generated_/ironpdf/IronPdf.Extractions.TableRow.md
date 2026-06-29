<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.TableRow.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `TableRow` in IronPDF when a C# application works with text extraction. It represents a table row Contains a collection of cells that make up a row in a table.

`TableRow` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `TableRow`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CellCount`, `Cells`, `Height`, `Item[Int32]`. Assign options or invoke methods on the instance to configure or perform the operation. The [table of contents](https://ironpdf.com/how-to/table-of-contents/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new TableRow();
var current = instance.CellCount;
// Read or assign other properties such as Cells, Height
instance.GetCellText();
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `TableRow` directly. `TableRow` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `TableRow` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `TableRow` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `TableRow`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableRow Class - IronPDF C# API Reference`
- v2 (human): `TableRow: IronPDF Text Extraction in C#`
- v3 (balanced): `TableRow Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TableRow is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TableRow class reference for C#: represents a table row Contains a collection of cells that make up a row in...`
- v3 (balanced): `TableRow (Text Extraction) in IronPDF for C#: represents a table row Contains a collection of cells that make up a row in... See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, text extraction is driven through TableRow from C#. TableRow is in the IronPdf.Extractions namespace. A table row Contains a collection of cells that make up a row in a table. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is TableRow located in the IronPDF object model?",
    "answer": "TableRow is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the TableRow class used for in C#?",
    "answer": "TableRow is the IronPDF class that a table row Contains a collection of cells that make up a row in a table. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of TableRow?",
    "answer": "Properties commonly used on TableRow include CellCount, Cells, Height, Item[Int32]. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a TableRow in C#?",
    "answer": "Instantiate TableRow directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).