<!--
N-Full (value-type struct, 13+ members). Frame E. IronOcr. Verified 2026-06-23 against PassportInfo.html.
Struct: sealed class : ValueType, IEquatable<PassportInfo>. Fields: Empty, InvalidCountryCodePrefix.
Props: Surname, GivenNames, PassportNumber, Country, DateOfBirth, DateOfExpiry, DateOfIssue, DocumentType, Gender, Nationality, NationalityCode, IssuingCountryCode, PersonalNumber.
OcrPassportResult.PassportInfo cross-ref verified on OcrPassportResult.html.
-->

## Injected overview (Markdown)

The fields decoded from a passport, name, number, nationality, dates, and the rest, arrive in C# as a `PassportInfo` record. It holds everything pulled from the ICAO 9303 Machine Readable Zone (MRZ) and, where available, the Visual Inspection Zone (VIZ), so a developer reads typed properties instead of parsing the raw MRZ string by hand. It is the structured payload of a passport read, separate from the surrounding `OcrPassportResult` that also carries the raw `Text` and a `Confidence` score.

A `PassportInfo` is obtained from the `PassportInfo` property of an `OcrPassportResult`, which `IronTesseract.ReadPassport` returns. A developer rarely constructs one directly: the read fills it from the document, and code then reads the properties it needs. Because it is a value-type struct that implements `IEquatable<PassportInfo>`, two instances compare by value, and the static `Empty` field gives a clear "nothing decoded" sentinel to check against.

The machine-extracted MRZ fields are the reliable core: `Surname`, `GivenNames`, `PassportNumber`, `DocumentType`, `Nationality`, `Country`, and the `DateOfBirth` and `DateOfExpiry` dates. The supplementary set, `DateOfIssue`, `IssuingCountryCode`, `NationalityCode`, `PersonalNumber`, and `Gender`, fills in where the VIZ or extended MRZ supplies it and may be blank otherwise. The `InvalidCountryCodePrefix` constant marks a country value the decoder could not validate, so checking for that prefix flags a code worth a second look. Read the fields a workflow needs and validate the dates and numbers against expected formats before trusting them downstream.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrImageInput("passport.png");
OcrPassportResult result = ocr.ReadPassport(input);
PassportInfo info = result.PassportInfo;
Console.WriteLine($"{info.Surname}, {info.GivenNames} - {info.PassportNumber}");
```

The [read passport how-to](https://ironsoftware.com/csharp/ocr/how-to/read-passport/) walks through MRZ extraction end to end, the [passport reading example](https://ironsoftware.com/csharp/ocr/examples/read-passport/) shows the decoded fields in code, and the [scanned document how-to](https://ironsoftware.com/csharp/ocr/how-to/read-scanned-document/) covers cleaning up a scan before the read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PassportInfo Struct - IronOCR C# API Reference`
- v2 (human): `PassportInfo: Decoded MRZ Fields in C#`
- v3 (balanced): `PassportInfo Struct | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read decoded passport fields in C# with the IronOCR PassportInfo struct: Surname, GivenNames, PassportNumber, Nationality, and MRZ dates.`
- v2 (human): `Get typed passport data in C# from the IronOCR PassportInfo struct: name, number, nationality, and dates decoded from the ICAO 9303 MRZ.`
- v3 (balanced): `Reference for the IronOCR PassportInfo struct in C#: the MRZ and VIZ fields returned by OcrPassportResult, with name, number, and dates.`

---

## Structured data

**TechArticle abstract**

> Decoded passport fields arrive in C# as the IronOCR PassportInfo struct, the structured payload of a passport read. It carries the ICAO 9303 MRZ fields Surname, GivenNames, PassportNumber, DocumentType, Nationality, Country, DateOfBirth, and DateOfExpiry, plus supplementary VIZ fields such as DateOfIssue, IssuingCountryCode, and Gender. OcrPassportResult.PassportInfo returns it, and as a value type it compares by value with an Empty sentinel.

**FAQPage entries**

```json
[
  {
    "question": "Where does PassportInfo live in the IronOCR API?",
    "answer": "PassportInfo is a struct in the IronOcr namespace, shipped in IronOcr.dll. It is a value type that implements IEquatable<PassportInfo>, and OcrPassportResult exposes it through its PassportInfo property."
  },
  {
    "question": "How do you read passport fields in C#?",
    "answer": "Call ReadPassport on an IronTesseract to get an OcrPassportResult, then read its PassportInfo property. From there, read typed fields such as Surname, GivenNames, PassportNumber, Nationality, DateOfBirth, and DateOfExpiry."
  },
  {
    "question": "Which PassportInfo fields are the most reliable?",
    "answer": "The MRZ fields are machine-extracted and most reliable: Surname, GivenNames, PassportNumber, DocumentType, Nationality, Country, DateOfBirth, and DateOfExpiry. Supplementary VIZ fields such as DateOfIssue and PersonalNumber may be blank when not present on the document."
  }
]
```
