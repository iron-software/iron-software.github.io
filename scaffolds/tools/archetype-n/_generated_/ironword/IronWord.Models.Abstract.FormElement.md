<!--
N-Mid (abstract marker base, 0 public members beyond ctor). Frame B. IronWord. Verified 2026-06-23.
Only protected ctor declared. Derived: RadioButton, TextInput. No code (marker type). Target: IronWord.Models.Abstract.FormElement.html
-->

## Injected overview (Markdown)

Treating the interactive form controls of an IronWord document as one family in C# is what `FormElement` makes possible. It groups the form-field types under one parent so a developer can handle radio buttons and text inputs through a single reference when building or reading a fillable Word document. The base itself carries no fillable behavior of its own; it exists to give the form controls a common type.

The concrete elements that extend it are `RadioButton` and `TextInput`, and those are the types a developer instantiates and configures. A `FormElement` reference is what you hold when a routine should accept either control without caring which one it received, for example when iterating mixed form fields. Because the type is abstract, it is never constructed directly; you work with one of its derived controls and rely on `FormElement` only as the common base.

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) builds document content, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains where elements like form controls sit in the model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FormElement Class - IronWord C# API`
- v2 (human): `FormElement: The Word Form Control Base in C#`
- v3 (balanced): `FormElement Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `FormElement is the IronWord base for Word form controls in C#: RadioButton and TextInput derive from it, so code can treat form fields as one family.`
- v2 (human): `Group Word form controls under one type in C# with IronWord's FormElement base: RadioButton and TextInput share it as their common parent.`
- v3 (balanced): `Reference for the IronWord FormElement class in C#: the abstract base behind the RadioButton and TextInput form controls.`

---

## Structured data

**TechArticle abstract**

> Grouping the interactive form controls of a Word document under one type in C# is the role of the IronWord FormElement base class. RadioButton and TextInput derive from it, so a routine can accept either control through a shared FormElement reference. The base is abstract and carries no fillable behavior of its own; you work with the derived controls.

**FAQPage entries**

```json
[
  {
    "question": "Where does FormElement live in the IronWord API?",
    "answer": "FormElement is an abstract class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from System.Object and is the base for the RadioButton and TextInput form controls."
  },
  {
    "question": "What types derive from FormElement in IronWord?",
    "answer": "RadioButton and TextInput extend FormElement. Instantiate and configure those concrete controls directly; use a FormElement reference only when a routine should accept either form field without naming the specific type."
  }
]
```
