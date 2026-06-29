<!--
N-Mid / interface (3 members). Frame B. Extends IDisposable. Consumes Page via AddPage(Page). No public implementor documented in api-dir; describe contract + consumer.
Members verified 2026-06-23: PageNumber {get}, AddPage(Page), BeginDocument(string).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.IResultRenderer.html
-->

## Injected overview (Markdown)

`IResultRenderer` is the contract for writing recognized `Page` results into an output document, such as a searchable PDF, hOCR file, or plain text export. A renderer accumulates pages and tracks how many it has written, so the same recognition pass can feed one multi-page document.

Three members define the contract. `BeginDocument` opens a new output document under a given title and returns an `IDisposable` that closes the document when disposed, so a `using` block frames the whole write. `AddPage` writes one recognized `Page` into the open document and returns whether the page was accepted. `PageNumber` reports how many pages have been rendered so far. Because the contract extends `IDisposable`, dispose the renderer to release its native output handle once every page is written, and dispose the document handle that `BeginDocument` returns to finalize the file on disk.

The [searchable PDF how-to](https://ironsoftware.com/csharp/ocr/how-to/searchable-pdf/) and the [hOCR export how-to](https://ironsoftware.com/csharp/ocr/how-to/html-hocr-export/) cover the high-level output that this rendering layer backs.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IResultRenderer - IronOCR C# API Reference`
- v2 (human): `IResultRenderer: OCR Output Contract in C#`
- v3 (balanced): `IResultRenderer | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IResultRenderer is the IronOCR contract in C# for writing recognized Page results to output: BeginDocument, AddPage, and PageNumber.`
- v2 (human): `Write recognized OCR pages to a document in C# through the IronOCR IResultRenderer contract: begin a document, add pages, track the count.`
- v3 (balanced): `Reference for the IronOCR IResultRenderer interface in C#: the disposable contract that writes Page results into an output document.`

---

## Structured data

**TechArticle abstract**

> IResultRenderer is the IronOCR contract in C# for writing recognized Page results into an output document such as a searchable PDF or hOCR file. BeginDocument opens a document and returns an IDisposable, AddPage writes one Page, and PageNumber reports the count. It extends IDisposable, so dispose the renderer to release its native output handle.

**FAQPage entries**

```json
[
  {
    "question": "Where does IResultRenderer live in the IronOCR API?",
    "answer": "IResultRenderer is an interface in the DynamicTesseract namespace, shipped in IronOcr.dll. It extends IDisposable and defines BeginDocument, AddPage, and PageNumber for writing recognized pages to an output document."
  },
  {
    "question": "How do you write OCR results to a document with IResultRenderer in C#?",
    "answer": "Call BeginDocument with a title to open the output and capture the returned IDisposable in a using block, call AddPage for each recognized Page, and read PageNumber for the running count. Disposing the document handle finishes the file."
  }
]
```
