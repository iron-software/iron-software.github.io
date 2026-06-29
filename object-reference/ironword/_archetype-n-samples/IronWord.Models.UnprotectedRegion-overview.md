<!--
N-Mid (UnprotectedRegion, 3 props). Frame D (task-gerund). IronWord. Code 0 (config marker, set-only props, no clear single usage line worth showing -> use 0).
Members verified 2026-06-23: EndLocation(ContentElement), Identifier(string), StartLocation(ContentElement). Ctor ().
Cross-class verified: WordDocumentProtectionSettings.UnprotectedRegions is List<UnprotectedRegion>.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.UnprotectedRegion.html
-->

## Injected overview (Markdown)

Leaving a span of a locked Word document editable, while the rest stays protected, is described by `UnprotectedRegion`. Each region marks a stretch of content that readers may still change inside a file that is otherwise restricted, so a form or template can permit edits in known places only.

A region reaches the document through `WordDocumentProtectionSettings`, whose `UnprotectedRegions` property is a `List<UnprotectedRegion>`. Add the regions you want to leave open and they apply when the protected document is saved. Each region is pinned to the document by its boundaries: `StartLocation` and `EndLocation` are both `ContentElement` values that mark where the editable span begins and ends, and `Identifier` is a string name for the region so it can be referenced. Point the start and end at the elements that bracket the editable passage, give the region an identifier, and add it to the protection settings. Readers can then edit the content between those boundaries while the surrounding document remains locked. Use one region per editable span, and list several on the settings when a template opens more than one area.

The [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) covers changing document content within editable regions, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows the element model that start and end locations point into.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `UnprotectedRegion - IronWord C# API Reference`
- v2 (human): `UnprotectedRegion: Editable Spans in C# Word`
- v3 (balanced): `UnprotectedRegion | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Mark editable spans in a locked Word document in C# with the IronWord UnprotectedRegion class: set StartLocation, EndLocation, and an Identifier.`
- v2 (human): `Leave parts of a protected Word file editable in C# with the IronWord UnprotectedRegion class: bound a span by start and end content elements.`
- v3 (balanced): `Reference for the IronWord UnprotectedRegion class in C#: define an editable span in a protected document with StartLocation, EndLocation, and Identifier.`

---

## Structured data

**TechArticle abstract**

> Leaving a span of a protected C# Word document editable goes through the IronWord UnprotectedRegion class. StartLocation and EndLocation, both ContentElement values, bracket the editable passage, and Identifier names the region. Add regions to the UnprotectedRegions list on WordDocumentProtectionSettings, and readers can change the content between those boundaries while the rest of the file stays locked.

**FAQPage entries**

```json
[
  {
    "question": "Where does UnprotectedRegion live in the IronWord API?",
    "answer": "UnprotectedRegion is a class in the IronWord.Models namespace, shipped in IronWord.dll, with Object as its base type. It is added to the UnprotectedRegions list on a WordDocumentProtectionSettings to mark editable spans in a protected document."
  }
]
```
