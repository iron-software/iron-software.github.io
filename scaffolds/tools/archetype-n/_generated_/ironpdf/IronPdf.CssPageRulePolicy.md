<!--
N-Lite/enum. Members verified: CssPageWin, Default, RenderingOptionsWin, value__.
Target: IronPdf.CssPageRulePolicy
-->

## Injected overview (Markdown)

`CssPageRulePolicy` controls how CSS `@page` margin declarations in source HTML are reconciled with the margins configured on `ChromePdfRenderOptions` during PDF rendering. `Default` applies IronPDF's built-in reconciliation behaviour. `RenderingOptionsWin` ignores CSS `@page` margins and uses only the `ChromePdfRenderOptions` values, keeping header and footer bands correctly positioned. `CssPageWin` honours the CSS `@page` margins, which may cause body content to overlap stamped headers or footers. See the [HTML to PDF guide](https://ironpdf.com/how-to/html-to-pdf/) for margin configuration details.

```csharp
renderer.RenderingOptions.CssPageRulePolicy = CssPageRulePolicy.RenderingOptionsWin;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CssPageRulePolicy Enum - IronPDF C# API Reference`
- v2 (human): `CssPageRulePolicy: Fix CSS @page Margins in C#`
- v3 (balanced): `CssPageRulePolicy Enum | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control CSS @page margin conflicts in IronPDF with CssPageRulePolicy: Default, RenderingOptionsWin, or CssPageWin for header and footer safety.`
- v2 (human): `Resolve CSS @page vs ChromePdfRenderOptions margin conflicts in C# using IronPDF's CssPageRulePolicy enum to protect header and footer placement.`
- v3 (balanced): `Reference for IronPDF's CssPageRulePolicy enum in C#: choose Default, RenderingOptionsWin, or CssPageWin to reconcile CSS @page margins.`

---

## Structured data

**TechArticle abstract**

> Use CssPageRulePolicy in IronPDF to resolve conflicts between CSS @page margin declarations and ChromePdfRenderOptions margin settings. Default applies built-in reconciliation, RenderingOptionsWin ignores CSS @page margins to keep header and footer bands correctly positioned, and CssPageWin honours CSS @page margins at the risk of content overlapping stamped headers or footers.