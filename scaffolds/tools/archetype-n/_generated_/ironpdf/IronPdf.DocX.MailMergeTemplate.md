<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.DocX.MailMergeTemplate.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`MailMergeTemplate` is what IronPDF C# code uses for Word-to-PDF. It represents template for mail merge operations enabling dynamic document generation from data sources.

`MailMergeTemplate` matters when an application needs to configure or invoke Word-to-PDF from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `MailMergeTemplate`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `create<TRecipientsDataModel>`. Assign options or invoke methods on the instance to configure or perform the operation. The [merge or split pdfs](https://ironpdf.com/how-to/merge-or-split-pdfs/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain MailMergeTemplate from the relevant entry point in the IronPDF API
void Configure(MailMergeTemplate instance)
{
    instance.create<TRecipientsDataModel>();
}
```

For the broader workflow, see the [add images to pdfs](https://ironpdf.com/how-to/add-images-to-pdfs/) guide in the IronPDF C# documentation. For broader context, the Word-to-PDF portion of the IronPDF C# API contains related types that work with `MailMergeTemplate` directly. `MailMergeTemplate` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `MailMergeTemplate` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `MailMergeTemplate` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `MailMergeTemplate`. Application code typically obtains or instantiates a single `MailMergeTemplate` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MailMergeTemplate Class - IronPDF C# API Reference`
- v2 (human): `MailMergeTemplate: IronPDF Word-to-PDF in C#`
- v3 (balanced): `MailMergeTemplate Class | IronPDF C# Word-to-PDF`

**Meta-description (120-160 chars)**
- v1 (algorithm): `MailMergeTemplate is the IronPDF class for Word-to-PDF in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF MailMergeTemplate class reference for C#: template for mail merge operations enabling dynamic document generation...`
- v3 (balanced): `MailMergeTemplate (Word-to-PDF) in IronPDF for C#: template for mail merge operations enabling dynamic document generation... See members and usage.`

---

## Structured data

**TechArticle abstract**

> MailMergeTemplate is the IronPDF C# entry point for Word-to-PDF, which provides template for mail merge operations enabling dynamic document generation from data sources. MailMergeTemplate is in the IronPdf.DocX namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does MailMergeTemplate live in the IronPDF API?",
    "answer": "MailMergeTemplate is in the IronPdf.DocX namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the MailMergeTemplate class used for in C#?",
    "answer": "MailMergeTemplate is the IronPDF class that template for mail merge operations enabling dynamic document generation from data sources. It is part of the IronPdf.DocX namespace and is used through the IronPDF C# API."
  },
  {
    "question": "How do you create a MailMergeTemplate in C#?",
    "answer": "Instantiate MailMergeTemplate directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  },
  {
    "question": "What methods are available on MailMergeTemplate?",
    "answer": "Common methods include create<TRecipientsDataModel>. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).