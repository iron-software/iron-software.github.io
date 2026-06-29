<!--
N-Mid (marker form element; only public ctor). Frame B. IronPPT. No code (marker type, 0 usable members).
Base FormElement (abstract : Object). NS IronPPT.Models, IronPPT.dll. Verified 2026-06-23.
Target: IronPPT.Models.RadioButton.html
-->

## Injected overview (Markdown)

`RadioButton` is the form-control object that represents a single radio option on a slide, the mutually exclusive choice a viewer selects in an interactive PowerPoint form. It models one button in a group, the kind used for a survey answer or a single-pick question embedded in a presentation.

A `RadioButton` is created with its parameterless constructor and added to a slide as a form element. It derives from the abstract `FormElement` base that the presentation's interactive controls share, so it is placed and managed the same way as the other form items on a slide. The type itself is intentionally small, a marker for the control, with its appearance and grouping handled through the slide and styling objects that hold it rather than through properties on the button. Treat it as the element you instantiate and position; the surrounding slide model carries the layout.

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places interactive elements on a slide, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers building out slide content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RadioButton Class - IronPPT C# API Reference`
- v2 (human): `RadioButton: Slide Form Controls in C#`
- v3 (balanced): `RadioButton Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a radio option to a slide in C# with the IronPPT RadioButton class: a FormElement that models one mutually exclusive form choice.`
- v2 (human): `Model a single radio choice on a slide in C# with the IronPPT RadioButton class: a form control you create and add to a presentation.`
- v3 (balanced): `Reference for the IronPPT RadioButton class in C#: a FormElement representing one radio option in an interactive slide form.`

---

## Structured data

**TechArticle abstract**

> Representing a single radio option on a slide runs through the IronPPT RadioButton class in C#. It models one mutually exclusive choice in an interactive PowerPoint form, created with its parameterless constructor and added to a slide. RadioButton derives from the abstract FormElement base shared by the presentation's interactive controls, with layout handled through the surrounding slide model.

**FAQPage entries**

```json
[
  {
    "question": "Where does RadioButton live in the IronPPT API?",
    "answer": "RadioButton is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from the abstract FormElement base that the presentation's interactive form controls share."
  },
  {
    "question": "How do you add a radio button to a slide in C#?",
    "answer": "Create a RadioButton with its parameterless constructor and add it to a slide as a form element. Grouping and appearance are managed through the slide and styling objects that hold the control rather than on the button itself."
  }
]
```
