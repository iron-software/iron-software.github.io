<!--
N-Mid (4 properties, no ctor shown). Frame B (identity-by-role). IronXL.
Members verified 2026-06-22: Address (string, get), Author (string), Content (string), IsVisible (bool, hidden by default). Base Object, namespace IronXL.Cells.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Cells.Comment.html
-->

## Injected overview (Markdown)

`Comment` is the note attached to a single spreadsheet cell, the kind a reviewer leaves to explain a value or flag a question. It holds the comment's text, who wrote it, the cell it belongs to, and whether it shows on the sheet, so a developer can read or adjust an annotation without touching the cell's own data.

Work with a comment through the cell it sits on, then read or set its properties. `Content` holds the comment text and `Author` records who left it. `Address` reports the address of the cell that carries the comment and is read-only, so it identifies the location rather than moving the note. `IsVisible` controls whether the comment is shown directly on the worksheet; comments are hidden by default and surface on hover until this is turned on. Setting `IsVisible` to true pins a note open, which suits callouts a reader should not have to hunt for. Each property reads and writes plain values, so updating an annotation is a direct assignment.

```csharp
// comment obtained from a cell
comment.Author = "Reviewer";
comment.Content = "Check this figure";
comment.IsVisible = true;
```

The [add a comment how-to](https://ironsoftware.com/csharp/excel/how-to/add-comment/) covers creating and editing cell comments, and the [edit an Excel file how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-edit-excel-file/) sets the cell values a comment annotates.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Comment Class - IronXL C# API Reference`
- v2 (human): `Comment: Cell Comments in C# Excel`
- v3 (balanced): `Comment Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read and edit cell comments in C# with the IronXL Comment class: set Content and Author, read the Address, and toggle IsVisible.`
- v2 (human): `Work with cell notes in C# using the IronXL Comment class: set the comment Content and Author, find its cell Address, and show it.`
- v3 (balanced): `Reference for the IronXL Comment class in .NET: Content, Author, read-only Address, and IsVisible for cell comments.`

---

## Structured data

**TechArticle abstract**

> Reading and editing a cell note in C# runs through the IronXL Comment class. Content holds the comment text, Author records who wrote it, the read-only Address reports the cell it belongs to, and IsVisible controls whether the note shows on the sheet. Comments are hidden by default, so set IsVisible to pin one open.

**FAQPage entries**

```json
[
  {
    "question": "Where does Comment live in the IronXL API?",
    "answer": "Comment is a class in the IronXL.Cells namespace, shipped in IronXL.dll, deriving from System.Object. It represents a note attached to a single worksheet cell."
  },
  {
    "question": "How do you make a cell comment visible in C#?",
    "answer": "Set the comment's IsVisible property to true. Comments are hidden by default and appear on hover, so turning IsVisible on pins the note open on the worksheet. Content and Author hold the text and writer."
  }
]
```
