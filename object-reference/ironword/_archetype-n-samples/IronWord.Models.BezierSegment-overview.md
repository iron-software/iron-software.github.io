<!--
N-Mid (3 members). Frame B (identity-by-role). IronWord.Models.
Members verified 2026-06-23: ctor(PointF coordinate, bool isClose=false, bool separateFromPrevious=true),
Coordinate (PointF), IsClose (bool), SeparateFromPrevious (bool). Implements IBezierSegment, IPathSegment.
Sibling: LineSegment (the straight-segment counterpart). Base Object.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.BezierSegment.html
-->

## Injected overview (Markdown)

`BezierSegment` is one curved piece of a custom shape's outline in a Word document. It records a single Bezier curve in a path, so a developer drawing a freeform shape builds its border from a sequence of these segments. It is the curved counterpart to `LineSegment`, the straight-edge segment; choose this one wherever the outline bends rather than runs straight.

Construct it with a control point and two flags: `new BezierSegment(PointF coordinate, bool isClose = false, bool separateFromPrevious = true)`. The `Coordinate` property holds the `PointF` that shapes the curve. `IsClose` marks whether the segment closes the path back to the start, and `SeparateFromPrevious` controls whether the segment begins a new sub-path rather than continuing from the previous point. Segments are added in order to the shape's path collection, so the sequence is what defines the final outline; set `IsClose` on the last segment when the shape should be a closed loop.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) walks the object model these shape paths belong to, and the [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) covers placing visual content in a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BezierSegment Class - IronWord C# API`
- v2 (human): `BezierSegment: Curved Shape Paths in C#`
- v3 (balanced): `BezierSegment Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Build a curved shape path in a Word document in C# with the IronWord BezierSegment class: set Coordinate, IsClose, and SeparateFromPrevious.`
- v2 (human): `Draw a curved outline for a custom Word shape in C# with the IronWord BezierSegment class, the Bezier counterpart to the straight LineSegment.`
- v3 (balanced): `Reference for the IronWord BezierSegment class in C#: one Bezier curve in a shape path, with a Coordinate point, IsClose, and SeparateFromPrevious.`

---

## Structured data

**TechArticle abstract**

> Drawing a curved piece of a custom shape outline in a Word document in C# runs through the IronWord BezierSegment class. Construct it with a PointF coordinate plus the isClose and separateFromPrevious flags, then add it in order to the shape's path. Coordinate shapes the curve, IsClose closes the path, and SeparateFromPrevious starts a new sub-path. It is the curved counterpart to LineSegment.

**FAQPage entries**

```json
[
  {
    "question": "Where does BezierSegment live in the IronWord API?",
    "answer": "BezierSegment is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements IBezierSegment and IPathSegment, representing one Bezier curve in a custom shape's path."
  },
  {
    "question": "What is the difference between BezierSegment and LineSegment in IronWord?",
    "answer": "BezierSegment describes a curved piece of a shape outline, while LineSegment describes a straight one. Both implement IPathSegment and are added in order to a shape's path, so a single outline can mix curved and straight segments."
  }
]
```
