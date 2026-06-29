<!--
N-Full (class : Object; static OuterShadow1; 9 props + 4 Get/Set methods). Frame E (lead), Frame B (abstract). IronPPT.
Verified 2026-06-23: static OuterShadow1; Alignment (RectangleAlignmentValues), BlurRadius, DirectionAngle, DistanceFromText (double), HorizontalScalingFactor (int), HorizontalSkewAngle (double), SchemeColor (Color), VerticalScalingFactor (double), VerticalSkewAngle (double); GetBlurRadius/GetDistanceFromText(Units), SetBlurRadius/SetDistanceFromText(double, Units).
Target: IronPPT.Models.Shadow.html
-->

## Injected overview (Markdown)

Drop-shadow styling on text and shapes is captured by `Shadow`. It describes how a shadow is offset, blurred, scaled, and skewed behind an element, so a developer can lift a heading or shape off the slide with a soft cast shadow instead of leaving it flat.

A `Shadow` is attached to the element being styled, and the quickest start is the `static Shadow OuterShadow1` preset, a ready-made outer shadow that needs no manual tuning. From there the properties fall into clear groups. Offset and blur control the cast: `BlurRadius` softens the edge, `DistanceFromText` sets how far the shadow sits from the element, and `DirectionAngle` aims it. Transform controls reshape the cast: `HorizontalScalingFactor` and `VerticalScalingFactor` stretch it, `HorizontalSkewAngle` and `VerticalSkewAngle` lean it, and `Alignment` (a `RectangleAlignmentValues`) anchors it. Color is set through `SchemeColor`.

Because shadow distances are measured quantities, `BlurRadius` and `DistanceFromText` have unit-aware accessors: call `GetBlurRadius` and `GetDistanceFromText` with a `Units` value to read in a chosen unit, and `SetBlurRadius` and `SetDistanceFromText` to write a value in that unit. Reading and writing through these accessors keeps a layout consistent whether the rest of the deck is measured in points, inches, or centimeters, and avoids hard-coding a single unit into the shadow. The `SchemeColor` property ties the shadow's color to the presentation, so a shadow can pick up a theme color rather than a fixed value. Reach for `OuterShadow1` for a sensible default and override individual properties only when the design calls for it.

```csharp
var shadow = Shadow.OuterShadow1;
shadow.SetBlurRadius(4, Units.Point);
shadow.DirectionAngle = 45;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) creates and styles a shape, the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places text that a shadow can lift, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles the surrounding content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Shadow Class - IronPPT C# API Reference`
- v2 (human): `Shadow: Drop Shadows for Slides in C#`
- v3 (balanced): `Shadow Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add drop shadows in C# with the IronPPT Shadow class: set BlurRadius, DistanceFromText, and DirectionAngle, or start from the OuterShadow1 preset.`
- v2 (human): `Lift text and shapes off a slide in C# with the IronPPT Shadow class: blur, offset, scale, and skew a cast shadow, or use OuterShadow1.`
- v3 (balanced): `Reference for the IronPPT Shadow class in C#: drop-shadow styling with BlurRadius, DistanceFromText, scaling, skew, and the OuterShadow1 preset.`

---

## Structured data

**TechArticle abstract**

> Shadow is the object that styles a drop shadow on IronPPT text and shapes in C#. BlurRadius, DistanceFromText, and DirectionAngle control the cast; scaling and skew properties reshape it; Alignment anchors it; SchemeColor sets its color. Unit-aware accessors read and write blur and distance, and OuterShadow1 is a ready preset.

**FAQPage entries**

```json
[
  {
    "question": "Where does Shadow live in the IronPPT API?",
    "answer": "Shadow is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and is attached to text and shapes to style a drop shadow."
  },
  {
    "question": "How do you set a shadow's blur in a specific unit in C#?",
    "answer": "Call SetBlurRadius with a value and a Units member, and read it back with GetBlurRadius and the same Units value. DistanceFromText has the matching GetDistanceFromText and SetDistanceFromText accessors."
  },
  {
    "question": "Is there a quick way to apply a default shadow?",
    "answer": "Use the static OuterShadow1 preset, a ready-made outer shadow that needs no manual tuning. Override individual properties such as DirectionAngle or BlurRadius only when the design needs a different cast."
  }
]
```
