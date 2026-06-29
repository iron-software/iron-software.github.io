<!--
N-Full (4 props + ctor) override per cluster. Frame C. IronWord. Members verified 2026-06-23: StartRow, StartColumn, EndRow, EndColumn; ctor.
Base Object. Cross-ref verified: Table.MergeCells(int,int,int,int), Table.MergedCells, Table.GetCell on Table page.
Target: IronWord.Models.MergeCell.html
-->

## Injected overview (Markdown)

When two or more table cells should read as one, a `MergeCell` records the rectangular block they span. It captures the corner coordinates of a merge so a table can present a single combined cell, the pattern behind a header that stretches across columns or a label that runs down several rows.

A merge is defined by four zero-based coordinates: `StartRow` and `StartColumn` mark the top-left cell of the block, and `EndRow` and `EndColumn` mark the bottom-right. The range between those corners becomes the merged region. In practice you do not build the geometry by hand for every case; a `Table` exposes `MergeCells`, which takes the same start-row, start-column, end-row, and end-column arguments and performs the merge, while the table's `MergedCells` property lists the `MergeCell` records already applied. Reading that list tells you which regions of an existing table are combined.

Set the four coordinates to cover the block you want, keeping the start corner above and to the left of the end corner, then let the table apply it. Because the values are zero-based, the first row and first column are index `0`, so a header spanning the first three columns of the top row runs from `(0, 0)` to `(0, 2)`. Once merged, the cells behave as the single cell at the start corner, which is where content for the region is read and written through `GetCell`. The cells absorbed into the block no longer hold their own content, so populate the start cell after the merge rather than before. A table can carry several merges at once, each its own `MergeCell` record, which is how a layout combines a banner row and a stacked label column in the same grid.

```csharp
table.MergeCells(0, 0, 0, 2);
```

The [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) builds a table, the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) walks through cells and layout in detail, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) places tables within a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MergeCell Class - IronWord C# API Reference`
- v2 (human): `MergeCell: Merge Word Table Cells in C#`
- v3 (balanced): `MergeCell Class | IronWord .NET API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Merge Word table cells in C# with the IronWord MergeCell class: StartRow, StartColumn, EndRow, and EndColumn mark the block a Table combines.`
- v2 (human): `Combine a block of Word table cells into one in C# with the IronWord MergeCell class, the record behind Table.MergeCells and MergedCells.`
- v3 (balanced): `Reference for the IronWord MergeCell class in C#: the corner coordinates of a merged table region, applied through Table.MergeCells.`

---

## Structured data

**TechArticle abstract**

> Combining a rectangular block of Word table cells into one in C# runs through the IronWord MergeCell class. It records the merge with four zero-based coordinates: StartRow and StartColumn for the top-left corner, EndRow and EndColumn for the bottom-right. A Table applies a merge through MergeCells with the same arguments and lists applied regions in MergedCells.

**FAQPage entries**

```json
[
  {
    "question": "Where does MergeCell live in the IronWord API?",
    "answer": "MergeCell is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and describes a merged region by its corner coordinates; a Table exposes the applied records through its MergedCells property."
  },
  {
    "question": "How do you merge table cells in IronWord?",
    "answer": "Call MergeCells on the Table with the start-row, start-column, end-row, and end-column of the block. The merged region behaves as the single cell at the start corner, and the Table's MergedCells property lists the MergeCell records in effect."
  },
  {
    "question": "Are MergeCell coordinates zero-based in IronWord?",
    "answer": "Yes. StartRow, StartColumn, EndRow, and EndColumn are zero-based, so the first row and first column are index 0. Keep the start corner above and to the left of the end corner for a valid block."
  }
]
```
