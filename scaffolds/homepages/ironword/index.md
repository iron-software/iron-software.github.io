# IronWord: Word Document Library for .NET

**IronWord** is a Word document library developed by Iron Software. IronWord excels in providing robust functionality for working with Word documents in .NET applications.

## Features of IronWord

- Load, Manipulate, and Save Word and Docx Document.
- PageSetup: Configuring paper size, page orientation, margins, and background color.
- TextRun: Handling text content, styles, splitting, appending text, and adding images.
- TextStyle: Managing font family, size, color, bold, italic, strikethrough, underline, superscript, and subscript.
- Paragraph: Adding text runs, images, shapes, setting styles, alignments, bullets, and numbering lists.
- Table: Manipulating table structure, including adding rows, getting and setting cell values, removing rows, merging cells, and more.
- Image: Loading images from files or streams, setting wrap text, position offset, width, height, and other properties.
- Shape: Setting wrap text, position offset, width, height, shape type, and rotation.

## Get Started 

- Quickstart Guide:  	https://ironsoftware.com/csharp/word/docs/
- Install with NuGet:   https://www.nuget.org/packages/IronWord/	


## C# Code Examples

### Add Image

```cs
using IronWord;
using IronWord.Models;

// Load docx
WordDocument doc = new WordDocument("document.docx");

// Configure image
IronWord.Models.Image image = new IronWord.Models.Image("image.jpg");
image.Width = 200; // In unit pixel
image.Height = 200; // In unit pixel
Paragraph paragraph = new Paragraph();

// Add image
paragraph.AddImage(image);

// Add paragraph

doc.AddParagraph(paragraph);

// Export docx
doc.SaveAs("save_document.docx");
```

### Add Table

```cs
using IronWord;
using IronWord.Models;

// Create table cell
TableCell cell = new TableCell();

TextRun textRun = new TextRun();
textRun.Text = "Sample text";

// Add textrun to the cell
cell.AddContent(new Paragraph(textRun));

// Configure border style
BorderStyle borderStyle = new BorderStyle();
borderStyle.BorderColor = new IronColor(IronSoftware.Drawing.Color.Black);
borderStyle.BorderValue = IronWord.Models.Enums.BorderValues.Thick;
borderStyle.BorderSize = 5;

// Configure table border
TableBorders tableBorders = new TableBorders() { 
    TopBorder = borderStyle,
    RightBorder = borderStyle,
    BottomBorder = borderStyle,
    LeftBorder = borderStyle,
};

cell.Borders = tableBorders;

// Create row and add cell
TableRow row = new TableRow();
row.AddCell(cell);
row.AddCell(cell);

// Create table and add row
Table table = new Table();
table.AddRow(row);

// Create new Word document from the table
WordDocument doc = new WordDocument(table);

// Export Word document
doc.SaveAs("Document.docx");

```

Documentation
=============================================================

- More Code Samples				:	https://ironsoftware.com/csharp/word/examples/create-empty-word/
- API Reference       		                :	https://ironsoftware.com/csharp/word/object-reference/api/
- Tutorials					:	https://ironsoftware.com/csharp/word/tutorials/document-element/
- Support					:	developers@ironsoftware.com
