# IronZIP: The All-in-One Archive Library for .NET

IronZIP is an archive compression and decompression library developed by Iron Software. In addition to the widely used ZIP format, it can also handle TAR, GZIP, and BZIP2.


## Features of IronQR

* Extract content from compressed archives
* Append files to existing ZIP archives and generate new ZIP files
* Create archives with different levels of compression (levels 0 - 9)

## Get Started 

- Quickstart Guide:  	https://ironsoftware.com/csharp/zip/docs/
- Install with NuGet:   https://www.nuget.org/packages/IronZip/	

## Compatibility

#### .NET Version Support:

- **C#**, **VB.NET**, **F#**
- **.NET 7, 6**, 5, and Core 3.1+
- .NET Standard (2.0+)
- .NET Framework (4.6.2+)

#### Operating Systems and Environments Support:

- **Windows** (10+, Server 2018+)
- **Linux** (Ubuntu, Debian, CentOS, etc.)
- **macOS** (10+)
- **iOS** (12+)
- **Android** API 21+ (v5 “Lollipop”)
- **Docker** (Windows, Linux, Azure)
- **Azure** (VPS, WebApp, Function)
- **AWS** (EC2, Lambda)

#### .NET Project Types Support:

- **Web** (Blazor & WebForms)
- **Mobile** (Xamarin & MAUI)
- **Desktop** (WPF & MAUI)
- **Console** (App & Library)


C# Code Examples
=============================================================

```cs
using IronZip;

// Create an empty ZIP
using (var archive = new IronZipArchive())
{
    // Add files to the ZIP
    archive.AddArchiveEntry("./assets/image1.png");
    archive.AddArchiveEntry("./assets/image2.png");

    // Export the ZIP file
    archive.SaveAs("output.zip");
}
```

```cs
using IronZip;

// Extract ZIP
IronZipArchive.ExtractArchiveToDirectory("output.zip", "extracted");
```

```cs
using IronZip;

// Open existing ZIP
using (var archive = new IronZipArchive("existing.zip"))
{
    // Add files
    archive.AddArchiveEntry("./assets/image3.png");
    archive.AddArchiveEntry("./assets/image4.png");

    // Export the ZIP file
    archive.SaveAs("result.zip");
}
```

Documentation
=============================================================

- More Code Samples				:	https://ironsoftware.com/csharp/zip/examples/qr-quickstart/
- API Reference       		                :	https://ironsoftware.com/csharp/zip/object-reference/api/
- Tutorials					:	https://ironsoftware.com/csharp/zip/tutorials/create-read-extract-zip/
- Support					:	developers@ironsoftware.com
