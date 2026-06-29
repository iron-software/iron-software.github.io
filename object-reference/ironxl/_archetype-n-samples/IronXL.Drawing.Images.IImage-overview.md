<!--
N-Full / interface. Frame B. No concrete implementor documented in api dir; contract returned by WorkSheet.InsertImage / held in WorkSheet.Images. Members Data/Id/ImageFormat/Position/Resize/ToAnyBitmap/ToImage verified. WorkSheet.InsertImage + Images cross-ref verified 2026-06-23.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.Images.IImage.html
-->

## Injected overview (Markdown)

`IImage` is what a worksheet hands back for every picture embedded in a spreadsheet. When code inserts a logo, chart export, or screenshot into a sheet, it works through this contract to reposition that picture, resize it, read its raw bytes, or convert it to a bitmap for further processing. It is the type a developer reaches for when an embedded image needs to be measured, moved, or pulled back out of an `.xlsx` file rather than just placed once and forgotten. Do not confuse it with `ImageFormat`, the enumeration that records whether a picture is a PNG or JPEG; `IImage` is the picture object itself, and exposes that format through its own `ImageFormat` property.

A developer never constructs an `IImage` directly. `WorkSheet.InsertImage` returns one when a picture is added from a file path or a byte array, and the `WorkSheet.Images` collection (a `List<IImage>`) holds every image already present in the sheet, so iterating that list is how existing pictures are discovered and edited. Each image belongs to a single worksheet and sits at a cell-anchored location, which is why obtaining the instance from the worksheet, rather than building one in isolation, is the only supported path.

Working with an image centers on a few members. `Position` reports and adjusts where the picture is anchored on the sheet, `Id` identifies it for removal through `WorkSheet.RemoveImage`, and `Data` exposes the raw bytes for saving the picture elsewhere. `Resize()` restores the original dimensions, while `Resize(double scale)` and `Resize(double scaleX, double scaleY)` scale it uniformly or along each axis. `ToAnyBitmap` and `ToImage` convert the embedded picture into an in-memory bitmap when the project needs to inspect or re-encode it. Because the image is tied to its worksheet, saving the workbook persists every change made through these members.

```csharp
WorkSheet sheet = workbook.DefaultWorkSheet;
IImage image = sheet.InsertImage("logo.png", 1, 1, 3, 4);
image.Resize(0.5, 0.5);
```

The [add, extract, and remove worksheet images example](https://ironsoftware.com/csharp/excel/examples/add-extract-remove-worksheet-images/) saves a picture into a sheet, the [worksheet images how-to](https://ironsoftware.com/csharp/excel/how-to/add-extract-remove-worksheet-images/) walks through inserting and reading them back, and the [WorkSheet reference](https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.WorkSheet.html) documents the `InsertImage` and `Images` members that produce them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IImage Interface - IronXL C# API Reference`
- v2 (human): `IImage: Resize & Extract Excel Images in C#`
- v3 (balanced): `IImage Interface | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IImage is the IronXL contract for embedded Excel pictures in C#: read Data, set Position, call Resize, and convert with ToAnyBitmap or ToImage.`
- v2 (human): `Work with embedded spreadsheet pictures in C# through IronXL's IImage: resize, reposition, read bytes, or export an inserted image to a bitmap.`
- v3 (balanced): `Reference for the IronXL IImage interface in C#: the contract WorkSheet.InsertImage returns for resizing, positioning, and extracting Excel images.`

---

## Structured data

**TechArticle abstract**

> IImage is the IronXL contract for a picture embedded in a worksheet in C#. WorkSheet.InsertImage returns an IImage and WorkSheet.Images holds every image in the sheet. Use Position to anchor it, Resize to scale it, Data to read its bytes, and ToAnyBitmap or ToImage to convert it. Changes persist when the workbook is saved.

**FAQPage entries**

```json
[
  {
    "question": "Where does IImage live in the IronXL API?",
    "answer": "IImage is an interface in the IronXL.Drawing.Images namespace, shipped in IronXL.dll. WorkSheet.InsertImage returns an IImage, and the WorkSheet.Images property holds them as a List<IImage>."
  },
  {
    "question": "What returns an IImage in IronXL?",
    "answer": "WorkSheet.InsertImage returns an IImage when a picture is added from a file path or byte array, and WorkSheet.Images exposes the existing pictures in a sheet as a List<IImage>. There is no public constructor; images are obtained from the worksheet."
  },
  {
    "question": "How do you resize an embedded Excel image in C#?",
    "answer": "Call Resize on the IImage. Resize() restores the original size, Resize(double scale) scales uniformly, and Resize(double scaleX, double scaleY) scales each axis. Save the workbook to persist the change."
  }
]
```
