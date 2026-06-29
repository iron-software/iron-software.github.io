<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.TableOfContentsTypes.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `TableOfContentsTypes` enumeration in IronPDF declares the layout used when `ChromePdfRenderOptions.TableOfContents` auto-builds a TOC from the document's `<h1>`-`<h6>` headings.

It belongs to the `IronPdf` namespace and exposes three values: `None` (default, no TOC), `Basic` (heading links only), and `WithPageNumbers` (dotted-leader page references).

See [Add a Table of Contents](https://ironpdf.com/how-to/table-of-contents/) for both layouts side by side.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableOfContentsTypes - IronPDF C# API Reference`
- v2 (human): `TableOfContentsTypes: IronPDF TOC Layouts in C#`
- v3 (balanced): `TableOfContentsTypes Enum | IronPDF C# TOC`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TableOfContentsTypes is the IronPDF enumeration for auto-built TOC layouts in C#. Members: None, Basic, WithPageNumbers.`
- v2 (human): `IronPDF TableOfContentsTypes enumeration for C#: chooses the layout when ChromePdfRenderOptions.TableOfContents builds a TOC from headings.`
- v3 (balanced): `TableOfContentsTypes in IronPDF for C#: picks the auto-TOC layout: none, headings-only, or with dotted-leader page numbers.`

---

## Structured data

**TechArticle abstract**

> The TableOfContentsTypes enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, declaring the layout used when ChromePdfRenderOptions.TableOfContents auto-builds a TOC from heading tags. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
