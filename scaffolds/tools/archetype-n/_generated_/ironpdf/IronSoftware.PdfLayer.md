<!--
N-Full (class, 7 members). Frame B (identity-by-role). IronPDF.
PdfLayer members verified: DefaultVisible, Id, IsVisible, Name, ParentId, ToString(), PdfLayer().
Namespace: IronSoftware. Assembly: IronPdf.dll.
Target: IronSoftware.PdfLayer API reference page.
-->

## Injected overview (Markdown)

Each `PdfLayer` record represents one entry in a PDF document's Optional Content Group (OCG) tree, the data structure that drives layer visibility in readers such as Adobe Acrobat. Obtaining these records lets a developer enumerate every named layer in a document, check which layers are on or off by default, and correlate individual content objects on the page back to the layer that owns them.

The `PdfClient.GetOcgs(documentId)` method returns a collection of `PdfLayer` objects, one per OCG entry in the document. From there, `Id` uniquely identifies the layer within the document, and `ParentId` exposes the parent layer's identifier so nested layer hierarchies can be reconstructed. `Name` carries the human-readable label shown in a PDF viewer's layers panel. Two boolean properties describe visibility state: `DefaultVisible` reflects the visibility the document author encoded in the OCG dictionary, while `IsVisible` reflects the current runtime state, which may differ if the document's open action or a prior API call has toggled layers. `ToString()` returns a concise diagnostic string combining `Id` and `Name`, useful when logging or debugging layer trees.

To connect layers to page content, compare a layer's `Id` against the `OcgId` property on `TextObject` and `PathObject` instances retrieved from the same document. This pairing makes it straightforward to extract only the text that belongs to a specific layer, hide all paths on a watermark layer before re-rendering, or audit which content is hidden by default.

```csharp
using IronPdf;
using IronSoftware;

var pdf = PdfDocument.FromFile("layered.pdf");
IEnumerable<PdfLayer> layers = PdfClient.GetOcgs(pdf.DocumentId);

foreach (PdfLayer layer in layers)
{
    Console.WriteLine($"{layer.Id} | {layer.Name} | visible={layer.IsVisible} | default={layer.DefaultVisible}");
    if (layer.ParentId >= 0)
        Console.WriteLine($"  child of layer {layer.ParentId}");
}
```

The [IronPDF documentation hub](https://ironpdf.com/docs/) covers PDF manipulation in depth. The [PDF layers how-to](https://ironpdf.com/how-to/pdf-layers/) walks through reading and toggling OCG visibility. The [extract text from PDF example](https://ironpdf.com/examples/extract-text-from-pdf/) shows how text content objects are accessed, and the [get started guide](https://ironpdf.com/get-started/) covers installation and licensing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfLayer Class - IronPDF C# API Reference`
- v2 (human): `PdfLayer: Read PDF Layers (OCGs) in C#`
- v3 (balanced): `PdfLayer Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronPDF PdfLayer class in C# to read PDF Optional Content Groups: check Name, Id, ParentId, IsVisible, and DefaultVisible for each layer.`
- v2 (human): `Enumerate and inspect PDF layers in C# with IronPDF's PdfLayer class: access layer names, IDs, parent relationships, and visibility state.`
- v3 (balanced): `Reference for the IronPDF PdfLayer class in C#: represents one OCG entry with Name, Id, ParentId, IsVisible, and DefaultVisible properties.`

---

## Structured data

**TechArticle abstract**

> Enumerating and inspecting PDF Optional Content Groups in C# is handled through the IronPDF PdfLayer class. Each instance, returned by PdfClient.GetOcgs(documentId), represents one OCG entry and exposes its Id, Name, ParentId, DefaultVisible, and IsVisible properties. Matching a layer's Id against the OcgId on TextObject and PathObject instances links page content to the layer that owns it. ToString() provides a concise Id-and-Name string for diagnostics.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfLayer live in the IronPDF API?",
    "answer": "PdfLayer is a class in the IronSoftware namespace, shipped in IronPdf.dll. It derives from Object and is returned by PdfClient.GetOcgs(documentId) as part of IronPDF's Optional Content Group support."
  },
  {
    "question": "How do you retrieve all layers from a PDF document in C#?",
    "answer": "Call PdfClient.GetOcgs(documentId) to receive a collection of PdfLayer objects. Each entry exposes Id, Name, ParentId, IsVisible, and DefaultVisible so you can enumerate and inspect the full OCG tree."
  },
  {
    "question": "What is the difference between DefaultVisible and IsVisible on PdfLayer?",
    "answer": "DefaultVisible reflects the visibility state encoded by the document author in the OCG dictionary. IsVisible reflects the current runtime state, which may differ if the document's open action or an API call has changed layer visibility since the document was loaded."
  },
  {
    "question": "How do you connect a PdfLayer to the text or path objects it contains?",
    "answer": "Compare the PdfLayer's Id property against the OcgId property on TextObject and PathObject instances retrieved from the same document. Matching IDs indicate that the content object belongs to that layer."
  }
]
```