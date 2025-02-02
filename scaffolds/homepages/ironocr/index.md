# IronOCR - The OCR & Tesseract Library for .NET

IronOCR is an advanced OCR (Optical Character Recognition) library for C# and .NET

IronOCR reads Text, Barcodes & QR from all major image and PDF formats using the latest Tesseract 5 engine. This library adds OCR functionality to Desktop, Console and Web applications in minutes.

IronOCR's Unique Features:

- Pure .Net OCR API
- All OCR tasks run locally (no SAAS)
- 125 languages
- Barcode & QR Code reading
- Corrects low quality, noisy and distorted scans
- Performance tuned above and beyond any other known build of Tesseract OCR.
- Reads PDFs
- Can export searchable PDF documents from OCR
- Reads multi-page TIFFs
- Can save any OCR Scan to a searchable PDF document or XHTML

Data output options include: Plain Text, Barcode Data and an OCR Result class containing paragraphs, lines, words, and characters.

## Language Support

125 Languages including: Arabic, Chinese, English, Finnish, French, German, Hebrew, Italian, Japanese, Korean, Portuguese, Russian, Spanish...

Custom language packs can also be created.

## Get Started

**Quickstart**: <https://ironsoftware.com/csharp/ocr/> **Install With NuGet**: <https://www.nuget.org/packages/IronOcr/>

## Compatibility

IronOcr provides Tesseract OCR on Mac, Windows, Linux, Azure and Docker for:

- .Net Framework 4.0 +
- .Net Standard 2.0 +
- .Net Core 2.0 +
- .Net 5
- Mono for MacOS and Linux
- Xamarin for MacOS

## C# Code Example

```csharp
using IronOcr;

var Ocr = new IronTesseract();
Ocr.Language = OcrLanguage.English;

using (var Input = new OcrInput("image.png"))
{
    // Input.Deskew();  // use if image not straight
    // Input.DeNoise(); // use if image contains digital noise
    var Result = Ocr.Read(Input);
    Console.WriteLine(Result.Text);
}
```

## Further Documentation

- Code Samples : <https://ironsoftware.com/csharp/ocr/examples/simple-csharp-ocr-tesseract/>
- API Reference : [https://ironsoftware.com/csharp/ocr/object-reference/api/](index.html)
- Tutorials : <https://ironsoftware.com/csharp/ocr/tutorials/how-to-read-text-from-an-image-in-csharp-net/>
- Support : <developers@ironsoftware.com>
