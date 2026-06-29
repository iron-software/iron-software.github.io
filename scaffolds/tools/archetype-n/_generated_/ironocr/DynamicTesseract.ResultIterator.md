<!--
N-Full. DynamicTesseract. Frame B (identity-by-role). Decl: public sealed class ResultIterator : PageIterator, IDisposable.
Members verified 2026-06-23: GetText(PageIteratorLevel), GetConfidence(PageIteratorLevel), GetChoiceIterator, GetWordFontAttributes, GetWordRecognitionLanguage, GetWordIsFromDictionary, GetWordIsNumeric, GetSymbolIsSuperscript, GetSymbolIsSubscript, GetSymbolIsDropcap.
Cross-refs: PageIterator (base, same dir), PageIteratorLevel, ChoiceIterator (same dir, C1), FontInfo (same dir, C1).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ResultIterator.html
-->

## Injected overview (Markdown)

`ResultIterator` is what code reads from when it needs both the recognized text and where that text came from. It extends the page traversal of `PageIterator` with the recognition output Tesseract attaches to each element, so a single walk yields the words, their confidence, and their layout together rather than in separate passes.

A `ResultIterator` is produced from a recognized page and inherits the cursor mechanics of its base, `Begin` to reset and `Next` to advance by a `PageIteratorLevel`, while adding the result-side reads on top. Because it is sealed and disposable, wrap it in `using` or dispose it once the walk is done. The geometry methods of the base, such as `TryGetBoundingBox`, remain available, so position and text are read at the same cursor stop.

`GetText` returns the recognized text at a chosen `PageIteratorLevel`, from a single symbol up to a whole block, and `GetConfidence` reports how certain the engine is about that element so low-confidence results can be flagged or re-read. The word-level reads describe each word in context: `GetWordFontAttributes` reports its font, `GetWordRecognitionLanguage` the language the engine matched, and `GetWordIsFromDictionary` and `GetWordIsNumeric` flag dictionary words and numeric tokens, which helps when validating fields such as totals or codes. At the symbol level, `GetSymbolIsSuperscript`, `GetSymbolIsSubscript`, and `GetSymbolIsDropcap` distinguish special characters, while `GetChoiceIterator` exposes the alternative candidates the engine considered for the current symbol when a result needs review.

```csharp
using DynamicTesseract;

void DumpWords(ResultIterator iterator)
{
    iterator.Begin();
    do
    {
        string word = iterator.GetText(PageIteratorLevel.Word);
        float confidence = iterator.GetConfidence(PageIteratorLevel.Word);
        Console.WriteLine($"{word} ({confidence:F1}%)");
    }
    while (iterator.Next(PageIteratorLevel.Word));
}
```

The [OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) covers reading recognized text, the [results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) shows the result model, and the [result confidence how-to](https://ironsoftware.com/csharp/ocr/how-to/tesseract-result-confidence/) explains the confidence scores.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ResultIterator Class - IronOCR C# API`
- v2 (human): `ResultIterator: Read OCR Text in C#`
- v3 (balanced): `ResultIterator Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read recognized text and confidence in C# with the IronOCR ResultIterator class: GetText, GetConfidence, and word and symbol attributes.`
- v2 (human): `Get OCR text plus its confidence and font in C# with ResultIterator: read words and symbols as you walk a recognized page.`
- v3 (balanced): `Reference for the IronOCR ResultIterator class in C#: extends PageIterator with GetText, GetConfidence, and word and symbol reads.`

---

## Structured data

**TechArticle abstract**

> Read both the recognized text and its layout in IronOCR for C# with ResultIterator. It extends PageIterator with recognition output, so one walk yields words and confidence together. GetText returns text at a PageIteratorLevel, GetConfidence reports certainty, word reads describe font, language, and dictionary status, and symbol reads flag superscript, subscript, and dropcap characters.

**FAQPage entries**

```json
[
  {
    "question": "Where does ResultIterator live in the IronOCR API?",
    "answer": "ResultIterator is a sealed class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from PageIterator and implements IDisposable, so dispose it after a walk. It adds the recognized text and confidence to the base page traversal."
  },
  {
    "question": "How do you read recognized text and its confidence in C#?",
    "answer": "Walk the page by calling Begin then Next with a PageIteratorLevel, and at each stop call GetText for the recognized text and GetConfidence for the engine's certainty. Both take the level, so the same loop can read words or symbols."
  },
  {
    "question": "What is the difference between ResultIterator and PageIterator?",
    "answer": "PageIterator reports page structure and geometry, such as block types and bounding boxes. ResultIterator derives from it and adds the recognized content, including GetText, GetConfidence, font attributes, and GetChoiceIterator for alternative candidates."
  }
]
```
