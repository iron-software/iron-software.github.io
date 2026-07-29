<!--
N-Lite/enum. Members verified from PAGE FACTS (partial list of 176): Black, White implied canonical, plus web colors AliceBlue, Blue, Red, Green, Cyan, Fuchsia, and system colors Control, Desktop, ActiveBorder.
Target: IronSoftware.Drawing.KnownColor
-->

## Injected overview (Markdown)

`KnownColor` identifies a named color by label for use with `IronSoftware.Drawing.Color`, covering 176 values split across two groups: standard web colors such as `Black`, `White`, `Red`, `Blue`, `Green`, `Cyan`, `Fuchsia`, and `AliceBlue`, and system UI colors such as `Control`, `Desktop`, and `ActiveBorder` that reflect the host environment's theme. Pass a member to `Color.FromKnownColor` to obtain the corresponding `Color` value. See the [IronDrawing getting-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for setup details.

```csharp
Color highlight = Color.FromKnownColor(KnownColor.CornflowerBlue);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `KnownColor Enum - IronDrawing C# API Reference`
- v2 (human): `KnownColor: Named Colors for C# with IronDrawing`
- v3 (balanced): `KnownColor Enum | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Reference for the IronSoftware.Drawing.KnownColor enum in C#: 176 named web and system colors used with Color.FromKnownColor in IronDrawing.`
- v2 (human): `Use KnownColor in IronDrawing to reference 176 named colors, from Black and AliceBlue to system colors like Control and Desktop, in C#.`
- v3 (balanced): `IronDrawing KnownColor enum in C#: 176 web and system color names, including Blue, Fuchsia, and Control, for use with Color.FromKnownColor.`

---

## Structured data

**TechArticle abstract**

> KnownColor in IronSoftware.Drawing identifies any of 176 named colors by label, spanning standard web colors such as Black, Red, Blue, Cyan, Fuchsia, and AliceBlue, as well as system UI colors such as Control, Desktop, and ActiveBorder. Pass a member to Color.FromKnownColor to resolve the corresponding Color value. The enum is defined in the IronSoftware.Drawing namespace and ships in IronSoftware.Drawing.dll.