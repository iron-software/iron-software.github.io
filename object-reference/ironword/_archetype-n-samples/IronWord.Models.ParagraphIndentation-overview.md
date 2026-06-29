<!--
N-Full. Frame D (task-gerund). IronWord. >10 methods -> functional buckets (left/right edges / first-line & hanging / character-unit / measured reads).
Members verified 2026-06-23: props Start, StartCharacters, End, EndCharacters, Left, LeftChars, Right, RightChars, FirstLine, FirstLineChars, Hanging, HangingChars;
methods Clone, Set{First}/Get... each taking MeasurementUnit (and Set* taking Nullable<double>).
Base Object; implements ICloneable. Cross-ref verified: ParagraphStyle.Indentation returns ParagraphIndentation.
Target: IronWord.Models.ParagraphIndentation.html
-->

## Injected overview (Markdown)

Indenting a paragraph in a Word document, whether a left margin, a first-line indent, or a hanging indent for a list, is configured through `ParagraphIndentation`. It collects every indentation measurement that applies to a paragraph so a style can set how far the text sits from the edges and how the first line behaves relative to the rest.

A developer reaches it through a paragraph's style: `ParagraphStyle` exposes an `Indentation` property of this type, so indentation lives with the rest of the style and applies to every paragraph carrying it. Set the values you need on this object, leaving the others unset, then apply the owning style.

The members group by what they indent. Edges: `Left` and `Right` (with their logical counterparts `Start` and `End`, which respect text direction) push the whole paragraph in from the sides. Line shape: `FirstLine` indents only the opening line, and `Hanging` indents every line except the first, the pattern behind bulleted and numbered text. Character units: each measurement has a `*Chars` companion (`LeftChars`, `FirstLineChars`, `HangingChars`, and so on) for indentation expressed in character widths instead of physical units. Setting and reading: the `Set` methods take a nullable value and a `MeasurementUnit`, and the matching `Get` methods read a value back in the unit you request; `Clone` copies the whole set when you want to reuse one paragraph's indentation on another.

```csharp
var indentation = new ParagraphIndentation();
indentation.SetFirstLine(1.0, MeasurementUnit.Centimeter);
paragraphStyle.Indentation = indentation;
```

The [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers paragraph styling, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains how paragraphs and styles fit together.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParagraphIndentation - IronWord C# API`
- v2 (human): `ParagraphIndentation: Word Indents in C#`
- v3 (balanced): `ParagraphIndentation Class | IronWord .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Word paragraph indentation in C# with the IronWord ParagraphIndentation class: Left, Right, FirstLine, Hanging, and character-unit variants.`
- v2 (human): `Control left, right, first-line, and hanging indents on a Word paragraph in C# with the IronWord ParagraphIndentation class, set through a style.`
- v3 (balanced): `Reference for the IronWord ParagraphIndentation class in C#: Set and Get indents with a MeasurementUnit, including first-line and hanging indents.`

---

## Structured data

**TechArticle abstract**

> Setting the left, right, first-line, or hanging indents on a Word paragraph in C# runs through the IronWord ParagraphIndentation class, reached through ParagraphStyle.Indentation. Left and Right move the edges, FirstLine and Hanging shape the opening line, and Chars variants use character widths. The Set methods take a value and a MeasurementUnit; the Get methods read it back in any unit.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParagraphIndentation live in the IronWord API?",
    "answer": "ParagraphIndentation is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements ICloneable, and a ParagraphStyle exposes an instance through its Indentation property."
  },
  {
    "question": "How do you set a first-line or hanging indent in IronWord?",
    "answer": "Call SetFirstLine for the opening line or SetHanging for every line except the first, passing a value and a MeasurementUnit. Assign the ParagraphIndentation to a ParagraphStyle's Indentation property and apply that style to the paragraph."
  },
  {
    "question": "What are the Chars properties on ParagraphIndentation for?",
    "answer": "Properties such as LeftChars, FirstLineChars, and HangingChars express indentation in character widths rather than a physical MeasurementUnit. Use them when you want indents that scale with the font's character size instead of a fixed distance."
  }
]
```
