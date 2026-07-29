<!--
N-Lite/enum. Members verified: Butt, ProjectingSquare, Round, value__.
Target: IronSoftware.LineCaps (IronPdf.dll)
-->

## Injected overview (Markdown)

`LineCaps` controls the end-cap style applied to open stroked paths in a PDF, mapping directly to the PDF `J` operator (ISO 32000-1 §8.4.3.3). `Butt` clips the stroke flush with the path endpoint and is the default. `Round` adds a semicircular cap beyond the endpoint, and `ProjectingSquare` extends a square cap half the line width past the endpoint. Set this value when configuring stroke graphics state in [IronPDF drawing operations](https://ironpdf.com/how-to/draw-lines-and-shapes/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LineCaps Enum - IronPDF C# API Reference`
- v2 (human): `LineCaps: Set PDF Stroke End Caps in C#`
- v3 (balanced): `LineCaps Enum | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control PDF stroke end-cap style in C# with the IronPDF LineCaps enum: Butt, Round, or ProjectingSquare, mapped to the PDF J operator.`
- v2 (human): `Choose how open path endpoints are capped in IronPDF with LineCaps: flush Butt, semicircular Round, or extended ProjectingSquare in C#.`
- v3 (balanced): `Reference for the IronPDF LineCaps enum in C#: Butt, Round, and ProjectingSquare stroke end-cap styles via the PDF J operator.`

---

## Structured data

**TechArticle abstract**

> Use LineCaps in IronPDF to specify the end-cap style for open stroked paths, corresponding to the PDF J operator. Butt clips flush at the endpoint, Round adds a semicircular extension, and ProjectingSquare projects a square cap half the line width beyond the endpoint.