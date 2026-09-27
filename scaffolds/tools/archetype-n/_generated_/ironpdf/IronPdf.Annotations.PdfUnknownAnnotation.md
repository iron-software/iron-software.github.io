<!--
N-Mid (1 member). Frame D. IronPDF. Members verified 2026-06-22.
Target: IronPdf.Annotations.PdfUnknownAnnotation
-->

## Injected overview (Markdown)

Enumerating a PDF page's annotations safely requires a fallback for subtypes that have no dedicated representation, and `PdfUnknownAnnotation` fills that role. When IronPDF encounters an annotation subtype it does not map to a concrete class (a form-field Widget is the most common example), it wraps the annotation in a `PdfUnknownAnnotation` rather than throwing an exception, letting annotation-scanning code continue without special-casing every possible subtype.

`PdfUnknownAnnotation` extends `PdfAnnotation` and exposes the six fields that every PDF annotation carries regardless of subtype: `Type`, `Rectangle`, `Color`, `Name`, `Contents`, and `Hidden`. Its single constructor accepts all six as parameters, matching the signature `PdfUnknownAnnotation(PdfAnnotationType type, Rectangle rectangle, Color color, string name, string contents, bool hidden)`. Code that iterates annotations and pattern-matches on known types can simply skip any `PdfUnknownAnnotation` instance, preserving the data without crashing.

A practical pattern is to filter unknown annotations out of a result set while still logging the `Type` value for diagnostics:

```csharp
using IronPdf;
using IronPdf.Annotations;

var annotations = PdfDocument.FromFile("report.pdf").Pages[0].Annotations;
foreach (var annotation in annotations)
{
    if (annotation is PdfUnknownAnnotation unknown)
        Console.WriteLine($"Skipping unhandled annotation type: {unknown.Type}");
}
```

For background on working with PDF annotations in IronPDF, see the [PDF annotations how-to](https://ironpdf.com/how-to/annotations/) and the broader [IronPDF documentation hub](https://ironpdf.com/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfUnknownAnnotation Class - IronPDF C# API`
- v2 (human): `PdfUnknownAnnotation: Handle Unknown PDF Annotations in C#`
- v3 (balanced): `PdfUnknownAnnotation Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `PdfUnknownAnnotation in IronPDF C# wraps unrecognized PDF annotation subtypes, exposing Type, Rectangle, Color, Name, Contents, and Hidden safely.`
- v2 (human): `Safely handle unrecognized PDF annotation subtypes in C# with IronPDF's PdfUnknownAnnotation, a PdfAnnotation fallback that keeps enumeration from throwing.`
- v3 (balanced): `Reference for IronPDF's PdfUnknownAnnotation class in C#: a safe fallback for unknown PDF annotation subtypes exposing six common annotation fields.`

---

## Structured data

**TechArticle abstract**

> Safely enumerate PDF annotations in C# with PdfUnknownAnnotation, the IronPDF fallback for annotation subtypes that have no dedicated representation. Extending PdfAnnotation in the IronPdf.Annotations namespace, it surfaces the six common fields (Type, Rectangle, Color, Name, Contents, Hidden) without throwing, so callers can log or skip unrecognized subtypes while processing a page's full annotation list.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfUnknownAnnotation live in the IronPDF API?",
    "answer": "PdfUnknownAnnotation is a class in the IronPdf.Annotations namespace, shipped in IronPdf.dll. It extends PdfAnnotation and is returned automatically when IronPDF encounters an annotation subtype that has no dedicated concrete class."
  },
  {
    "question": "How do you handle PdfUnknownAnnotation when iterating PDF annotations in C#?",
    "answer": "Pattern-match on PdfUnknownAnnotation in your annotation loop and skip or log those instances. The Type property identifies the raw subtype, and the remaining fields (Rectangle, Color, Name, Contents, Hidden) are still populated for inspection."
  }
]
```