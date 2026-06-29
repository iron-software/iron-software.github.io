<!--
N-Mid / interface. Frame E (feature-fronted). No documented public implementor -> contract framing, no invented class, no code. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IPresentationDocumentWrap.html
-->

## Injected overview (Markdown)

Opening, creating, and saving a presentation file go through `IPresentationDocumentWrap`, the contract that wraps the document-level entry points a developer calls at the start and end of a workflow. It abstracts where a presentation comes from and where it lands, so the code that builds slides does not depend on the file plumbing underneath it. Reach for this contract when reasoning about the open-edit-save lifecycle as a whole rather than any single slide.

The contract defines four methods that bracket a workflow. `OpenDocumentFromFile` takes a path and returns an `IParentElement`, the root of the slide tree to edit; `OpenNewDocument` returns the same root for a fresh, empty presentation. On the way out, `SaveAs` writes the presentation to a file path, while `Save` persists into a supplied `IContainer`. Because the open methods return an `IParentElement`, the rest of an editing session works through that container contract, adding and arranging child elements before a save call commits the result.

The [create empty presentation example](https://ironsoftware.com/csharp/ppt/examples/create-empty-presentation/) shows the open-new path, and the [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) covers the editing that happens between opening and saving.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IPresentationDocumentWrap - IronPPT C# API`
- v2 (human): `IPresentationDocumentWrap: Open & Save in C#`
- v3 (balanced): `IPresentationDocumentWrap | IronPPT .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IPresentationDocumentWrap is the IronPPT document-lifecycle contract in C#: OpenDocumentFromFile, OpenNewDocument, Save, and SaveAs.`
- v2 (human): `Open, create, and save a presentation in C# through IronPPT's IPresentationDocumentWrap contract, the document-level entry points that bracket an editing session.`
- v3 (balanced): `Reference for the IronPPT IPresentationDocumentWrap interface in C#: the open, create, and save contract returning an IParentElement root.`

---

## Structured data

**TechArticle abstract**

> Open, create, and save a presentation file in C# through IronPPT's IPresentationDocumentWrap contract, which wraps the document-level entry points of an editing workflow. OpenDocumentFromFile and OpenNewDocument return an IParentElement root to edit, SaveAs writes to a path, and Save persists into an IContainer. It abstracts the file plumbing so slide-building code stays independent of where a presentation comes from or lands.

**FAQPage entries**

```json
[
  {
    "question": "Where does IPresentationDocumentWrap live in the IronPPT API?",
    "answer": "IPresentationDocumentWrap is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface; it declares OpenDocumentFromFile, OpenNewDocument, Save, and SaveAs."
  },
  {
    "question": "How do you open and save a presentation through IPresentationDocumentWrap?",
    "answer": "Call OpenDocumentFromFile with a path, or OpenNewDocument for an empty presentation; both return an IParentElement root to edit. After editing, call SaveAs with a file path, or Save with an IContainer, to persist the result."
  }
]
```
