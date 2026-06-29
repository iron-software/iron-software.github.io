<!--
N-Mid (sealed class, 4 members). Frame D (task-gerund). IronOCR / DynamicTesseract.
Verified 2026-06-23: sealed class : DisposableBase, IDisposable; GetConfidence(), GetText(),
Next(), Dispose(Boolean). Namespace DynamicTesseract; assembly IronOcr.dll; base DisposableBase.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ChoiceIterator.html
-->

## Injected overview (Markdown)

Walking the alternative recognition guesses Tesseract considered for one symbol runs through `ChoiceIterator`. For a single character position, the engine often weighs several candidate readings, and this iterator steps through them so low-level code can inspect each guess and its confidence instead of accepting only the top result.

A `ChoiceIterator` is obtained from the engine while reading, not constructed directly, and it is positioned at one symbol's set of choices. `GetText` returns the current candidate string and `GetConfidence` returns its score, while `Next` advances to the following choice and reports whether one exists. Because the type is sealed and derives from `DisposableBase`, it holds a native handle, so call `Dispose` (or wrap it in a `using`) once the choices have been read. This sits in the deep interop layer beneath IronOCR's reading API; the high-level result classes cover ordinary text and confidence needs, and `ChoiceIterator` is for code that genuinely needs the per-symbol alternatives.

The [result confidence how-to](https://ironsoftware.com/csharp/ocr/how-to/tesseract-result-confidence/) explains how IronOCR surfaces confidence scores, and the [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks through the standard result model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChoiceIterator - IronOCR C# API Reference`
- v2 (human): `ChoiceIterator: Per-Symbol OCR Guesses in C#`
- v3 (balanced): `ChoiceIterator Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Step through Tesseract's alternative character guesses in C# with the IronOCR ChoiceIterator: GetText, GetConfidence, and Next over one symbol.`
- v2 (human): `Inspect each candidate reading for a symbol in C# with the IronOCR ChoiceIterator class: read the text, check its confidence, and advance to the next.`
- v3 (balanced): `Reference for the IronOCR ChoiceIterator in C#: read per-symbol candidate guesses with GetText and GetConfidence, advancing with Next.`

---

## Structured data

**TechArticle abstract**

> ChoiceIterator steps through the alternative character guesses Tesseract weighed for one symbol in IronOCR for C#. Obtained from the engine while reading, it exposes GetText for the current candidate, GetConfidence for its score, and Next to advance. It holds a native handle, so dispose it after use.

**FAQPage entries**

```json
[
  {
    "question": "Where does ChoiceIterator live in the IronOCR API?",
    "answer": "ChoiceIterator is a sealed class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from DisposableBase and implements IDisposable, so it must be disposed after the per-symbol choices are read."
  },
  {
    "question": "How do you read alternative character guesses in C# with IronOCR?",
    "answer": "Obtain a ChoiceIterator from the engine for a symbol, call GetText for the current candidate and GetConfidence for its score, then call Next to move to the following choice. Dispose the iterator when finished. For ordinary text and confidence, use the high-level result classes instead."
  }
]
```
