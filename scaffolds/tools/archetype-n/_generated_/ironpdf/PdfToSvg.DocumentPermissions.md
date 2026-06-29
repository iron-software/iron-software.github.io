<!--
N-Full (class, 9 members). Frame: feature-fronted prose lead, when-fronted abstract. IronPDF.
AllowAnnotations, AllowAssembleDocument, AllowExtractAccessibility, AllowExtractContent, AllowFillForm, AllowModifyContent, AllowPrintFullQuality, AllowPrintLowQuality, HasOwnerPermission verified from PAGE FACTS.
Target: PdfToSvg.DocumentPermissions in IronPdf.dll
-->

## Injected overview (Markdown)

Every permission flag encoded in a PDF's security dictionary is surfaced through `DocumentPermissions`. When a PDF is protected by an owner password, the document's access rules travel with it, and this record exposes each rule as a readable `bool` property so application code can branch on what the current viewer is actually allowed to do before attempting an operation.

`DocumentPermissions` lives on the PDF object returned by IronPDF's rendering pipeline. Rather than parsing low-level PDF encryption tables directly, you read the nine properties on this class and act accordingly. The nine members split cleanly into three functional groups:

**Printing:** `AllowPrintFullQuality` indicates whether the document may be printed at full resolution. `AllowPrintLowQuality` covers degraded or draft-quality output, which some owners permit even when full-quality printing is locked.

**Content extraction and accessibility:** `AllowExtractContent` controls whether text and graphics may be copied out of the document. `AllowExtractAccessibility` is the narrower carve-out that permits assistive technologies (screen readers, for example) to access content even when general extraction is denied.

**Editing and interaction:** `AllowAnnotations` governs adding or modifying comments and form-field annotations. `AllowFillForm` covers interactive form completion without broader editing rights. `AllowModifyContent` reflects whether the page content stream itself may be altered. `AllowAssembleDocument` indicates whether pages may be inserted, rotated, deleted, or bookmarked.

**Ownership:** `HasOwnerPermission` is true when the document was opened with the owner (full-control) password, meaning all restrictions are effectively lifted regardless of the other flags.

Checking `HasOwnerPermission` first is the recommended pattern: if it is `true`, the remaining flags are moot. Otherwise, inspect the specific capability before invoking a corresponding IronPDF operation.

```csharp
using IronPdf;

using var pdf = PdfDocument.FromFile("protected.pdf", ownerPassword: "secret");
DocumentPermissions perms = pdf.SecuritySettings.Permissions;

if (perms.HasOwnerPermission || perms.AllowExtractContent)
{
    string text = pdf.ExtractAllText();
    Console.WriteLine(text);
}
else if (perms.AllowExtractAccessibility)
{
    Console.WriteLine("Accessibility extraction only; full text copy is restricted.");
}
else
{
    Console.WriteLine("Content extraction is not permitted by this document.");
}
```

For background on PDF security settings and how to apply permissions when creating documents, see the [PDF security how-to](https://ironpdf.com/how-to/pdf-security/), the [PDF permissions example](https://ironpdf.com/examples/pdf-permissions/), and the [IronPDF get-started guide](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocumentPermissions Class - IronPDF C# API Reference`
- v2 (human): `DocumentPermissions: Read PDF Permissions in C#`
- v3 (balanced): `DocumentPermissions Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read PDF permission flags in C# with IronPDF DocumentPermissions: check printing, editing, extraction, and owner access before acting on a protected PDF.`
- v2 (human): `Inspect every PDF security permission in C# with DocumentPermissions: printing, editing, form-fill, extraction, and owner rights as readable bool properties.`
- v3 (balanced): `Reference for IronPDF DocumentPermissions in C#: nine bool properties expose printing, editing, extraction, and owner permissions on a protected PDF document.`

---

## Structured data

**TechArticle abstract**

> When working with permission-restricted PDFs in C#, DocumentPermissions exposes every access flag as a readable bool property. The nine members cover printing at full or low quality, content and accessibility extraction, annotation and form interaction, content and document assembly modification, and owner-level access. Check HasOwnerPermission first; if true, all restrictions are lifted. Otherwise inspect the specific flag before invoking the corresponding IronPDF operation. DocumentPermissions is in the PdfToSvg namespace, shipped in IronPdf.dll, and derives from Object.

**FAQPage entries**

```json
[
  {
    "question": "Where does DocumentPermissions live in the IronPDF API?",
    "answer": "DocumentPermissions is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and surfaces the nine permission flags encoded in a PDF's security dictionary as readable bool properties."
  },
  {
    "question": "How do you check whether a PDF allows content extraction in C#?",
    "answer": "Read the AllowExtractContent property on DocumentPermissions. If it is false but AllowExtractAccessibility is true, assistive-technology access is still permitted. If HasOwnerPermission is true, all restrictions are lifted regardless of the other flags."
  },
  {
    "question": "What is the difference between AllowPrintFullQuality and AllowPrintLowQuality?",
    "answer": "AllowPrintFullQuality indicates the document may be printed at full resolution. AllowPrintLowQuality covers draft or degraded output, which some PDF owners permit even when high-resolution printing is restricted. Check both before selecting a print path."
  },
  {
    "question": "How do you determine whether a PDF was opened with its owner password?",
    "answer": "Check the HasOwnerPermission property on DocumentPermissions. When it is true, the document was opened with the owner (full-control) password and all permission restrictions are effectively inactive."
  }
]
```