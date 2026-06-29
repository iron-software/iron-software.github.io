<!--
N-Full (7 properties, no public ctor shown). Frame A (subject-verb). IronXL.
Members verified 2026-06-22: AnchorType (AnchorType), TopRowIndex (int), BottomRowIndex (int), LeftColumnIndex (int), RightColumnIndex (int), LeftColumnLetter (string), RightColumnLetter (string). Base Object, namespace IronXL.Drawing.
AnchorType is a sibling type in IronXL.Drawing (See Also confirmed on page).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.Position.html
-->

## Injected overview (Markdown)

`Position` locates a graphic object, such as an image, on a worksheet by naming the cells it is attached to. When a developer adds a picture to a sheet and needs it to sit over a specific range rather than float at an arbitrary point, this object pins it to the grid: it defines the top-left and bottom-right cell corners that bound the object and how tightly it follows those cells as the sheet changes.

A `Position` describes where a drawing anchors within the worksheet's coordinate system. It carries the top, bottom, left, and right cell coordinates of the object and the anchoring behavior that ties it to them, so reading a position tells you which cells a graphic covers and adjusting one moves or resizes the graphic in cell terms. It belongs to the image-handling step of a workbook workflow, after a sheet exists and a drawing is being placed or inspected.

The coordinates come in two complementary forms. `TopRowIndex` and `BottomRowIndex` set the first and last rows as 0-based indexes, while `LeftColumnIndex` and `RightColumnIndex` do the same for columns; a value of 0 maps to Excel's row 1 or column A. For columns, `LeftColumnLetter` and `RightColumnLetter` offer the same bounds as letters such as "A", an alternative to the numeric index for code that thinks in spreadsheet terms. `AnchorType` is an `AnchorType` value that decides whether the object moves and sizes with its cells, moves but does not size, or stays fixed. Set the corner coordinates to bound the object and the anchor type to control how it reacts when rows or columns are inserted or resized.

```csharp
using IronXL.Drawing;

// position obtained from a worksheet image
position.LeftColumnIndex = 0;
position.TopRowIndex = 0;
position.RightColumnIndex = 3;
position.BottomRowIndex = 5;
```

The [worksheet images how-to](https://ironsoftware.com/csharp/excel/how-to/add-extract-remove-worksheet-images/) covers placing and removing pictures, the [worksheet images example](https://ironsoftware.com/csharp/excel/examples/add-extract-remove-worksheet-images/) shows a worked file, and the [manage worksheets how-to](https://ironsoftware.com/csharp/excel/how-to/manage-worksheet/) sets up the sheet a graphic sits on.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Position Class - IronXL C# API Reference`
- v2 (human): `Position: Anchor Worksheet Images in C#`
- v3 (balanced): `Position Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Anchor a worksheet image in C# with the IronXL Position class: set row and column indexes, column letters, and the AnchorType behavior.`
- v2 (human): `Place a graphic on an Excel sheet in C# with the IronXL Position class: bound it to cells by row, column, or letter and set how it anchors.`
- v3 (balanced): `Reference for the IronXL Position class in .NET: TopRowIndex, BottomRowIndex, column indexes and letters, and AnchorType for worksheet images.`

---

## Structured data

**TechArticle abstract**

> Locating a graphic object on a worksheet in C# runs through the IronXL Position class. TopRowIndex, BottomRowIndex, LeftColumnIndex, and RightColumnIndex bound it in 0-based cell coordinates, LeftColumnLetter and RightColumnLetter offer the column bounds as letters, and AnchorType controls how the object moves and sizes with its cells. Set the corners and the anchor type to place an image.

**FAQPage entries**

```json
[
  {
    "question": "Where does Position live in the IronXL API?",
    "answer": "Position is a class in the IronXL.Drawing namespace, shipped in IronXL.dll, deriving from System.Object. It represents the placement of a graphic object within a worksheet's cells."
  },
  {
    "question": "How do you anchor an image to specific cells in C#?",
    "answer": "Set the Position object's LeftColumnIndex and TopRowIndex for the top-left corner and RightColumnIndex and BottomRowIndex for the bottom-right, all 0-based. LeftColumnLetter and RightColumnLetter set the column bounds as letters instead."
  },
  {
    "question": "What does AnchorType control on a Position?",
    "answer": "AnchorType is an AnchorType value that decides how the graphic reacts when cells change: whether it moves and sizes with the cells, moves without sizing, or stays fixed. Set it alongside the corner coordinates."
  }
]
```
