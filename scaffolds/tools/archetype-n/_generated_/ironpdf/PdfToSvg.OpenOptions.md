<!--
N-Mid (2 members). Frame C. IronPDF. Members verified 2026-06-22. PdfToSvg.OpenOptions.
Target: PdfToSvg.OpenOptions class reference page.
-->

## Injected overview (Markdown)

When converting a password-protected PDF to SVG with IronPDF, pass an `OpenOptions` instance to supply the credentials the renderer needs before it can read the document. This small configuration record carries the settings that govern how a locked PDF is opened, keeping security details separate from the conversion call itself.

`OpenOptions` exposes two members. The constructor `OpenOptions()` creates a default instance with no password set, suitable for unprotected files. The `Password` property accepts the owner or user password as a plain string; set it before passing the options object to the conversion method, and IronPDF will use it to unlock the document. If the password is wrong or missing for a protected file, the conversion will fail rather than produce a blank or partial SVG, so verifying credentials before calling the converter saves debugging time.

Because `OpenOptions` is a plain `Object`-derived class with no required constructor arguments, it works naturally with object-initializer syntax:

```csharp
var options = new PdfToSvg.OpenOptions { Password = "s3cur3P@ss" };
```

The object is then passed directly to the SVG conversion entry point, giving the renderer everything it needs to decrypt and process the source file. For unprotected PDFs, omitting `Password` or leaving it as its default `null` value is sufficient.

Explore the broader PDF-to-SVG workflow in the [IronPDF how-to guides](https://ironpdf.com/how-to/pdf-to-svg/) and review general PDF security handling on the [IronPDF examples pages](https://ironpdf.com/examples/pdf-password/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OpenOptions Class - IronPDF C# API Reference`
- v2 (human): `OpenOptions: Unlock PDFs for SVG Export in C#`
- v3 (balanced): `OpenOptions Class | IronPDF C# SVG API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure PDF open settings in C# with PdfToSvg.OpenOptions in IronPDF: supply a Password to unlock protected PDFs before SVG conversion.`
- v2 (human): `Use PdfToSvg.OpenOptions in IronPDF to pass a password when converting protected PDFs to SVG in C#. Simple, two-member configuration class.`
- v3 (balanced): `Reference for PdfToSvg.OpenOptions in IronPDF C#: set a Password to unlock protected PDFs before converting them to SVG output.`

---

## Structured data

**TechArticle abstract**

> Supplying credentials for a password-protected PDF before SVG conversion is handled by PdfToSvg.OpenOptions in IronPDF. The class exposes a default constructor and a Password property; set Password to the document's owner or user password, then pass the instance to the SVG conversion method so IronPDF can decrypt and process the source file.

**FAQPage entries**

```json
[
  {
    "question": "Where does OpenOptions live in the IronPDF API?",
    "answer": "OpenOptions is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from System.Object and holds the configuration, specifically the Password property, needed to open a PDF before converting it to SVG."
  },
  {
    "question": "How do you open a password-protected PDF for SVG conversion in C#?",
    "answer": "Create a PdfToSvg.OpenOptions instance, set its Password property to the document's password, and pass the object to the SVG conversion call. For unprotected files, you can omit the Password or leave it null."
  }
]
```