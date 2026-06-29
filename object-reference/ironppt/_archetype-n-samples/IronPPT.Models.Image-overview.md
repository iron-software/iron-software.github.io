<!--
N-Full (class, derives BaseGraphic; implements ICloneableElement, IImage, IGraphic, IContentElement). Frame D (task-gerund). IronPPT.
Members verified 2026-06-23: ctors Image(), Image(AnyBitmap), Image(Stream), Image(string); FrameShape (Nullable<ShapeType>), Id (string),
ImageData (IImageContent, get-only), Name (string), Type (ImageType); Clone() override returning IContentElement; LoadFromFile(string), LoadFromStream(Stream), Replace(IImage). AnyBitmap is IronSoftware.Drawing.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Image.html
-->

## Injected overview (Markdown)

Placing a picture on a slide runs through `Image`, the graphic element that wraps a bitmap and carries it onto the presentation. Construct one from a file path, a stream, or an `AnyBitmap`, and the resulting object behaves like any other slide graphic that can be positioned, named, and cloned.

The constructors cover the common sources: `new Image(string)` loads from a path, `new Image(Stream)` reads from an open stream, and `new Image(AnyBitmap)` takes an already-loaded bitmap. A parameterless `new Image()` creates an empty graphic you fill later with `LoadFromFile` or `LoadFromStream`, and `Replace` swaps the picture for another `IImage` while keeping the element in place. The decoded picture is exposed through the get-only `ImageData`, an `IImageContent`.

Identity and appearance come from a small set of properties: `Name` and `Id` label the element, `Type` reports the `ImageType`, and `FrameShape`, a nullable `ShapeType`, crops the picture into a shape outline when set. Because `Image` derives from the shared graphic base and implements `ICloneableElement`, the `Clone` override returns a deep copy as an `IContentElement`, which is handy when the same picture appears on several slides. Position and sizing follow the same model as other graphics on the slide, so an `Image` is moved and scaled the way a shape is. When a picture is loaded once and reused, build it a single time and clone it per slide rather than reading the file again for each placement. To add and arrange a picture end to end, start from the image management workflow rather than wiring the pieces by hand.

```csharp
using IronPPT.Models;

var image = new Image("logo.png");
image.Name = "BrandLogo";
slide.Shapes.AddShape(image);
```

The [manage image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) covers adding and editing images, the [add image example](https://ironsoftware.com/csharp/ppt/examples/add-image/) places one on a slide, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows the surrounding shape model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Image Class - IronPPT C# API Reference`
- v2 (human): `Image: Add Pictures to Slides in C#`
- v3 (balanced): `Image Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add pictures to slides in C# with the IronPPT Image class: construct from a file, stream, or AnyBitmap, then set Name, Type, and FrameShape.`
- v2 (human): `Place and manage pictures on PowerPoint slides in C# with the IronPPT Image class: load from a file, stream, or bitmap, crop, clone, and replace.`
- v3 (balanced): `Reference for the IronPPT Image class in C#: build an image from a path, stream, or AnyBitmap, then position, name, clone, or replace it.`

---

## Structured data

**TechArticle abstract**

> Placing a picture on a slide in C# runs through IronPPT's Image class. Construct it from a file path, a Stream, or an AnyBitmap, or create an empty one and call LoadFromFile or LoadFromStream. Name and Id label it, Type reports the ImageType, FrameShape crops it to a ShapeType, ImageData exposes the decoded IImageContent, Replace swaps the picture, and the Clone override returns a copy as an IContentElement.

**FAQPage entries**

```json
[
  {
    "question": "Where does Image live in the IronPPT API?",
    "answer": "Image is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from BaseGraphic and implements IImage, IGraphic, IContentElement, and ICloneableElement, so it behaves like any other graphic element on a slide."
  },
  {
    "question": "How do you add a picture to a slide in C# with IronPPT?",
    "answer": "Build an Image from a path with new Image(\"logo.png\"), from a Stream, or from an AnyBitmap, then add it to the slide's shapes. You can also create an empty Image and call LoadFromFile or LoadFromStream afterward."
  },
  {
    "question": "How do you replace or copy an Image in IronPPT?",
    "answer": "Call Replace and pass another IImage to swap the picture while keeping the element in place. Use the Clone override to get a deep copy as an IContentElement when the same picture is reused across slides."
  }
]
```
