<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.CustomHyphenationDefinitions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`CustomHyphenationDefinitions` is what IronPDF C# code uses for PDF generation. It represents the sources for custom hyphenation patterns and exceptions.

`CustomHyphenationDefinitions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `CustomHyphenationDefinitions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `ExceptionSource`, `PatternSource`. Assign options or invoke methods on the instance to configure or perform the operation. The [custom hyphenation](https://ironpdf.com/how-to/custom-hyphenation/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new CustomHyphenationDefinitions();
var current = instance.ExceptionSource;
// Read or assign other properties such as PatternSource, ExceptionSource
```

For the broader workflow, see the [base URLs](https://ironpdf.com/how-to/base-urls/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `CustomHyphenationDefinitions` directly. `CustomHyphenationDefinitions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `CustomHyphenationDefinitions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `CustomHyphenationDefinitions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `CustomHyphenationDefinitions`. Application code typically obtains or instantiates a single `CustomHyphenationDefinitions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CustomHyphenationDefinitions Class - IronPDF C# API...`
- v2 (human): `CustomHyphenationDefinitions: IronPDF PDF Generation in C#`
- v3 (balanced): `CustomHyphenationDefinitions Class | IronPDF C# PDF...`

**Meta-description (120-160 chars)**
- v1 (algorithm): `CustomHyphenationDefinitions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF CustomHyphenationDefinitions class reference for C#: defines the sources for custom hyphenation patterns and exceptions.`
- v3 (balanced): `CustomHyphenationDefinitions (PDF Generation) in IronPDF for C#: defines the sources for custom hyphenation patterns and exceptions. See members and usage.`

---

## Structured data

**TechArticle abstract**

> CustomHyphenationDefinitions handles PDF generation in IronPDF from C#, which provides the sources for custom hyphenation patterns and exceptions. CustomHyphenationDefinitions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is CustomHyphenationDefinitions defined in?",
    "answer": "CustomHyphenationDefinitions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the CustomHyphenationDefinitions class used for in C#?",
    "answer": "CustomHyphenationDefinitions is the IronPDF class that the sources for custom hyphenation patterns and exceptions. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of CustomHyphenationDefinitions?",
    "answer": "Properties commonly used on CustomHyphenationDefinitions include ExceptionSource, PatternSource. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a CustomHyphenationDefinitions in C#?",
    "answer": "Instantiate CustomHyphenationDefinitions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).