# IronQR - The QR Library for .NET

IronQR is an Iron Software's QR Code reading and writing library. In addition to highly customizable QR Generation, it uses an advanced Machine Learning Model with Mobile, Desktop, and Cloud compatibility to detect QR Codes for reading.

## Features of IronQR

- Read and Generate QR Codes in C# .NET Projects
- Create QR Code Generatorfor Mobile iOS and Android
- Read QR Code Reader for Mobile iOS and Android
- Generate QR Codes Library and in Xamarin
- Use Machine Learning to read QR Codes

## Get Started

- Quickstart Guide: <https://ironsoftware.com/csharp/qr/>
- Install with NuGet: <https://www.nuget.org/packages/IronQR/>

## Compatibility

### .NET Version Support

- **C#**, **VB.NET**, **F#**
- **.NET 7, 6**, 5, and Core 3.1+
- .NET Standard (2.0+)
- .NET Framework (4.6.2+)

### Operating Systems and Environments Support

- **Windows** (10+, Server 2018+)
- **Linux** (Ubuntu, Debian, CentOS, etc.)
- **macOS** (10+)
- **iOS** (12+)
- **Android** API 21+ (v5 "Lollipop")
- **Docker** (Windows, Linux, Azure)
- **Azure** (VPS, WebApp, Function)
- **AWS** (EC2, Lambda)

#### .NET Project Types Support

- **Web** (Blazor & WebForms)
- **Mobile** (Xamarin & MAUI)
- **Desktop** (WPF & MAUI)
- **Console** (App & Library)

## C# Code Examples

```csharp
using IronQr;
using IronSoftware.Drawing;

// Create a QR Code object
QrCode myQr = QrWriter.Write("hello world");

// Save QR Code as a Bitmap
AnyBitmap qrImage = myQr.Save();

// Save QR Code Bitmap as File
qrImage.SaveAs("qr.png");
```

```csharp
using IronQr;
using IronSoftware.Drawing;

// Open the asset to read a QR Code from
var inputBmp = AnyBitmap.FromFile("IMAGE_TO_READ.png");

// Load the asset into QrImageInput
QrImageInput imageInput = new QrImageInput(inputBmp);

// Create a QR Reader object
QrReader reader = new QrReader();

// Read the Input an get all embedded QR Codes
IEnumerable<QrResult> results = reader.Read(imageInput);
```

## Documentation

- More Code Samples : <https://ironsoftware.com/csharp/qr/examples/qr-quickstart/>
- API Reference : [https://ironsoftware.com/csharp/qr/object-reference/api/](index.html)
- Tutorials : <https://ironsoftware.com/csharp/qr/tutorials/csharp-qr-code-generator/>
- Support : <developers@ironsoftware.com>
