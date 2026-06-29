<!--
Archetype N-Lite / enum (docfx: "sealed class EncryptionMethods : Enum") — IronZip.
Namespace IronZip.Enum (from filename). Members verified 2026-06-22: AES128, AES256, Traditional.
Salience: AES256 (modern, strongest) first, then AES128, then Traditional (legacy).
Target page: https://ironsoftware.com/csharp/zip/object-reference/api/IronZip.Enum.EncryptionMethods.html
-->

## Injected overview (Markdown)

`EncryptionMethods` selects how an IronZip archive is encrypted. `AES256` and `AES128` apply modern AES encryption, with `AES256` the stronger of the two, while `Traditional` uses legacy ZIP 2.0 encryption for compatibility with older tools that cannot read AES. Assign the value to `ZipSaveOptions.EncryptionMethod`, or pass it to `IronZipArchive.Encrypt` or `SetPassword` alongside the password. The [password-protect ZIP example](https://ironsoftware.com/csharp/zip/examples/password-protect-zip/) shows it in a complete save, and the [access-protected ZIP example](https://ironsoftware.com/csharp/zip/examples/access-protected-zip/) covers reading one back.

```csharp
options.EncryptionMethod = EncryptionMethods.AES256;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `EncryptionMethods Enum - IronZip C# API`
- v2 (human): `EncryptionMethods: ZIP Encryption in C#`
- v3 (balanced): `EncryptionMethods Enum | IronZip C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose ZIP encryption in C# with the IronZip EncryptionMethods enum: AES256, AES128, or Traditional, applied via ZipSaveOptions or Encrypt.`
- v2 (human): `Set how an archive is encrypted in C# with the IronZip EncryptionMethods enum: modern AES256 and AES128, or Traditional ZIP 2.0 for compatibility.`
- v3 (balanced): `Reference for the IronZip EncryptionMethods enum in C#: AES256, AES128, and Traditional ZIP encryption via ZipSaveOptions.EncryptionMethod.`

---

## Structured data

**TechArticle abstract**

> Use EncryptionMethods in IronZip to choose how an archive is encrypted, via ZipSaveOptions.EncryptionMethod or IronZipArchive.Encrypt. AES256 and AES128 apply modern AES encryption, with AES256 the stronger, while Traditional uses legacy ZIP 2.0 encryption for compatibility with older tools.
