<!--
N-Full. DynamicTesseract. Frame A (subject-verb). Decl: public sealed class PixColormap : Object, IDisposable.
Members verified 2026-06-23: Count, Depth, FreeCount, Item[Int32] (props); Create(Int32), CreateLinear(Int32,Boolean,Boolean), CreateLinear(Int32,Int32), AddColor(PixColor), AddNewColor(PixColor,out Int32), AddNearestColor(PixColor,out Int32), AddBlackOrWhite(Int32,out Int32), SetBlackOrWhite(Boolean,Boolean), IsUsableColor(PixColor), Clear(), Dispose().
Cross-ref: PixColor (same dir).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.PixColormap.html
-->

## Injected overview (Markdown)

`PixColormap` manages the palette of a colormapped Leptonica image, the indexed table that maps each pixel value to an actual `PixColor`. It is the type code works through when an image stores colors by index rather than per pixel, for example a quantized scan whose palette must be inspected or edited before recognition. Most text OCR never touches it, but color cleanup and image-preparation steps do.

A colormap is created through the static factories rather than a constructor: `Create` allocates an empty map of a given bit depth, while the two `CreateLinear` overloads build a ready-made grayscale ramp. Because the type holds a native handle and implements `IDisposable`, dispose it (or use `using`) once editing is finished. `Count` reports how many colors the map currently holds, `FreeCount` how many slots remain, and `Depth` the bit depth that bounds its capacity.

Colors are added and queried through the palette methods. `AddColor` appends a `PixColor`, `AddNewColor` adds one only if it is not already present and returns its index, and `AddNearestColor` maps a requested color to the closest existing entry. `AddBlackOrWhite` and `SetBlackOrWhite` manage the black and white endpoints, `IsUsableColor` tests whether a color can be added within the depth limit, and the `Item` indexer reads an entry by position. `Clear` empties the map for reuse. Build each entry from a `PixColor`, the RGBA color this table indexes.

```csharp
using DynamicTesseract;

using PixColormap map = PixColormap.Create(8);
map.AddColor(new PixColor(0, 0, 0, 255));
map.AddNewColor(new PixColor(255, 255, 255, 255), out int whiteIndex);
```

The [replace color example](https://ironsoftware.com/csharp/ocr/examples/replace-color/) edits image colors before OCR, the [image color correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-color-correction/) covers color cleanup, and the [select text by color example](https://ironsoftware.com/csharp/ocr/examples/select-text-by-color/) matches palette colors.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PixColormap Class - IronOCR C# API`
- v2 (human): `PixColormap: Edit Image Palettes in C#`
- v3 (balanced): `PixColormap Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Manage a Leptonica image palette in C# with the IronOCR PixColormap class: Create, AddColor, AddNearestColor, and Count by index.`
- v2 (human): `Inspect or edit a colormapped image's palette in C# with PixColormap: create a map, add PixColor entries, and read colors by index.`
- v3 (balanced): `Reference for the IronOCR PixColormap class in C#: build a palette with Create, add PixColor entries, and query the table by index.`

---

## Structured data

**TechArticle abstract**

> Manage the palette of a colormapped Leptonica image with PixColormap in IronOCR for C#, the indexed table mapping each pixel value to a PixColor. Create or CreateLinear build a map, AddColor and AddNewColor add entries, AddNearestColor maps to the closest existing color, and Count, Depth, and the Item indexer report and read the table. It holds a native handle, so dispose it after editing.

**FAQPage entries**

```json
[
  {
    "question": "Where does PixColormap live in the IronOCR API?",
    "answer": "PixColormap is a sealed class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from System.Object and implements IDisposable, so dispose it after editing. It represents the color palette of a colormapped Leptonica image."
  },
  {
    "question": "How do you build a color palette in C# with PixColormap?",
    "answer": "Call the static PixColormap.Create with a bit depth to allocate an empty map, or CreateLinear for a grayscale ramp, then call AddColor or AddNewColor with a PixColor for each entry. Read entries by position through the Item indexer and dispose the map when finished."
  },
  {
    "question": "What is the difference between AddColor, AddNewColor, and AddNearestColor?",
    "answer": "AddColor appends a PixColor to the palette. AddNewColor adds one only if it is not already present and returns its index. AddNearestColor does not add a color but returns the index of the closest existing entry to the requested color."
  }
]
```
