<!--
N-Mid (static, 1 method). Frame F (imperative). IronOcr. Sibling of LibTesseract5 (different opener frame).
Member verified 2026-06-23: static void Initialize(NativeLibrary libLeptonica). Cross-ref: IronSoftware.Deployment.NativeLibrary.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.LibLeptonica.html
-->

## Injected overview (Markdown)

Load the bundled Leptonica image-processing binary before any recognition runs through `LibLeptonica`, the static bootstrap for the layer that decodes and transforms images for Tesseract. Leptonica is the native dependency that Tesseract reads pixels through, so it must be resolved on disk before the engine starts.

The class exposes one entry point, the static `Initialize`, which takes an `IronSoftware.Deployment.NativeLibrary` describing where the platform-specific Leptonica binary lives and makes it available to the engine. IronOCR's high-level `IronTesseract` API handles this step automatically, so most code never calls it directly. Reach for `LibLeptonica.Initialize` only in a custom deployment where the native libraries ship outside the usual probing path and need to be pointed at explicitly, such as a trimmed publish, a single-file bundle, or a container image that stages the binaries in a dedicated folder.

The [Tesseract 5 example](https://ironsoftware.com/csharp/ocr/examples/csharp-tesseract-5/) shows the high-level engine in use, and the [configure and set up Tesseract example](https://ironsoftware.com/csharp/ocr/examples/csharp-configure-setup-tesseract/) walks through engine setup.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LibLeptonica - IronOCR C# API Reference`
- v2 (human): `LibLeptonica: Load Leptonica in C#`
- v3 (balanced): `LibLeptonica Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `LibLeptonica is the IronOCR static bootstrap in C#: call Initialize with a NativeLibrary to load the Leptonica image binary for Tesseract.`
- v2 (human): `Load the native Leptonica image layer in C# with IronOCR's LibLeptonica: call Initialize for custom deployments where binaries ship off-path.`
- v3 (balanced): `Reference for the IronOCR LibLeptonica class in C#: a static Initialize that resolves the Leptonica binary for the Tesseract engine.`

---

## Structured data

**TechArticle abstract**

> LibLeptonica loads the native Leptonica image-processing binary that IronOCR's Tesseract engine reads pixels through in C#. Its single static Initialize takes an IronSoftware.Deployment.NativeLibrary pointing at the platform binary. IronTesseract calls this automatically, so use it directly only in a custom deployment where native libraries ship outside the usual probing path.

**FAQPage entries**

```json
[
  {
    "question": "Where does LibLeptonica live in the IronOCR API?",
    "answer": "LibLeptonica is a static class in the DynamicTesseract namespace, shipped in IronOcr.dll, with Object as its base type. Its one member is the static Initialize, which takes an IronSoftware.Deployment.NativeLibrary."
  },
  {
    "question": "Do you need to call LibLeptonica.Initialize yourself in C#?",
    "answer": "Usually no. The high-level IronTesseract API resolves and loads the native Leptonica binary automatically. Call LibLeptonica.Initialize directly only in a custom deployment where the native libraries are placed outside the default probing path."
  }
]
```
