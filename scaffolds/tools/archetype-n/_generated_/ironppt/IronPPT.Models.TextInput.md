<!--
N-Mid (marker type: only public ctor; base FormElement : Object). Frame B. IronPPT. No code (no usable own members). Verified 2026-06-23.
Target: IronPPT.Models.TextInput.html
-->

## Injected overview (Markdown)

`TextInput` is the form-input element a developer reaches for when a slide needs an editable text field rather than static text. It models a single text-entry control in the presentation's form layer, sitting alongside the other content a slide carries.

The type is deliberately small: it exposes a public constructor and inherits its behavior from the abstract `FormElement` base, which groups the interactive form controls in IronPPT. Because the form surface is thin, most slide text is added through `Slide.AddText` and the `Text` content element instead; reach for `TextInput` specifically when the slide is meant to collect input rather than display fixed wording. For the everyday case of placing and styling readable text, the text and paragraph workflows are the right entry points, and `TextInput` stays reserved for the form-field scenario.

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing text on a slide, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds structured text content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextInput Class - IronPPT C# API Reference`
- v2 (human): `TextInput: Slide Form Text Fields in C#`
- v3 (balanced): `TextInput Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add an editable text field to a slide in C# with the IronPPT TextInput class, a form element that inherits from the FormElement base type.`
- v2 (human): `Model an editable slide text field in C# with the IronPPT TextInput class: a small form control built on FormElement for input scenarios.`
- v3 (balanced): `Reference for the IronPPT TextInput class in C#: the form text-input element built on FormElement, for slides that collect input.`

---

## Structured data

**TechArticle abstract**

> TextInput is the form text-input element in IronPPT for C# slides that need an editable field rather than static text. It exposes a public constructor and inherits from the abstract FormElement base. For ordinary readable text, use Slide.AddText and the Text element; reserve TextInput for the form-field scenario.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextInput live in the IronPPT API?",
    "answer": "TextInput is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from the abstract FormElement base type, which groups the interactive form controls in IronPPT."
  },
  {
    "question": "When should you use TextInput instead of AddText in C#?",
    "answer": "Use TextInput when a slide needs an editable form field. For displaying fixed wording, call Slide.AddText to get a Text element, which carries the characters and the styling instead."
  }
]
```
