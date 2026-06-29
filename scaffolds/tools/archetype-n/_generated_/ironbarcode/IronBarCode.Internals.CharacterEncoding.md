<!--
N-Lite/enum (namespace IronBarCode.Internals). Members verified 2026-06-23: UTF_8, ISO_8859_1.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Internals.CharacterEncoding.html
Consumer: BarcodeWriter.DefaultCharacterEncoding.
-->

## Injected overview (Markdown)

`CharacterEncoding` selects the text encoding IronBarcode uses when turning a string into barcode data, set on `BarcodeWriter.DefaultCharacterEncoding`. `UTF_8` encodes the full Unicode range and is the choice for international text and non-Latin scripts, while `ISO_8859_1` (Latin-1) covers Western European characters and stays compatible with readers that expect single-byte input. The [writing in Unicode how-to](https://ironsoftware.com/csharp/barcode/how-to/writing-in-unicode/) covers encoding non-ASCII content.

```csharp
BarcodeWriter.DefaultCharacterEncoding = CharacterEncoding.UTF_8;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CharacterEncoding Enum - IronBarcode C# API`
- v2 (human): `CharacterEncoding: Barcode Text Encoding in C#`
- v3 (balanced): `CharacterEncoding Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set barcode text encoding in C# with the IronBarcode CharacterEncoding enum: UTF_8 or ISO_8859_1, on BarcodeWriter.DefaultCharacterEncoding.`
- v2 (human): `Choose how IronBarcode encodes text in C# with the CharacterEncoding enum: full-Unicode UTF_8 or single-byte ISO_8859_1 Latin-1.`
- v3 (balanced): `Reference for the IronBarcode CharacterEncoding enum in C#: UTF_8 and ISO_8859_1 text encodings for writing barcode data.`

---

## Structured data

**TechArticle abstract**

> Use CharacterEncoding in IronBarcode to select the text encoding applied when turning a string into barcode data, set on BarcodeWriter.DefaultCharacterEncoding. UTF_8 encodes the full Unicode range for international text, while ISO_8859_1 covers Western European characters as single-byte input.
