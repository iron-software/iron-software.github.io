<!--
Archetype N-Full, class — IronZip. Opener frame D (task-gerund-fronted).
Sibling-divergence: distinct frame + closer from the other archive classes (P18/P20).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.IronTarArchive.html
API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

Bundling files into a TAR (`.tar`) archive runs through `IronTarArchive`. TAR comes from Unix and stores files together without compressing them, preserving the original file structure and metadata, which is why it is often paired with gzip or bzip2 to produce compressed tarballs. Create an empty archive with `new IronTarArchive()`, or open one from a path with the second constructor.

Files go in through `Add`, which takes one file path per call, and `AddArchiveEntry`. Three static helpers cover the common one-shot operations: `FromFile` and `FromFiles` build an archive directly from paths, and `ExtractArchiveToDirectory` unpacks an existing `.tar` to a folder. `GetArchiveEntryNames` lists the entries already inside an archive. The type derives from `IronBaseArchive`, so `Save` and `SaveAs` write the result and `Dispose` releases the stream.

A common run creates the archive, adds the files that belong together, and calls `SaveAs`. Because TAR does not compress, the output is close to the combined input size; reach for `IronGZipArchive` or `IronBZip2Archive` when the result also needs to shrink, which is how a `.tar.gz` or `.tar.bz2` is produced. Opening an existing `.tar` through the path constructor exposes its contents through `GetArchiveEntryNames`, so the entries can be listed before extracting, and the static `ExtractArchiveToDirectory` unpacks an archive without constructing an instance. Wrap the archive in a `using` statement so it is disposed after saving.

```csharp
using IronZip;

using var archive = new IronTarArchive();
archive.Add("report.pdf");
archive.SaveAs("output.tar");
```

The [create TAR example](https://ironsoftware.com/csharp/zip/examples/create-tar/) builds an archive, the [add files to TAR example](https://ironsoftware.com/csharp/zip/examples/add-files-to-tar/) grows an existing one, and the [extract TAR example](https://ironsoftware.com/csharp/zip/examples/extract-tar/) unpacks it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronTarArchive Class - IronZip C# API`
- v2 (human): `IronTarArchive: Create TAR Files in C#`
- v3 (balanced): `IronTarArchive Class | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Create and extract TAR archives in C# with the IronZip IronTarArchive class. Reference its Add, FromFiles, Save, and extract methods with examples.`
- v2 (human): `Bundle files into TAR archives in C# with the IronZip IronTarArchive class: add files, save, and extract uncompressed tarballs, with code examples.`
- v3 (balanced): `Reference for the IronZip IronTarArchive class in C#: bundle files into .tar archives, save, and extract, with code examples.`

---

## Structured data

**TechArticle abstract**

> Creating TAR archives in C# runs through the IronZip IronTarArchive class. TAR bundles files without compressing them, preserving structure and metadata. Add files with Add, build directly from paths with the static FromFile and FromFiles, list contents with GetArchiveEntryNames, and write or unpack with SaveAs and the static ExtractArchiveToDirectory. The class derives from IronBaseArchive and is disposable.

**FAQPage entries**

```json
[
  {
    "question": "Where does IronTarArchive live in the IronZip API?",
    "answer": "IronTarArchive is in the IronZip namespace, shipped in IronZip.dll. It derives from the abstract IronBaseArchive and implements IDisposable, so wrap instances in a using statement."
  },
  {
    "question": "Does a TAR archive compress its files?",
    "answer": "No. TAR bundles files together without compression, preserving structure and metadata. To shrink the output, create a gzip archive with IronGZipArchive or a bzip2 archive with IronBZip2Archive instead, or in addition."
  },
  {
    "question": "How do you create a TAR file from existing files in C#?",
    "answer": "Call the static IronTarArchive.FromFiles with an array of paths, or construct new IronTarArchive(), call Add for each file, then SaveAs with the .tar output path."
  }
]
```
