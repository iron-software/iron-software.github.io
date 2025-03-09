# IronBarCode - The BarCode and QR Library for .NET

IronBarcode allows developers to read & write Barcodes and QR Codes within .NET Applications & websites.

The .NET Barcode Library reads and writes most Barcode and QR standards. These include code 39/93/128, UPC A/E, EAN 8/13, ITF, RSS 14 / Expanded, Databar, CodaBar, Aztec, Data Matrix, MaxiCode, PDF417, MSI, Plessey, USPS, and QR. The barcode result data includes type, text, binary data, page, and image file.

Barcode reading engine includes automatic image correction and barcode detection technology to take the pain out of locating and reading from imperfect scans. Multithreading, cropping, and batch scanning provides fast and accurate scanning of multi page documents.

The barcode writing API checks and verifys format, length, number, checksum to automatically avoid encoding errors. Barcode writer allows for styling, resizing, margins, borders, recoloring, and adding text annotations. Barcodes can be written to image, PDF or HTML file.

Key Features:

- Read single or multiple barcodes and QR codes from images or PDFs.
- Image correction for skewing, orientation, noise, low resolution, contrast etc.
- Generate barcodes and apply them to images or PDF documents.
- Embed barcodes into HTML documents.
- Customize barcodes with styles, colors, and annotation text.
- QR code writing supports logos, colors, and advanced QR alignment.

IronBarcode can be used within C#, Visual Basic .NET, ASP .NET projects, MVC, Web Services, Console & Desktop Applications.

## Compatibility

Supports applications and websites developed in:

- .NET 9, .NET 8, .NET 7, .NET 6, .NET 5, and .NET Core, Standard, and Framework 4.6.2+
- Windows, macOS, Linux, Android, iOS, Docker, Azure, and AWS
- Console, Desktop, and Web Apps. MVC, Blazor, MAUI, Razor Pages, Web Forms

## Get Started

Reading and writing barcodes only requires a single line of code with IronBarCode.

- Quickstart Guide: <https://ironsoftware.com/csharp/barcode/>
- Install with NuGet: <https://www.nuget.org/packages/BarCode/>

## C# Code Examples

```csharp
using IronBarCode;
    
// Create a Barcode in 1 Line of Code
var myBarcode = BarcodeWriter.CreateBarcode("12345", BarcodeWriterEncoding.EAN8);

// Save in 1 Line of Code
myBarcode.SaveAsImage("EAN8.jpeg");

// Read a Barcode in 1 Line of Code.  
var resultFromFile = BarcodeReader.Read(@"file/barcode.png");
// From PDF
var resultFromPdf = BarcodeReader.ReadPdf(@"file/mydocument.pdf");
```

## Documentation

- Code Examples : <https://ironsoftware.com/csharp/barcode/examples/barcode-quickstart/>
- How-To Guides : <https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-images/>
- Tutorials : <https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/>
- API Reference : [https://ironsoftware.com/csharp/barcode/object-reference/](index.html)
- Support : <support@ironsoftware.com>