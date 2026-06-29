<!--
N-Mid (6 members). Frame B. IronQr. Members verified 2026-06-22. QrWriter.Write cross-ref verified.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrCode.html
-->

## Injected overview (Markdown)

`QrCode` is the generated symbol a `QrWriter` returns, ready to save, stamp, or embed. It represents one rendered QR code, and its methods turn that code into the output a project needs without going back to the writer.

`Save` writes the code to an image and accepts an optional `QrStyleOptions` to set size, color, margins, and a logo, returning an `AnyBitmap`. `ToDataUrl` and `ToHtmlTag` produce web-ready output for embedding directly in a page. `StampToExistingPdfPage` and `StampToExistingPdfPages` place the code onto a PDF at a given position and page, useful for adding a code to an invoice or ticket. `Verify` decodes the rendered code and confirms it matches an expected value, a quick self-check after generation. Each method works from the same rendered symbol, so one `QrWriter.Write` result can be saved, stamped onto a PDF, and exported to HTML without regenerating it.

```csharp
QrWriter.Write("https://ironsoftware.com").Save("qr.png");
```

The [generate QR code example](https://ironsoftware.com/csharp/qr/examples/generate-qr-code/) saves a code to an image, and the [stamp to PDF how-to](https://ironsoftware.com/csharp/qr/how-to/stamp-qr-code-to-pdf/) places one on a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrCode Class - IronQR C# API Reference`
- v2 (human): `QrCode: Save & Stamp QR Codes in C#`
- v3 (balanced): `QrCode Class | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Save, stamp, or embed a generated QR code in C# with the IronQR QrCode class: Save to an image, ToDataUrl, ToHtmlTag, and StampToExistingPdfPage.`
- v2 (human): `Turn a generated QR code into output in C# with the IronQR QrCode class: save an image, stamp a PDF, embed in HTML, or verify the result.`
- v3 (balanced): `Reference for the IronQR QrCode class in C#: save a generated code as an image, stamp it onto a PDF, export to HTML, and verify it.`

---

## Structured data

**TechArticle abstract**

> QrCode is the generated symbol returned by IronQR's QrWriter in C#. Save writes it to an image with an optional QrStyleOptions, ToDataUrl and ToHtmlTag produce web output, StampToExistingPdfPage and StampToExistingPdfPages place it on a PDF, and Verify confirms the rendered code decodes to an expected value.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrCode live in the IronQR API?",
    "answer": "QrCode is a class in the IronQr namespace, shipped in IronQr.dll. QrWriter.Write returns a QrCode, which you then save, stamp, or export."
  },
  {
    "question": "How do you save a generated QR code as an image in C#?",
    "answer": "Call Save on the QrCode returned by QrWriter.Write, passing a file path. Add a QrStyleOptions argument to control size, color, margins, and a logo. ToDataUrl and ToHtmlTag give web-ready output instead."
  }
]
```
