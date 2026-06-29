<!--
N-Mid (1 member: Elements -> List<FormElement>). Frame D. IronWord.
Members verified 2026-06-23. FormElement abstract; RadioButton/TextInput : FormElement verified.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Form.html
-->

## Injected overview (Markdown)

Grouping the interactive controls of a Word document runs through `Form`, the container that holds a document's form fields together. Its one property, `Elements`, is a `List<FormElement>`, so the form is the collection point you read or build when a document carries inputs the reader is expected to fill in.

Each entry in `Elements` is a concrete `FormElement`, such as a `TextInput` for a typed value or a `RadioButton` for a chosen option. Because `Elements` is a standard list, you add controls to it, iterate over the existing ones, or clear it, the same way you would any `List<T>`. Construct a `Form`, populate `Elements` with the field objects the document needs, and place that form on the document so the controls render in order. When you read an existing document, walk `Elements` to discover which inputs it contains and inspect each one by its concrete type.

```csharp
Form form = new Form();
form.Elements.Add(new TextInput());
```

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains how elements compose a document, and the [object tree example](https://ironsoftware.com/csharp/word/examples/log-object-tree/) prints the structure a form sits within.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Form Class - IronWord C# API Reference`
- v2 (human): `Form: Hold Word Form Fields in C#`
- v3 (balanced): `Form Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Group Word form fields in C# with the IronWord Form class: its Elements property is a List of FormElement holding controls like TextInput.`
- v2 (human): `Collect a Word document's interactive controls in C# with the IronWord Form class: add TextInput and RadioButton fields to its Elements list.`
- v3 (balanced): `Reference for the IronWord Form class in C#: the container whose Elements list holds FormElement controls such as TextInput and RadioButton.`

---

## Structured data

**TechArticle abstract**

> Grouping a Word document's interactive controls in C# runs through the IronWord Form class. Its Elements property is a List of FormElement, so a Form collects the document's fields, such as TextInput and RadioButton, in order. Add controls to Elements when building a document, or iterate the list to inspect the inputs an existing document contains.

**FAQPage entries**

```json
[
  {
    "question": "Where does Form live in the IronWord API?",
    "answer": "Form is a class in the IronWord.Models namespace, shipped in IronWord.dll, with base type Object. Its Elements property is a List of FormElement that holds the document's interactive controls."
  },
  {
    "question": "What goes in a Form's Elements list in C#?",
    "answer": "Each entry is a concrete FormElement, such as a TextInput for a typed value or a RadioButton for a chosen option. Because Elements is a standard List, you add, iterate, or clear controls as you would any List."
  }
]
```
