<!--
N-Lite/enum. Members verified: Ignore, Warn, Throw, value__.
Target: IronPdf.ContentOverlapBehavior
-->

## Injected overview (Markdown)

`ContentOverlapBehavior` tells IronPDF how to respond when an HTML header or footer added via `AddHtmlHeaders` or `AddHtmlFooters` would overlap text or image content already on the page. `Ignore` skips detection entirely, `Warn` surfaces a diagnostic without aborting, and `Throw` raises an exception on detected overlap. Detection covers only text and image objects; vector paths such as table borders and ruled lines are not checked. See the [headers and footers how-to](https://ironpdf.com/how-to/headers-and-footers/) for configuration guidance.

```csharp
pdfDocument.AddHtmlHeaders(header, overlapBehavior: ContentOverlapBehavior.Warn);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ContentOverlapBehavior Enum - IronPDF C# API`
- v2 (human): `ContentOverlapBehavior: Handle Header Overlap in C#`
- v3 (balanced): `ContentOverlapBehavior Enum | IronPDF C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control header and footer overlap detection in C# with the IronPDF ContentOverlapBehavior enum: Ignore, Warn, or Throw on overlapping text and images.`
- v2 (human): `Use ContentOverlapBehavior in IronPDF to ignore, warn about, or throw on HTML header and footer overlap with existing page content in C#.`
- v3 (balanced): `Reference for the IronPDF ContentOverlapBehavior enum in C#: Ignore, Warn, and Throw values for AddHtmlHeaders and AddHtmlFooters overlap detection.`

---

## Structured data

**TechArticle abstract**

> Use ContentOverlapBehavior in IronPDF to control how AddHtmlHeaders and AddHtmlFooters respond when a header or footer would overlap existing text or image content on a page. Ignore skips detection, Warn emits a diagnostic, and Throw raises an exception. Vector and path content such as table borders is outside detection scope.