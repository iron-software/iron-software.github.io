<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.ExtractionProgress.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`ExtractionProgress` is the object IronPDF C# code works with for text extraction. It represents information about the progress of an asynchronous extraction operation.

`ExtractionProgress` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ExtractionProgress`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CurrentOperation`, `CurrentPage`, `PercentComplete`, `TablesFound`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

var instance = new ExtractionProgress();
var current = instance.CurrentOperation;
// Read or assign other properties such as CurrentPage, PercentComplete
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `ExtractionProgress` directly. `ExtractionProgress` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ExtractionProgress` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ExtractionProgress` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ExtractionProgress`. Application code typically obtains or instantiates a single `ExtractionProgress` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ExtractionProgress Class - IronPDF C# API Reference`
- v2 (human): `ExtractionProgress: IronPDF Text Extraction in C#`
- v3 (balanced): `ExtractionProgress Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ExtractionProgress is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ExtractionProgress class reference for C#: information about the progress of an asynchronous extraction operation.`
- v3 (balanced): `ExtractionProgress (Text Extraction) in IronPDF for C#: information about the progress of an asynchronous extraction operation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, text extraction is driven through ExtractionProgress from C#, which provides information about the progress of an asynchronous extraction operation. ExtractionProgress is in the IronPdf.Extractions namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is ExtractionProgress located in the IronPDF object model?",
    "answer": "ExtractionProgress is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ExtractionProgress class used for in C#?",
    "answer": "ExtractionProgress is the IronPDF class that information about the progress of an asynchronous extraction operation. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ExtractionProgress?",
    "answer": "Properties commonly used on ExtractionProgress include CurrentOperation, CurrentPage, PercentComplete, TablesFound. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a ExtractionProgress in C#?",
    "answer": "Instantiate ExtractionProgress directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).