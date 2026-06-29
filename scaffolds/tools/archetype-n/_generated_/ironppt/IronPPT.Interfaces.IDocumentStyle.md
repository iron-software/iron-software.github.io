<!--
N-Mid / interface (2 members). Frame E lead. Implementor: DocumentStyle (abstract base). IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IDocumentStyle.html
-->

## Injected overview (Markdown)

Identity and state for a reusable style in a presentation live behind `IDocumentStyle`. The contract exposes a `StyleId` string that names the style so it can be referenced and shared, and a `Status` of type `ElementStatus` that tracks the style's state as a document is edited. Coding against the contract lets styling logic look up or tag a style without knowing which concrete style type it is.

The implementor in IronPPT is the abstract `DocumentStyle` base, which the concrete style types in the model derive from to gain a shared identifier and status. A developer typically reads `StyleId` to match a style to an element or sets it when registering a custom style, while `Status` is maintained as the style participates in the document. Because the contract is deliberately small, it focuses on the two facts every style needs: what it is called and where it stands.

```csharp
string id = style.StyleId;
ElementStatus state = style.Status;
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) builds and applies styles, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers formatting that styles drive.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IDocumentStyle - IronPPT C# API`
- v2 (human): `IDocumentStyle: Style Identity in C#`
- v3 (balanced): `IDocumentStyle Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IDocumentStyle is IronPPT's style contract in C#: it exposes a StyleId and an ElementStatus. Implemented by the abstract DocumentStyle base.`
- v2 (human): `Identify and track a presentation style in C# through IronPPT's IDocumentStyle contract: read its StyleId and Status. Implemented by DocumentStyle.`
- v3 (balanced): `Reference for the IronPPT IDocumentStyle interface in C#: the style-identity contract the abstract DocumentStyle base implements.`

---

## Structured data

**TechArticle abstract**

> Identifying and tracking a reusable presentation style in IronPPT is the job of the IDocumentStyle contract in C#. It exposes a StyleId string that names the style and an ElementStatus that tracks its state. The implementor is the abstract DocumentStyle base, which concrete style types derive from to gain a shared identifier and status.

**FAQPage entries**

```json
[
  {
    "question": "Where does IDocumentStyle live in the IronPPT API?",
    "answer": "IDocumentStyle is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and declares a StyleId string and a Status of type ElementStatus."
  },
  {
    "question": "What implements IDocumentStyle in IronPPT?",
    "answer": "The abstract DocumentStyle base in IronPPT.Models.Abstract implements IDocumentStyle, and concrete style types derive from it. Read StyleId to match a style to an element, and Status is maintained as the style participates in the document."
  }
]
```
