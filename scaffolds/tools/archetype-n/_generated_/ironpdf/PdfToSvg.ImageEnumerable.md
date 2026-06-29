<!--
N-Mid (2 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.ImageEnumerable class reference page.
-->

## Injected overview (Markdown)

Extracting rasterized images from a PDF-to-SVG conversion pipeline becomes straightforward with `ImageEnumerable`, the lazy sequence that delivers `Image` objects one at a time or all at once. Rather than forcing every image into memory upfront, the class gives callers two consumption paths suited to different workloads.

`GetEnumerator` returns an `IEnumerator<Image>` so the sequence fits naturally into a `foreach` loop or any LINQ chain. This path is ideal when processing images one by one, for example writing each frame to disk as it arrives, without waiting for the full set to resolve. `ToListAsync` collects every `Image` into a `List<Image>` asynchronously, accepting an optional `CancellationToken` so long-running extractions can be cancelled cleanly. Use `ToListAsync` when downstream code needs random access to the full result, such as sorting pages by size or passing the collection to a batch renderer.

Because `ImageEnumerable` sits inside the `PdfToSvg` namespace, it integrates directly with the SVG-oriented extraction workflow that IronPDF exposes. The two members cover the two most common consumption patterns: streaming iteration and async bulk collection. Choosing between them depends on whether the caller needs early results or a complete, addressable list.

```csharp
using IronPdf;

var pdf = PdfDocument.FromFile("report.pdf");
ImageEnumerable images = pdf.ToSvg().GetImages();

List<Image> allImages = await images.ToListAsync();
foreach (var img in allImages)
    img.Save($"page_{allImages.IndexOf(img)}.png");
```

For broader context on image and SVG extraction, see the [IronPDF how-to guides](https://ironpdf.com/how-to/extract-images-from-pdf/) and the [PDF to SVG examples](https://ironpdf.com/examples/convert-pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageEnumerable Class - IronPDF C# API Reference`
- v2 (human): `ImageEnumerable: Stream PDF Images in C#`
- v3 (balanced): `ImageEnumerable Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Iterate or collect PDF-extracted images in C# with IronPDF's ImageEnumerable: use GetEnumerator for streaming or ToListAsync for async bulk access.`
- v2 (human): `Stream or batch-collect images from a PDF conversion in C# using IronPDF's ImageEnumerable, with foreach iteration and cancellable async list retrieval.`
- v3 (balanced): `Reference for IronPDF's ImageEnumerable in C#: GetEnumerator streams images one by one; ToListAsync collects them all with cancellation support.`

---

## Structured data

**TechArticle abstract**

> Consuming rasterized images from IronPDF's PDF-to-SVG pipeline is handled by ImageEnumerable in the PdfToSvg namespace. GetEnumerator exposes the sequence for foreach iteration or LINQ, while ToListAsync collects every Image into a List asynchronously and accepts a CancellationToken for cooperative cancellation on large documents.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageEnumerable live in the IronPDF API?",
    "answer": "ImageEnumerable is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and exposes two members: GetEnumerator for streaming iteration and ToListAsync for async bulk collection."
  },
  {
    "question": "How do you choose between GetEnumerator and ToListAsync on an ImageEnumerable?",
    "answer": "Use GetEnumerator inside a foreach loop when you want to process images one at a time without loading the full set into memory. Use ToListAsync when you need a complete, indexable List<Image> and want to await the result asynchronously, optionally passing a CancellationToken to cancel a long-running extraction."
  }
]
```