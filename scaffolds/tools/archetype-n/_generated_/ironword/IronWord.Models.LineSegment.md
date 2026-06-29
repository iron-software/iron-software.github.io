<!--
N-Mid (3 props + ctor). Frame D. IronWord. Members verified 2026-06-23: Coordinate, IsClose, SeparateFromPrevious; ctor(PointF, bool, bool).
Implements ILineSegment, IPathSegment. Sibling BezierSegment (also IPathSegment). Consumed via PathSegmentCollection (IReadOnlyList<IPathSegment>).
Target: IronWord.Models.LineSegment.html
-->

## Injected overview (Markdown)

Drawing a straight edge of a custom shape outline in C# is described by a `LineSegment`. It records one linear leg of a path, the point it travels to and how it connects to the rest of the outline, so a sequence of segments traces the full geometry of a shape.

A segment is created with a constructor that takes the target `PointF`, a flag for whether the segment closes the path, and a flag for whether it stands apart from the previous segment. `Coordinate` holds the point the line runs to, `IsClose` reports whether this segment connects back to the path start, and `SeparateFromPrevious` controls whether it joins the prior segment. Because `LineSegment` implements `IPathSegment`, it sits in a `PathSegmentCollection` alongside its curved counterpart, `BezierSegment`, and a renderer reads the collection in order to build the outline. Reach for `LineSegment` for the straight portions and `BezierSegment` where a curve is needed.

```csharp
var segment = new LineSegment(new PointF(120f, 0f), false, false);
```

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) covers how shapes and their parts fit into a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LineSegment Class - IronWord C# API`
- v2 (human): `LineSegment: Straight Path Edges in C#`
- v3 (balanced): `LineSegment Class | IronWord .NET API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define a straight edge of a shape path in C# with the IronWord LineSegment class: a Coordinate, IsClose, and SeparateFromPrevious in a path collection.`
- v2 (human): `Trace the straight legs of a custom shape outline in C# with the IronWord LineSegment class, sitting alongside BezierSegment in a path.`
- v3 (balanced): `Reference for the IronWord LineSegment class in C#: a linear IPathSegment with a target Coordinate, IsClose, and SeparateFromPrevious flags.`

---

## Structured data

**TechArticle abstract**

> Describing a straight leg of a shape outline in C# runs through the IronWord LineSegment class. Its constructor takes a target PointF and flags for IsClose and SeparateFromPrevious; Coordinate holds the point the line runs to. As an IPathSegment it sits in a PathSegmentCollection alongside BezierSegment, and a renderer reads the ordered segments to build the path.

**FAQPage entries**

```json
[
  {
    "question": "Where does LineSegment live in the IronWord API?",
    "answer": "LineSegment is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements ILineSegment and IPathSegment, so it can be placed in a PathSegmentCollection."
  },
  {
    "question": "What is the difference between LineSegment and BezierSegment in IronWord?",
    "answer": "Both implement IPathSegment and live in the same path. LineSegment draws a straight edge to its Coordinate, while BezierSegment draws a curve. A PathSegmentCollection mixes them in order to trace a complete shape outline."
  }
]
```
