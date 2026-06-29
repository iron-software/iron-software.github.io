<!--
N-Mid / interface (1 member, extends IBaseColorField). Frame B lead. Implementor: ColorField. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IColorField.html
-->

## Injected overview (Markdown)

`IColorField` is the contract for a single color channel inside a presentation color, the kind of value a developer reads or sets when adjusting one component of red, green, or blue. It adds a `Value` property typed as a `byte`, the 0 to 255 intensity of that one channel, on top of the base color-field contract it extends. Coding against the contract keeps channel handling uniform whether the field came from an RGB color or an alpha component.

The concrete implementor in IronPPT is `ColorField`, which is what the `R`, `G`, `B`, and `A` properties of a color return. A developer usually reaches a field through one of those properties on an `IColor` rather than constructing it, then reads or assigns `Value` to change that single channel. Working with the field directly is useful when you want to nudge one component without rebuilding the whole color.

```csharp
IColorField red = color.R;
red.Value = 0xC0;
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) applies color while styling text, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) sets fill colors built from these channels.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IColorField - IronPPT C# API`
- v2 (human): `IColorField: A Single Color Channel in C#`
- v3 (balanced): `IColorField Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IColorField is IronPPT's color-channel contract in C#: it adds a byte Value over IBaseColorField. Implemented by ColorField, returned by color R, G, B.`
- v2 (human): `Adjust one color channel in C# through IronPPT's IColorField contract: read or set its byte Value, the value the R, G, and B properties return.`
- v3 (balanced): `Reference for the IronPPT IColorField interface in C#: the single-channel contract extending IBaseColorField, implemented by ColorField.`

---

## Structured data

**TechArticle abstract**

> Adjusting one channel of a presentation color in IronPPT runs through the IColorField contract in C#. It adds a byte Value, the 0 to 255 intensity, on top of the IBaseColorField contract it extends. The concrete implementor is ColorField, which the R, G, B, and A properties of an IColor return, so you reach a field through a color rather than constructing it.

**FAQPage entries**

```json
[
  {
    "question": "Where does IColorField live in the IronPPT API?",
    "answer": "IColorField is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IBaseColorField and adds a byte Value property for one channel's intensity."
  },
  {
    "question": "What implements IColorField in IronPPT?",
    "answer": "ColorField implements IColorField. You usually receive one from the R, G, B, or A property of an IColor rather than constructing it, then read or set Value to change that single channel."
  }
]
```
