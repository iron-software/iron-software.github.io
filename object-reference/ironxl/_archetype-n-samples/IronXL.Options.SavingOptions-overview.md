<!--
N-Mid (2 properties + ctor). Frame E (feature/outcome-fronted). IronXL.
Members verified 2026-06-22: SavingOptions(), ListDelimiter (string), Password (string). Base Object, namespace IronXL.Options.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Options.SavingOptions.html
-->

## Injected overview (Markdown)

Encryption and CSV formatting on the way out are decided by `SavingOptions`. It is the settings object a developer passes when writing a workbook to disk, so a saved file can be protected with a password or written with a chosen list separator instead of accepting the defaults.

Set the property a save needs, then hand the options to the save call. `Password` encrypts the workbook with the given value, so the resulting file requires that password to open. `ListDelimiter` sets the separator used when saving to CSV; its default follows the current region's culture, which matters when a target system expects a comma in a locale that defaults to a semicolon. Both are simple string properties, and a save that needs neither can skip the options entirely. The parameterless constructor creates an instance with both properties unset, ready to assign only what a particular output requires.

```csharp
using IronXL.Options;

var options = new SavingOptions();
options.Password = "secret";
```

The [write to CSV how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-write-to-csv-file/) saves delimited output, and the [password-protect a workbook how-to](https://ironsoftware.com/csharp/excel/how-to/set-password-workbook/) secures a saved file.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SavingOptions Class - IronXL C# API`
- v2 (human): `SavingOptions: Save & Encrypt in C#`
- v3 (balanced): `SavingOptions | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control workbook saving in C# with IronXL SavingOptions: encrypt with a Password and set the CSV ListDelimiter before writing a file.`
- v2 (human): `Protect or format a saved workbook in C# with the IronXL SavingOptions class: set a Password to encrypt, or a ListDelimiter for CSV.`
- v3 (balanced): `Reference for the IronXL SavingOptions class in .NET: set Password to encrypt a workbook and ListDelimiter for CSV output.`

---

## Structured data

**TechArticle abstract**

> Encrypting or formatting a workbook on save in C# runs through the IronXL SavingOptions class. Password encrypts the written file so it requires that password to open, and ListDelimiter sets the separator used for CSV output, defaulting to the current region's culture. Both are string properties set before the save call.

**FAQPage entries**

```json
[
  {
    "question": "Where does SavingOptions live in the IronXL API?",
    "answer": "SavingOptions is a class in the IronXL.Options namespace, shipped in IronXL.dll, deriving from System.Object. It configures how a WorkBook is written when saving a file."
  },
  {
    "question": "How do you password-protect a workbook on save in C#?",
    "answer": "Create a SavingOptions instance, set its Password property to the chosen password, and pass the options to the save call. The resulting file then requires that password to open. ListDelimiter on the same object sets the CSV separator."
  }
]
```
