<!--
Archetype N-Full, class — IronZip. Opener frame C (when-fronted).
Sibling-divergence: distinct frame + closer from the other archive classes (P18/P20).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.IronGZipArchive.html
API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

When files need gzip (`.gz`) compression, `IronGZipArchive` creates and extracts the archive from C#. gzip is the standard compressor on Unix-like systems and pairs naturally with TAR to form `.tar.gz` (`.tgz`) tarballs, which this type also unpacks. Construct one with `new IronGZipArchive()`, optionally passing a compression level, or open an existing archive from a path.

Add content with `Add` (one path per call) and `AddArchiveEntry`. The static helpers handle whole-file operations: `FromFile` and `FromFiles` build an archive from paths, `ExtractArchiveToDirectory` unpacks a `.gz`, and `ExtractTGZArchiveToDirectory` unpacks a combined `.tgz`. The constructor and the factories accept a compression level so the size-versus-speed trade-off is set up front. The type derives from `IronBaseArchive`, so `Save`, `SaveAs`, and `Dispose` behave as they do across the archive family.

A common run sets the compression level, adds the files, and saves. The level defaults to the maximum, and a lower value finishes faster at a larger size. gzip compresses the byte stream it is given, so a single large log or data file compresses directly through `Add` and `SaveAs`. For many files in one compressed archive, bundle them first with `IronTarArchive` and then compress the tarball here, producing the `.tgz` shape that `ExtractTGZArchiveToDirectory` reverses. Most cross-platform release pipelines distribute `.tgz`, so the tar-then-gzip pairing is the common shape on the wire. Wrap the archive in a `using` statement so the stream is released after saving.

```csharp
using IronZip;

using var archive = new IronGZipArchive();
archive.Add("backup.log");
archive.SaveAs("output.gz");
```

The [create gzip example](https://ironsoftware.com/csharp/zip/examples/create-gzip/) covers compression and the [extract gzip example](https://ironsoftware.com/csharp/zip/examples/extract-gzip/) covers the reverse; the [get started guide](https://ironsoftware.com/csharp/zip/get-started/) helps pick a format.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronGZipArchive Class - IronZip C# API`
- v2 (human): `IronGZipArchive: Gzip Compression in C#`
- v3 (balanced): `IronGZipArchive Class | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Create and extract gzip archives in C# with the IronZip IronGZipArchive class. Reference its Add, compression, save, and .tgz extract methods.`
- v2 (human): `Compress and extract .gz and .tgz archives in C# with the IronZip IronGZipArchive class: set compression, add files, save, and unpack.`
- v3 (balanced): `Reference for the IronZip IronGZipArchive class in C#: gzip compression, .tgz extraction, save, and extract, with code examples.`

---

## Structured data

**TechArticle abstract**

> Creating gzip archives in C# runs through the IronZip IronGZipArchive class. It compresses files to .gz and also unpacks combined .tgz tarballs through ExtractTGZArchiveToDirectory. Add files with Add, build from paths with the static FromFile and FromFiles, set a compression level on the constructor, and write or unpack with SaveAs and the static ExtractArchiveToDirectory. The class derives from IronBaseArchive and is disposable.

**FAQPage entries**

```json
[
  {
    "question": "Where does IronGZipArchive live in the IronZip API?",
    "answer": "IronGZipArchive is in the IronZip namespace, shipped in IronZip.dll. It derives from the abstract IronBaseArchive and implements IDisposable, so wrap instances in a using statement."
  },
  {
    "question": "Can IronGZipArchive extract .tgz (.tar.gz) files?",
    "answer": "Yes. Call the static ExtractTGZArchiveToDirectory to unpack a combined .tgz tarball, or ExtractArchiveToDirectory for a plain .gz. To build a tarball, create the .tar with IronTarArchive first, then compress it here."
  },
  {
    "question": "How do you set the gzip compression level in C#?",
    "answer": "Pass a compression level to the constructor, new IronGZipArchive(compression), or to the static FromFile and FromFiles factories. A higher level trades speed for a smaller output."
  }
]
```
