<!--
Archetype N-Full, class — IronZip. Opener frame B (identity-by-role; role noun "handle").
Sibling-divergence: distinct frame + closer from the other archive classes (P18/P20).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.IronBZip2Archive.html
API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

`IronBZip2Archive` is the handle for bzip2 (`.bz2`) compression in C#. bzip2 usually reaches a smaller output than gzip for the same data, trading extra CPU time for the higher ratio, which suits archival and distribution where size matters more than speed. Construct one with `new IronBZip2Archive()`, or open an existing archive by passing a path to the second constructor.

Files go in through `Add` (one path per call) and `AddArchiveEntry`. The static helpers match the rest of the archive family: `FromFile` and `FromFiles` build straight from paths, and `ExtractArchiveToDirectory` unpacks a `.bz2` to a folder. Because the type derives from `IronBaseArchive`, `Save` and `SaveAs` write the archive and `Dispose` frees the stream.

A typical run constructs the archive, adds the files, and saves to a `.bz2` path. Choose bzip2 over gzip when a smaller archive is worth the longer compression time, and over plain TAR when the output must shrink. bzip2 compresses a data stream much like gzip, so a multi-file archive is built by bundling the files with `IronTarArchive` first and then compressing the result to `.tar.bz2`. Opening an existing `.bz2` through the path constructor allows extraction, and the static `ExtractArchiveToDirectory` unpacks one without constructing an instance. Source tarballs and large scientific datasets are frequently shipped as `.tar.bz2` for exactly this reason. Wrap the archive in a `using` statement so it is disposed once saved.

```csharp
using IronZip;

using var archive = new IronBZip2Archive();
archive.Add("data.csv");
archive.SaveAs("output.bz2");
```

Worked code lives in the [create bzip2 example](https://ironsoftware.com/csharp/zip/examples/create-bzip2/) and the [extract bzip2 example](https://ironsoftware.com/csharp/zip/examples/extract-bzip2/), with format guidance in the [get started guide](https://ironsoftware.com/csharp/zip/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronBZip2Archive Class - IronZip C# API`
- v2 (human): `IronBZip2Archive: Bzip2 Compression in C#`
- v3 (balanced): `IronBZip2Archive | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Create and extract bzip2 archives in C# with the IronZip IronBZip2Archive class. Reference its Add, FromFiles, Save, and extract methods with examples.`
- v2 (human): `Compress and extract .bz2 archives in C# with the IronZip IronBZip2Archive class: add files, save, and unpack high-ratio archives, with examples.`
- v3 (balanced): `Reference for the IronZip IronBZip2Archive class in C#: high-ratio bzip2 compression, save, and extract, with code examples.`

---

## Structured data

**TechArticle abstract**

> Creating bzip2 archives in C# runs through the IronZip IronBZip2Archive class. bzip2 reaches a smaller output than gzip at the cost of more CPU time. Add files with Add, build from paths with the static FromFile and FromFiles, and write or unpack with SaveAs and the static ExtractArchiveToDirectory. The class derives from IronBaseArchive and is disposable.

**FAQPage entries**

```json
[
  {
    "question": "Where does IronBZip2Archive live in the IronZip API?",
    "answer": "IronBZip2Archive is in the IronZip namespace, shipped in IronZip.dll. It derives from the abstract IronBaseArchive and implements IDisposable, so wrap instances in a using statement."
  },
  {
    "question": "When should you choose bzip2 over gzip in C#?",
    "answer": "Choose IronBZip2Archive when a smaller archive is worth more compression time, since bzip2 usually reaches a higher ratio than gzip. Choose IronGZipArchive when speed matters more than the last bit of size."
  },
  {
    "question": "How do you create a bzip2 archive in C#?",
    "answer": "Construct new IronBZip2Archive(), call Add for each file path, then SaveAs with the .bz2 output path. The static FromFiles builds one directly from an array of paths."
  }
]
```
