<!--
N-Full (deployment helper, IDisposable). Frame D. IronSoftware shared.
Members verified 2026-06-23: ctor(string), Handle, Loader, LoadFunction(string), LoadFunction<T>(string), Dispose.
Base Object, implements IDisposable. Namespace IronSoftware.Deployment, assembly IronOcr.dll.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronSoftware.Deployment.NativeLibrary.html
-->

## Injected overview (Markdown)

Loading a platform native library and resolving its exported functions at runtime runs through `NativeLibrary`. It wraps a handle to a loaded shared library (a `.dll`, `.so`, or `.dylib`) and hands back typed delegates for the entry points you name, so cross-platform native interop can sit behind one managed object instead of scattered `DllImport` declarations.

Construct one with `new NativeLibrary(string)`, passing the library name or path; the constructor loads the binary through the platform loader. From the loaded library you resolve functions by name, and you dispose the object when finished. Most IronOCR code never touches this type directly, since the engine loads its own Tesseract and Leptonica binaries internally; it is the seam exposed for deployment scenarios where you load a native dependency yourself.

The members are deliberately few. `Handle` is the raw `IntPtr` to the loaded module for code that needs to call into the platform directly. `LoadFunction(string name)` resolves an exported symbol and returns its address as an `IntPtr`, while the generic `LoadFunction<T>(string name)` returns the entry point already marshaled to a delegate type `T`, which is the form most callers want. `Loader` is the protected `LibraryLoader` a subclass can override to change how binaries are located. Because the type implements `IDisposable`, hold it in a `using` so the native handle is released, and resolve every function you need from the single instance rather than reloading the library.

```csharp
using IronSoftware.Deployment;

using var library = new NativeLibrary("mylib");
var compute = library.LoadFunction<ComputeDelegate>("compute");
int result = compute(21);
```

The [Linux deployment guide](https://ironsoftware.com/csharp/ocr/get-started/linux/) covers native dependencies on Linux, the [Docker guide](https://ironsoftware.com/csharp/ocr/get-started/docker/) handles container images, and the [advanced installation guide](https://ironsoftware.com/csharp/ocr/get-started/advanced-installation-nuget/) explains the native package layout.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `NativeLibrary Class - IronOCR C# API`
- v2 (human): `NativeLibrary: Load Native Code in C#`
- v3 (balanced): `NativeLibrary Class | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronSoftware NativeLibrary class loads a native shared library in C# and resolves exports with LoadFunction and the generic LoadFunction<T>.`
- v2 (human): `Load a platform native library in C# with the IronSoftware NativeLibrary class: get a handle and resolve exported functions as typed delegates.`
- v3 (balanced): `Reference for the IronSoftware NativeLibrary class in C#: wrap a loaded native library, read its Handle, and bind exports via LoadFunction<T>.`

---

## Structured data

**TechArticle abstract**

> Loading a platform native library and resolving its exports at runtime in C# runs through the IronSoftware NativeLibrary class. Construct it with a library name to load the binary, then call LoadFunction for an export address or the generic LoadFunction<T> for a marshaled delegate. Handle exposes the raw module pointer and the protected Loader can be overridden. The type implements IDisposable, so hold it in a using.

**FAQPage entries**

```json
[
  {
    "question": "Where does NativeLibrary live in the IronOCR API?",
    "answer": "NativeLibrary is a class in the IronSoftware.Deployment namespace, shipped in IronOcr.dll. It derives from Object and implements IDisposable, so wrap it in a using to release the native handle."
  },
  {
    "question": "How do you call a native function from a loaded library in C#?",
    "answer": "Construct a NativeLibrary with the library name, then call the generic LoadFunction<T> with the export name to get a delegate of type T you can invoke. Use the non-generic LoadFunction to get the raw IntPtr address instead."
  },
  {
    "question": "Do you need NativeLibrary to use IronOCR?",
    "answer": "No. IronOCR loads its own Tesseract and Leptonica binaries internally. NativeLibrary is the seam for deployment scenarios where you load a native dependency yourself; see the Linux and Docker deployment guides for native packaging."
  }
]
```
