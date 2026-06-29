<!--
N-Full. Frame B (identity-by-role). IronWord. Members verified 2026-06-23.
Constructors, Children, Paragraphs, Runs, Tables, Texts, Sections, MailMerge, MultiLevelTextLists, PageCount;
AddText, AddParagraph, AddImage, AddTable, AddRun, AddSection, AddShape, AddChild, AddMultiLevelTextList;
ExtractText, ExtractTextFromPage, ExtractImages, ExtractShapes, FindText, ReplaceText, Remove;
Save, SaveAs, ToPdf, ToJson, LogObjectTree, PageCount verified.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.WordDocument.html
-->

## Injected overview (Markdown)

`WordDocument` is the object you hold whenever you create, edit, read, or save a `.docx` file in C#. It models a whole Word document, and almost every IronWord task starts by constructing one and ends by saving it. Reach for it when a project needs to build a report from code, fill an existing template, or pull text and images back out of a document a user uploaded.

Construct it four ways: `new WordDocument()` for an empty document, `new WordDocument(string filePath)` or `new WordDocument(byte[] bytes)` to load an existing file, and `new WordDocument(params ContentElement[] children)` to assemble one from elements you already built. Once you hold the instance, you mutate it in memory and then write it out, so the same object spans the full create-edit-save sequence.

The members group into a few clear jobs. For **content authoring**, `AddText`, `AddParagraph`, `AddRun`, `AddTable`, `AddImage`, `AddShape`, `AddSection`, `AddMultiLevelTextList`, and `AddChild` append elements to the body. For **reading the structure**, the `Paragraphs`, `Runs`, `Tables`, `Texts`, `Sections`, `Children`, and `MultiLevelTextLists` collections expose what the document already contains, and `PageCount` reports its length. For **extraction and search**, `ExtractText`, `ExtractTextFromPage`, `ExtractTextFromPages`, `ExtractImages`, `ExtractShapes`, `FindText`, `ReplaceText`, and `Remove` mine and edit existing content. For **persistence**, `Save` and `SaveAs` write `.docx` to a path (`Save()` returns bytes), `ToPdf` exports straight to PDF, `ToJson` serializes the model, and `LogObjectTree` prints the element hierarchy for debugging. `MailMerge` reaches the template-merge surface.

```csharp
using IronWord;
using IronWord.Models;

var document = new WordDocument();
document.AddText("Quarterly Report");
document.SaveAs("report.docx");
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) walks through writing content, the [extract text how-to](https://ironsoftware.com/csharp/word/how-to/extract-text/) reads it back, and the [Word to PDF how-to](https://ironsoftware.com/csharp/word/how-to/word-to-pdf/) covers the PDF export path.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WordDocument Class - IronWord C# API`
- v2 (human): `WordDocument: Create & Edit Word Files in C#`
- v3 (balanced): `WordDocument Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Create, edit, read, and save .docx files in C# with the IronWord WordDocument class: AddText, AddTable, ExtractText, ReplaceText, SaveAs, and ToPdf.`
- v2 (human): `Build, edit, and save Word documents in C# with the IronWord WordDocument class: add text, tables, and images, extract content, or export to PDF.`
- v3 (balanced): `Reference for the IronWord WordDocument class in C#: construct a document, add content, extract or replace text, and save to .docx or PDF.`

---

## Structured data

**TechArticle abstract**

> Creating, editing, and saving a Word document in C# runs through the IronWord WordDocument class. Construct one empty, from a file path, from bytes, or from content elements, then author content with AddText, AddParagraph, AddTable, and AddImage. Read it back through the Paragraphs, Runs, Tables, and Texts collections, search with FindText and ReplaceText, and persist with Save, SaveAs, or ToPdf.

**FAQPage entries**

```json
[
  {
    "question": "Where does WordDocument live in the IronWord API?",
    "answer": "WordDocument is a class in the IronWord namespace, shipped in IronWord.dll. It derives from Object and implements IWordDocument, IDocument, and IParent. Construct it, add content, then call SaveAs to write a .docx file."
  },
  {
    "question": "How do you create and save a Word document in C#?",
    "answer": "Construct a WordDocument with new WordDocument(), append content with AddText, AddParagraph, AddTable, or AddImage, then call SaveAs with a file path. Save() returns the document as a byte array instead, and ToPdf exports to PDF."
  },
  {
    "question": "How do you read text from an existing Word document in C#?",
    "answer": "Load the file with new WordDocument(filePath), then call ExtractText for the whole document or ExtractTextFromPage for a single page. FindText locates a string and ReplaceText swaps one value for another in place."
  }
]
```
