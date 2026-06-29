<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Logging.Logger.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`Logger` is what IronPDF C# code uses for logging. It represents functionality for developers to view debug logs and export log files from IronPdf.

`Logger` matters when an application needs to configure or invoke logging from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `Logger`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CustomLogger`, `LogFilePath`, `LoggingMode`. Assign options or invoke methods on the instance to configure or perform the operation. The [export save PDF csharp](https://ironpdf.com/how-to/export-save-pdf-csharp/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain Logger from the relevant entry point in the IronPDF API
void Configure(Logger instance)
{
    var current = instance.CustomLogger;
    instance.ClearLogFiles();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the logging portion of the IronPDF C# API contains related types that work with `Logger` directly. `Logger` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `Logger` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `Logger` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `Logger`. Application code typically obtains or instantiates a single `Logger` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Logger Class - IronPDF C# API Reference`
- v2 (human): `Logger: IronPDF Logging in C#`
- v3 (balanced): `Logger Class | IronPDF C# Logging`

**Meta-description (120-160 chars)**
- v1 (algorithm): `Logger is the IronPDF class for logging in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF Logger class reference for C#: provides functionality for developers to view debug logs and export log...`
- v3 (balanced): `Logger (Logging) in IronPDF for C#: provides functionality for developers to view debug logs and export log... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Logger is the IronPDF C# entry point for logging, which provides functionality for developers to view debug logs and export log files from IronPdf. Logger is in the IronPdf.Logging namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does Logger live in the IronPDF API?",
    "answer": "Logger is in the IronPdf.Logging namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the Logger class used for in C#?",
    "answer": "Logger is the IronPDF class that functionality for developers to view debug logs and export log files from IronPdf. It is part of the IronPdf.Logging namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of Logger?",
    "answer": "Properties commonly used on Logger include CustomLogger, LogFilePath, LoggingMode. Each property configures one aspect of the logging surface exposed by the class."
  },
  {
    "question": "What methods are available on Logger?",
    "answer": "Common methods include ClearLogFiles. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).