<!--
N-Full / class (~78 members, bucketed). Frame D (task-gerund). IronOcr. Implements ILibTesseract (verified : Object, ILibTesseract). Parameterless ctor.
Members verified 2026-06-23. Sibling of ILibTesseract interface (different opener frame).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.LibTesseract5Instance.html
-->

## Injected overview (Markdown)

Talking to the bundled Tesseract 5 binary runs through `LibTesseract5Instance`, the concrete native binding that turns managed calls into the engine's C API. It is the object that actually performs every low-level recognition step IronOCR relies on, with each method marshalling its arguments across the managed boundary through `HandleRef` handles.

The class implements `ILibTesseract` and is constructed with a parameterless `new LibTesseract5Instance()`. Because it satisfies that contract, callers usually hold it as an `ILibTesseract` so the binding can be mocked in tests, and most application code never names it at all, since `IronTesseract` and the `Page` it produces wrap the entire flow. Reach for the instance directly only when integrating the native engine outside IronOCR's high-level path.

Its members follow the same functional buckets as the contract. The engine-lifecycle and recognition calls (`BaseApiCreate`, `BaseApiInit`, `BaseApiSetImage`, `BaseApiRecognize`, `BaseAPIGetUTF8TextInternal`, `BaseAPISetPageSegMode`, `BaseApiSetVariable`) start the API, load an image, run recognition, and read results or tune variables. The iterator buckets walk the recognized layout: the `PageIterator*` calls (`PageIteratorBegin`, `PageIteratorNext`, `PageIteratorBoundingBox`) for geometry, the `ResultIterator*` calls for text and confidence, and the `ChoiceIterator*` calls for alternative readings. The rendering bucket (`PDFRendererCreate`, `HOcrRendererCreate`, `TextRendererCreate`, and the `ResultRenderer*` calls) builds searchable-PDF, hOCR, and text output, while `GetVersion` reports the linked engine version. The memory bucket (`DeleteText`, `DeleteIntArray`, `BaseApiDelete`) frees the native allocations each call returns.

```csharp
ILibTesseract engine = new LibTesseract5Instance();
string version = engine.GetVersion();
```

The [Tesseract 5 example](https://ironsoftware.com/csharp/ocr/examples/csharp-tesseract-5/) shows the high-level engine, the [configure and set up Tesseract example](https://ironsoftware.com/csharp/ocr/examples/csharp-configure-setup-tesseract/) covers setup, and the [Tesseract OCR tutorial](https://ironsoftware.com/csharp/ocr/tutorials/c-sharp-tesseract-ocr/) walks the engine in full.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LibTesseract5Instance - IronOCR C# API`
- v2 (human): `LibTesseract5Instance: Tesseract 5 Binding in C#`
- v3 (balanced): `LibTesseract5Instance | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `LibTesseract5Instance is IronOCR's native Tesseract 5 binding in C#: it implements ILibTesseract for recognition, iteration, and rendering.`
- v2 (human): `Call the native Tesseract 5 engine in C# through IronOCR's LibTesseract5Instance, the ILibTesseract implementation that marshals each step.`
- v3 (balanced): `Reference for the IronOCR LibTesseract5Instance class in C#: the ILibTesseract implementation that binds the native Tesseract 5 engine.`

---

## Structured data

**TechArticle abstract**

> LibTesseract5Instance binds the native Tesseract 5 engine for IronOCR in C#, marshalling managed calls into the engine's C API through HandleRef handles. It implements ILibTesseract with members for engine lifecycle and recognition, page and result iteration, PDF, hOCR, and text rendering, and native memory cleanup. Most code holds it as an ILibTesseract or works through the high-level IronTesseract API.

**FAQPage entries**

```json
[
  {
    "question": "Where does LibTesseract5Instance live in the IronOCR API?",
    "answer": "LibTesseract5Instance is a class in the DynamicTesseract namespace, shipped in IronOcr.dll, with Object as its base type. It implements the ILibTesseract interface and is constructed with a parameterless new LibTesseract5Instance()."
  },
  {
    "question": "How does LibTesseract5Instance relate to ILibTesseract in C#?",
    "answer": "LibTesseract5Instance is the concrete implementation of the ILibTesseract contract. It forwards each interface member to the bundled Tesseract 5 native binary, so callers typically hold it as an ILibTesseract to keep the binding swappable and testable."
  },
  {
    "question": "Do you call LibTesseract5Instance directly in C#?",
    "answer": "Usually no. The high-level IronTesseract API and the Page it produces wrap the entire recognition flow. Use LibTesseract5Instance directly only when integrating the native Tesseract 5 engine outside IronOCR's high-level path."
  }
]
```
