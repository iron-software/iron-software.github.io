<!--
N-Mid / interface (0 own members; extends IHeaderFooter). Frame B. Returned by WorkSheet.Header. Inherited Left/Center/Right (string get/set) from IHeaderFooter verified. WorkSheet.Header (returns IHeader) cross-ref verified 2026-06-23. Disambiguation IHeader vs IFooter vs IHeaderFooter is the high-value content; triage optional (0 own members).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Layout.IHeader.html
-->

## Injected overview (Markdown)

`IHeader` is the running header a developer edits to print text across the top of every page of a worksheet, such as a report title, a date, or a logo caption. It is what a worksheet returns specifically for the top-of-page band, distinct from the footer that prints along the bottom. A developer assigns text to its three positioned zones so a printed or exported spreadsheet carries consistent page furniture without manual editing in Excel.

A developer obtains an `IHeader` from `WorkSheet.Header`; there is no constructor, and the header belongs to its worksheet. `IHeader` extends `IHeaderFooter` and declares no members of its own, so its entire editable surface is inherited: the `Left`, `Center`, and `Right` properties, each a readable and writable `string`, hold the text for the left, center, and right zones of the header band. The matching `IFooter`, returned by `WorkSheet.Footer`, shares the same inherited surface; the two types differ only in which page band they address. Set the zones a layout needs and save the workbook to apply them to print output.

```csharp
IHeader header = sheet.Header;
header.Center = "Quarterly Report";
header.Left = "Iron Software";
```

The [Excel print setup example](https://ironsoftware.com/csharp/excel/examples/excel-print-setup/) configures a sheet for printing, where header text prints on each page, and the [IHeaderFooter reference](https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Layout.IHeaderFooter.html) documents the inherited `Left`, `Center`, and `Right` zones.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IHeader Interface - IronXL C# API Reference`
- v2 (human): `IHeader: Set Excel Page Headers in C#`
- v3 (balanced): `IHeader Interface | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IHeader is the IronXL contract for a worksheet's page header in C#: set the inherited Left, Center, and Right text zones. WorkSheet.Header returns it.`
- v2 (human): `Set top-of-page header text in C# with IronXL's IHeader: assign the left, center, and right zones printed across the top of every page.`
- v3 (balanced): `Reference for the IronXL IHeader interface in C#: the contract WorkSheet.Header returns, extending IHeaderFooter with Left, Center, Right.`

---

## Structured data

**TechArticle abstract**

> IHeader is the IronXL contract for a worksheet's page header in C#. WorkSheet.Header returns it. IHeader extends IHeaderFooter and adds no members, so its Left, Center, and Right string zones are inherited and hold the text printed across the top of each page. The matching IFooter from WorkSheet.Footer shares the same surface for the bottom band.

**FAQPage entries**

```json
[
  {
    "question": "Where does IHeader live in the IronXL API?",
    "answer": "IHeader is an interface in the IronXL.Layout namespace, shipped in IronXL.dll. It extends IHeaderFooter and is returned by the WorkSheet.Header property."
  },
  {
    "question": "What is the difference between IHeader and IFooter in IronXL?",
    "answer": "Both extend IHeaderFooter and share the same inherited Left, Center, and Right text properties with no added members. WorkSheet.Header returns an IHeader for the top of the page, and WorkSheet.Footer returns an IFooter for the bottom; the type only indicates which band is being edited."
  }
]
```
