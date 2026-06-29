<!--
N-Mid / interface (3 members). Frame B. Base of IHeader and IFooter; reached via WorkSheet.Header (IHeader) / WorkSheet.Footer (IFooter). Members Center/Left/Right (string get/set) verified. WorkSheet.Header/Footer cross-ref verified 2026-06-23.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Layout.IHeaderFooter.html
-->

## Injected overview (Markdown)

`IHeaderFooter` is the shared contract for the running header and footer text printed on every page of a worksheet. A developer assigns the three positioned text zones, left, center, and right, to put a report title, a page number, or a company name across the top or bottom of a printed sheet. It is the common base that both the page header and the page footer expose, so the same three properties drive both, and a developer rarely names `IHeaderFooter` directly, instead working through the header or footer a worksheet hands back.

A developer reaches it through the worksheet: `WorkSheet.Header` returns an `IHeader` and `WorkSheet.Footer` returns an `IFooter`, both of which extend `IHeaderFooter` and add no members of their own. The two derived contracts exist only to distinguish which zone of the page is being addressed; the editable surface is identical. The `Left`, `Center`, and `Right` properties are each a readable and writable `string` holding the text for that zone. Set the ones a layout needs, leave the rest empty, and save the workbook to apply them to print output.

```csharp
IHeaderFooter header = sheet.Header;
header.Center = "Quarterly Report";
header.Right = "Page &P";
```

The [Excel print setup example](https://ironsoftware.com/csharp/excel/examples/excel-print-setup/) configures a sheet for printing, where header and footer text appear on each page, and the [WorkSheet reference](https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.WorkSheet.html) documents the `Header` and `Footer` properties that return them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IHeaderFooter Interface - IronXL C# API`
- v2 (human): `IHeaderFooter: Excel Page Header Text in C#`
- v3 (balanced): `IHeaderFooter Interface | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IHeaderFooter is the IronXL contract for Excel page header and footer text in C#: set the Left, Center, and Right zones on a worksheet.`
- v2 (human): `Set running header and footer text in C# with IronXL's IHeaderFooter: assign the left, center, and right zones shown on each printed page.`
- v3 (balanced): `Reference for the IronXL IHeaderFooter interface in C#: the base contract for IHeader and IFooter, with Left, Center, and Right text zones.`

---

## Structured data

**TechArticle abstract**

> IHeaderFooter is the IronXL contract for a worksheet's running header and footer text in C#. WorkSheet.Header returns an IHeader and WorkSheet.Footer returns an IFooter, both extending IHeaderFooter with no extra members. Its Left, Center, and Right string properties hold the text for each page zone, applied to print output when the workbook is saved.

**FAQPage entries**

```json
[
  {
    "question": "Where does IHeaderFooter live in the IronXL API?",
    "answer": "IHeaderFooter is an interface in the IronXL.Layout namespace, shipped in IronXL.dll. It is the base extended by IHeader and IFooter, which WorkSheet.Header and WorkSheet.Footer return."
  },
  {
    "question": "What is the difference between IHeader and IFooter in IronXL?",
    "answer": "Both extend IHeaderFooter and share the same Left, Center, and Right text properties with no added members. IHeader is what WorkSheet.Header returns for the top of the page, and IFooter is what WorkSheet.Footer returns for the bottom; the type only signals which zone is being edited."
  }
]
```
