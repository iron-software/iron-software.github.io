<!--
N-Lite/enum. Members verified 2026-06-22: LowerLeft, LowerRight, UpperLeft, UpperRight (summary lists lower/right, upper/right, lower/left, upper/left; led with LowerRight as the typical active pane below a freeze, then reading-order companions).
Base Enum, namespace IronXL.Options.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Options.PanePosition.html
-->

## Injected overview (Markdown)

`PanePosition` names which pane is active after a worksheet is split into frozen and scrolling regions. `LowerRight` is the scrolling data pane below and right of a freeze, the usual active region. `LowerLeft` and `UpperRight` are the partially frozen panes, and `UpperLeft` is the fully frozen corner. Choosing one sets where the cursor lands when the split view opens. The [freeze panes how-to](https://ironsoftware.com/csharp/excel/how-to/add-freeze-panes/) splits a sheet, and the [freeze panes example](https://ironsoftware.com/csharp/excel/examples/freeze-panes-in-excel/) shows it in code.

```csharp
var active = PanePosition.LowerRight;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PanePosition Enum - IronXL C# API`
- v2 (human): `PanePosition: Active Split Pane in C#`
- v3 (balanced): `PanePosition Enum | IronXL C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the active pane in C# with the IronXL PanePosition enum: LowerRight, LowerLeft, UpperRight, or UpperLeft of a split worksheet.`
- v2 (human): `Pick which split pane is active in C# with the IronXL PanePosition enum: LowerRight is the usual scrolling pane below a frozen region.`
- v3 (balanced): `Reference for the IronXL PanePosition enum in .NET: LowerRight, LowerLeft, UpperRight, and UpperLeft name the active pane of a split.`

---

## Structured data

**TechArticle abstract**

> Use PanePosition in IronXL to name which pane is active after a worksheet split. LowerRight is the usual scrolling data pane, LowerLeft and UpperRight are the partially frozen panes, and UpperLeft is the fully frozen corner.
