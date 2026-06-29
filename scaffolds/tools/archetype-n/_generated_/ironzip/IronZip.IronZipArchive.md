<!--
Archetype N-Full, class (primary) — IronZip. Opener frame A (subject-verb).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.IronZipArchive.html
API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

`IronZipArchive` creates, reads, edits, and extracts ZIP (`.zip`) archives from C#. Start an empty archive with `new IronZipArchive()`, or open an existing one by passing a file path, a `Stream`, or a `byte[]` to a constructor (each accepts an optional password). Static factories cover the common starting points: `FromFile`, `FromFiles`, `FromDirectory`, and `FromArchive`. The type derives from `IronBaseArchive` and is disposable, so wrap it in a `using` statement.

The members group into four jobs. Building an archive uses `Add` and `AddArchiveEntry` to put files in. Editing uses `Delete`, `ReplaceEntry`, `Contains`, the `Count` property, and `Entries()`, which returns a `List<Entry>` describing each file. Securing uses `Encrypt` and `SetPassword` with an `EncryptionMethods` value, `RemoveEncryption`, or the `ZipSaveOptions` property for password and compression in one object. Output uses `Save`, `SaveAs`, and the static `ExtractArchiveToDirectory` to unpack an archive to disk.

A typical run constructs an archive, adds files, and saves. Set `Comment` to label the archive, adjust `Compression` for the size and speed trade-off, and call `Encrypt` before saving when the contents need protection. Because each `Add` takes one path, call it once per file or build from a directory with `FromDirectory`. Opening an existing archive through a path constructor lets you add or remove entries and call `Save` to write the changes back in place, while `SaveAs` writes to a new path; pass a password to that constructor to open an encrypted archive.

```csharp
using IronZip;

using var archive = new IronZipArchive();
archive.Add("report.pdf");
archive.Add("image.png");
archive.SaveAs("output.zip");
```

The [create ZIP example](https://ironsoftware.com/csharp/zip/examples/create-zip/) and [extract ZIP example](https://ironsoftware.com/csharp/zip/examples/extract-zip/) show the round trip, and the [create, read, and extract tutorial](https://ironsoftware.com/csharp/zip/tutorials/create-read-extract-zip/) walks through a complete project.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronZipArchive Class - IronZip C# API`
- v2 (human): `IronZipArchive: Create & Extract ZIPs in C#`
- v3 (balanced): `IronZipArchive Class | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Create, edit, encrypt, and extract ZIP archives in C# with the IronZip IronZipArchive class. Reference its add, save, and extract methods with examples.`
- v2 (human): `Work with ZIP files in C# using the IronZip IronZipArchive class: add and remove files, set passwords, compress, save, and extract, with code examples.`
- v3 (balanced): `Reference for the IronZip IronZipArchive class in C#: build, edit, encrypt, save, and extract ZIP archives, with code examples.`

---

## Structured data

**TechArticle abstract**

> Working with ZIP archives in C# runs through the IronZip IronZipArchive class. Create an empty archive or open one from a path, Stream, or byte array, then add files with Add, edit with Delete and ReplaceEntry, inspect with Count and Entries, secure with Encrypt or SetPassword, and write with Save, SaveAs, or the static ExtractArchiveToDirectory. The class derives from IronBaseArchive and is disposable.

**FAQPage entries**

```json
[
  {
    "question": "Where does IronZipArchive live in the IronZip API?",
    "answer": "IronZipArchive is in the IronZip namespace, shipped in IronZip.dll. It derives from the abstract IronBaseArchive and implements IDisposable, so wrap instances in a using statement."
  },
  {
    "question": "How do you create a ZIP file in C#?",
    "answer": "Construct new IronZipArchive(), call Add for each file path, then call SaveAs with the output path. Wrap the archive in a using statement so it is disposed after saving."
  },
  {
    "question": "How do you password-protect a ZIP archive in C#?",
    "answer": "Call Encrypt or SetPassword with a password and an EncryptionMethods value (AES128, AES256, or Traditional) before saving, or set the password on the ZipSaveOptions property. RemoveEncryption clears it."
  }
]
```
