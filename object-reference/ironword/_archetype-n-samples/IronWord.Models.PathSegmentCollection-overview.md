<!--
N-Full (read-only collection, 10 members). Frame A (subject-verb). IronWord.Models.
Verified 2026-06-23: public class PathSegmentCollection : Object, IReadOnlyList<IPathSegment>, IEnumerable<IPathSegment>, IEnumerable, IReadOnlyCollection<IPathSegment>.
Ctors: (), (IPathSegment[]), (List<IPathSegment>). Props: Count, IsReadOnly, Item[Int32]. Methods: Contains(IPathSegment), CopyTo(IPathSegment[], Int32), GetEnumerator(), ToList().
ShapeContent ctor takes List<IPathSegment>; ShapeContent.Points returns List<IPathSegment> (cross-ref verified).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.PathSegmentCollection.html
-->

## Injected overview (Markdown)

`PathSegmentCollection` gathers the ordered `IPathSegment` items that trace the outline of a custom shape in a Word document. When a developer builds or inspects a freeform shape, the individual line and curve segments that define its geometry are held together here, read in the same sequence they were drawn. It is the container a developer works through whenever a shape is described by its path rather than by a simple preset rectangle or ellipse.

The collection is read-only over its segments, exposing them for iteration and lookup once the path has been assembled. A developer typically meets the segments of a path when constructing a `ShapeContent` from a `List<IPathSegment>`, or when reading the geometry back from an existing shape, so this collection sits on the inspection side of building custom shape outlines.

`Count` reports how many segments make up the path, and the `Item[Int32]` indexer reaches a single segment by position so the geometry can be examined point by point. `Contains` tests whether a particular segment is part of the path, while `CopyTo` writes the segments into an `IPathSegment[]` for code that needs a plain array. `GetEnumerator` backs a `foreach` over the segments in order, and `ToList` materializes them into a `List<IPathSegment>` when a mutable copy is convenient. Because `IsReadOnly` is true, treat the collection as a window onto an already-defined path: read, iterate, and copy the segments rather than expecting to add to them in place.

```csharp
using IronWord.Models;

var segments = new PathSegmentCollection();
Console.WriteLine($"Segments in path: {segments.Count}");
foreach (IPathSegment segment in segments)
    Console.WriteLine(segment);
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/), the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/), and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) show how shapes and drawing elements fit into a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PathSegmentCollection - IronWord C# API`
- v2 (human): `PathSegmentCollection: Read Shape Paths in C#`
- v3 (balanced): `PathSegmentCollection Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read the IPathSegment items of a Word shape path in C# with the IronWord PathSegmentCollection: use Count, the indexer, Contains, CopyTo, and ToList.`
- v2 (human): `Inspect the line and curve segments of a custom Word shape in C# with the IronWord PathSegmentCollection class: iterate, index, and copy the path.`
- v3 (balanced): `Reference for the IronWord PathSegmentCollection class in C#: a read-only list of IPathSegment values describing a custom shape's outline.`

---

## Structured data

**TechArticle abstract**

> Inspecting the segments of a custom Word shape outline in C# runs through the IronWord PathSegmentCollection class. It is a read-only list of IPathSegment values: Count reports the segment total, the Item indexer reaches a segment by position, Contains tests membership, CopyTo fills an array, and ToList returns a List. Iterate it to read the path in order.

**FAQPage entries**

```json
[
  {
    "question": "Where does PathSegmentCollection live in the IronWord API?",
    "answer": "PathSegmentCollection is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements IReadOnlyList of IPathSegment, so it exposes the ordered segments of a shape path for reading."
  },
  {
    "question": "How do you read the segments of a shape path in C#?",
    "answer": "Iterate the PathSegmentCollection with foreach, or reach a single segment by position with the Item indexer. Count reports how many segments the path has, and ToList copies them into a List of IPathSegment when a mutable copy is needed."
  },
  {
    "question": "Can you add segments to a PathSegmentCollection?",
    "answer": "No. IsReadOnly is true, so the collection is a read-only view of an already-defined path. Build a shape's geometry by passing a List of IPathSegment when constructing the ShapeContent, then read the segments back through this collection."
  }
]
```
