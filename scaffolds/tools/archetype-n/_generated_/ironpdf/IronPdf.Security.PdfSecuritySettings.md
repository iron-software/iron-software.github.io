<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Security.PdfSecuritySettings.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfSecuritySettings` is what IronPDF C# code uses for PDF security. It represents enterprise-grade PDF security: PDF.SecuritySettings.MakePdfDocumentReadOnly("owner123") Control passwords, 128-bit encryption, permissions for print/copy/edit.

`PdfSecuritySettings` matters when an application needs to configure or invoke PDF security from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfSecuritySettings`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `AllowUserAnnotations`, `AllowUserCopyPasteContent`, `AllowUserCopyPasteContentForAccessibility`, `AllowUserEdits`. Assign options or invoke methods on the instance to configure or perform the operation. The [PDF permissions passwords](https://ironpdf.com/how-to/pdf-permissions-passwords/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfSecuritySettings from the relevant entry point in the IronPDF API
void Configure(PdfSecuritySettings instance)
{
    var current = instance.AllowUserAnnotations;
    instance.MakePdfDocumentReadOnly();
}
```

For the broader workflow, see the [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF security portion of the IronPDF C# API contains related types that work with `PdfSecuritySettings` directly. `PdfSecuritySettings` instances inherit additional members from `PdfClientAccessor` that may be relevant in advanced scenarios. In application code, treat `PdfSecuritySettings` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfSecuritySettings` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfSecuritySettings`. Application code typically obtains or instantiates a single `PdfSecuritySettings` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfSecuritySettings Class - IronPDF C# API Reference`
- v2 (human): `PdfSecuritySettings: IronPDF PDF Security in C#`
- v3 (balanced): `PdfSecuritySettings Class | IronPDF C# PDF Security`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfSecuritySettings is the IronPDF class for PDF security in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfSecuritySettings class reference for C#: enterprise-grade PDF security: PDF.SecuritySettings.MakePdfDocumentReadOnly("...`
- v3 (balanced): `PdfSecuritySettings (PDF Security) in IronPDF for C#: enterprise-grade PDF security: PDF.SecuritySettings.MakePdfDocumentReadOnly("... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfSecuritySettings in IronPDF to work with PDF security from C#. PdfSecuritySettings is in the IronPdf.Security namespace, derived from PdfClientAccessor. Enterprise-grade PDF security: PDF.SecuritySettings.MakePdfDocumentReadOnly("owner123") Control passwords, 128-bit encryption, permissions for print/copy/edit. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfSecuritySettings?",
    "answer": "PdfSecuritySettings is in the IronPdf.Security namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor."
  },
  {
    "question": "What is the PdfSecuritySettings class used for in C#?",
    "answer": "PdfSecuritySettings is the IronPDF class that enterprise-grade PDF security: PDF.SecuritySettings.MakePdfDocumentReadOnly(\"owner123\") Control passwords, 128-bit encryption, permissions for print/copy/edit. It is part of the IronPdf.Security namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfSecuritySettings?",
    "answer": "Properties commonly used on PdfSecuritySettings include AllowUserAnnotations, AllowUserCopyPasteContent, AllowUserCopyPasteContentForAccessibility, AllowUserEdits. Each property configures one aspect of the PDF security surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfSecuritySettings?",
    "answer": "Common methods include MakePdfDocumentReadOnly, RemovePasswordsAndEncryption. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).