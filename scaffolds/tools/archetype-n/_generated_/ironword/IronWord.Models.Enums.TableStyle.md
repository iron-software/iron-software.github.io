<!--
N-Lite/enum. Members verified 2026-06-23: TableNormal, TableGrid, LightShading, LightList, MediumShading1, MediumShading2, MediumList1, MediumList2, DarkShading, DarkList.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.TableStyle.html
-->

## Injected overview (Markdown)

Apply one of Word's built-in table looks by assigning a `TableStyle` value rather than formatting borders and shading by hand. `TableNormal` is the plain, unformatted baseline and `TableGrid` adds simple gridlines, while the shading and list families (`LightShading`, `LightList`, `MediumShading1`, `MediumShading2`, `MediumList1`, `MediumList2`, `DarkShading`, `DarkList`) step up the visual weight. The [add table guide](https://ironsoftware.com/csharp/word/how-to/add-table/) walks through building and styling a table.

```csharp
var look = TableStyle.TableGrid;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableStyle Enum - IronWord C# API Reference`
- v2 (human): `TableStyle: Built-In Word Table Looks in C#`
- v3 (balanced): `TableStyle Enum | IronWord C# Word API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply a built-in table look in C# with the IronWord TableStyle enum: TableNormal, TableGrid, and shading and list families.`
- v2 (human): `Style a Word table in C# with the IronWord TableStyle enum: TableNormal, TableGrid, and light, medium, and dark variants.`
- v3 (balanced): `Reference for the IronWord TableStyle enum in C#: TableNormal, TableGrid, and the light, medium, and dark table families.`

---

## Structured data

**TechArticle abstract**

> Apply one of Word's built-in table looks in IronWord with the TableStyle enum instead of formatting borders and shading by hand. TableNormal is the plain baseline and TableGrid adds simple gridlines, while the shading and list families step up the visual weight.
