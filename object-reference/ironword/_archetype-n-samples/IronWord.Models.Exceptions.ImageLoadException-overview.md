<!--
N-Lite/exception. Declared: public class ImageLoadException : Exception (base System.Exception).
Ctor (string message, Exception innerException). Namespace IronWord.Models.Exceptions, IronWord.dll.
Target: IronWord.Models.Exceptions.ImageLoadException.html. Verified 2026-06-23.
-->

## Injected overview (Markdown)

When IronWord cannot load an image being added to or read from a Word document, it raises `ImageLoadException` to report the failure with context. The underlying cause, a missing file, an unsupported or corrupt format, or an unreadable stream, is preserved as the inner exception. Confirm the source path, that the file is a supported image type, and that any stream is readable before retrying. Deriving from `System.Exception`, it is also caught by a general handler around the load.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageLoadException - IronWord C# API Reference`
- v2 (human): `ImageLoadException: Word Image Error in C#`
- v3 (balanced): `ImageLoadException | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ImageLoadException reports image load failures in IronWord for C#: a missing, unsupported, or corrupt image when adding to or reading a Word document.`
- v2 (human): `Handle image failures in C# with IronWord ImageLoadException: check the path, format, and stream when an image cannot be loaded into a document.`
- v3 (balanced): `Reference for IronWord ImageLoadException in C#: raised when an image cannot be loaded, with the original cause kept as the inner exception.`

---

## Structured data

**TechArticle abstract**

> ImageLoadException reports an image load failure in IronWord for C#, raised when an image added to or read from a Word document cannot be opened, decoded, or read. The original cause is kept as the inner exception. Check the path, format, and stream before retrying. It derives from System.Exception, so a general catch also handles it.
