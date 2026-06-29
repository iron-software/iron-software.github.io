<!--
N-Full / interface (7 members). Frame C. Bare interface (extends nothing).
Members verified 2026-06-23: BulletColor (IColor), Characters (string), FollowsDefaultTextColor (bool), FollowsDefaultTextFont (bool), FollowsDefaultTextSize (bool), Font (IFont), Picture (IImage).
Implementor: Bullet (IronPPT.Models.Styles). Returned/consumed by IParagraphStyle.Bullet and ParagraphStyle.Bullet (verified).
Idiom from examples/customized-bullet-point: new Bullet() in a ParagraphStyle initializer.
Namespace IronPPT.Interfaces, IronPPT.dll.
Target: IronPPT.Interfaces.IBullet.html
-->

## Injected overview (Markdown)

When a list item needs its own bullet glyph, color, or picture marker, `IBullet` is the contract that describes it. It models the bullet attached to a paragraph: the symbol shown before the text, how that symbol is colored and sized, and whether each aspect inherits from the surrounding text or overrides it. A developer styling list bullets on a slide works through this contract rather than touching the raw presentation markup.

A bullet is reached through a paragraph's style. `IParagraphStyle.Bullet` (and the concrete `ParagraphStyle.Bullet`) returns an `IBullet`, so the usual flow is to build a `ParagraphStyle`, assign its `Bullet`, and apply the style to a `Paragraph`. The concrete implementor in IronPPT is `Bullet`, in the `IronPPT.Models.Styles` namespace; most code constructs `new Bullet()` in a style initializer rather than naming the interface, but typing against `IBullet` keeps a styling helper independent of the concrete class.

The everyday members are `Characters`, the bullet glyph text; `Picture`, an `IImage` to use a graphic marker instead of a character; `BulletColor`, an `IColor` for the glyph; and `Font`, an `IFont` for the symbol typeface. The three `FollowsDefaultText` flags (`FollowsDefaultTextColor`, `FollowsDefaultTextFont`, `FollowsDefaultTextSize`) make the bullet inherit the paragraph's text color, font, or size; leave them on for a consistent look or turn one off to override that one aspect. Setting `Picture` produces an image bullet, which overrides the character glyph.

```csharp
var style = new ParagraphStyle()
{
    Bullet = new Bullet()
    {
        Characters = "•",
        FollowsDefaultTextSize = true
    }
};
```

The [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) walks through styling a bullet, the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) adds the paragraph the style applies to, and the [IParagraphStyle reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IParagraphStyle.html) returns the bullet through its `Bullet` property.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IBullet Interface - IronPPT C# API Reference`
- v2 (human): `IBullet: Style List Bullets in C#`
- v3 (balanced): `IBullet Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IBullet is the IronPPT bullet contract in C#: Characters, Picture, BulletColor, Font, and FollowsDefaultText flags, implemented by Bullet via ParagraphStyle.`
- v2 (human): `Style a list bullet in C# through the IronPPT IBullet contract: set its glyph, picture, color, and font, or follow the paragraph's default text.`
- v3 (balanced): `Reference for the IronPPT IBullet interface in C#: the bullet styling contract returned by ParagraphStyle.Bullet and implemented by Bullet.`

---

## Structured data

**TechArticle abstract**

> Style the bullet on a list paragraph in IronPPT through the IBullet contract in C#. It describes the marker shown before list text: Characters for the glyph, Picture for an image bullet, BulletColor and Font for its appearance, and FollowsDefaultTextColor, FollowsDefaultTextFont, and FollowsDefaultTextSize to inherit from the paragraph text. A bullet is reached through ParagraphStyle.Bullet and implemented by the Bullet class.

**FAQPage entries**

```json
[
  {
    "question": "Where does IBullet live in the IronPPT API?",
    "answer": "IBullet is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and is returned by IParagraphStyle.Bullet."
  },
  {
    "question": "What implements IBullet in IronPPT?",
    "answer": "The Bullet class in the IronPPT.Models.Styles namespace implements IBullet. Most code creates a new Bullet() inside a ParagraphStyle initializer and assigns it to the style's Bullet property rather than naming the interface."
  },
  {
    "question": "How do you give a list item a picture bullet in IronPPT?",
    "answer": "Set the Picture property of an IBullet to an IImage. A picture bullet overrides the Characters glyph. Assign the bullet to a ParagraphStyle and apply that style to the Paragraph, as shown in the customized bullet point example."
  }
]
```
