<!--
N-Mid (3 members). Frame C. IronOcr. Verified 2026-06-23 against OcrPassportResult.html.
Props: Text, Confidence, PassportInfo. Base Object, implements IOcrResult.
ReadPassport cross-ref (summary "Result from ReadPassport(OcrInputBase)"); PassportInfo type verified on PassportInfo.html.
-->

## Injected overview (Markdown)

When a passport read finishes in C#, `OcrPassportResult` is the object that carries the outcome. `IronTesseract.ReadPassport` returns one, bundling the raw recognized text, an overall confidence score, and the structured passport fields decoded from the document. It pairs with `PassportInfo`, which holds the typed fields, while this result wraps that data alongside the plain `Text` so a workflow can pick whichever view it needs.

The members are read directly off the returned object. `PassportInfo` is the structured payload, the MRZ and VIZ fields such as surname, passport number, nationality, and dates, ready as typed properties rather than a raw string to parse. `Text` exposes the recognized text the engine produced, and `Confidence` reports certainty as a score so low-quality scans can be flagged or retried. For most workflows, read `PassportInfo` for the parsed fields and check `Confidence` before relying on them.

The [read passport how-to](https://ironsoftware.com/csharp/ocr/how-to/read-passport/) covers the full extraction, and the [passport reading example](https://ironsoftware.com/csharp/ocr/examples/read-passport/) shows the result in code.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrPassportResult Class - IronOCR C# API`
- v2 (human): `OcrPassportResult: Passport Reads in C#`
- v3 (balanced): `OcrPassportResult Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read passport results in C# with the IronOCR OcrPassportResult class: get the decoded PassportInfo fields, raw Text, and a Confidence score.`
- v2 (human): `Get passport output in C# from the IronOCR OcrPassportResult: structured PassportInfo fields, the recognized text, and a confidence score.`
- v3 (balanced): `Reference for the IronOCR OcrPassportResult class in C#: the PassportInfo fields, Text, and Confidence returned by ReadPassport.`

---

## Structured data

**TechArticle abstract**

> Reading a passport in C# returns the IronOCR OcrPassportResult class, the object IronTesseract.ReadPassport produces. It exposes PassportInfo with the decoded MRZ and VIZ fields, Text with the raw recognized characters, and Confidence as an overall certainty score. Read PassportInfo for typed fields such as surname, passport number, and dates, and check Confidence before relying on a low-quality scan.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrPassportResult live in the IronOCR API?",
    "answer": "OcrPassportResult is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from System.Object and implements IOcrResult, and IronTesseract.ReadPassport returns it."
  },
  {
    "question": "How do you read passport fields in C#?",
    "answer": "Call ReadPassport on an IronTesseract to get an OcrPassportResult, then read its PassportInfo property for the decoded fields. Text holds the raw recognized characters and Confidence reports the overall certainty score."
  }
]
```
