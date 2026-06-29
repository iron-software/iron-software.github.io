<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Logging.Logger.LoggingModes.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `LoggingModes` enumeration in IronPDF declares where the `Logger` writes developer notices, warnings, and engine output, and is assigned via `Logger.LoggingMode`.

It belongs to the `IronPdf.Logging.Logger` namespace and exposes six values: `All`, `None`, `Custom`, `Console`, `File`, and `DebugOutputWindow`. Pick `Custom` to forward output to NLog, Serilog, or log4net.

See [Custom Logging](https://ironpdf.com/how-to/custom-logging/) for the third-party adapter pattern.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LoggingModes Enum - IronPDF C# API Reference`
- v2 (human): `LoggingModes: IronPDF Logger Output Targets in C#`
- v3 (balanced): `LoggingModes Enum | IronPDF C# Logger Targets`

**Meta-description (120-160 chars)**
- v1 (algorithm): `LoggingModes is the IronPDF enumeration for Logger output targets in C#. Members: All, None, Custom, Console, File, DebugOutputWindow.`
- v2 (human): `IronPDF LoggingModes enumeration for C#: declares where the Logger writes notices, warnings, and engine output during PDF rendering.`
- v3 (balanced): `LoggingModes (Logging) in IronPDF for C#: selects Console, File, DebugOutputWindow, or Custom adapters for Logger output. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The LoggingModes enumeration in IronPDF lives in the IronPdf.Logging.Logger namespace, derived from Enum, declaring where the Logger writes developer notices, warnings, and engine output. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
