# IronPowerPoint: PowerPoint Library for .NET

**IronPPT** is a PowerPoint library developed by Iron Software. It excels in providing robust functionality for working with PowerPoint presentations in .NET applications.

- Load, Manipulate, and Save PowerPoint Presentations. Easily work with .pptx and .ppt files.
- SlideSetup: Configure slide size, orientation, background color, and layout.
- Text: Handle text content, styles, splitting, appending text, and adding text boxes.
- TextStyle: Manage font family, size, color, bold, italic, underline, and alignment.
- Shapes: Add and manipulate shapes, including setting size, position, type, and rotation.
- Images: Insert images into slides with options for scaling, alignment, and positioning.

## Compatibility

Supports applications and websites developed in:

- .NET 9, .NET 8, .NET 7, .NET 6, .NET 5, and .NET Core, Standard, and Framework 4.6.2+
- Windows, macOS, Linux, Android, iOS, Docker, Azure, and AWS
- Console, Desktop, and Web Apps. MVC, Blazor, MAUI, Razor Pages, Web Forms

## Get Started

- Quickstart Guide: <https://ironsoftware.com/csharp/word/docs/>
- Install with NuGet: <https://www.nuget.org/packages/IronWord/>

## C# Code Examples

### Create Empty Presentation

```cs
using IronPPT;
 
// Create new PowerPoint presentation
var document = new PresentationDocument();
 
// Export PowerPoint presentation
document.Save("output.pptx");
```

### Add Paragraph

```cs
using IronPPT;
using IronPPT.Models;
 
// Create new PowerPoint presentation
var document = new PresentationDocument();
 
// Add text to paragraph
var paragraph = new Paragraph();
paragraph.AddText("First paragraph.");
 
// Add paragraph
document.Slides[0].AddParagraph(paragraph);
 
// Export PowerPoint presentation
document.Save("addParagraph.pptx");
```

## Documentation

- Code Examples : <https://ironsoftware.com/csharp/ppt/examples/create-empty-presentation/>
- How-To Guides : <https://ironsoftware.com/csharp/ppt/how-to/license-keys/>
- API Reference : [https://ironsoftware.com/csharp/ppt/object-reference/api/](index.html)
- Tutorials : <https://ironsoftware.com/csharp/ppt/tutorials/slide-element//>
- Support : <support@ironsoftware.com>