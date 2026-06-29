<!--
N-Mid / interface (members all inherited from IDocumentPageCollection<OcrResult.Page>; triage optional). Frame B. IronOcr.
Implementor: OcrResultPagesCollection (verified). Returned by OcrResult.Pages (verified: returns OcrResultPagesCollection).
Extends IDocumentPageCollection<OcrResult.Page>, IReadOnlyCollection<OcrResult.Page>, IEnumerable<OcrResult.Page>, IEnumerable.
Namespace IronOcr.OcrResults.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResults.IOcrPageCollection.html
-->

## Injected overview (Markdown)

`IOcrPageCollection` is the read-only contract for a set of OCR result pages. It lets code accept "the pages of a read" without binding to a concrete list type, so a method can take the pages of any `OcrResult` and enumerate them the same way.

The contract is a typed, read-only page collection: it extends `IReadOnlyCollection<OcrResult.Page>` and `IEnumerable<OcrResult.Page>`, so you get a `Count` and can `foreach` over `OcrResult.Page` items, but the collection is not meant to be mutated by consumers. The concrete implementor in IronOCR is `OcrResultPagesCollection`, the type `OcrResult.Pages` returns, so in practice you obtain an `IOcrPageCollection` simply by reading `result.Pages`.

Most code uses `result.Pages` directly and never names the interface. Type a parameter as `IOcrPageCollection` when you want a helper that processes pages from any source and stays easy to test, since a unit test can pass a stub collection of `OcrResult.Page` instead of running a real read. Either way, enumerate the pages and read each one through the `OcrResult.Page` members.

The [OCR results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) iterates the page collection, and the [reading results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) shows how to process each page.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IOcrPageCollection - IronOCR C# API`
- v2 (human): `IOcrPageCollection: OCR Pages Contract in C#`
- v3 (balanced): `IOcrPageCollection Interface | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IOcrPageCollection is the read-only OCR pages contract in IronOCR for C#: a typed, enumerable collection of OcrResult.Page items.`
- v2 (human): `Accept the pages of any IronOCR read in C# through the IOcrPageCollection contract, implemented by the OcrResultPagesCollection that Pages returns.`
- v3 (balanced): `Reference for the IronOCR IOcrPageCollection interface in C#: the read-only, enumerable page collection implemented by OcrResultPagesCollection.`

---

## Structured data

**TechArticle abstract**

> IOcrPageCollection is the read-only contract for a set of IronOCR result pages in C#. It extends IReadOnlyCollection and IEnumerable of OcrResult.Page, so you get a Count and can enumerate pages without mutating the collection. The concrete implementor is OcrResultPagesCollection, the type OcrResult.Pages returns, so reading result.Pages gives you an IOcrPageCollection.

**FAQPage entries**

```json
[
  {
    "question": "Where does IOcrPageCollection live in the IronOCR API?",
    "answer": "IOcrPageCollection is an interface in the IronOcr.OcrResults namespace, shipped in IronOcr.dll. It extends IDocumentPageCollection<OcrResult.Page>, IReadOnlyCollection<OcrResult.Page>, and IEnumerable, so it is a typed, read-only page collection."
  },
  {
    "question": "What implements IOcrPageCollection in IronOCR?",
    "answer": "OcrResultPagesCollection implements IOcrPageCollection and is the type returned by OcrResult.Pages. Read result.Pages to obtain one; type a parameter as IOcrPageCollection only when a helper should accept pages from any source."
  }
]
```
