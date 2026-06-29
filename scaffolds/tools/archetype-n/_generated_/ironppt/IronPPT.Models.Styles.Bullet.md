<!--
N-Full / class. Frame C. IronPPT. Namespace IronPPT.Models.Styles. Base Object. Implements IBullet.
Members verified 2026-06-23: BulletColor (IColor), Characters (string), FollowsDefaultTextColor/Font/Size (Nullable<bool>),
Font (IFont), Picture (IImage).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Styles.Bullet.html
-->

## Injected overview (Markdown)

When a paragraph needs a custom marker in front of it, `Bullet` defines that marker. It is the bullet style applied to list text in a presentation, deciding whether the marker is a character or a picture, what color and font it uses, and where it falls back to the paragraph's own text styling.

A `Bullet` is the concrete implementation behind the `IBullet` contract, so code that reads or sets a bullet style works through this object. You configure it by choosing a marker source, then deciding which aspects inherit from the surrounding text. `Characters` sets the literal marker glyph, while `Picture`, an `IImage`, supplies an image bullet instead. `BulletColor` is an `IColor` for the marker, and `Font`, an `IFont`, sets its typeface. The three `FollowsDefaultText` flags, each a `Nullable<bool>`, control inheritance: `FollowsDefaultTextColor`, `FollowsDefaultTextFont`, and `FollowsDefaultTextSize` make the marker borrow the paragraph's color, font, or size rather than the explicit values, so leaving one true keeps the bullet matched to its text.

Set `Characters` or `Picture` for the marker itself, then set the `FollowsDefaultText` flags to decide what the bullet inherits and supply `BulletColor` or `Font` only for the aspects you want to override. Because the flags are nullable, an unset flag leaves that aspect at the document default rather than forcing a choice, which keeps a bullet matched to its theme until you deliberately depart from it. A character marker and a picture marker are alternatives, so set one source and leave the other unset.

```csharp
var bullet = new Bullet();
bullet.Characters = "•";
bullet.FollowsDefaultTextColor = true;
```

The [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) walks through styling a bullet, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows the surrounding paragraph formatting, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) adds the text a bullet sits in front of.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Bullet Class - IronPPT C# API Reference`
- v2 (human): `Bullet: Style List Markers in C#`
- v3 (balanced): `Bullet Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style list markers in C# with the IronPPT Bullet class: set Characters or Picture, BulletColor, Font, and the FollowsDefaultText inheritance flags.`
- v2 (human): `Customize bullet points in C# with the IronPPT Bullet class: pick a character or picture marker, set its color and font, or inherit from the text.`
- v3 (balanced): `Reference for the IronPPT Bullet class in C#: configure a character or picture marker, its color and font, and what it inherits from the paragraph.`

---

## Structured data

**TechArticle abstract**

> Defining a custom list marker in C# runs through the IronPPT Bullet class, the implementation behind IBullet. Characters sets the glyph and Picture supplies an image bullet, while BulletColor and Font style the marker. The FollowsDefaultTextColor, FollowsDefaultTextFont, and FollowsDefaultTextSize flags make the marker inherit the paragraph's color, font, or size instead of explicit values.

**FAQPage entries**

```json
[
  {
    "question": "Where does Bullet live in the IronPPT API?",
    "answer": "Bullet is a class in the IronPPT.Models.Styles namespace, shipped in IronPPT.dll. It derives from System.Object and implements the IBullet interface, so code that handles a bullet style works through it."
  },
  {
    "question": "How do you set a custom bullet marker in C#?",
    "answer": "Set Characters to a glyph string for a character marker, or set Picture to an IImage for an image bullet. Style it with BulletColor and Font, or set the FollowsDefaultText flags so the marker inherits the paragraph's color, font, or size."
  },
  {
    "question": "What is the difference between Bullet and IBullet in IronPPT?",
    "answer": "IBullet is the contract for a bullet style and Bullet is the concrete class that implements it. Construct a Bullet to define a marker; reference IBullet where a member returns or accepts a bullet style without binding to the concrete type."
  }
]
```
