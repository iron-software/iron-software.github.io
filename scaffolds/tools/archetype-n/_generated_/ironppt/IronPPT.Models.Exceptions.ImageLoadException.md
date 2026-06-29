<!--
N-Lite/exception. Declared: public class ImageLoadException : Exception. Namespace IronPPT.Models.Exceptions.
ctor(string message, Exception innerException). Target verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Exceptions.ImageLoadException.html
-->

## Injected overview (Markdown)

`ImageLoadException` signals that IronPPT could not load an image while adding or rendering one in a presentation, typically because the source is missing, unreadable, or in an unsupported format. Confirm the file path or stream is valid, that the process has read permission, and that the image type is one IronPPT accepts before retrying. It derives from `System.Exception`, and its `InnerException` carries the underlying load error when one is available.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageLoadException - IronPPT C# API Reference`
- v2 (human): `ImageLoadException: Image Load Error in C#`
- v3 (balanced): `ImageLoadException | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ImageLoadException reports image load failures in IronPPT for C#: a missing, unreadable, or unsupported image source when adding or rendering a picture.`
- v2 (human): `Handle image load failures in C# with IronPPT's ImageLoadException: check the path, permissions, and format when an image cannot be loaded.`
- v3 (balanced): `Reference for ImageLoadException in C#: raised by IronPPT when an image source is missing, unreadable, or in an unsupported format.`

---

## Structured data

**TechArticle abstract**

> ImageLoadException signals that IronPPT could not load an image in C#, usually because the source is missing, unreadable, or in an unsupported format when adding or rendering a picture. Check the path or stream, the read permission, and the image type before retrying. It derives from System.Exception, and its InnerException holds the underlying load error.
