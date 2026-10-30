<!--
N-Mid (4 members). Frame C. IronDrawing. Members verified 2026-06-22.
Target: https://ironsoftware.com/open-source/csharp/drawing/object-reference/api/IronSoftware.Drawing.ImageSharpLoader.html
-->

## Injected overview (Markdown)

Safely decoding untrusted image bytes in .NET projects is what `ImageSharpLoader` is built for. Rather than calling `SixLabors.ImageSharp.Image.Load` directly on arbitrary input, route that call through `ImageSharpLoader` so that malformed or exploitable data is rejected before ImageSharp ever processes it.

The four static methods split cleanly across two axes: input source (`byte[]` or `Stream`) and pixel type (untyped `Image` or generic `Image<TPixel>`). `Load(byte[] data)` and `Load(Stream stream)` return a plain `Image` when the pixel format does not matter at the call site. `Load<TPixel>(byte[] data)` and `Load<TPixel>(Stream stream)` return a strongly typed `Image<TPixel>`, useful when downstream code needs to inspect or manipulate individual pixels through the `IPixel<TPixel>` contract. All four overloads apply the same pre-flight validation before delegating to ImageSharp.

The validation logic adapts to the referenced ImageSharp version. On .NET Standard 2.0 targets (used by .NET Framework projects), IronDrawing references ImageSharp 2.x, which Six Labors no longer patches. On that target, `ImageSharpLoader` rejects BigTIFF data whose image file directory declares more entries than the payload can hold, because ImageSharp 2.x loops on such input without making progress (CVE-2026-106116, GHSA-wmxv-xphr-5c9g). On .NET 6 and .NET 8, a newer ImageSharp version is referenced and the guard set is adjusted accordingly.

```csharp
using SixLabors.ImageSharp;
using IronSoftware.Drawing;

using var stream = File.OpenRead("upload.tiff");
using Image image = ImageSharpLoader.Load(stream);
```

Explore the [IronDrawing getting-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for setup, and the [image loading how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/load-images/) for broader usage patterns.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageSharpLoader Class - IronDrawing C# API`
- v2 (human): `ImageSharpLoader: Safe Image Loading in C#`
- v3 (balanced): `ImageSharpLoader Class | IronDrawing C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use ImageSharpLoader in IronDrawing to safely decode images in C#, rejecting malformed TIFF and other untrusted input before ImageSharp processes it.`
- v2 (human): `Load images safely in C# with IronDrawing's ImageSharpLoader: guards against CVE-2026-106116 and untrusted input across .NET Framework and .NET 6/8.`
- v3 (balanced): `Reference for IronDrawing's ImageSharpLoader class in C#: safe byte[] and Stream overloads that validate untrusted image data before ImageSharp decodes it.`

---

## Structured data

**TechArticle abstract**

> ImageSharpLoader in IronSoftware.Drawing provides static Load overloads that validate untrusted image data before delegating to SixLabors.ImageSharp, preventing hangs and exploits such as CVE-2026-106116 on .NET Standard 2.0. Four overloads accept either a byte array or a Stream and return either a plain Image or a strongly typed Image of TPixel.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageSharpLoader live in the IronDrawing API?",
    "answer": "ImageSharpLoader is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from Object and exposes four static Load methods; no instantiation is required."
  },
  {
    "question": "Why use ImageSharpLoader instead of calling SixLabors.ImageSharp.Image.Load directly?",
    "answer": "ImageSharpLoader applies version-aware validation before ImageSharp processes the data. On .NET Standard 2.0 it rejects BigTIFF files with oversized image file directories that cause ImageSharp 2.x to loop indefinitely (CVE-2026-106116). Calling Image.Load directly on untrusted input skips that guard."
  }
]
```