<!--
N-Mid (form control, 1 declared member). Frame C (when-fronted). IronWord.Models.
Verified 2026-06-23: public class RadioButton : FormElement. Ctor RadioButton(). Base FormElement (abstract : Object).
No code (marker/control type; member-light). No invented members.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.RadioButton.html
-->

## Injected overview (Markdown)

When a Word form needs a single-choice control, `RadioButton` represents one of those selectable options in the document. A developer adding interactive form fields uses it for the familiar pick-one input, where several buttons belong to a group and only one can be chosen at a time. It is the form element a developer reaches for when a checkbox would allow too many selections and the answer should be mutually exclusive.

`RadioButton` is one of IronWord's form elements, sharing the common `FormElement` foundation with the document's other interactive controls, so it slots into the same form-building flow rather than standing alone. A developer creates one and places it where the choice should appear as part of laying out the form, which keeps radio buttons grouped with the rest of the form's fields.

Construct a `RadioButton` with its parameterless constructor and add it to the document where the option belongs. Because it carries the shared form-element behavior from `FormElement`, treat it as a building block within a form's layout: create the buttons that make up a choice group, position them together, and let the document model handle them as form controls alongside the other field types.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) show how elements are placed into a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RadioButton Class - IronWord C# API`
- v2 (human): `RadioButton: Single-Choice Word Form Fields in C#`
- v3 (balanced): `RadioButton Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a single-choice form control to a Word document in C# with the IronWord RadioButton class, a FormElement for mutually exclusive options.`
- v2 (human): `Build pick-one form inputs in a Word document in C# with the IronWord RadioButton class: group several buttons so only one can be selected.`
- v3 (balanced): `Reference for the IronWord RadioButton class in C#: a FormElement representing one selectable option in a single-choice form group.`

---

## Structured data

**TechArticle abstract**

> Adding a single-choice form control to a Word document in C# uses the IronWord RadioButton class. It represents one selectable option in a pick-one group and shares the common FormElement foundation with IronWord's other interactive controls. Construct one with its parameterless constructor and place it where the choice should appear in the form.

**FAQPage entries**

```json
[
  {
    "question": "Where does RadioButton live in the IronWord API?",
    "answer": "RadioButton is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from the abstract FormElement base type, so it behaves as one of the document's interactive form controls."
  }
]
```
