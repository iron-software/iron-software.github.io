# IronZIP: The All-in-One Archive Library for .NET

IronZIP is a comprehensive archive compression and decompression library developed by Iron Software. In addition to the widely-used ZIP format, IronZIP also supports TAR, GZIP, and BZIP2 file formats.

## Key Features of IronZIP

- Extract content from compressed archives
- Append files to existing ZIP archives and generate new ZIP files
- Create archives with adjustable compression levels (0-9)

## Compatibility

Supports applications and websites developed in:

- .NET 9, .NET 8, .NET 7, .NET 6, .NET 5, and .NET Core, Standard, and Framework 4.6.2+
- Windows, macOS, Linux, Android, iOS, Docker, Azure, and AWS
- Console, Desktop, and Web Apps. MVC, Blazor, MAUI, Razor Pages, Web Forms

## Get Started

- Quickstart Guide: <https://ironsoftware.com/csharp/zip/docs/>
- Install with NuGet: <https://www.nuget.org/packages/IronZip/>

## C&num; Code Examples

### Create ZIP File

```csharp
using IronZip;
  
// Create an empty ZIP
using (var archive = new IronZipArchive())
{
    // Add files to the ZIP
    archive.Add("./assets/image1.png");
    archive.Add("./assets/image2.png");
    
    // Export the ZIP file
    archive.SaveAs("output.zip");
}
```

### Extract ZIP File

```csharp
using IronZip;
  
// Extract ZIP
IronZipArchive.ExtractArchiveToDirectory("output.zip", "extracted");
```

### Add Files to ZIP

```csharp
using IronZip;

// Open existing ZIP
using (var archive = new IronZipArchive("existing.zip"))
{
    // Add files
    archive.Add("./assets/image3.png");
    archive.Add("./assets/image4.png");

    // Export the ZIP file
    archive.SaveAs("result.zip");
}
```

## Documentation

- Code Examples : <https://ironsoftware.com/csharp/zip/examples/qr-quickstart/>
- How-To Guides : <https://ironsoftware.com/csharp/zip/how-to/license-keys/>
- Tutorials : <https://ironsoftware.com/csharp/zip/tutorials/create-read-extract-zip/>
- API Reference : [https://ironsoftware.com/csharp/zip/object-reference/api/](index.html)
- Support : <support@ironsoftware.com>
