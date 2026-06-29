<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronSoftware.FormFieldCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with Iron Software API in IronPDF runs through `FormFieldCollection`. It represents observable collection of form fields.

`FormFieldCollection` matters when an application needs to configure or invoke Iron Software API from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `FormFieldCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `IsReadOnly`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain FormFieldCollection from the relevant entry point in the IronPDF API
void Configure(FormFieldCollection instance)
{
    var current = instance.IsReadOnly;
    instance.Add();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the Iron Software API portion of the IronPDF C# API contains related types that work with `FormFieldCollection` directly. `FormFieldCollection` instances inherit additional members from `ObservableCollection<IFormField>` that may be relevant in advanced scenarios. In application code, treat `FormFieldCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `FormFieldCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `FormFieldCollection`. Application code typically obtains or instantiates a single `FormFieldCollection` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `FormFieldCollection` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FormFieldCollection Class - IronPDF C# API Reference`
- v2 (human): `FormFieldCollection: IronPDF Iron Software API in C#`
- v3 (balanced): `FormFieldCollection Class | IronPDF C# Iron Software API`

**Meta-description (120-160 chars)**
- v1 (algorithm): `FormFieldCollection is the IronPDF class for Iron Software API in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF FormFieldCollection class reference for C#: observable collection of form fields.`
- v3 (balanced): `FormFieldCollection (Iron Software API) in IronPDF for C#: observable collection of form fields. See members and usage.`

---

## Structured data

**TechArticle abstract**

> FormFieldCollection is the IronPDF C# entry point for Iron Software API, which provides observable collection of form fields. FormFieldCollection is in the IronSoftware namespace, derived from ObservableCollection<IFormField>. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does FormFieldCollection live in the IronPDF API?",
    "answer": "FormFieldCollection is in the IronSoftware namespace, shipped in IronPdf.dll. It derives from ObservableCollection<IFormField>."
  },
  {
    "question": "What is the FormFieldCollection class used for in C#?",
    "answer": "FormFieldCollection is the IronPDF class that observable collection of form fields. It is part of the IronSoftware namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of FormFieldCollection?",
    "answer": "Properties commonly used on FormFieldCollection include IsReadOnly. Each property configures one aspect of the Iron Software API surface exposed by the class."
  },
  {
    "question": "What methods are available on FormFieldCollection?",
    "answer": "Common methods include Add, Clear, DisableFormFontFallback, FindFormField. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).