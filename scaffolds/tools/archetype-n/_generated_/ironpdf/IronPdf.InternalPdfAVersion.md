<!--
N-Lite/enum. Members verified: PdfA1a, PdfA1b, PdfA2a, PdfA2b, PdfA3a, PdfA3b, PdfA4, PdfA4e, PdfA4f, value__
Target: IronPdf.InternalPdfAVersion
-->

## Injected overview (Markdown)

`InternalPdfAVersion` identifies the PDF/A archival conformance profile IronPDF applies when converting or saving a document. The `b`-suffix members (`PdfA1b`, `PdfA2b`, `PdfA3b`) require visual reproducibility only, while the `a`-suffix members add structural tagging for accessibility. `PdfA4` is the current ISO 19005-4 baseline; `PdfA4e` extends it for engineering documents and `PdfA4f` permits embedded files. See [PDF/A conversion](https://ironpdf.com/how-to/pdfa/) for profile guidance.

```csharp
pdf.SaveAsPdfA("archive.pdf", InternalPdfAVersion.PdfA3b);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `InternalPdfAVersion Enum - IronPDF C# API`
- v2 (human): `InternalPdfAVersion: PDF/A Profiles in C#`
- v3 (balanced): `InternalPdfAVersion Enum | IronPDF C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select a PDF/A conformance profile in C# with IronPDF's InternalPdfAVersion enum: PdfA1b, PdfA2b, PdfA3b, PdfA4, PdfA4e, PdfA4f, and accessibility variants.`
- v2 (human): `Choose the right PDF/A archival profile in C# with IronPDF: visual-only b-variants, accessible a-variants, and the modern PdfA4 family.`
- v3 (balanced): `Reference for IronPDF's InternalPdfAVersion enum in C#: PDF/A profiles from PdfA1b through PdfA4f for archival and accessibility compliance.`

---

## Structured data

**TechArticle abstract**

> Apply InternalPdfAVersion in IronPDF to specify the PDF/A archival conformance profile for a document. The b-suffix members such as PdfA1b, PdfA2b, and PdfA3b enforce visual reproducibility, while a-suffix members add accessibility tagging. PdfA4 reflects the current ISO 19005-4 standard, PdfA4e targets engineering workflows, and PdfA4f permits embedded files.