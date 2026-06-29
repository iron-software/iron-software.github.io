<!--
N-Mid / static class (5 members, ImageType return). Frame C. IronPPT. Namespace IronPPT.Models.Extensions. Base Object.
Members verified 2026-06-23: GetImageType(this FileStream/MemoryStream/Stream)->ImageType; ToBase64(this FileStream/Stream)->string.
ImageType = IronPPT.Enums.ImageType (cross-ref, WARN ok).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Extensions.StreamHelper.html
-->

## Injected overview (Markdown)

When an image arrives as a stream, `StreamHelper` identifies its format and turns it into a Base64 string for embedding. The static helper adds extension methods to the common stream types, so detecting a picture's type and serializing its bytes happen directly on the stream rather than through a separate utility call.

`GetImageType` reads a stream and returns the detected `ImageType`, with overloads for `FileStream`, `MemoryStream`, and the base `Stream`, so the same call works whether the image came from disk or memory. `ToBase64` returns the stream's contents as a Base64 `string`, with overloads for `FileStream` and `Stream`, ready to place into markup or a data URL. Because all five are extension methods, you call them on the stream you already hold (`stream.GetImageType()`), which keeps image handling inline. Reach for `GetImageType` before adding a picture to confirm its format, and for `ToBase64` when an image needs an inline textual form instead of a file reference.

```csharp
ImageType type = imageStream.GetImageType();
string base64 = imageStream.ToBase64();
```

The [manage image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) covers working with pictures on a slide, and the [add image example](https://ironsoftware.com/csharp/ppt/examples/add-image/) places an image into a presentation.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StreamHelper - IronPPT C# API Reference`
- v2 (human): `StreamHelper: Image Type & Base64 in C#`
- v3 (balanced): `StreamHelper Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Detect an image type and encode a stream in C# with IronPPT's StreamHelper: GetImageType returns the ImageType and ToBase64 returns a Base64 string.`
- v2 (human): `Work with image streams in C# through IronPPT's StreamHelper: call GetImageType to find the format or ToBase64 to embed the image inline.`
- v3 (balanced): `Reference for the IronPPT StreamHelper static class in C#: GetImageType and ToBase64 extension methods for FileStream, MemoryStream, and Stream.`

---

## Structured data

**TechArticle abstract**

> When an image arrives as a stream in C#, the IronPPT StreamHelper static class identifies its format and encodes it. GetImageType returns the detected ImageType for a FileStream, MemoryStream, or Stream, and ToBase64 returns the stream's bytes as a Base64 string. All are extension methods, so detection and encoding happen directly on the stream already in hand.

**FAQPage entries**

```json
[
  {
    "question": "Where does StreamHelper live in the IronPPT API?",
    "answer": "StreamHelper is a static class in the IronPPT.Models.Extensions namespace, shipped in IronPPT.dll. It derives from System.Object and adds the GetImageType and ToBase64 extension methods to the stream types."
  },
  {
    "question": "How do you detect an image type from a stream in C#?",
    "answer": "Call GetImageType on the stream, for example imageStream.GetImageType(), which returns an ImageType. Overloads cover FileStream, MemoryStream, and the base Stream. Use ToBase64 on the same stream to get a Base64 string for inline embedding."
  }
]
```
