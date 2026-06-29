<!--
N-Full / interface. Frame C (when-fronted). No declared base. No concrete implementor declares it directly in api dir; describe contract honestly. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IGraphicContainer.html
-->

## Injected overview (Markdown)

When a surface in a presentation needs to hold pictures and shapes, `IGraphicContainer` describes the capability it exposes. The contract models anything that can own a collection of images and a collection of shapes and add new ones to either, so code that builds slide content can target the contract instead of a specific element type and stay reusable across the surfaces that carry graphics.

A developer meets this contract while populating a slide. The container is the thing you ask to add a picture or a shape, and it keeps each kind in its own list so the two never tangle. Read access comes through `Images` and `Shapes`, both get-only `List` properties; the lists themselves are mutable, but the slots are assigned by the container rather than replaced wholesale.

Adding is handled by overloaded factory methods. `AddImage` accepts an existing `IImage`, an `AnyBitmap`, a `Stream`, or a `string` file path and returns the resulting `IImage`, so the same call covers a picture loaded from disk, from memory, or already constructed. `AddShape` takes an `IShape` and returns it. Because each `Add` call returns the created element, the common pattern is to add and immediately position or name the result in one statement. The documented IronPPT object model exposes this contract for graphics-bearing surfaces; a developer normally works through the slide and shape types that carry images and shapes rather than naming `IGraphicContainer` directly.

```csharp
IImage picture = container.AddImage("logo.png");
picture.Name = "brand-logo";
```

The [add image example](https://ironsoftware.com/csharp/ppt/examples/add-image/) adds a picture, the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) adds a shape, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) shows the slide that holds them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IGraphicContainer - IronPPT C# API Reference`
- v2 (human): `IGraphicContainer: Hold Images & Shapes in C#`
- v3 (balanced): `IGraphicContainer Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IGraphicContainer interface in C#: hold Images and Shapes lists and add to them with AddImage and AddShape, each returning the element.`
- v2 (human): `Add and hold pictures and shapes on a slide surface in C# through the IronPPT IGraphicContainer contract, with AddImage and AddShape.`
- v3 (balanced): `Reference for the IronPPT IGraphicContainer interface in C#: the contract exposing Images, Shapes, AddImage, and AddShape for slide graphics.`

---

## Structured data

**TechArticle abstract**

> Hold and add pictures and shapes on a presentation surface in C# through the IronPPT IGraphicContainer contract. It exposes get-only Images and Shapes lists and overloaded AddImage and AddShape methods; AddImage accepts an IImage, AnyBitmap, Stream, or file path and returns an IImage, while AddShape takes and returns an IShape. Each Add call returns the created element for immediate positioning.

**FAQPage entries**

```json
[
  {
    "question": "Where does IGraphicContainer live in the IronPPT API?",
    "answer": "IGraphicContainer is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It declares no base interface and stands on its own as the contract for a surface that owns images and shapes."
  },
  {
    "question": "What implements IGraphicContainer in IronPPT?",
    "answer": "IGraphicContainer is the contract for a graphics-bearing surface. The documented object model exposes the capability through the slide and shape types that carry images and shapes, so most code adds pictures and shapes through those elements rather than referencing IGraphicContainer by name."
  },
  {
    "question": "How do you add a picture to a slide surface in C#?",
    "answer": "Call AddImage, which is overloaded to accept an IImage, an AnyBitmap, a Stream, or a file-path string, and returns the created IImage. Use AddShape to add an IShape. Each call returns the new element, so you can position or name it in the same statement."
  }
]
```
