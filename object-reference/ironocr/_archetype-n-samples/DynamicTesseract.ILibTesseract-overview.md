<!--
N-Full / interface (~78 P/Invoke methods, bucketed). Frame B. Implementor: LibTesseract5Instance (verified : Object, ILibTesseract). Extends nothing.
Members verified 2026-06-23 against page. Cross-ref LibTesseract5Instance implements it; consumes Page/PageIteratorLevel/PageSegMode/PolyBlockType.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ILibTesseract.html
-->

## Injected overview (Markdown)

`ILibTesseract` is the contract IronOCR calls through to drive the native Tesseract engine, the thin managed surface over Tesseract's C API. Every recognition the high-level engine performs is ultimately a sequence of calls against this contract, so it is where the managed code meets the unmanaged OCR library.

The concrete implementor in IronOCR is `LibTesseract5Instance`, which forwards each member to the bundled Tesseract 5 binary through `HandleRef` handles. Coding against the interface rather than the concrete class lets the engine be swapped or mocked, which is how IronOCR keeps its native binding testable. Application code almost never holds an `ILibTesseract` directly, since `IronTesseract` and the `Page` it produces wrap the whole flow, but the contract is what those higher types rest on.

The members group into functional buckets. The engine-lifecycle and recognition calls (`BaseApiCreate`, `BaseApiInit`, `BaseApiSetImage`, `BaseApiRecognize`, `BaseAPIGetUTF8TextInternal`, `BaseApiSetVariable`, `BaseAPISetPageSegMode`) start the API, load an image, run recognition, and read text or set engine variables. The iterator buckets (`BaseApiGetIterator`, the `PageIterator*` family such as `PageIteratorNext` and `PageIteratorBoundingBox`, the `ResultIterator*` family, and the `ChoiceIterator*` family) walk the recognized layout and pull per-element geometry, confidence, and alternatives. The rendering bucket (`PDFRendererCreate`, `HOcrRendererCreate`, `TextRendererCreate`, and the `ResultRenderer*` calls) builds searchable-PDF, hOCR, and text output. The memory bucket (`DeleteText`, `DeleteIntArray`, `BaseApiDelete`) frees the native allocations each call hands back.

```csharp
ILibTesseract engine = new LibTesseract5Instance();
string version = engine.GetVersion();
```

The [Tesseract 5 example](https://ironsoftware.com/csharp/ocr/examples/csharp-tesseract-5/) shows the high-level engine, the [configure and set up Tesseract example](https://ironsoftware.com/csharp/ocr/examples/csharp-configure-setup-tesseract/) covers setup, and the [Tesseract OCR tutorial](https://ironsoftware.com/csharp/ocr/tutorials/c-sharp-tesseract-ocr/) walks the engine end to end.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ILibTesseract - IronOCR C# API Reference`
- v2 (human): `ILibTesseract: The Tesseract Engine Contract in C#`
- v3 (balanced): `ILibTesseract | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ILibTesseract is IronOCR's C# contract over the native Tesseract API: engine lifecycle, recognition, iterators, rendering, and memory.`
- v2 (human): `Drive the native Tesseract engine in C# through IronOCR's ILibTesseract contract, implemented by LibTesseract5Instance for Tesseract 5.`
- v3 (balanced): `Reference for the IronOCR ILibTesseract interface in C#: the managed contract over the Tesseract C API, implemented by LibTesseract5Instance.`

---

## Structured data

**TechArticle abstract**

> ILibTesseract is the contract IronOCR calls through to drive the native Tesseract engine in C#, the managed surface over Tesseract's C API. Its members cover engine lifecycle and recognition, page and result iteration, output rendering for PDF, hOCR, and text, and native memory cleanup. The concrete implementor is LibTesseract5Instance, which forwards each call to the bundled Tesseract 5 binary.

**FAQPage entries**

```json
[
  {
    "question": "Where does ILibTesseract live in the IronOCR API?",
    "answer": "ILibTesseract is an interface in the DynamicTesseract namespace, shipped in IronOcr.dll. It does not extend another interface; it is the managed contract over the native Tesseract C API."
  },
  {
    "question": "What implements ILibTesseract in IronOCR?",
    "answer": "LibTesseract5Instance implements ILibTesseract, forwarding each member to the bundled Tesseract 5 native binary through HandleRef handles. Application code normally works through the high-level IronTesseract API instead of holding an ILibTesseract directly."
  },
  {
    "question": "What do the ILibTesseract members do?",
    "answer": "They group into buckets: BaseApi calls start the engine, set an image, run recognition, and read text or variables; the PageIterator, ResultIterator, and ChoiceIterator families walk the recognized layout; the renderer calls build PDF, hOCR, and text output; and the Delete calls free native memory."
  }
]
```
