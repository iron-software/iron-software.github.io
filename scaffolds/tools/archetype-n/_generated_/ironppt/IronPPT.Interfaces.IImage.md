<!--
N-Full / interface. Frame B (role). Extends IGraphic, IContentElement. Implementor: Image (Models). IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IImage.html
-->

## Injected overview (Markdown)

`IImage` is the picture object you work through whenever a slide carries a bitmap. It models one image placed on a presentation: where it sits, how big it is, what it is called, and the raw bytes behind it. A developer reaches for this contract when reading or repositioning the pictures already on a slide, or when adjusting an image that was just added.

You rarely construct it. An image arrives through the graphics surface of a slide or shape, which hands back an `IImage` after a picture is added or when the existing pictures are enumerated. From there the same object is the handle for every later edit, so adding, measuring, and resizing all run against one reference rather than a fresh lookup each time. Coding against the interface also keeps the picture-handling code independent of how the bitmap was first supplied, whether from a file path, a stream, or a bitmap already in memory.

The everyday members fall into a few groups. `Name` and `Id` identify the image, `Type` reports its `ImageType`, and `ImageData` exposes the underlying `IImageContent`. Geometry is inherited from `IGraphic`: `Width`, `Height`, `Position`, and `Angle` place and rotate the picture. For content changes, `LoadFromFile` and `LoadFromStream` swap the source bytes in place, `Resize` takes a new width and height in pixels, and `Clone` returns a copy as an `IContentElement`. The concrete implementor in IronPPT is `Image`, so a variable typed as `IImage` and one typed as `Image` describe the same object.

```csharp
foreach (IImage image in slide.Images)
{
    image.Resize(400, 300);
    image.Name = "logo";
}
```

The [add image example](https://ironsoftware.com/csharp/ppt/examples/add-image/) places a picture on a slide, the [manage image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) walks through editing one that is already there, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) covers reaching the slide that holds it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IImage Interface - IronPPT C# API Reference`
- v2 (human): `IImage: Work With Slide Images in C#`
- v3 (balanced): `IImage Interface | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IImage interface in C#: read and edit a slide picture's Name, Type, Position, and ImageData, with LoadFromFile, Resize, and Clone.`
- v2 (human): `Position, name, and resize a picture on a PowerPoint slide in C# through the IronPPT IImage contract, implemented by the Image class.`
- v3 (balanced): `Reference for the IronPPT IImage interface in C#: the slide-picture contract carrying geometry, ImageData, and Resize, implemented by Image.`

---

## Structured data

**TechArticle abstract**

> Work through the IronPPT IImage contract in C# whenever a slide carries a picture. It models one image: Name, Id, Type, and ImageData identify and expose it, while inherited Width, Height, Position, and Angle place it. LoadFromFile, LoadFromStream, and Resize change the content, and Clone copies it. The concrete implementor is the Image class.

**FAQPage entries**

```json
[
  {
    "question": "Where does IImage live in the IronPPT API?",
    "answer": "IImage is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IGraphic and IContentElement, so it inherits geometry members such as Width, Height, and Position alongside its own image members."
  },
  {
    "question": "What implements IImage in IronPPT?",
    "answer": "The Image class in the IronPPT.Models namespace implements IImage. A slide's graphics surface returns IImage when a picture is added or enumerated, so most code receives the interface and uses Image only when constructing or type-checking."
  },
  {
    "question": "How do you resize an image on a slide in C#?",
    "answer": "Call Resize on the IImage with a new width and height in pixels, or set the inherited Width and Height. To replace the picture itself, call LoadFromFile or LoadFromStream, which swap the source bytes in place."
  }
]
```
