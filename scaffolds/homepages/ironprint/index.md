# IronPrint: Your All-in-One Print Library for .NET

IronPrint is a print library developed by Iron Software. The library is compatible with a wide variety of environments, including Windows, macOS, Android, and iOS.

--------------------------------------------------------------------------------

## Get Started

- Quickstart Guide: <https://ironsoftware.com/csharp/print/docs/>
- Install with NuGet: <https://www.nuget.org/packages/IronPrint/>

--------------------------------------------------------------------------------

## Compatibility

### .NET Version Support

- **C#**, **VB.NET**, **F#**
- **.NET 8, 7**, 6, 5, and Core 3.1+
- .NET Framework (4.6.2+)

### Operating Systems and Environments Support

- **Windows** (7+, Server 2018+)
- **macOS** (10+)
- **iOS** (11+)
- **Android** API 21+ (v5 "Lollipop")

### .NET Project Types Support

- **Mobile** (Xamarin & MAUI & Avalonia)
- **Desktop** (WPF & MAUI & Windows Avalonia)
- **Console** (App & Library)

--------------------------------------------------------------------------------

## C# Code Examples

```csharp
using IronPrint;

// Print the document
Printer.Print("newDoc.pdf");
```

```csharp
using IronPrint;

// Show print dialog
Printer.ShowPrintDialog("newDoc.pdf");
```

```csharp
using IronPrint;

// Configure print setting
PrintSettings printSettings = new PrintSettings();
printSettings.Dpi = 150;
printSettings.NumberOfCopies = 2;
printSettings.PaperOrientation = PaperOrientation.Portrait;

// Print the document
Printer.Print("newDoc.pdf", printSettings);
```

--------------------------------------------------------------------------------

## Documentation

- More Code Samples : <https://ironsoftware.com/csharp/print/examples/print/>
- API Reference : [https://ironsoftware.com/csharp/print/object-reference/api/](index.html)
- Tutorials : <https://ironsoftware.com/csharp/print/tutorials/print-document/>
- Support : <developers@ironsoftware.com>
