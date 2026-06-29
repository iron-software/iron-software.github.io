<!--
N-Mid (2 members: ctor, LoadResource(string)). Frame D. IronOcr utility.
Members verified 2026-06-23: LoadResource(string) static -> Stream. Base Object. Namespace IronOcr.Utils.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Utils.EmbeddedResourceLoader.html
-->

## Injected overview (Markdown)

Reading a file embedded in an assembly back as a stream runs through `EmbeddedResourceLoader`. It resolves a named embedded resource and hands you a `System.IO.Stream`, wrapping the usual reflection boilerplate of locating and opening a resource compiled into a `.dll`.

The work is done by a single static method, so you call it without constructing the loader: `EmbeddedResourceLoader.LoadResource(string resourceName)` takes the resource name and returns an open `Stream` you can read from. This is an internal utility IronOCR uses to load its own bundled assets, surfaced for code that follows the same pattern, such as loading a packaged language file or template from your own assembly.

Because the method returns a `Stream`, dispose it when you are finished, ideally with a `using`. The resource name follows the .NET embedded-resource convention (the default namespace plus the folder path and file name), so pass the fully qualified name that matches how the file was embedded. If the name does not match, no stream is returned, so verify the resource name against the assembly's manifest.

The [advanced installation guide](https://ironsoftware.com/csharp/ocr/get-started/advanced-installation-nuget/) covers how IronOCR packages its native and resource files, and the [custom language how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-custom-language/) shows loading language assets.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `EmbeddedResourceLoader - IronOCR C# API`
- v2 (human): `EmbeddedResourceLoader: Load Resources in C#`
- v3 (balanced): `EmbeddedResourceLoader Class | IronOCR .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR EmbeddedResourceLoader class in C# loads an embedded resource as a System.IO.Stream through the static LoadResource method.`
- v2 (human): `Read a file embedded in an assembly as a stream in C# with the IronOCR EmbeddedResourceLoader: pass the resource name to LoadResource.`
- v3 (balanced): `Reference for the IronOCR EmbeddedResourceLoader class in C#: resolve a named embedded resource to a Stream with the static LoadResource.`

---

## Structured data

**TechArticle abstract**

> Reading a file embedded in an assembly as a stream in C# runs through the IronOCR EmbeddedResourceLoader class. Its static LoadResource method takes a resource name and returns an open System.IO.Stream, wrapping the reflection needed to locate and open a compiled-in resource. Pass the fully qualified resource name and dispose the returned stream when finished.

**FAQPage entries**

```json
[
  {
    "question": "Where does EmbeddedResourceLoader live in the IronOCR API?",
    "answer": "EmbeddedResourceLoader is a class in the IronOcr.Utils namespace, shipped in IronOcr.dll. It derives from Object and exposes a single static LoadResource method, so you call it without constructing an instance."
  },
  {
    "question": "How do you load an embedded resource as a stream in C#?",
    "answer": "Call the static EmbeddedResourceLoader.LoadResource with the fully qualified resource name; it returns a System.IO.Stream. Dispose the stream with a using when finished, and verify the resource name matches the assembly manifest."
  }
]
```
