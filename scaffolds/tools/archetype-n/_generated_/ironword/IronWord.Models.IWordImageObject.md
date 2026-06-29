<!--
N-Mid / interface (marker, 0 declared members; extends IImage, IWordDocumentObject, ...). Frame B. Implementor: ImageContent. IronWord. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IWordImageObject.html
-->

## Injected overview (Markdown)

`IWordImageObject` is the contract that represents an image already placed in a Word document when you read or edit one in C#. Code that walks a document's content can treat every picture through this single contract instead of binding to a concrete class, which keeps extraction and editing routines decoupled from how an image was originally added. The contract composes the shared image, document-object, cloning, positioning, and serialization abstractions, so an image carried through it exposes sizing, placement, and identity in a uniform way.

The concrete implementor in IronWord is `ImageContent`, the type you receive when you enumerate the images in a document, and the type you construct from a file, stream, or `AnyBitmap` to add a new picture. Most code names `ImageContent` directly; the interface matters when a method accepts or returns an image by contract. Because `IWordImageObject` extends `ICloneable`, an implementation can be copied, and because it extends the serialization abstraction, it round-trips with the document model.

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) places a picture, and the [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) reads them back.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IWordImageObject Interface - IronWord C# API`
- v2 (human): `IWordImageObject: C# Word Image Contract`
- v3 (balanced): `IWordImageObject Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IWordImageObject is IronWord's C# contract for an image in a Word document, implemented by ImageContent for reading and editing pictures.`
- v2 (human): `Work with a picture in a Word document in C# through IronWord's IWordImageObject contract, implemented by the ImageContent class.`
- v3 (balanced): `Reference for the IronWord IWordImageObject interface in C#: the document image contract implemented by ImageContent for reading and editing.`

---

## Structured data

**TechArticle abstract**

> Representing an image in a Word document in C# runs through IronWord's IWordImageObject contract. Code that reads or edits a document can treat every picture through this contract, which composes the shared image, document-object, cloning, and serialization abstractions. The concrete implementor is ImageContent, received when enumerating images and constructed to add new ones.

**FAQPage entries**

```json
[
  {
    "question": "Where does IWordImageObject live in the IronWord API?",
    "answer": "IWordImageObject is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IImage, IWordDocumentObject, ICloneable, and the serialization abstractions, and is implemented by the ImageContent class."
  }
]
```
