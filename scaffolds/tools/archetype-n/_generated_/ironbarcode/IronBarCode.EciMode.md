<!--
N-Lite/enum. Members verified: Auto, ForceUtf8, Off (value__ is internal backing field, omitted as non-salient).
Target: IronBarCode.EciMode enum in IronBarCode namespace, assembly IronBarCode.dll
-->

## Injected overview (Markdown)

`EciMode` controls whether a UTF-8 Extended Channel Interpretation header is written into 2D barcode symbols (DataMatrix, QR, Aztec, PDF417). `Auto` is the default: the header is added only when non-ASCII characters are present. `ForceUtf8` always writes the ECI header, and `Off` suppresses it entirely for maximum compatibility with legacy scanners. Set the library-wide default via `DefaultEciMode`, or pass a per-call value to `DataMatrixWriter` overloads to override it for a single symbol.

```csharp
BarcodeWriter.CreateBarcode("Héllo", BarcodeEncoding.QRCode, eciMode: EciMode.Auto);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `EciMode Enum - IronBarcode C# API Reference`
- v2 (human): `EciMode: Control UTF-8 ECI Headers in C#`
- v3 (balanced): `EciMode Enum | IronBarcode C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control UTF-8 ECI headers in 2D barcodes with the IronBarcode EciMode enum in C#: Auto, ForceUtf8, or Off, set via DefaultEciMode or DataMatrixWriter.`
- v2 (human): `Use IronBarcode's EciMode enum in C# to add or suppress UTF-8 ECI headers in QR, DataMatrix, Aztec, and PDF417 symbols: Auto, ForceUtf8, or Off.`
- v3 (balanced): `Reference for the IronBarcode EciMode enum in C#: Auto, ForceUtf8, and Off control UTF-8 ECI header output in 2D barcode symbols.`

---

## Structured data

**TechArticle abstract**

> Use EciMode in IronBarcode to control whether a UTF-8 Extended Channel Interpretation header is embedded in 2D barcode symbols such as QR, DataMatrix, Aztec, and PDF417. Auto adds the header only for non-ASCII data, ForceUtf8 always writes it, and Off suppresses it for legacy scanner compatibility. Set the default through DefaultEciMode or override it per call via DataMatrixWriter overloads.