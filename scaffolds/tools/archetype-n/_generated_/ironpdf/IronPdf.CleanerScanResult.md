<!--
N-Mid (3 members). Frame C. IronPDF. Members verified 2026-06-22. Cleaner.ScanPdf cross-ref verified.
Target: IronPdf.CleanerScanResult class reference page.
-->

## Injected overview (Markdown)

Inspecting an untrusted PDF for malware becomes straightforward when `Cleaner.ScanPdf` hands back a `CleanerScanResult`: check `IsDetected`, enumerate `Risks`, and decide whether to proceed or discard the document.

`IsDetected` is a boolean that flips to `true` the moment any threat signature is found, making it the fastest gate in a validation pipeline. `Risks` is a `List<string>` that names every detected signature, giving enough detail to log the findings, alert a user, or route the file to quarantine. `ToString` serialises the result into a single human-readable string, convenient for structured logging or console diagnostics without manually iterating `Risks`. All three members are read-only by design: the object captures a point-in-time snapshot of the scan and cannot be mutated after `ScanPdf` returns it.

A typical usage pattern checks `IsDetected` first and only iterates `Risks` when a threat is present, keeping the happy path concise:

```csharp
using IronPdf;

var pdf = PdfDocument.FromFile("untrusted.pdf");
CleanerScanResult result = Cleaner.ScanPdf(pdf);

if (result.IsDetected)
    foreach (var risk in result.Risks)
        Console.WriteLine($"Threat detected: {risk}");
else
    Console.WriteLine(result.ToString()); // "PDF is clean"
```

Because `CleanerScanResult` is a plain data record returned by the scanner rather than something you construct directly, it fits naturally into a larger document-processing pipeline: scan on ingest, branch on `IsDetected`, and pass only clean `PdfDocument` instances to downstream rendering or signing steps. See the [PDF security how-to](https://ironpdf.com/how-to/pdf-security/) and the [IronPDF examples](https://ironpdf.com/examples/) for broader context on building safe document workflows.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CleanerScanResult Class - IronPDF C# API`
- v2 (human): `CleanerScanResult: PDF Threat Scan Results in C#`
- v3 (balanced): `CleanerScanResult Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read PDF malware scan results in C# with IronPDF's CleanerScanResult: check IsDetected, enumerate Risks, and log findings with ToString.`
- v2 (human): `Use CleanerScanResult in C# to check whether a scanned PDF contains threats, list detected signatures, and log results with IronPDF.`
- v3 (balanced): `Reference for IronPDF's CleanerScanResult class in C#: inspect IsDetected, iterate Risks, and serialise scan output with ToString.`

---

## Structured data

**TechArticle abstract**

> Returned by Cleaner.ScanPdf in IronPDF, CleanerScanResult captures the outcome of a PDF malware scan as a read-only snapshot. IsDetected signals whether any threat was found, Risks lists each detected signature by name, and ToString serialises the full result for logging. The object fits into document-ingestion pipelines as a gate between untrusted input and downstream PDF processing.

**FAQPage entries**

```json
[
  {
    "question": "Where does CleanerScanResult live in the IronPDF API?",
    "answer": "CleanerScanResult is a class in the IronPdf namespace, shipped in IronPdf.dll. It derives from Object and is returned by Cleaner.ScanPdf after scanning a PdfDocument for malware signatures."
  },
  {
    "question": "How do you check whether a scanned PDF contains threats using CleanerScanResult?",
    "answer": "Read the IsDetected property: if it is true, iterate the Risks list to see each detected signature name. Call ToString for a single serialised summary suitable for logging. CleanerScanResult is returned directly by Cleaner.ScanPdf and cannot be constructed manually."
  }
]
```