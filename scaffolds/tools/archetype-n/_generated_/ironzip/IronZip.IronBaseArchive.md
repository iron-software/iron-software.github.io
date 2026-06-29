<!--
Archetype N-Full, abstract base class — IronZip. Opener frame E (feature-fronted).
Names its 4 concrete subclasses (base-class analogue of interface implementors).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.IronBaseArchive.html
API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

The save-and-dispose contract shared by every IronZip archive type lives in `IronBaseArchive`. It is abstract, so a developer never constructs one directly; instead they create one of the four concrete subclasses and rely on the shared contract when handling archives uniformly. The subclasses are `IronZipArchive` for ZIP (`.zip`), `IronTarArchive` for TAR (`.tar`), `IronGZipArchive` for gzip (`.gz`), and `IronBZip2Archive` for bzip2 (`.bz2`).

The contract is small and deliberate. `Save` and `SaveAs(string Path)` are abstract, so each subclass writes its own format. `Dispose` is virtual: the base releases the internal stream, and a subclass overrides it when it has extra resources to free. The shared shape means code that compresses or stores a file can accept an `IronBaseArchive` parameter and stay format-agnostic, deferring the choice of ZIP, TAR, gzip, or bzip2 to the caller.

When a single format is known, work with the concrete type for its format-specific helpers (`IronZipArchive` adds editing and encryption that the simpler archives do not). When several formats flow through one code path, type the variable as `IronBaseArchive` and call the shared `Save`, `SaveAs`, and `Dispose`. The base also owns the internal stream that backs an open archive, which is why disposal matters: an undisposed archive can hold the underlying file or memory until the process ends. A `using` statement on the concrete type, or an explicit `Dispose` call through the base reference, releases it promptly.

```csharp
using IronZip;

IronBaseArchive archive = new IronTarArchive();
archive.SaveAs("output.tar");
archive.Dispose();
```

The [get started guide](https://ironsoftware.com/csharp/zip/get-started/) introduces the archive types, while the [create ZIP example](https://ironsoftware.com/csharp/zip/examples/create-zip/) and [create TAR example](https://ironsoftware.com/csharp/zip/examples/create-tar/) show two concrete subclasses in use.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronBaseArchive Class - IronZip C# API`
- v2 (human): `IronBaseArchive: Shared C# Archive Contract`
- v3 (balanced): `IronBaseArchive Class | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronBaseArchive is the abstract base for IronZip archive types in C#: ZIP, TAR, gzip, and bzip2. Reference its shared Save, SaveAs, and Dispose contract.`
- v2 (human): `Handle ZIP, TAR, gzip, and bzip2 archives uniformly in C# through the IronZip IronBaseArchive base class and its shared save and dispose contract.`
- v3 (balanced): `Reference for the IronZip IronBaseArchive base class in C#: the shared Save, SaveAs, and Dispose contract behind ZIP, TAR, gzip, and bzip2.`

---

## Structured data

**TechArticle abstract**

> Handling IronZip archives uniformly in C# runs through the abstract IronBaseArchive base class. Its four subclasses, IronZipArchive, IronTarArchive, IronGZipArchive, and IronBZip2Archive, share the abstract Save and SaveAs methods and the virtual Dispose. Type a variable as IronBaseArchive to stay format-agnostic across ZIP, TAR, gzip, and bzip2, or use a concrete subclass for its format-specific helpers.

**FAQPage entries**

```json
[
  {
    "question": "Where does IronBaseArchive live in the IronZip API?",
    "answer": "IronBaseArchive is an abstract class in the IronZip namespace, shipped in IronZip.dll. It derives from Object and implements IDisposable, and is the base type for all IronZip archive classes."
  },
  {
    "question": "What classes inherit from IronBaseArchive in IronZip?",
    "answer": "Four concrete archive classes derive from it: IronZipArchive (.zip), IronTarArchive (.tar), IronGZipArchive (.gz), and IronBZip2Archive (.bz2). Each implements the abstract Save and SaveAs methods for its own format."
  },
  {
    "question": "Can you construct IronBaseArchive directly?",
    "answer": "No. IronBaseArchive is abstract and has only a protected constructor. Create one of the concrete subclasses, then assign it to an IronBaseArchive variable when you need format-agnostic save and dispose handling."
  }
]
```
