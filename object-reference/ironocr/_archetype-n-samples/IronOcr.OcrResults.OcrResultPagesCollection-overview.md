<!--
N-Mid (1 declared member Length + ctor; rest inherited from List<OcrResult.Page>). Frame B. IronOcr.
Implements IOcrPageCollection. Returned by OcrResult.Pages (verified). Base List<OcrResult.Page>.
Namespace IronOcr.OcrResults.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResults.OcrResultPagesCollection.html
-->

## Injected overview (Markdown)

`OcrResultPagesCollection` is the concrete list of pages an OCR read returns, the value you iterate to work through a document page by page. It holds every `OcrResult.Page` the engine produced, in order, ready to enumerate or index.

You obtain it from a finished read: `OcrResult.Pages` returns an `OcrResultPagesCollection`. Because the collection is a `List<OcrResult.Page>`, everything you expect from a generic list is available, including indexing with `result.Pages[0]`, a `Count`, and `foreach`. It also implements `IOcrPageCollection`, so a method typed to that read-only contract accepts it directly.

The type adds little of its own on purpose: a `Length` property reports the page count (a synonym for the list's `Count`), and the rest is the inherited list behavior. The practical guidance is to enumerate the collection and read each `OcrResult.Page` through its own members; index into it when you need a specific page, such as the first page of a single-image read. Treat the contents as the result of the read rather than a list to mutate.

The [OCR results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) iterates the pages collection, and the [read PDFs how-to](https://ironsoftware.com/csharp/ocr/how-to/input-pdfs/) produces one page per PDF page to walk.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResultPagesCollection - IronOCR C# API`
- v2 (human): `OcrResultPagesCollection: OCR Pages in C#`
- v3 (balanced): `OcrResultPagesCollection | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR OcrResultPagesCollection in C# is the List of OcrResult.Page returned by OcrResult.Pages, with a Length count and full list access.`
- v2 (human): `Walk an OCR document page by page in C# with the IronOCR OcrResultPagesCollection that OcrResult.Pages returns: index, count, and enumerate it.`
- v3 (balanced): `Reference for the IronOCR OcrResultPagesCollection in C#: a List of OcrResult.Page that implements IOcrPageCollection and exposes Length.`

---

## Structured data

**TechArticle abstract**

> The pages of an IronOCR read in C# come back as an OcrResultPagesCollection, the value OcrResult.Pages returns. It is a List of OcrResult.Page, so you can index, count, and enumerate it, and it implements IOcrPageCollection for code typed to that contract. A Length property reports the page count; iterate the collection and read each OcrResult.Page through its own members.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResultPagesCollection live in the IronOCR API?",
    "answer": "OcrResultPagesCollection is a class in the IronOcr.OcrResults namespace, shipped in IronOcr.dll. It derives from List<OcrResult.Page> and implements IOcrPageCollection. You obtain one from OcrResult.Pages."
  },
  {
    "question": "How do you access a specific page from an OCR result in C#?",
    "answer": "Read OcrResult.Pages to get the OcrResultPagesCollection, then index it like a list, for example result.Pages[0] for the first page. Use Length or the inherited Count for the number of pages, and foreach to process them all."
  }
]
```
