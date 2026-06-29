<!--
N-Mid / interface (1 member). Frame E (feature-fronted). Extends IContentElement. Implementor: ImageContent. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IImageContent.html
-->

## Injected overview (Markdown)

The raw payload behind a slide picture lives on `IImageContent`. The contract holds the encoded data for an image, the bytes a developer reads or replaces when working with the picture's source rather than its placement on the slide. You reach for it when exporting an image's data, swapping the underlying bytes, or inspecting what a picture actually contains.

Image content is reached through the picture that owns it rather than built in isolation, so an `IImageContent` is normally obtained from an `IImage` through its `ImageData` property and then read or assigned. The contract declares one member: `Content`, a `string` carrying the image data. Read `Content` to pull the stored payload, or assign it to replace the bytes behind the picture in place. Because the contract extends `IContentElement`, the content also behaves as a slide content element where the model treats it that way. The concrete implementor in IronPPT is `ImageContent`, so most code works through `IImage.ImageData` and touches `ImageContent` only when handling the raw data directly.

```csharp
string data = image.ImageData.Content;
```

The [add image example](https://ironsoftware.com/csharp/ppt/examples/add-image/) places a picture, and the [manage image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) covers editing one already on a slide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IImageContent - IronPPT C# API Reference`
- v2 (human): `IImageContent: A Slide Image's Data in C#`
- v3 (balanced): `IImageContent Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IImageContent interface in C#: a Content string holding a picture's encoded data, reached through IImage.ImageData.`
- v2 (human): `Read or replace the data behind a slide picture in C# through the IronPPT IImageContent contract, implemented by ImageContent.`
- v3 (balanced): `Reference for the IronPPT IImageContent interface in C#: the Content payload of a slide image, implemented by the ImageContent class.`

---

## Structured data

**TechArticle abstract**

> Read or replace the data behind a slide picture in C# through the IronPPT IImageContent contract. It declares one member, Content, a string holding the image's encoded payload, reached through an IImage's ImageData property. The concrete implementor is the ImageContent class, which also behaves as a slide content element.

**FAQPage entries**

```json
[
  {
    "question": "Where does IImageContent live in the IronPPT API?",
    "answer": "IImageContent is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IContentElement and is implemented by the ImageContent class, reached through an IImage's ImageData property."
  }
]
```
