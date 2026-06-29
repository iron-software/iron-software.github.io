<!--
N-Full (large surface: 7 properties + 42 methods). Frame B. P7 functional bucketing
(saving/export, stamping, styling/resizing, annotation, encoding info). IronBarcode.
Members verified 2026-06-23. BarcodeWriter.CreateBarcode cross-ref verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html
-->

## Injected overview (Markdown)

`GeneratedBarcode` is the rendered barcode that `BarcodeWriter` and `QRCodeWriter` return, ready to save, restyle, annotate, or place onto a PDF. It holds one drawn symbol along with its decoded value and image data, and its methods turn that symbol into whatever output a project needs without going back to the writer. Most methods return the same `GeneratedBarcode`, so calls chain in a fluent style.

A developer obtains one by calling a writer, then works through the type's members rather than touching pixels directly. The members fall into clear functional groups. **Saving and export** is the largest: `SaveAsImage`, `SaveAsPng`, `SaveAsJpeg`, `SaveAsGif`, `SaveAsTiff`, and `SaveAsPdf` write files, `SaveAsHtmlFile` writes a standalone page, and the `To...` family returns data instead of writing it, with `ToImage`, `ToBitmap`, `ToStream`, `ToPngBinaryData`, `ToDataUrl`, and `ToHtmlTag` for in-memory and web use. **Stamping** places a code onto an existing document through `StampToExistingPdfPage` and `StampToExistingPdfPages`.

**Styling and resizing** reshapes the symbol before output: `ResizeTo` and `ResizeToMil` change dimensions, `KeepAspectRatio` and `SetMargins` control proportion and quiet zone, and `ChangeBarCodeColor` and `ChangeBackgroundColor` set the palette. **Annotation** prints human-readable text alongside the bars with `AddAnnotationTextAboveBarcode`, `AddAnnotationTextBelowBarcode`, `AddBarcodeValueTextAboveBarcode`, and `AddBarcodeValueTextBelowBarcode`.

**Encoding information** is exposed through the properties: `Value` and `BinaryValue` give the decoded content, `BarcodeType` reports the symbology, `Width` and `Height` give the rendered size, and `Image` and `BinaryStream` hold the raw output. `Verify` decodes the rendered symbol and confirms it matches an expected value, a quick self-check after generation. Because every transform returns the same instance, one writer call can be recolored, resized, annotated, and saved in a single chain.

```csharp
using IronBarCode;

BarcodeWriter.CreateBarcode("PRODUCT-001", BarcodeEncoding.Code128)
    .ChangeBarCodeColor(System.Drawing.Color.Navy)
    .AddAnnotationTextBelowBarcode("PRODUCT-001")
    .SaveAsPng("labelled.png");
```

The [create barcode images how-to](https://ironsoftware.com/csharp/barcode/how-to/create-barcode-images/) covers the save formats, the [customize barcode style how-to](https://ironsoftware.com/csharp/barcode/how-to/customize-barcode-style/) restyles a code, and the [barcode styling and annotation example](https://ironsoftware.com/csharp/barcode/examples/barcode-styling-and-annotation/) adds readable text.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `GeneratedBarcode Class - IronBarcode C# API`
- v2 (human): `GeneratedBarcode: Save & Style Barcodes in C#`
- v3 (balanced): `GeneratedBarcode | IronBarcode C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Save, style, or stamp a generated barcode in C# with the IronBarcode GeneratedBarcode class: SaveAsPng, ResizeTo, ChangeBarCodeColor, StampToExistingPdfPage.`
- v2 (human): `Turn a generated barcode into output in C# with the IronBarcode GeneratedBarcode class: save an image, restyle it, annotate, stamp a PDF, or verify it.`
- v3 (balanced): `Reference for the IronBarcode GeneratedBarcode class in C#: save as image or PDF, resize, recolor, annotate, stamp onto a document, and verify.`

---

## Structured data

**TechArticle abstract**

> GeneratedBarcode is the rendered barcode returned by IronBarcode's BarcodeWriter and QRCodeWriter in C#. Saving and export methods like SaveAsPng, SaveAsPdf, ToStream, ToDataUrl, and ToHtmlTag emit the symbol; ResizeTo, SetMargins, and ChangeBarCodeColor restyle it; the AddAnnotationText methods print readable text; StampToExistingPdfPage places it on a PDF; and Verify confirms the code decodes to an expected value.

**FAQPage entries**

```json
[
  {
    "question": "Where does GeneratedBarcode live in the IronBarcode API?",
    "answer": "GeneratedBarcode is a class in the IronBarCode namespace, shipped in IronBarCode.dll. BarcodeWriter.CreateBarcode and the QRCodeWriter methods return a GeneratedBarcode, which you then save, restyle, or stamp."
  },
  {
    "question": "How do you save a generated barcode as an image in C#?",
    "answer": "Call SaveAsPng, SaveAsJpeg, or SaveAsImage on the GeneratedBarcode returned by a writer, passing a file path. The To family, such as ToStream and ToPngBinaryData, returns the image in memory instead, and ToDataUrl or ToHtmlTag produce web-ready output."
  },
  {
    "question": "How do you add readable text and color to a generated barcode in C#?",
    "answer": "Call AddAnnotationTextBelowBarcode or AddBarcodeValueTextAboveBarcode to print text, and ChangeBarCodeColor or ChangeBackgroundColor to set the palette. Each method returns the same GeneratedBarcode, so the calls chain before a final SaveAs call."
  }
]
```
