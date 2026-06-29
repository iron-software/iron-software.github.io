<!--
N-Mid (3 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronPdf.CssToken class reference page.
-->

## Injected overview (Markdown)

Parsing and inspecting CSS at a granular level becomes straightforward when each piece of a stylesheet is represented as a `CssToken`, a record pairing a classification with its raw text. Each token carries a `Type` property of kind `CssTokenType` that identifies the role the token plays (selector, property name, value, delimiter, and so on) alongside a `Value` string that holds the exact text extracted from the source. Together these two properties let downstream code branch on token kind and act on the literal content without re-parsing the stylesheet.

Construct a token directly with `CssToken(CssTokenType type, string value)` when building a token stream by hand, for example when writing a CSS pre-processor or injecting synthetic rules before IronPDF renders a document. Both `Type` and `Value` expose public setters, so a token can be mutated in place as a pipeline transforms it, rather than requiring a new allocation for every edit.

`CssToken` sits at the low level of IronPDF's CSS handling. Higher-level rendering options such as custom stylesheets and media-type overrides are configured through the main rendering API, but `CssToken` gives precise access to the token stream for tooling that needs to inspect or rewrite CSS before it reaches the renderer.

```csharp
using IronPdf;

var token = new CssToken(CssTokenType.Value, "14px");
if (token.Type == CssTokenType.Value)
    token.Value = "16px"; // scale up base font size before rendering
```

See the [IronPDF documentation hub](https://ironpdf.com/docs/) for an overview of the rendering pipeline, and the [custom CSS how-to](https://ironpdf.com/how-to/custom-css/) for practical examples of injecting styles into a PDF render job.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CssToken Class - IronPDF C# API Reference`
- v2 (human): `CssToken: Inspect CSS Tokens in C# with IronPDF`
- v3 (balanced): `CssToken Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Reference for the IronPDF CssToken class in C#: construct a CSS token with CssTokenType and Value, then inspect or mutate it in a stylesheet pipeline.`
- v2 (human): `Use IronPDF's CssToken class in C# to pair a CssTokenType classification with raw text, enabling precise inspection and rewriting of CSS token streams.`
- v3 (balanced): `IronPDF CssToken class in C#: create, inspect, and mutate CSS tokens by Type and Value before they reach the PDF rendering pipeline.`

---

## Structured data

**TechArticle abstract**

> Precise inspection and rewriting of CSS token streams in C# is handled through the IronPDF CssToken class. Constructed with a CssTokenType and a string Value, each token exposes both properties with public getters and setters, allowing in-place mutation as a pipeline transforms stylesheet content before PDF rendering.

**FAQPage entries**

```json
[
  {
    "question": "Where does CssToken live in the IronPDF API?",
    "answer": "CssToken is a class in the IronPdf namespace, shipped in IronPdf.dll. It derives from Object and holds two properties: Type (a CssTokenType) and Value (a string)."
  },
  {
    "question": "How do you create and modify a CssToken in C#?",
    "answer": "Call the constructor CssToken(CssTokenType type, string value) to create a token. Both the Type and Value properties have public setters, so you can update either field in place as your CSS processing pipeline runs."
  }
]
```