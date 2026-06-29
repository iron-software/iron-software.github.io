<!--
N-Mid (2 members + ctor). Frame B. IronWord.Models.Enums. Base Attribute (System.Object -> Attribute).
Members verified 2026-06-23: ctor HexValueAttribute(string hexValue); property HexValue (get-only string).
Target: IronWord.Models.Enums.HexValueAttribute.html
-->

## Injected overview (Markdown)

`HexValueAttribute` is the annotation that pins a hexadecimal string to an enum member, so a named value can also carry its raw hex form. It decorates the members of color and theme enumerations in IronWord, letting a single member stand for both a readable name and the exact hex code Word stores.

You attach it to a field by passing the hex string to its constructor, `HexValueAttribute(string hexValue)`, and you read it back through the get-only `HexValue` property after retrieving the attribute by reflection. Because `HexValue` is read-only, the value is fixed at the point the member is declared and cannot be reassigned at runtime. In day-to-day code you rarely construct this attribute yourself; it is applied to library enum members, and you consume it by inspecting the `HexValue` of the member you selected. The [add styled text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows where colored and themed text is configured, and the [gradient text effect example](https://ironsoftware.com/csharp/word/examples/add-text-effect-gradient-effect/) applies color stops to text.

```csharp
var attribute = new HexValueAttribute("FFFFFF");
string hex = attribute.HexValue;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HexValueAttribute Class - IronWord C# API`
- v2 (human): `HexValueAttribute: Hex Codes on Enums in C#`
- v3 (balanced): `HexValueAttribute Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Pin a hex string to an enum member in C# with the IronWord HexValueAttribute: construct from a hex value and read the HexValue property.`
- v2 (human): `Tag enum members with a hex code in C# using the IronWord HexValueAttribute and read it back through the HexValue property.`
- v3 (balanced): `Reference for the IronWord HexValueAttribute in C#: attach a hex string to an enum member and read it via the HexValue property.`

---

## Structured data

**TechArticle abstract**

> Pin a hexadecimal string to an enum member with IronWord HexValueAttribute in C#. Construct it with a hex value through HexValueAttribute(string hexValue), and read the code back through the get-only HexValue property after retrieving the attribute by reflection.

**FAQPage entries**

```json
[
  {
    "question": "Where does HexValueAttribute live in the IronWord API?",
    "answer": "HexValueAttribute is in the IronWord.Models.Enums namespace, shipped in IronWord.dll. It derives from System.Attribute (System.Object then Attribute) and decorates enum members that carry a hex value."
  },
  {
    "question": "How do you read the hex value from an enum member in C#?",
    "answer": "Retrieve the HexValueAttribute applied to the member by reflection, then read its get-only HexValue property. The constructor HexValueAttribute(string hexValue) sets that value when the member is declared."
  }
]
```
