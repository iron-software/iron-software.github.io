<!--
N-Full (class; X/Y int props in points; Get/Set X/Y position w/ MeasurementUnit). Frame E lead / Frame D abstract. IronWord.
Verified 2026-06-23: ElementPosition(); X (int, get;set;), Y (int, get;set;) measured in points; GetXPosition(MeasurementUnit)->double, GetYPosition(MeasurementUnit)->double, SetXPosition(double,MeasurementUnit), SetYPosition(double,MeasurementUnit). Base Object. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ElementPosition.html
-->

## Injected overview (Markdown)

Where an element sits on the page, given as horizontal and vertical coordinates, is what `ElementPosition` records in a Word document. A developer assigns it to a positioned element, such as a floating image or shape, to place that element at exact coordinates rather than letting it flow with the text.

Create one with `new ElementPosition()` and set its coordinates. The `X` and `Y` properties hold the horizontal and vertical offsets as integers measured in points, where one inch equals 72 points, and the values are converted to points automatically when read or written. For work in other units, the position offers paired getters and setters: `SetXPosition` and `SetYPosition` each take a value and a `MeasurementUnit`, and `GetXPosition` and `GetYPosition` return the coordinate converted to a requested unit.

That unit-aware pairing is the reason to prefer the methods over the raw `X` and `Y` properties when a layout is expressed in inches, centimeters, or millimeters. A developer can set the horizontal position in centimeters and read it back in points, or the reverse, without converting by hand, while the underlying coordinate stays in the document's native points. The same `MeasurementUnit` argument drives both the set and get calls, so a layout defined in one unit stays consistent end to end. Because a single `ElementPosition` carries both axes, the same object describes a complete placement and can be reused for elements that should align at the same spot, or copied and nudged for elements that sit just beside one another.

```csharp
var position = new ElementPosition();
position.SetXPosition(2, MeasurementUnit.Cm);
position.SetYPosition(1.5, MeasurementUnit.Cm);
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) places visual content that can be positioned, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how elements assemble in a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ElementPosition - IronWord C# API Reference`
- v2 (human): `ElementPosition: Place Elements in C# Word`
- v3 (balanced): `ElementPosition | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Position elements in C# Word documents with the IronWord ElementPosition class. Set X and Y in points or any unit with SetXPosition.`
- v2 (human): `Place an image or shape at exact coordinates in a C# Word document with the IronWord ElementPosition class, in points or another unit.`
- v3 (balanced): `Reference for the IronWord ElementPosition class in C#: set X and Y in points, or use SetXPosition and GetXPosition with a MeasurementUnit.`

---

## Structured data

**TechArticle abstract**

> Placing an element at exact horizontal and vertical coordinates in a C# Word document runs through IronWord's ElementPosition. Construct one and set X and Y in points, where one inch equals 72 points, or use the unit-aware SetXPosition and SetYPosition with a MeasurementUnit. GetXPosition and GetYPosition return a coordinate converted to a requested unit, so a layout in centimeters or inches needs no manual conversion.

**FAQPage entries**

```json
[
  {
    "question": "Where does ElementPosition live in the IronWord API?",
    "answer": "ElementPosition is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and records an element's horizontal and vertical coordinates."
  },
  {
    "question": "How do you position an element at exact coordinates in C# Word?",
    "answer": "Create an ElementPosition and set its X and Y properties in points, or call SetXPosition and SetYPosition with a value and a MeasurementUnit. Assign the position to a floating element such as an image or shape."
  },
  {
    "question": "How do you set an element position in centimeters in IronWord?",
    "answer": "Call SetXPosition and SetYPosition with the value and MeasurementUnit.Cm. The coordinate is stored in points internally, and GetXPosition or GetYPosition will convert it back to any unit you request."
  }
]
```
