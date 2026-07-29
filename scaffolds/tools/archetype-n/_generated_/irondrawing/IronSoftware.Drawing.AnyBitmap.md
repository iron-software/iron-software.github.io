<!--
N-Full (class, 95 members). Frame B (identity-by-role). IronDrawing.
AnyBitmap constructors, FromFile, FromStream, FromBytes, FromUri, FromUriAsync, ExportBytes, ExportFile, ExportStream, Clone, CreateMultiFrameTiff, CreateMultiFrameGif verified from PAGE FACTS 2026-06-22.
Target: https://ironsoftware.com/open-source/csharp/drawing/object-reference/api/IronSoftware.Drawing.AnyBitmap.html
-->

## Injected overview (Markdown)

The universal bitmap handle for cross-platform .NET projects, `AnyBitmap` lets you load, convert, manipulate, and export raster images without locking your code to a single imaging library. It bridges `System.Drawing.Bitmap`, SkiaSharp, SixLabors.ImageSharp, and Microsoft.Maui.Graphics through implicit cast operators, so any public API that accepts or returns one of those types accepts or returns an `AnyBitmap` transparently. Targeting .NET 5, .NET 6, .NET 7, or .NET Core on Windows, macOS, Linux, NanoServer, IIS, iOS, Android, Azure, AWS, or Google Cloud all work without conditional compilation.

**Loading images** is the first step. Constructors and static factory methods cover every common source: `FromFile` and `new AnyBitmap(string file)` read from disk; `FromStream` and `FromBytes` accept `Stream`, `MemoryStream`, and `byte[]`; `FromSpan` handles a `ReadOnlySpan<byte>` for zero-copy scenarios; and `FromUri` plus the awaitable `FromUriAsync` fetch from a remote URL. Every overload has a `preserveOriginalFormat` variant that controls whether the decoded pixel data retains the source format or normalises it.

**Inspecting images** is straightforward through read-only properties. `Width`, `Height`, `BitsPerPixel`, `Stride`, `Scan0`, `MimeType`, `HorizontalResolution`, and `VerticalResolution` expose the core metrics. Animated or multi-page sources expose `FrameCount` and the `GetAllFrames` enumerable, which yields each frame as its own `AnyBitmap`.

**Exporting and converting** covers three output shapes. `ExportBytes` serialises to a `byte[]` in any `AnyBitmap.ImageFormat` with an optional lossy quality parameter; `ExportFile` writes directly to disk; and `ExportStream` pushes encoded bytes into any `Stream`. `ExportBytesAsJpg` is a convenience shortcut. `GetBytes` returns the raw backing bytes without re-encoding. `GetImageFormat` identifies the current format, and `ChangeBitsPerPixel` produces a new bitmap at a different colour depth.

**Building multi-frame outputs** uses the static helpers `CreateMultiFrameGif` and `CreateMultiFrameTiff`, each accepting either an `IEnumerable<AnyBitmap>` or an `IEnumerable<string>` of file paths. `CreateMultiFrameTiffBytes` and `CreateMultiFrameTiffStream` return the encoded data directly without writing to disk.

**Cloning and cleanup**: `Clone()` duplicates the full image; `Clone(Rectangle rectangle)` crops to a region. Because `AnyBitmap` holds unmanaged pixel memory, always dispose instances with `using` or call `Dispose()` explicitly, especially after implicit casts.

```csharp
using IronSoftware.Drawing;

// Load from file, resize by constructing a new instance, then export as PNG
using var original = AnyBitmap.FromFile("photo.jpg");
using var resized  = new AnyBitmap(original, 800, 600);

resized.ExportFile("photo_800x600.png", AnyBitmap.ImageFormat.Png);

// Build an animated GIF from individual frames on disk
using var gif = AnyBitmap.CreateMultiFrameGif(
    new[] { "frame1.png", "frame2.png", "frame3.png" });
gif.ExportFile("animation.gif", AnyBitmap.ImageFormat.Gif);
```

Explore further in the [IronDrawing getting-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/), the [image conversion how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/image-conversion/), the [multi-frame TIFF and GIF examples](https://ironsoftware.com/open-source/csharp/drawing/examples/create-multi-frame-tiff/), and the full [API documentation](https://ironsoftware.com/open-source/csharp/drawing/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AnyBitmap Class - IronDrawing C# API Reference`
- v2 (human): `AnyBitmap: Universal Bitmap for C# .NET`
- v3 (balanced): `AnyBitmap Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Load, convert, and export bitmaps in C# with IronDrawing AnyBitmap. Bridges System.Drawing, SkiaSharp, ImageSharp, and MAUI with implicit casts on any .NET platform.`
- v2 (human): `AnyBitmap is the cross-platform bitmap type for .NET: load from file, stream, or URL, export to any format, and cast to SkiaSharp or ImageSharp with no extra code.`
- v3 (balanced): `Reference for IronDrawing AnyBitmap in C#: load images from any source, export to PNG/JPEG/TIFF/GIF, and interop with SkiaSharp, ImageSharp, and System.Drawing.`

---

## Structured data

**TechArticle abstract**

> Convert, load, and export raster images across every major .NET imaging library using the IronSoftware.Drawing.AnyBitmap class. Constructors and static factory methods accept files, streams, byte arrays, spans, and URIs. Implicit cast operators bridge System.Drawing.Bitmap, SkiaSharp, SixLabors.ImageSharp, and Microsoft.Maui.Graphics without extra conversion code. Export to any AnyBitmap.ImageFormat via ExportBytes, ExportFile, or ExportStream, build multi-frame GIF and TIFF outputs with CreateMultiFrameGif and CreateMultiFrameTiff, and inspect pixel metrics through Width, Height, BitsPerPixel, FrameCount, and GetAllFrames. AnyBitmap targets .NET 5, 6, and 7 on Windows, macOS, Linux, iOS, Android, and major cloud platforms.

**FAQPage entries**

```json
[
  {
    "question": "Where does AnyBitmap live in the IronDrawing API?",
    "answer": "AnyBitmap is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from System.Object and provides implicit cast operators to and from System.Drawing.Bitmap, SkiaSharp SKBitmap, SixLabors.ImageSharp Image, and Microsoft.Maui.Graphics types."
  },
  {
    "question": "How do you load an image into AnyBitmap in C#?",
    "answer": "Use AnyBitmap.FromFile for a file path, AnyBitmap.FromStream for a Stream or MemoryStream, AnyBitmap.FromBytes for a byte array, AnyBitmap.FromSpan for a ReadOnlySpan<byte>, or AnyBitmap.FromUri and FromUriAsync for a remote URL. Constructor overloads mirror every factory method."
  },
  {
    "question": "How do you export an AnyBitmap to PNG, JPEG, or TIFF?",
    "answer": "Call ExportFile(path, AnyBitmap.ImageFormat.Png) to write to disk, ExportBytes(AnyBitmap.ImageFormat.Jpeg, quality) to get a byte array, or ExportStream(stream, AnyBitmap.ImageFormat.Tiff) to push encoded data into any Stream. The lossy parameter (0-100) controls JPEG quality."
  },
  {
    "question": "Does AnyBitmap support animated GIF or multi-page TIFF files?",
    "answer": "Yes. CreateMultiFrameGif and CreateMultiFrameTiff accept an IEnumerable<AnyBitmap> or an IEnumerable<string> of file paths and return a single AnyBitmap containing all frames. CreateMultiFrameTiffBytes and CreateMultiFrameTiffStream return the encoded data as a byte array or MemoryStream respectively. FrameCount and GetAllFrames let you read individual frames from an existing multi-frame image."
  }
]
```