<!--
N-Mid / interface (2 members: Borders, InheritedStyle). Frame B. Implementor: TableStyle. IronWord. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ITableStyle.html
-->

## Injected overview (Markdown)

`ITableStyle` is the styling contract a table reads its appearance from when a document is built or edited in C#. It standardizes how borders and inherited styling are exposed, so code that formats a table can work against the contract rather than a single concrete style class. The contract surfaces `Borders`, the `TableBorders` drawn around and inside the table, and `InheritedStyle`, the `ITableStyle` a table falls back to when it does not override a value itself.

The concrete implementor in IronWord is `TableStyle`, which most code instantiates and assigns directly; the interface matters when a routine accepts a style by contract or inspects the inherited chain. `ITableStyle` extends `IDerivedStyle`, which contributes the shared `BaseStyle` member, so a table style participates in the same derived-style model as the other style contracts. Set `Borders` to control the lines a reader sees, and read `InheritedStyle` to discover the defaults a table picks up before any explicit overrides.

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) walks through building a table, and the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) has a worked listing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITableStyle Interface - IronWord C# API`
- v2 (human): `ITableStyle: The C# Table Styling Contract`
- v3 (balanced): `ITableStyle Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITableStyle is IronWord's C# table styling contract: it exposes Borders and InheritedStyle and is implemented by the TableStyle class.`
- v2 (human): `Style a table in C# through the IronWord ITableStyle contract: set its Borders and read InheritedStyle, implemented by the TableStyle class.`
- v3 (balanced): `Reference for the IronWord ITableStyle interface in C#: the table styling contract exposing Borders and InheritedStyle, implemented by TableStyle.`

---

## Structured data

**TechArticle abstract**

> Styling a table in C# runs through the IronWord ITableStyle contract. It exposes Borders, the TableBorders drawn around and inside the table, and InheritedStyle, the fallback style a table uses before overrides. The concrete implementor is TableStyle. ITableStyle extends IDerivedStyle, which contributes the shared BaseStyle member.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITableStyle live in the IronWord API?",
    "answer": "ITableStyle is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IDerivedStyle and is implemented by the TableStyle class, which supplies Borders and InheritedStyle."
  }
]
```
