<!--
N-Mid (Index + 3 methods + 2 ctors). Frame B. IronWord. Members verified 2026-06-23: Index, AddSubMultiLevelTextList(MultiLevelTextList), RemoveSubMultiLevelTextList, Update(Paragraph); ctor(MultiLevelTextList), ctor(Paragraph).
Base ParentElement. Cross-ref: MultiLevelTextList.AddItem/Items verified on its page.
Target: IronWord.Models.ListItem.html
-->

## Injected overview (Markdown)

A `ListItem` is the single entry you place into a numbered or bulleted list, the unit a `MultiLevelTextList` collects to build the list a reader sees. Each item carries the paragraph content shown on its line and can hold a nested list of its own, which is how multi-level outlines form.

You create a list item from a `Paragraph` (the text for that line) or from a `MultiLevelTextList` when the item begins a sub-list, then add it to the parent list with `AddItem`. `Index` reports the item's position within its list. `AddSubMultiLevelTextList` attaches a nested list beneath the item to push content down a level, and `RemoveSubMultiLevelTextList` detaches it again. `Update` replaces the item's paragraph content in place. Build the entries first, add them to a `MultiLevelTextList`, and add that list to the document so the numbering and indentation render correctly.

```csharp
var item = new ListItem(new Paragraph("First step"));
```

The [add list example](https://ironsoftware.com/csharp/word/examples/add-list/) builds a list end to end, and the [add bullet list example](https://ironsoftware.com/csharp/word/examples/add-bullet-list/) shows the bulleted variant.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ListItem Class - IronWord C# API Reference`
- v2 (human): `ListItem: List Entries in Word with C#`
- v3 (balanced): `ListItem Class | IronWord .NET API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add an entry to a Word list in C# with the IronWord ListItem class: built from a Paragraph, added to a MultiLevelTextList, with optional sub-lists.`
- v2 (human): `Place one line into a numbered or bulleted Word list in C# with the IronWord ListItem class, including nested sub-lists for multi-level outlines.`
- v3 (balanced): `Reference for the IronWord ListItem class in C#: a single list entry from a Paragraph, with AddSubMultiLevelTextList for nesting and Update for edits.`

---

## Structured data

**TechArticle abstract**

> Adding a single entry to a Word list in C# runs through the IronWord ListItem class. Construct one from a Paragraph or a MultiLevelTextList, then add it to a MultiLevelTextList with AddItem. Index reports its position, AddSubMultiLevelTextList nests a list beneath it, RemoveSubMultiLevelTextList detaches that list, and Update replaces its paragraph content.

**FAQPage entries**

```json
[
  {
    "question": "Where does ListItem live in the IronWord API?",
    "answer": "ListItem is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ParentElement, so an item can contain its own nested MultiLevelTextList for multi-level outlines."
  },
  {
    "question": "How do you add an item to a list in IronWord?",
    "answer": "Create a ListItem from a Paragraph, then call AddItem on the MultiLevelTextList. To nest content under the item, call AddSubMultiLevelTextList. Add the finished MultiLevelTextList to the document for the numbering to render."
  }
]
```
