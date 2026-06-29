<!--
N-Mid / interface. Frame E (feature-fronted). Implementor: Rotation. Sibling to IPercentage -> different frame. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IRotation.html
-->

## Injected overview (Markdown)

The rotation angle applied to a slide shape or graphic, expressed in degrees, is read and set through `IRotation`. A developer reaches for it to tilt a text box, spin an image, or angle a shape away from the horizontal, and assigns the angle through one place rather than scattering raw numbers across drawing code. Wrapping the angle in a contract keeps a rotation value distinct from the position and size measurements a shape also carries.

A developer usually obtains an `IRotation` from the element that supports rotation rather than building one directly. The concrete implementor in IronPPT is `Rotation`, and the contract exposes a single `Value` of type `double`, the angle in degrees, plus `ToString` for display. Reading `Value` reports the current angle; assigning it rotates the element. Positive and negative angles turn the element in opposite directions, so the same property both tilts and untilts.

```csharp
IRotation rotation = new Rotation();
rotation.Value = 45.0;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places shapes a rotation can angle, and the [add image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) covers the images it spins.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IRotation Interface - IronPPT C# API`
- v2 (human): `IRotation: Slide Shape Rotation in C#`
- v3 (balanced): `IRotation Interface | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IRotation is the IronPPT rotation contract in C#: a double Value angle in degrees for shapes and graphics, implemented by Rotation.`
- v2 (human): `Tilt or spin a slide shape in C# through IronPPT's IRotation contract: set the angle in degrees through a single Value, implemented by Rotation.`
- v3 (balanced): `Reference for the IronPPT IRotation interface in C#: the rotation contract carrying a double angle Value in degrees, implemented by Rotation.`

---

## Structured data

**TechArticle abstract**

> Tilt or spin a slide shape or graphic in C# through IronPPT's IRotation contract. It carries a single double Value, the rotation angle in degrees, and a ToString method for display. Positive and negative angles turn the element in opposite directions. The concrete implementor is Rotation, usually obtained from the element that supports rotation rather than constructed directly.

**FAQPage entries**

```json
[
  {
    "question": "Where does IRotation live in the IronPPT API?",
    "answer": "IRotation is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface; it carries a double Value holding the angle in degrees and a ToString method, and is implemented by the Rotation class."
  },
  {
    "question": "How do you rotate a slide shape with IRotation?",
    "answer": "Set the Value property to the angle in degrees on the element's rotation. A positive angle turns the element one way and a negative angle turns it the other, so the same Value both applies and reverses a tilt."
  }
]
```
