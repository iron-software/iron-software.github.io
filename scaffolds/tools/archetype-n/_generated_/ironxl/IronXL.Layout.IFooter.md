<!--
N-Mid / interface (0 own members; extends IHeaderFooter). Frame C. Returned by WorkSheet.Footer. Inherited Left/Center/Right (string get/set) from IHeaderFooter verified. WorkSheet.Footer (returns IFooter) cross-ref verified 2026-06-23. Disambiguation IFooter vs IHeader vs IHeaderFooter is the high-value content; triage optional (0 own members).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Layout.IFooter.html
-->

## Injected overview (Markdown)

When a printed worksheet needs text along the bottom of every page, a page number, a confidentiality note, or a filename, `IFooter` is the contract that holds it. It is what a worksheet returns specifically for the bottom-of-page band, the counterpart to the header that prints across the top. A developer assigns text to its three positioned zones so a printed or exported spreadsheet carries a consistent footer without editing the file by hand in Excel.

A developer obtains an `IFooter` from `WorkSheet.Footer`; there is no constructor, and the footer belongs to its worksheet. `IFooter` extends `IHeaderFooter` and declares no members of its own, so its editable surface is entirely inherited: the `Left`, `Center`, and `Right` properties, each a readable and writable `string`, hold the text for the left, center, and right zones of the footer band. The matching `IHeader`, returned by `WorkSheet.Header`, shares the same inherited surface; the two types differ only in which page band they target. Set the zones a layout needs and save the workbook to apply them to print output.

```csharp
IFooter footer = sheet.Footer;
footer.Center = "Page &P of &N";
footer.Right = "Confidential";
```

The [Excel print setup example](https://ironsoftware.com/csharp/excel/examples/excel-print-setup/) configures a sheet for printing, where footer text prints on each page, and the [IHeaderFooter reference](https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Layout.IHeaderFooter.html) documents the inherited `Left`, `Center`, and `Right` zones.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IFooter Interface - IronXL C# API Reference`
- v2 (human): `IFooter: Set Excel Page Footers in C#`
- v3 (balanced): `IFooter Interface | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IFooter is the IronXL contract for a worksheet's page footer in C#: set the inherited Left, Center, and Right text zones. WorkSheet.Footer returns it.`
- v2 (human): `Set bottom-of-page footer text in C# with IronXL's IFooter: assign the left, center, and right zones printed along the bottom of every page.`
- v3 (balanced): `Reference for the IronXL IFooter interface in C#: the contract WorkSheet.Footer returns, extending IHeaderFooter with Left, Center, Right.`

---

## Structured data

**TechArticle abstract**

> IFooter is the IronXL contract for a worksheet's page footer in C#. WorkSheet.Footer returns it. IFooter extends IHeaderFooter and adds no members, so its Left, Center, and Right string zones are inherited and hold the text printed along the bottom of each page. The matching IHeader from WorkSheet.Header shares the same surface for the top band.

**FAQPage entries**

```json
[
  {
    "question": "Where does IFooter live in the IronXL API?",
    "answer": "IFooter is an interface in the IronXL.Layout namespace, shipped in IronXL.dll. It extends IHeaderFooter and is returned by the WorkSheet.Footer property."
  },
  {
    "question": "What is the difference between IFooter and IHeader in IronXL?",
    "answer": "Both extend IHeaderFooter and share the same inherited Left, Center, and Right text properties with no added members. WorkSheet.Footer returns an IFooter for the bottom of the page, and WorkSheet.Header returns an IHeader for the top; the type only indicates which band is being edited."
  }
]
```
