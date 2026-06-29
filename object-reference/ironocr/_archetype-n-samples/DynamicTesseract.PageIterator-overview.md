<!--
N-Full. DynamicTesseract. Frame D (task-gerund). Decl: public class PageIterator : DisposableBase, IDisposable.
Members verified 2026-06-23: BlockType(prop); Begin, Next(PageIteratorLevel), Next(PageIteratorLevel,PageIteratorLevel), IsAtBeginningOf, IsAtFinalOf, GetProperties, TryGetBoundingBox(out Rect), TryGetBaseline(out Rect), Dispose.
Cross-refs: PageIteratorLevel, PolyBlockType, Rect, ResultIterator (verified same api dir).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.PageIterator.html
-->

## Injected overview (Markdown)

Walking the layout of a recognized page, block by block down to individual symbols, runs through `PageIterator`. It moves a cursor over the regions Tesseract found and reports where each one sits, so code can map the structure of a page without decoding its text. When the text itself is needed too, `ResultIterator` derives from `PageIterator` and adds the recognized characters on top of the same traversal.

A `PageIterator` is obtained from a recognized page rather than constructed directly, and because it inherits `DisposableBase` it should be disposed (or wrapped in `using`) once the walk finishes. `Begin` resets the cursor to the first element, and the two `Next` overloads advance it, one stepping a single `PageIteratorLevel` and the other moving to the next element at one level while bounded by a parent level. `IsAtBeginningOf` and `IsAtFinalOf` test the cursor's position within the hierarchy so a loop knows where a block, paragraph, or line starts and ends.

At each stop, the iterator describes the current region. `BlockType` returns a `PolyBlockType` identifying the region's role, body text, heading, image, table, or separator, and `TryGetBoundingBox` fills a `Rect` with the region's pixel coordinates at a requested `PageIteratorLevel`, returning false when none is available. `TryGetBaseline` reports the text baseline the same way, and `GetProperties` reads font and size details for the current element. Pass the `PageIteratorLevel` that matches the granularity a task needs, from `Block` down to `Symbol`.

```csharp
using DynamicTesseract;

void WalkBlocks(PageIterator iterator)
{
    iterator.Begin();
    do
    {
        if (iterator.TryGetBoundingBox(PageIteratorLevel.Block, out Rect box))
            Console.WriteLine($"{iterator.BlockType} at {box}");
    }
    while (iterator.Next(PageIteratorLevel.Block));
}
```

The [OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks through reading recognized structure, the [results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) shows the result model, and the [region of an image how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-region-of-an-image/) covers working with page coordinates.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PageIterator Class - IronOCR C# API Reference`
- v2 (human): `PageIterator: Walk OCR Page Layout in C#`
- v3 (balanced): `PageIterator Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Walk recognized page layout in C# with the IronOCR PageIterator class: Begin, Next, BlockType, and TryGetBoundingBox by PageIteratorLevel.`
- v2 (human): `Step through an OCR page's blocks, lines, and words in C# with PageIterator: read each region's type and bounding box as you go.`
- v3 (balanced): `Reference for the IronOCR PageIterator class in C#: traverse page regions with Next, read BlockType, and get bounding boxes per level.`

---

## Structured data

**TechArticle abstract**

> PageIterator walks the layout of a recognized page in IronOCR for C#, moving a cursor over the regions Tesseract found and reporting where each sits. Begin resets the cursor and Next advances it by a PageIteratorLevel; BlockType returns the region role as a PolyBlockType, and TryGetBoundingBox fills a Rect with pixel coordinates. ResultIterator derives from it to add recognized text.

**FAQPage entries**

```json
[
  {
    "question": "Where does PageIterator live in the IronOCR API?",
    "answer": "PageIterator is a class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from DisposableBase and implements IDisposable, so dispose it after walking a page. ResultIterator derives from PageIterator to add recognized text."
  },
  {
    "question": "How do you read the position of each region on an OCR page in C#?",
    "answer": "Call Begin to reset the cursor, then loop with Next, passing a PageIteratorLevel such as Block or Word. At each stop, call TryGetBoundingBox to fill a Rect with the region's coordinates and read BlockType for the region's role."
  },
  {
    "question": "What is the difference between PageIterator and ResultIterator?",
    "answer": "PageIterator reports page structure and geometry, such as block types and bounding boxes. ResultIterator derives from PageIterator and adds the recognized text and confidence for each element, through methods like GetText and GetConfidence."
  }
]
```
