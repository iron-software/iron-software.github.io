<!--
N-Full (6 members: FirstDefault, SecondDefault static; Color, StopPoint; GetStopPoint, SetStopPoint). Frame B. IronWord.
Members verified 2026-06-23. Gradient.StopPoints -> List<GradientStop> verified on Gradient page.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.GradientStop.html
-->

## Injected overview (Markdown)

`GradientStop` is the single color-and-position record that a `Gradient` blends between. Each stop pairs one color with a point along the gradient line, and a `Gradient` holds an ordered `List<GradientStop>` in its `StopPoints` property. Where the surrounding `Gradient` describes the whole blend, a `GradientStop` describes one anchor of it.

A stop sits inside the gradient workflow rather than standing alone: you create the stops, add them to a `Gradient.StopPoints` list, then attach that gradient to a `TextEffect` so the run renders with the blend. The position of each stop, together with the order of the list, determines how the colors transition across the text. A simple two-color blend needs only two stops, one at each end, while a richer transition adds intermediate stops at the positions where you want the color to shift.

Two properties carry the data. `Color` holds the color at this anchor, and `StopPoint` holds its position as a `double`. Because the position is unit-sensitive, read and write it through `GetStopPoint` and `SetStopPoint`, which both take a `MeasurementUnit` so the value is interpreted in points, centimeters, or inches rather than a bare number. For a quick start, the static `FirstDefault` and `SecondDefault` return two ready-made stops that form a usable two-color blend, which you can apply as-is or adjust before adding more. Keep the list ordered by `StopPoint` so colors blend in the intended sequence.

```csharp
GradientStop stop = new GradientStop();
stop.Color = Color.Red;
stop.SetStopPoint(0, MeasurementUnit.Point);
```

The [gradient text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-gradient-effect/) builds a blend from stops, the [gradient effect example](https://ironsoftware.com/csharp/word/examples/add-text-effect-gradient-effect/) shows a working run, and the [styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) sets surrounding run formatting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `GradientStop Class - IronWord C# API`
- v2 (human): `GradientStop: Color Stops for Gradients in C#`
- v3 (balanced): `GradientStop Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define a gradient color stop in C# with the IronWord GradientStop class: set Color and a unit-aware StopPoint, then add it to Gradient.StopPoints.`
- v2 (human): `Anchor a Word text gradient in C# with the IronWord GradientStop class: pair a color with a position and add the stop to a Gradient's StopPoints.`
- v3 (balanced): `Reference for the IronWord GradientStop class in C#: a color-and-position record, with Color, StopPoint, and the static FirstDefault and SecondDefault.`

---

## Structured data

**TechArticle abstract**

> A GradientStop is the color-and-position record an IronWord Gradient blends between in C#. Color sets the color at the anchor and StopPoint its position, read and written through GetStopPoint and SetStopPoint with a MeasurementUnit. Add stops to a Gradient's StopPoints list, in order, to define the blend; the static FirstDefault and SecondDefault provide a ready two-color pair.

**FAQPage entries**

```json
[
  {
    "question": "Where does GradientStop live in the IronWord API?",
    "answer": "GradientStop is a class in the IronWord.Models namespace, shipped in IronWord.dll, with base type Object. A Gradient holds an ordered List of GradientStop in its StopPoints property."
  },
  {
    "question": "How do you set the position of a gradient stop in C#?",
    "answer": "Call SetStopPoint with a double and a MeasurementUnit so the value is read in points, centimeters, or inches. Use GetStopPoint with the same unit to read it back, rather than reading the raw StopPoint number."
  },
  {
    "question": "What is the difference between GradientStop and Gradient?",
    "answer": "A Gradient describes the whole blend and holds the StopPoints list, the angle, and the scaling. A GradientStop is one anchor in that list, pairing a single Color with one StopPoint position. Order the stops by position so the colors transition correctly."
  }
]
```
