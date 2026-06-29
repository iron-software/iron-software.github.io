<!--
N-Full (class, 21 members). Frame B (identity-by-role). IronDrawing.
Font constructors, Style/Bold/Italic/Underline/Strikeout/Size/FamilyName verified; implicit operators to SKFont/FontTypes verified 2026-06-22.
Target: https://ironsoftware.com/open-source/csharp/drawing/object-reference/api/IronSoftware.Drawing.Font.html
-->

## Injected overview (Markdown)

Text rendering across IronSoftware libraries flows through `Font`, the central record that bundles a typeface name, a point size, and a combination of style flags into a single, reusable object. Any IronSoftware component that draws or measures text accepts a `Font`, and the class's implicit conversion operators mean it travels freely between the IronDrawing type system, SkiaSharp's `SKFont`, and the `FontTypes` enumeration without explicit casting.

Four constructors cover the common setup patterns. The minimal form `new Font(string familyName)` picks up system defaults for size and style. Adding a `float size` argument sets the point size explicitly, while the `FontStyle` overload selects bold, italic, or combined styles. The full four-parameter constructor `new Font(string familyName, FontStyle style, float size)` fixes every attribute in one call. After construction, `FamilyName`, `Size`, and `Style` expose those choices as read-only properties. The convenience booleans `Bold`, `Italic`, `Underline`, and `Strikeout` let calling code branch on individual style flags without decomposing the `FontStyle` value manually.

The implicit operators are a practical time-saver. Assigning a `Font` to a variable typed as `SKFont` converts it automatically, so Skia-based rendering pipelines accept IronDrawing fonts without adapter code. The reverse direction works too: an `SKFont` assigned to a `Font` variable converts back. The same bidirectional pattern applies to `FontTypes`, making it straightforward to move between the enumeration-based API and the richer `Font` object.

```csharp
using IronSoftware.Drawing;

// Construct with family, style, and size
Font heading = new Font("Arial", FontStyle.Bold, 18f);
Font caption = new Font("Georgia", FontStyle.Italic | FontStyle.Underline, 10f);

Console.WriteLine(heading.FamilyName); // Arial
Console.WriteLine(heading.Bold);       // True
Console.WriteLine(caption.Underline);  // True

// Implicit conversion to SKFont for Skia rendering pipelines
SkiaSharp.SKFont skFont = heading;
```

Explore the [IronDrawing get-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for environment setup, the [font usage how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/fonts/) for practical text-rendering patterns, the [FontStyle examples](https://ironsoftware.com/open-source/csharp/drawing/examples/font-style/) for combining style flags, and the [IronDrawing docs hub](https://ironsoftware.com/open-source/csharp/drawing/docs/) for the full API surface.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Font Class - IronDrawing C# API Reference`
- v2 (human): `Font: Set Typeface and Style in C#`
- v3 (balanced): `Font Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define text format in C# with the IronDrawing Font class. Set family name, point size, and FontStyle, then use implicit operators for SKFont and FontTypes.`
- v2 (human): `Configure typeface, size, and style for text rendering in C# with IronDrawing's Font class, including bold, italic, underline, and strikeout support.`
- v3 (balanced): `Reference for IronSoftware.Drawing.Font in C#: construct a font with family, size, and FontStyle, and convert implicitly to SKFont or FontTypes.`

---

## Structured data

**TechArticle abstract**

> Text rendering across IronSoftware libraries flows through the IronDrawing Font class, which bundles a typeface name, a point size, and style flags into one reusable object. Construct it with a family name, an optional FontStyle, and an optional float size. Read-only properties FamilyName, Size, Style, Bold, Italic, Underline, and Strikeout expose every attribute after construction. Implicit operators convert Font to and from SKFont and FontTypes without explicit casting, keeping Skia-based and enumeration-based pipelines compatible.

**FAQPage entries**

```json
[
  {
    "question": "Where does Font live in the IronDrawing API?",
    "answer": "Font is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from Object and is the central type for describing text format across IronSoftware libraries."
  },
  {
    "question": "How do you create a bold italic font at a specific size in C#?",
    "answer": "Use the three-parameter constructor: new Font(\"Arial\", FontStyle.Bold | FontStyle.Italic, 14f). The Bold and Italic properties will both return true, and Size will return 14."
  },
  {
    "question": "How do you convert an IronDrawing Font to an SKFont for Skia rendering?",
    "answer": "Font declares an implicit operator to SKFont, so assigning a Font value to an SKFont variable performs the conversion automatically. The reverse implicit operator converts an SKFont back to Font."
  },
  {
    "question": "What is the difference between the Style property and the Bold or Italic properties on Font?",
    "answer": "Style returns the combined FontStyle enumeration value, which may represent multiple flags at once. Bold, Italic, Underline, and Strikeout are convenience booleans that each reflect a single flag from that combined value, useful for conditional logic without manual bitwise checks."
  }
]
```