<!--
N-Mid (TextInput, 1 ctor only; base FormElement). Frame B (identity-by-role). Marker type, code 0. IronWord.
Members verified 2026-06-23: TextInput() only own member; base public abstract FormElement : Object (FormElement() ctor).
Sibling: RadioButton (also a FormElement). Form.Elements holds form elements.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TextInput.html
-->

## Injected overview (Markdown)

`TextInput` is the free-text form field you add to a Word document when a reader is expected to type a value, such as a name, date, or comment on a fillable form. It represents one text-entry control in the document's form, sitting alongside the other form elements a template offers.

A `TextInput` is a `FormElement`, the same family as `RadioButton`, so it goes into the document's form area where elements are collected. You create one with its default constructor and add it where the form is built, and IronWord renders it as an editable text field in the saved file. As a form-element marker it carries no configuration of its own beyond what the base form element and the surrounding document provide, so the work is in placing it where the input belongs rather than tuning many properties. Use it whenever a form needs an open text response rather than a fixed choice, and pair it with the choice-style elements when a template mixes typed answers and selections.

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers writing text into a document, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how form and content elements fit the model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextInput Class - IronWord C# API Reference`
- v2 (human): `TextInput: Word Form Text Fields in C#`
- v3 (balanced): `TextInput Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add text form fields to Word documents in C# with the IronWord TextInput class, a FormElement for free-text entry alongside other form controls.`
- v2 (human): `Create fillable text fields in C# Word forms with the IronWord TextInput class: a form element for open text responses next to choice controls.`
- v3 (balanced): `Reference for the IronWord TextInput class in C#: a FormElement that adds a free-text entry field to a Word document's form.`

---

## Structured data

**TechArticle abstract**

> Adding a free-text form field to a C# Word document goes through the IronWord TextInput class. It is a form element for typed responses such as a name, date, or comment, created with its default constructor and placed where the document's form is built. It sits in the same FormElement family as RadioButton, so it goes into the form's element collection and renders as an editable text field.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextInput live in the IronWord API?",
    "answer": "TextInput is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from the abstract FormElement base type, the same family as RadioButton, so it is added to a document's form as a text-entry control."
  }
]
```
