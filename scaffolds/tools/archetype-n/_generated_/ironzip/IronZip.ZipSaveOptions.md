<!--
Archetype N-Mid, class (thin: 3 members) — IronZip. Opener frame E (feature-fronted).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.ZipSaveOptions.html
API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

The compression level, password, and encryption method for a save are carried by `ZipSaveOptions`. It groups the three settings that control how an archive is written so they travel together instead of as loose arguments. Construct one with `new ZipSaveOptions()` and set the properties that matter.

`Compression` sets the level for the size-versus-speed trade-off, `Password` sets the password applied to the archive, and `EncryptionMethod` selects the scheme through an `EncryptionMethods` value (`AES256`, `AES128`, or `Traditional`). Pass the configured object to `IronZipArchive.SaveAs(path, options)` or `Save(options)`, or assign it to the archive's `ZipSaveOptions` property so later saves reuse it. Leaving `Password` unset writes an unencrypted archive. Reusing one options object across saves keeps a consistent password and compression for a batch of archives, and the object read back from the `ZipSaveOptions` property shows what a loaded archive will apply on its next save.

```csharp
using IronZip;

using var archive = new IronZipArchive();
archive.Add("report.pdf");
archive.SaveAs("secure.zip", new ZipSaveOptions { Password = "p@ss", EncryptionMethod = EncryptionMethods.AES256 });
```

The [password-protect ZIP example](https://ironsoftware.com/csharp/zip/examples/password-protect-zip/) uses these options, and the [create ZIP example](https://ironsoftware.com/csharp/zip/examples/create-zip/) shows a plain save for comparison.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ZipSaveOptions Class - IronZip C# API`
- v2 (human): `ZipSaveOptions: Configure ZIP Saves in C#`
- v3 (balanced): `ZipSaveOptions Class | IronZip C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure ZIP saves in C# with the IronZip ZipSaveOptions class: set Compression, Password, and EncryptionMethod, then pass it to a save call.`
- v2 (human): `Control how a ZIP is written in C# with the IronZip ZipSaveOptions class: compression level, password, and encryption method, with code examples.`
- v3 (balanced): `Reference for the IronZip ZipSaveOptions class in C#: set compression, password, and encryption method for an archive save, with examples.`

---

## Structured data

**TechArticle abstract**

> Configuring how a ZIP archive is written in C# runs through the IronZip ZipSaveOptions class. It groups Compression (the size-versus-speed level), Password, and EncryptionMethod (an EncryptionMethods value). Build one with new ZipSaveOptions, set the properties, and pass it to IronZipArchive.Save or SaveAs, or assign it to the archive's ZipSaveOptions property.

**FAQPage entries**

```json
[
  {
    "question": "Where does ZipSaveOptions live in the IronZip API?",
    "answer": "ZipSaveOptions is a class in the IronZip namespace, shipped in IronZip.dll. Construct it with new ZipSaveOptions(), then pass it to IronZipArchive.Save or SaveAs, or assign it to the archive's ZipSaveOptions property."
  },
  {
    "question": "How do you set a ZIP password in C# with ZipSaveOptions?",
    "answer": "Set the Password property and choose an EncryptionMethod (AES256, AES128, or Traditional), then pass the options to SaveAs or Save. Leaving Password unset writes an unencrypted archive."
  }
]
```
