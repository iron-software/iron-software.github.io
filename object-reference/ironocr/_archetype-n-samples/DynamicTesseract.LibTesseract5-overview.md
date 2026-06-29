<!--
N-Mid (static, 1 method). Frame E (feature-fronted). IronOcr. Sibling of LibLeptonica (different opener frame + closer).
Member verified 2026-06-23: static void Initialize(NativeLibrary libTesseract). Cross-ref: IronSoftware.Deployment.NativeLibrary.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.LibTesseract5.html
-->

## Injected overview (Markdown)

Resolving the native Tesseract 5 engine binary at startup is the job of `LibTesseract5`, the static bootstrap that points IronOCR at the recognition library on disk. Tesseract 5 is the OCR engine itself, the native code that turns pixels into characters, so it has to be located before any text can be read.

The class exposes a single static `Initialize`, which accepts an `IronSoftware.Deployment.NativeLibrary` describing the platform-specific Tesseract binary and registers it for the engine to use. In normal use the high-level `IronTesseract` API performs this step on first read, so application code rarely touches it. The direct call matters for a custom deployment, a trimmed publish, or a container image where the native binaries are staged in a non-default location and must be declared.

The [configure and set up Tesseract example](https://ironsoftware.com/csharp/ocr/examples/csharp-configure-setup-tesseract/) covers engine setup, and the [Tesseract OCR tutorial](https://ironsoftware.com/csharp/ocr/tutorials/c-sharp-tesseract-ocr/) demonstrates the engine end to end.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LibTesseract5 - IronOCR C# API Reference`
- v2 (human): `LibTesseract5: Load Tesseract 5 in C#`
- v3 (balanced): `LibTesseract5 Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `LibTesseract5 is the IronOCR static bootstrap in C#: call Initialize with a NativeLibrary to load the native Tesseract 5 engine binary.`
- v2 (human): `Load the native Tesseract 5 engine in C# with IronOCR's LibTesseract5: call Initialize for custom deployments that stage binaries off-path.`
- v3 (balanced): `Reference for the IronOCR LibTesseract5 class in C#: a static Initialize that resolves the native Tesseract 5 recognition binary.`

---

## Structured data

**TechArticle abstract**

> LibTesseract5 resolves the native Tesseract 5 OCR engine binary that IronOCR uses to turn pixels into characters in C#. Its single static Initialize takes an IronSoftware.Deployment.NativeLibrary pointing at the platform binary. IronTesseract performs this on first read, so call it directly only for a custom deployment that stages native binaries in a non-default location.

**FAQPage entries**

```json
[
  {
    "question": "Where does LibTesseract5 live in the IronOCR API?",
    "answer": "LibTesseract5 is a static class in the DynamicTesseract namespace, shipped in IronOcr.dll, with Object as its base type. Its one member is the static Initialize, which takes an IronSoftware.Deployment.NativeLibrary."
  },
  {
    "question": "When should you call LibTesseract5.Initialize directly in C#?",
    "answer": "Rarely. IronTesseract loads the native Tesseract 5 engine automatically on the first read. Call LibTesseract5.Initialize yourself only for a custom deployment, trimmed publish, or container where the native binaries are staged outside the default probing path."
  }
]
```
