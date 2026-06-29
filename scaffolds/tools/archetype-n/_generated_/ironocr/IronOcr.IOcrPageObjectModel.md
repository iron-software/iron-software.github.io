<!--
N-Mid / interface (no own members; inherited interface). Frame C. IronOcr.
No public implementor documented; obtained via OcrResult.Page.ObjectModel (public IOcrPageObjectModel ObjectModel { get; }) verified on IronOcr.OcrResult.Page.html 2026-06-23.
Extends: IDocumentPageObjectModel<...>, IBounded, IJsonSerializable (decl on page).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.IOcrPageObjectModel.html
-->

## Injected overview (Markdown)

When code needs a structured view of one OCR'd page rather than its flat text, `IOcrPageObjectModel` is the contract that supplies it. It models a page as a document object, so a consumer can treat the recognized content as positioned, bounded objects and serialize that structure to JSON. It is what `OcrResult.Page` hands back when asked for its object model.

A developer does not construct this type. You receive it from the `ObjectModel` property on an `OcrResult.Page`, after `IronTesseract.Read` has produced an `OcrResult` and you have indexed into one of its pages. Holding the interface rather than a concrete page model keeps the consumer decoupled from IronOCR's internal page representation.

The contract is composed from the interfaces it extends rather than a long member list of its own. It builds on a generic document-page object model, `IBounded` for the page's bounding geometry, and `IJsonSerializable` so the page structure can be written out as JSON for storage or downstream tooling. Reach for the object model when flat `Text` is not enough and the layout of the page matters.

The [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) traverses a result's pages and their content, and the [searchable PDF how-to](https://ironsoftware.com/csharp/ocr/how-to/searchable-pdf/) shows the page structure put to use.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IOcrPageObjectModel Interface - IronOCR C#`
- v2 (human): `IOcrPageObjectModel: The OCR Page Model in C#`
- v3 (balanced): `IOcrPageObjectModel Interface | IronOCR C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IOcrPageObjectModel is IronOCR's page object-model contract in C#, returned by OcrResult.Page.ObjectModel and serializable to JSON.`
- v2 (human): `Get a structured view of an OCR'd page in C# through IronOCR's IOcrPageObjectModel, obtained from OcrResult.Page.ObjectModel.`
- v3 (balanced): `Reference for IronOCR's IOcrPageObjectModel interface in C#: the page object model from OcrResult.Page, bounded and JSON-serializable.`

---

## Structured data

**TechArticle abstract**

> When code needs a structured, positioned view of one OCR'd page in C#, IOcrPageObjectModel is IronOCR's contract for it. You receive it from the ObjectModel property of an OcrResult.Page rather than constructing it. The interface extends a generic document-page object model along with IBounded and IJsonSerializable, so the page can be inspected as bounded objects and serialized to JSON.

**FAQPage entries**

```json
[
  {
    "question": "Where does IOcrPageObjectModel live in the IronOCR API?",
    "answer": "IOcrPageObjectModel is an interface in the IronOcr namespace, shipped in IronOcr.dll. It extends a generic IDocumentPageObjectModel along with IBounded and IJsonSerializable."
  },
  {
    "question": "How do you get an IOcrPageObjectModel in IronOCR?",
    "answer": "Read the ObjectModel property on an OcrResult.Page. After IronTesseract.Read returns an OcrResult, index into one of its pages and access ObjectModel to obtain the page's object model."
  }
]
```
