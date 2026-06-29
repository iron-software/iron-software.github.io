<!--
N-Mid abstract class (only protected ctor; no public members). Frame F (imperative).
IronPPT.Models.Abstract namespace. Base Object.
Members verified 2026-06-23 against IronPPT.Models.Abstract.FormElement.html: protected FormElement() only.
Derived verified: RadioButton (IronPPT.Models.RadioButton), TextInput (IronPPT.Models.TextInput).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.FormElement.html
-->

## Injected overview (Markdown)

Reach for `FormElement` when you need the common base behind interactive form controls on a slide. It marks a type as a form element, the shared parent the form controls inherit from, so code that handles them generically can treat a control as a `FormElement` regardless of its exact kind. A developer almost never names it directly; the concrete controls to work with are `RadioButton` and `TextInput`.

Because the class is abstract and exposes only a protected constructor, a `FormElement` is never created on its own. Instead a developer builds a `RadioButton` or a `TextInput` and, where it helps, holds or passes it as a `FormElement` so a single routine can accept any form control. That shared base is what lets a slide's interactive pieces be grouped and processed together.

The two derived controls add their own surface on top of this base: a `RadioButton` is the selectable option control and a `TextInput` the editable text field. Use the base when the distinction does not matter and the concrete type when it does. Treating the controls as `FormElement` keeps code that collects or iterates the form pieces simple, since it works against the one base rather than each control type.

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) covers building slide content, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through the element model these controls fit into.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FormElement Class - IronPPT C# API`
- v2 (human): `FormElement: The Slide Form Control Base in C#`
- v3 (balanced): `FormElement Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT FormElement base in C# is the shared parent of slide form controls, inherited by RadioButton and TextInput.`
- v2 (human): `FormElement is the IronPPT base for slide form controls in C#: the common parent behind RadioButton and TextInput.`
- v3 (balanced): `Reference for the IronPPT FormElement class in C#: the abstract base for slide form controls such as RadioButton and TextInput.`

---

## Structured data

**TechArticle abstract**

> Group slide form controls under one base in C# with the IronPPT FormElement class. It is the abstract parent the interactive controls inherit from, so code can handle any control as a FormElement. The class exposes only a protected constructor and is never created directly; the concrete controls that derive from it are RadioButton and TextInput.

**FAQPage entries**

```json
[
  {
    "question": "Where does FormElement live in the IronPPT API?",
    "answer": "FormElement is an abstract class in the IronPPT.Models.Abstract namespace, shipped in IronPPT.dll, deriving from Object. It is the shared base for slide form controls and exposes only a protected constructor."
  },
  {
    "question": "What derives from FormElement in IronPPT?",
    "answer": "RadioButton and TextInput derive from FormElement. Because the base is abstract you create one of these concrete controls and, when it helps, hold or pass it as a FormElement so one routine can accept any form control."
  }
]
```
