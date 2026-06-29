<!--
N-Mid (static class, 5 method overloads, 2 distinct methods). Frame A (subject-verb).
public static class StreamHelper. Verified 2026-06-23:
GetImageType(this FileStream/MemoryStream/Stream) -> ImageType; ToBase64(this FileStream/Stream) -> string.
ImageType is IronWord.Models.Enums.ImageType. Namespace IronWord.Models.Extensions, IronWord.dll.
Target: IronWord.Models.Extensions.StreamHelper.html
-->

## Injected overview (Markdown)

`StreamHelper` reads image data straight from a stream so a developer can detect a picture's format and encode it without first writing it to disk. The two methods are extensions, so they read as methods on the stream itself once the `IronWord.Models.Extensions` namespace is in scope. They are useful when an image arrives as an upload, a database blob, or an in-memory buffer rather than a file on disk.

`GetImageType` inspects the content of a stream and returns the detected format as an `ImageType` value (such as `Png` or `Jpeg`), with overloads for a `FileStream`, a `MemoryStream`, and a general `Stream`, so detection works regardless of how the bytes were obtained. `ToBase64` reads a stream and returns its Base64 string, ready to embed in markup or store as text, with overloads for a `FileStream` and a general `Stream`. Each call works from the stream you already hold, so an uploaded picture can be checked for its type and converted to Base64 in the same pass before it is added to a document.

```csharp
using FileStream stream = File.OpenRead("logo.png");
ImageType type = stream.GetImageType();
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) inserts a picture, and the [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) reads them back out.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StreamHelper Class - IronWord C# API Reference`
- v2 (human): `StreamHelper: Detect & Encode Images in C#`
- v3 (balanced): `StreamHelper Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Detect an image type and Base64-encode a stream in C# with IronWord StreamHelper: GetImageType returns an ImageType and ToBase64 returns a string.`
- v2 (human): `Work with image streams in C# using IronWord StreamHelper: detect the format with GetImageType and encode to Base64 with ToBase64, no file needed.`
- v3 (balanced): `Reference for the IronWord StreamHelper class in C#: GetImageType detects an image format from a stream and ToBase64 encodes its bytes.`

---

## Structured data

**TechArticle abstract**

> StreamHelper detects an image format and Base64-encodes image data directly from a stream in IronWord for C#. GetImageType inspects a FileStream, MemoryStream, or Stream and returns an ImageType, while ToBase64 reads a FileStream or Stream and returns its Base64 string. Both are extension methods, so they apply to a stream already in hand.

**FAQPage entries**

```json
[
  {
    "question": "Where does StreamHelper live in the IronWord API?",
    "answer": "StreamHelper is a static class in the IronWord.Models.Extensions namespace, shipped in IronWord.dll, with base type System.Object. Its GetImageType and ToBase64 methods are extensions on stream types, available once the namespace is in scope."
  },
  {
    "question": "How do you detect an image type from a stream in C#?",
    "answer": "Call GetImageType on a FileStream, MemoryStream, or Stream and read the returned ImageType. Use ToBase64 on a FileStream or Stream to get a Base64 string of the same data without writing it to disk first."
  }
]
```
