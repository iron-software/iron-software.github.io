<!--
N-Mid / static class. Frame E lead, Frame B abstract. IronWord. Verified 2026-06-23.
Member: DefaultTextColor (public const string = "0015ef"). Base Object. Namespace IronWord.Models.Common.
Cross-ref: TextStyle / Color carry text color (used to explain where the default applies). WARN acceptable for cross-class.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Common.Constants.html
-->

## Injected overview (Markdown)

The fallback values IronWord applies when you do not set one yourself live on `Constants`, a static class of global defaults for the library. Reading from it tells you what the engine will use before any explicit styling is applied, which is useful when you want your code to match or deliberately override a built-in value.

You never construct this type; you read its fields directly through the class name. It sits at the configuration edge of the workflow rather than inside the build-and-save sequence, supplying reference values that styling and content code can compare against.

The field exposed today is `DefaultTextColor`, a `const string` set to the hex value `0015ef`, the color text takes when no other color is assigned. Because it is a compile-time constant you can use it anywhere a hex color string is expected, for example to detect text still using the default or to reset a run to it. Read it as `Constants.DefaultTextColor` and pass it where IronWord accepts a color string.

```csharp
string fallbackColor = Constants.DefaultTextColor;
```

The [add styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers applying color and other formatting, and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers writing content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Constants Class - IronWord C# API Reference`
- v2 (human): `Constants: IronWord Default Values in C#`
- v3 (balanced): `Constants Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Constants is the IronWord C# static class of global defaults, exposing DefaultTextColor, the const hex string applied to text when no color is set.`
- v2 (human): `Read IronWord's built-in default values in C# from the Constants static class, including DefaultTextColor, the fallback hex color for text.`
- v3 (balanced): `Reference for the IronWord Constants static class in C#: global default values such as DefaultTextColor, the fallback text color.`

---

## Structured data

**TechArticle abstract**

> Constants is the IronWord static class that holds global default values in C#. DefaultTextColor is a const string set to the hex value 0015ef, the color text uses when none is assigned. Read it through the class name, for example Constants.DefaultTextColor, to match or override the built-in default.

**FAQPage entries**

```json
[
  {
    "question": "Where does Constants live in the IronWord API?",
    "answer": "Constants is a static class in the IronWord.Models.Common namespace, shipped in IronWord.dll, deriving from System.Object. It exposes the DefaultTextColor const field and is read through the class name rather than instantiated."
  }
]
```
