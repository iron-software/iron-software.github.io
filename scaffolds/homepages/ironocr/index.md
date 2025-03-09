# IronOCR - The OCR & Tesseract Library for .NET

IronOCR is an advanced OCR (Optical Character Recognition) library for C# and .NET.

IronOCR extracts text, barcodes, and QR codes from all major image and PDF formats using the latest Tesseract 5 engine. It enables OCR functionality in desktop, console, and web applications within minutes.

Unique Features of IronOCR:

- Pure .Net OCR API
- Runs entirely locally(no SaaS required)
- Supports 125 languages
- Reads barcodes and QR codes
- Corrects low-quality, noisy, and distorted scans
- Performance-optimized beyond any known Tesseract OCR build
- Reads PDFs and multi-page TIFFs
- Exports OCR scans as searchable PDFs or XHTML

Outputs data as plain text, barcode data, or an OCR result class (including paragraphs, lines, words, and characters).

## Language Support

Supports 125 languages, including: Arabic, Chinese, English, Finnish, French, German, Hebrew, Italian, Japanese, Korean, Portuguese, Russian, Spanish, and more.

Custom language packs can also be created.

## Compatibility

- .NET 9, .NET 8, .NET 7, .NET 6, .NET 5, and .NET Core, Standard, and Framework 4.6.2+
- Windows, macOS, Linux, Android, iOS, Docker, Azure, and AWS
- Console, Desktop, and Web Apps. MVC, Blazor, MAUI, Razor Pages, Web Forms

## Get Started

**Quickstart**: <https://ironsoftware.com/csharp/ocr/> <br>
**Install With NuGet**: <https://www.nuget.org/packages/IronOcr/>

## C# Code Example

```csharp
using IronOcr;

// Instantiate Tesseract Engine
var ocrTesseract = new IronTesseract();
ocrTesseract.Language = OcrLanguage.English;

// Import image
using var ocrInput = new OcrInput();
ocrInput.LoadImage("image.png");
// Input.Deskew();  // use if image not straight
// Input.DeNoise(); // use if image contains digital noise

// Perform OCR
var ocrResult = ocrTesseract.Read(ocrInput);
Console.WriteLine(ocrResult.Text);
```

## Further Documentation

- Code Examples : <https://ironsoftware.com/csharp/ocr/examples/simple-csharp-ocr-tesseract/>
- How-To Guides : <https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/>
- Tutorials : <https://ironsoftware.com/csharp/ocr/tutorials/how-to-read-text-from-an-image-in-csharp-net/>
- API Reference : [https://ironsoftware.com/csharp/ocr/object-reference/api/](index.html)
- Support : <support@ironsoftware.com>