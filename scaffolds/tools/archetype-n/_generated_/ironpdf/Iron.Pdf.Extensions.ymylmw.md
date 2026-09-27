<!--
N-Full (interface, 12 members, obfuscated names). Iron.Pdf.Extensions.ymylmw.
All member names verified from PAGE FACTS 2026-06-22.
Target: Iron.Pdf.Extensions namespace, IronPdf.dll.
-->

## Injected overview (Markdown)

Inspecting the runtime identity of an IronPDF assembly at a fine-grained level becomes straightforward through `ymylmw`. This contract exposes a structured set of read-only properties that together describe the assembly reference bound to a PDF operation: its compiled `Assembly` object, the `DateTime` it was built, and ten string-typed descriptors covering identity, versioning, and provenance metadata. Any component that needs to verify which build of IronPDF is active, log diagnostic information, or enforce version constraints at runtime can accept `ymylmw` and interrogate its members without coupling to a concrete type.

Because `ymylmw` is an interface in the `Iron.Pdf.Extensions` namespace (shipped in `IronPdf.dll`, extending `Object`), consuming code works against the contract rather than an implementation. The twelve properties divide naturally into two functional groups:

**Assembly handle and build stamp:** `qbhunl` returns the live `Assembly` reference, giving access to the full reflection surface. `qbhunm` returns the `DateTime` at which the assembly was compiled, useful for audit trails and support diagnostics.

**String identity descriptors:** `qbhunn`, `qbhuno`, `qbhunp`, `qbhunq`, `qbhunr`, `qbhuns`, `qbhunt`, `qbhunu`, `qbhunv`, and `qbhunw` carry the textual metadata fields, covering areas such as product name, version string, copyright notice, company attribution, description, title, configuration, file version, informational version, and culture. All ten are `string` typed and read-only, so implementations guarantee immutability once the object is constructed.

A typical use is a diagnostic helper that captures the full identity snapshot of the IronPDF runtime at application startup, writes it to a structured log, and surfaces it in a support report. Because the contract is an interface, test code can substitute a lightweight stub without loading the real assembly.

```csharp
using Iron.Pdf.Extensions;

void LogAssemblyInfo(ymylmw info)
{
    Console.WriteLine($"Assembly:  {info.qbhunl.FullName}");
    Console.WriteLine($"Built:     {info.qbhunm:O}");
    Console.WriteLine($"Product:   {info.qbhunn}");
    Console.WriteLine($"Version:   {info.qbhunp}");
    Console.WriteLine($"Copyright: {info.qbhunr}");
}
```

For broader context on IronPDF's extension model, see the [IronPDF documentation hub](https://ironpdf.com/docs/), the [getting-started guide](https://ironpdf.com/get-started/), and the [PDF metadata how-to](https://ironpdf.com/how-to/pdf-metadata/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ymylmw Interface - IronPDF C# API Reference`
- v2 (human): `ymylmw: Assembly Identity Contract in C#`
- v3 (balanced): `ymylmw Interface | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ymylmw in Iron.Pdf.Extensions exposes Assembly, DateTime, and 10 string descriptors for IronPDF assembly identity inspection in C#.`
- v2 (human): `Use the ymylmw interface in IronPDF to read assembly identity, build date, and version metadata at runtime in C#.`
- v3 (balanced): `Reference for the IronPDF ymylmw interface in C#: read Assembly, build DateTime, and ten string identity descriptors from IronPdf.dll.`

---

## Structured data

**TechArticle abstract**

> Inspecting the runtime identity of an IronPDF assembly at a fine-grained level becomes straightforward through the ymylmw interface in Iron.Pdf.Extensions (IronPdf.dll). The contract exposes twelve read-only properties: the live Assembly reference via qbhunl, the build timestamp via qbhunm, and ten string descriptors (qbhunn through qbhunw) covering product name, version, copyright, company, and related metadata. Consuming code targets the interface directly, enabling substitution in tests and decoupling from any concrete implementation.

**FAQPage entries**

```json
[
  {
    "question": "Where does ymylmw live in the IronPDF API?",
    "answer": "ymylmw is an interface in the Iron.Pdf.Extensions namespace, shipped in IronPdf.dll, and extends Object. It declares 12 read-only properties covering an Assembly reference, a build DateTime, and ten string identity descriptors."
  },
  {
    "question": "How do you access the build date of the IronPDF assembly through ymylmw?",
    "answer": "Accept an ymylmw instance and read its qbhunm property, which returns a DateTime representing when the assembly was compiled. This is useful for diagnostic logging and support reports."
  },
  {
    "question": "What string metadata does ymylmw expose?",
    "answer": "The ten string properties qbhunn through qbhunw carry textual identity fields such as product name, version string, copyright notice, company attribution, description, title, configuration, file version, informational version, and culture. All are read-only."
  },
  {
    "question": "How do you use ymylmw without coupling to a concrete implementation?",
    "answer": "Write methods and classes that accept ymylmw as a parameter type. Because it is an interface, test code can supply a stub, and production code receives the real implementation provided by IronPdf.dll without any change to the consuming logic."
  }
]
```