<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Fonts.FontType.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `FontType` enumeration in IronPDF identifies which underlying font format a glyph dictionary uses inside a PDF document.

Part of the `IronPdf.Fonts` namespace, its 8 values cover the PDF font formats: `TrueType` and `Type1` are the most common, followed by `Type0`, `Type3`, the CID-keyed `CIDFontType0` and `CIDFontType2`, the legacy `MMType`, and `Unknown` for unrecognised embeddings.

Check this value when auditing embedded fonts. The [Manage Fonts](https://ironpdf.com/how-to/manage-fonts/) guide covers inspection, embedding, and replacement.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontType Enum - IronPDF C# API Reference`
- v2 (human): `FontType: IronPDF PDF Fonts in C#`
- v3 (balanced): `FontType Enum | IronPDF C# PDF Fonts`

**Meta-description (120-160 chars)**
- v1 (algorithm): `FontType is the IronPDF enumeration for PDF fonts in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF FontType enumeration reference for C#: types of font as supported and used inside a PDF document.`
- v3 (balanced): `FontType (PDF Fonts) in IronPDF for C#: types of font as supported and used inside a PDF document. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The FontType enumeration in IronPDF lives in the IronPdf.Fonts namespace, derived from Enum, representing types of font as supported and used inside a PDF document. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
