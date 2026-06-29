<!--
N-Mid (abstract class, ~5 members). Frame E (feature-fronted). IronOCR / DynamicTesseract.
Verified 2026-06-23: abstract class : Object, IDisposable; IsDisposed, Dispose(), Dispose(Boolean),
Finalize(), VerifyNotDisposed(). Derived (verified): ChoiceIterator. Namespace DynamicTesseract;
assembly IronOcr.dll; base Object; implements IDisposable.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.DisposableBase.html
-->

## Injected overview (Markdown)

Deterministic cleanup of native OCR handles is what `DisposableBase` standardizes across the `DynamicTesseract` interop layer. Many of those interop types wrap an unmanaged Tesseract or Leptonica resource that must be released promptly, and this abstract base gives them one correct, shared implementation of the dispose pattern instead of each type reinventing it.

A developer rarely names `DisposableBase` directly; it is the parent that interop wrappers such as `ChoiceIterator` derive from. What matters when working with any of those subclasses is the contract it defines: `IsDisposed` reports whether the native resource has already been freed, `Dispose` releases it, and `VerifyNotDisposed` guards a member so a call after disposal fails clearly rather than touching a freed handle. The protected `Dispose(Boolean)` overload is the override point a subclass implements to free its specific handle, and `Finalize` is the safety net if `Dispose` is never called. The practical rule is the usual one: dispose any `DynamicTesseract` object that derives from this base, ideally with a `using` statement, so native memory is reclaimed at once.

Disposal and lifecycle matter most under load, which the [async OCR how-to](https://ironsoftware.com/csharp/ocr/how-to/async/) addresses, and the [advanced reading configuration how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-configurations-for-advanced-reading/) covers deeper engine control.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DisposableBase - IronOCR C# API Reference`
- v2 (human): `DisposableBase: Native Handle Cleanup in C#`
- v3 (balanced): `DisposableBase Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Release native OCR handles in C# with the IronOCR DisposableBase: IsDisposed, Dispose, and VerifyNotDisposed across DynamicTesseract types.`
- v2 (human): `The abstract base for disposable IronOCR interop types in C#: DisposableBase standardizes how native Tesseract handles are released. Use a using block.`
- v3 (balanced): `Reference for the IronOCR DisposableBase in C#: the abstract dispose pattern for DynamicTesseract types, with IsDisposed and VerifyNotDisposed.`

---

## Structured data

**TechArticle abstract**

> DisposableBase standardizes deterministic cleanup of native handles across IronOCR's DynamicTesseract interop layer for C#. As the abstract parent of wrappers such as ChoiceIterator, it provides IsDisposed, Dispose, the protected Dispose(Boolean) override point, Finalize as a safety net, and VerifyNotDisposed to guard members after disposal. Dispose any subclass, ideally with a using statement.

**FAQPage entries**

```json
[
  {
    "question": "Where does DisposableBase live in the IronOCR API?",
    "answer": "DisposableBase is an abstract class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from Object and implements IDisposable, serving as the base for disposable interop types such as ChoiceIterator."
  },
  {
    "question": "What derives from DisposableBase in IronOCR?",
    "answer": "Interop wrappers that hold a native handle derive from it; ChoiceIterator is one such subclass. Each subclass overrides the protected Dispose(Boolean) method to release its own resource, and callers dispose the object through Dispose or a using statement."
  }
]
```
