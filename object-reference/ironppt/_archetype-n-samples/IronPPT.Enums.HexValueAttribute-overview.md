<!--
N-Mid (class : Attribute; 1 declared member). Frame B (identity-by-role). IronPPT.
Members verified 2026-06-23: ctor HexValueAttribute(string hexValue); property HexValue (get-only string).
Target: IronPPT.Enums.HexValueAttribute.html
-->

## Injected overview (Markdown)

`HexValueAttribute` is the decoration that ties an enum member to a hex string, so a named value such as a color or pattern constant carries the literal hex it stands for. It pairs a readable identifier in code with the underlying hex token a presentation file expects, keeping the mapping next to the value rather than in a separate lookup.

You apply it to an enum member at declaration, passing the hex string to its constructor. At runtime, code that needs the literal reads the value back through reflection on the member. The attribute holds a single read-only property, `HexValue`, which returns the string supplied to the constructor; there is no setter, so the value is fixed once the member is declared.

Because `HexValueAttribute` is a metadata annotation, you do not construct it directly in normal application flow. The framework reads it when it resolves a member to its hex token, so the everyday job is choosing the right hex string when an enum member is defined, often a six-digit color hex consumed when building a [Color](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Color.html). The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows applying styling that resolves to such values on a slide.

```csharp
var attr = new HexValueAttribute("FF0000");
string hex = attr.HexValue;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HexValueAttribute Class - IronPPT C# Reference`
- v2 (human): `HexValueAttribute: Tag Enum Values in C#`
- v3 (balanced): `HexValueAttribute | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Tie an enum member to a hex string in C# with the IronPPT HexValueAttribute: a constructor takes the hex value, read back via the HexValue property.`
- v2 (human): `Map a named enum value to its hex token in C# with IronPPT's HexValueAttribute: pass the hex to the constructor and read it from HexValue.`
- v3 (balanced): `Reference for the IronPPT HexValueAttribute class in C#: decorate an enum member with a hex string and read it through HexValue.`

---

## Structured data

**TechArticle abstract**

> Tie an enum member to a hex string in IronPPT with HexValueAttribute. Applied to a member at declaration, it takes a hex string in its constructor and exposes it through the read-only HexValue property, keeping a readable identifier next to the literal hex token a presentation file expects.

**FAQPage entries**

```json
[
  {
    "question": "Where does HexValueAttribute live in the IronPPT API?",
    "answer": "HexValueAttribute is in the IronPPT.Enums namespace, shipped in IronPPT.dll, and derives from System.Attribute. It decorates enum members and exposes the supplied hex string through its HexValue property."
  },
  {
    "question": "How do you read the hex value from a HexValueAttribute in C#?",
    "answer": "Read the get-only HexValue property, which returns the string passed to the constructor. In normal flow you reach it through reflection on the decorated enum member rather than constructing the attribute yourself."
  }
]
```
