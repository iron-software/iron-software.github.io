<!--
N-Mid / interface (marker; extends IShape, IWordDocumentObject, IColored, ...). Frame C. Implementor: ShapeContent. IronWord. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IWordShapeObject.html
-->

## Injected overview (Markdown)

When a routine handles a drawn path or shape inside a Word document in C#, it works through `IWordShapeObject`. The contract represents a single shape element a document already contains, so traversal and editing code can treat every drawn object uniformly instead of binding to one concrete class. It composes the shared shape, color, document-object, cloning, positioning, and serialization abstractions, which is what gives a shape its geometry, fill, placement, and identity in a consistent shape across the model.

The concrete implementor in IronWord is `ShapeContent`, the type code receives when it reaches a shape while walking a document. Most code names `ShapeContent` directly; the interface matters when a method accepts or returns a shape by contract. Because `IWordShapeObject` extends `IColored`, an implementation exposes color settings, and because it extends `ICloneable`, a shape can be copied within the document. Reach for the contract when writing code that should accept any document shape regardless of how it was created.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) covers the element model that shapes belong to.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IWordShapeObject Interface - IronWord C# API`
- v2 (human): `IWordShapeObject: C# Word Shape Contract`
- v3 (balanced): `IWordShapeObject Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IWordShapeObject is IronWord's C# contract for a shape in a Word document, implemented by ShapeContent with color and positioning.`
- v2 (human): `Handle a drawn shape in a Word document in C# through IronWord's IWordShapeObject contract, implemented by the ShapeContent class.`
- v3 (balanced): `Reference for the IronWord IWordShapeObject interface in C#: the document shape contract implemented by ShapeContent, with color support.`

---

## Structured data

**TechArticle abstract**

> Handling a drawn path or shape in a Word document in C# runs through IronWord's IWordShapeObject contract. It represents a single shape element a document contains and composes the shared shape, color, document-object, cloning, and serialization abstractions. The concrete implementor is ShapeContent, received when traversal code reaches a shape.

**FAQPage entries**

```json
[
  {
    "question": "Where does IWordShapeObject live in the IronWord API?",
    "answer": "IWordShapeObject is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IShape, IWordDocumentObject, IColored, ICloneable, and the serialization abstractions, and is implemented by the ShapeContent class."
  }
]
```
