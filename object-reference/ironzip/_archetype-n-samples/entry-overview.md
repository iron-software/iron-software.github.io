<!--
Archetype N-Full, class (read-mostly metadata record, 31 props) — IronZip. Opener frame E.
P7 bucketing applied (identity / size+compression / security / timing).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.Entry.html
API verified against the live docfx page 2026-06-22. Entries() confirmed on IronZipArchive.
-->

## Injected overview (Markdown)

Each file inside a ZIP archive, with its name, size, timestamp, and encryption state, is described by an `Entry`. A developer rarely constructs one; instead `IronZipArchive.Entries()` returns a `List<Entry>`, one per item in the archive, for inspecting contents before extracting. Reading these properties answers the common questions about an archive without unpacking it to disk.

The properties fall into groups. Identity covers `Name`, `IsFile`, `IsDirectory`, and `Comment`. Size and compression cover `Size` (the original byte length), `CompressedSize` (the stored length), `CompressionMethod` (an `EncryptionMethods` value), and the `Crc` checksum. Security covers `IsCrypted` and the AES detail properties (`AESKeySize`, `AESEncryptionStrength`, and related). Timing covers `DateTime` and `DosTime`. The remaining flags (`HasCrc`, `IsUnicodeText`, `LocalHeaderRequiresZip64`, and similar) expose low-level ZIP header state for advanced inspection.

To audit an archive, open it, call `Entries()`, and read the properties that matter: compare `Size` against `CompressedSize` to see the saving, check `IsCrypted` to find protected items, or read `Name` to list contents. The values are a snapshot of the archive as opened; changing them does not rewrite the archive, so use the archive's own `Add`, `Delete`, and `ReplaceEntry` methods to modify contents. The AES properties such as `AESKeySize` and `AESEncryptionStrength` are meaningful only when `IsCrypted` is true and the entry uses AES rather than `Traditional` encryption, and `IsDirectory` separates folder placeholders from real files when walking the list.

```csharp
using IronZip;

using var archive = new IronZipArchive("input.zip");
foreach (Entry entry in archive.Entries())
{
    Console.WriteLine($"{entry.Name} ({entry.Size} bytes)");
}
```

The [view archive entries example](https://ironsoftware.com/csharp/zip/examples/view-archive-entries/) lists contents this way, and the [create, read, and extract tutorial](https://ironsoftware.com/csharp/zip/tutorials/create-read-extract-zip/) shows reading entries inside a full workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Entry Class - IronZip C# API Reference`
- v2 (human): `Entry: Inspect ZIP Archive Contents in C#`
- v3 (balanced): `Entry Class | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Inspect files inside an archive in C# with the IronZip Entry class: read Name, Size, CompressedSize, Crc, and encryption state from Entries().`
- v2 (human): `Read archive contents in C# with the IronZip Entry class: name, size, compression, checksum, and encryption details for each file, without extracting.`
- v3 (balanced): `Reference for the IronZip Entry class in C#: inspect each archived file's name, size, compression, and encryption via IronZipArchive.Entries().`

---

## Structured data

**TechArticle abstract**

> Inspecting the files inside an archive in C# runs through the IronZip Entry class. IronZipArchive.Entries() returns a List<Entry>, one per archived item, exposing identity (Name, IsFile, IsDirectory), size and compression (Size, CompressedSize, CompressionMethod, Crc), security (IsCrypted and AES detail), and timing (DateTime). Read these to audit an archive without extracting it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Entry live in the IronZip API?",
    "answer": "Entry is a class in the IronZip namespace, shipped in IronZip.dll. Instances are produced by IronZipArchive.Entries(), which returns a List<Entry> describing each item in the archive."
  },
  {
    "question": "How do you list the files inside a ZIP archive in C#?",
    "answer": "Open the archive with IronZipArchive, call Entries() to get a List<Entry>, and read each Entry.Name. The list reflects the archive as opened, so no extraction is needed to inspect it."
  },
  {
    "question": "What is the difference between Size and CompressedSize on an Entry?",
    "answer": "Size is the original uncompressed byte length of the file, and CompressedSize is the stored length inside the archive. Comparing the two shows how much compression the entry achieved."
  }
]
```
