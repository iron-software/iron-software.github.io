<!--
N-Full. Frame A (subject-verb). IronWord. Members verified 2026-06-23:
props HangingIndentation, Index, Items, Justification, ListType, NumberingId, StartIndentation, StartNumberingValue, SymbolText, SymbolTextFontName;
methods AddItem(ListItem), Clear(ListItem), RemoveItem(ListItem), GetHangingIndentation(MeasurementUnit), GetStartIndentation(MeasurementUnit), SetHangingIndentation(double, MeasurementUnit), SetStartIndentation(double, MeasurementUnit).
Base ParentElement. Cross-ref verified: WordDocument.AddMultiLevelTextList(MultiLevelTextList), WordDocument.MultiLevelTextLists; ListItem.
Target: IronWord.Models.MultiLevelTextList.html
-->

## Injected overview (Markdown)

`MultiLevelTextList` builds the numbered or bulleted lists in a Word document, including outlines that nest several levels deep. It gathers the `ListItem` entries that make up the list and carries the formatting that decides whether they appear as numbers or bullets, how they are justified, and how far each level indents.

A developer assembles the list, then attaches it to a `WordDocument` with `AddMultiLevelTextList`; the document's `MultiLevelTextLists` property holds the lists already added, and `Index` reports a list's position among them. Entries come from `ListItem` objects, each built from a `Paragraph`, and a nested list lives beneath an item to form the next level. This is the type behind a checklist, a legal outline, or any ordered series in the body.

Add and remove entries with `AddItem`, `RemoveItem`, and `Clear`, all of which take a `ListItem`. `Items` exposes the current entries, so you can inspect or reorder them before the list is rendered. `ListType` selects numbering versus bullets, `Justification` aligns the text, and `SymbolText` with `SymbolTextFontName` set the bullet glyph and its font for a level. `StartNumberingValue` chooses the first number, useful when a list resumes counting from an earlier section, and `NumberingId` ties related lists together so they share one numbering sequence across breaks. Indentation is controlled in real units: `SetStartIndentation` and `SetHangingIndentation` take a value plus a `MeasurementUnit`, and the matching `GetStartIndentation` and `GetHangingIndentation` read them back in the unit you ask for. Build the entries before attaching the list so the numbering and indentation are settled when the document renders.

```csharp
var list = new MultiLevelTextList();
list.AddItem(new ListItem(new Paragraph("First")));
list.AddItem(new ListItem(new Paragraph("Second")));
document.AddMultiLevelTextList(list);
```

The [add list example](https://ironsoftware.com/csharp/word/examples/add-list/) builds a numbered list, the [add bullet list example](https://ironsoftware.com/csharp/word/examples/add-bullet-list/) demonstrates the bulleted form, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how lists sit within a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MultiLevelTextList - IronWord C# API`
- v2 (human): `MultiLevelTextList: Word Lists in C#`
- v3 (balanced): `MultiLevelTextList Class | IronWord .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Build numbered and bulleted Word lists in C# with the IronWord MultiLevelTextList class: add ListItem entries, set ListType, and control indentation.`
- v2 (human): `Create multi-level numbered or bulleted lists in a Word document in C# with the IronWord MultiLevelTextList class, nesting items for outlines.`
- v3 (balanced): `Reference for the IronWord MultiLevelTextList class in C#: collect ListItem entries, choose numbering or bullets, and set per-level indentation.`

---

## Structured data

**TechArticle abstract**

> Building numbered, bulleted, or multi-level lists in a Word document in C# runs through the IronWord MultiLevelTextList class. It collects ListItem entries through AddItem, RemoveItem, and Clear, sets numbering or bullets with ListType, and controls per-level layout with SetStartIndentation and SetHangingIndentation. Attach the finished list to a WordDocument with AddMultiLevelTextList.

**FAQPage entries**

```json
[
  {
    "question": "Where does MultiLevelTextList live in the IronWord API?",
    "answer": "MultiLevelTextList is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ParentElement, and a WordDocument exposes the lists added to it through its MultiLevelTextLists property."
  },
  {
    "question": "How do you create a numbered or bulleted list in IronWord?",
    "answer": "Create a MultiLevelTextList, add ListItem entries with AddItem, and set ListType for numbering or bullets. Then call AddMultiLevelTextList on the WordDocument so the list renders with its numbering and indentation."
  },
  {
    "question": "How do you set indentation on a MultiLevelTextList in IronWord?",
    "answer": "Call SetStartIndentation and SetHangingIndentation, passing a value and a MeasurementUnit. Read the current values back with GetStartIndentation and GetHangingIndentation in the unit you request."
  }
]
```
