<!--
N-Mid (3 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronSoftware.PdfLayerCollection class reference page.
-->

## Injected overview (Markdown)

Navigating a PDF's optional content groups becomes straightforward with `PdfLayerCollection`, a read-only handle that wraps the document's full layer tree and exposes targeted lookup helpers. Extending `ReadOnlyCollection<PdfLayer>`, it preserves the integrity of the layer structure while giving callers two direct retrieval paths and one tree-traversal method.

`FindById` locates a single `PdfLayer` by its integer identifier, the fastest route when the id is already known from a prior inspection pass. `FindByName` accepts a string and returns the matching layer, useful when working from human-readable layer names embedded in a PDF's metadata. `ChildrenOf` takes a parent id and returns an `IEnumerable<PdfLayer>` of all direct children, letting you walk nested layer groups without manually filtering the full collection. Together, these three members cover the two everyday tasks: pinpointing a specific layer and understanding the hierarchy beneath a given node.

Because `PdfLayerCollection` derives from `ReadOnlyCollection<PdfLayer>`, standard LINQ queries work directly on it alongside the dedicated helpers. You can, for example, call `ChildrenOf` to get a subtree and then apply `.Where` or `.Select` to that result without any additional conversion.

```csharp
using IronPdf;

PdfDocument pdf = PdfDocument.FromFile("layered.pdf");
PdfLayerCollection layers = pdf.Layers;

PdfLayer background = layers.FindByName("Background");
foreach (PdfLayer child in layers.ChildrenOf(background.Id))
    Console.WriteLine(child.Name);
```

For broader context on working with PDF layers in IronPDF, see the [PDF layers how-to](https://ironpdf.com/how-to/pdf-layers/) and the [IronPDF examples library](https://ironpdf.com/examples/pdf-layers/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfLayerCollection Class - IronPDF C# API`
- v2 (human): `PdfLayerCollection: Find & Navigate PDF Layers in C#`
- v3 (balanced): `PdfLayerCollection Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use PdfLayerCollection in IronPDF C# to find PDF layers by id or name and traverse nested layer groups with FindById, FindByName, and ChildrenOf.`
- v2 (human): `Look up and navigate PDF optional content groups in C# with IronPDF's PdfLayerCollection: find layers by id or name, and walk child layer trees.`
- v3 (balanced): `Reference for IronPDF's PdfLayerCollection in C#: locate PDF layers by id or name with FindById, FindByName, and traverse subtrees with ChildrenOf.`

---

## Structured data

**TechArticle abstract**

> PdfLayerCollection gives C# developers a read-only handle over a PDF document's full layer tree in IronPDF. Extending ReadOnlyCollection of PdfLayer, it provides FindById to retrieve a layer by integer id, FindByName to locate one by string name, and ChildrenOf to enumerate the direct children of a given parent layer, enabling both targeted lookup and hierarchical traversal of optional content groups.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfLayerCollection live in the IronPDF API?",
    "answer": "PdfLayerCollection is a class in the IronSoftware namespace, shipped in IronPdf.dll. It extends ReadOnlyCollection<PdfLayer> and is obtained from a PdfDocument's Layers property."
  },
  {
    "question": "How do you find a specific PDF layer by name in C#?",
    "answer": "Call FindByName on a PdfLayerCollection, passing the layer's string name. Use FindById instead when you have the integer id. To retrieve all children of a layer, pass its id to ChildrenOf, which returns an IEnumerable<PdfLayer>."
  }
]
```