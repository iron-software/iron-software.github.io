<!--
N-Lite/enum. Members verified 2026-06-22: Visible, Hidden, VeryHidden (Visible is the canonical/normal state, led first).
Base Enum, namespace IronXL.Options.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Options.HiddenState.html
-->

## Injected overview (Markdown)

`HiddenState` selects how visible a worksheet is within a workbook, set on a worksheet's visibility. `Visible` is the normal state, where the tab shows and a user can switch to it. `Hidden` removes the tab from view but lets a user unhide it through Excel, while `VeryHidden` conceals the sheet so it cannot be unhidden through the interface and only code can restore it, which suits sheets holding lookup data a user should not see. The [manage worksheets how-to](https://ironsoftware.com/csharp/excel/how-to/manage-worksheet/) covers showing and hiding sheets.

```csharp
worksheet.State = HiddenState.VeryHidden;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HiddenState Enum - IronXL C# API Reference`
- v2 (human): `HiddenState: Hide a Worksheet in C#`
- v3 (balanced): `HiddenState Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set worksheet visibility in C# with the IronXL HiddenState enum: Visible, Hidden, or VeryHidden, which only code can restore.`
- v2 (human): `Show or hide a sheet in C# with the IronXL HiddenState enum: Visible is normal, Hidden can be unhidden, and VeryHidden needs code.`
- v3 (balanced): `Reference for the IronXL HiddenState enum in .NET: Visible, Hidden, and VeryHidden control whether a worksheet shows in a workbook.`

---

## Structured data

**TechArticle abstract**

> Use HiddenState in IronXL to set how visible a worksheet is. Visible is the normal state, Hidden removes the tab but lets a user unhide it, and VeryHidden conceals the sheet so only code can restore it.
