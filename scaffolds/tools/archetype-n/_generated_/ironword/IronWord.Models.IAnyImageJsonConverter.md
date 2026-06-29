<!--
N-Mid / class (2 overrides: ReadJson, WriteJson). Frame B. IronWord.
Base type Newtonsoft.Json.JsonConverter<IAnyImage> verified (docfx obfuscates the namespace token).
Members verified 2026-06-23. IAnyImage has no page in this api dir (IronSoftware.Drawing type).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IAnyImageJsonConverter.html
-->

## Injected overview (Markdown)

`IAnyImageJsonConverter` is the Newtonsoft.Json converter that serializes and deserializes an `IAnyImage` when IronWord reads or writes its object model as JSON. It is the bridge that lets an image-bearing element survive a round trip through JSON, rather than something application code calls directly.

The converter extends Newtonsoft's generic `JsonConverter<IAnyImage>` and overrides the two members that type does: `WriteJson` emits an `IAnyImage` into a JSON writer, and `ReadJson` reconstructs one from a JSON reader. Newtonsoft invokes these during serialization, so the usual way to use the converter is to register it on the serializer settings; you rarely call `ReadJson` or `WriteJson` yourself. This matters when you persist or transmit a document fragment that carries an image and need the image content preserved across the conversion.

```csharp
JsonConvert.SerializeObject(element, new IAnyImageJsonConverter());
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) covers placing images, and the [object tree example](https://ironsoftware.com/csharp/word/examples/log-object-tree/) shows the model these images sit within.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IAnyImageJsonConverter - IronWord C# API`
- v2 (human): `IAnyImageJsonConverter: JSON for Images in C#`
- v3 (balanced): `IAnyImageJsonConverter | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Serialize an IAnyImage to and from JSON in C# with the IronWord IAnyImageJsonConverter, a Newtonsoft JsonConverter with ReadJson and WriteJson.`
- v2 (human): `Preserve images across a JSON round trip in C# with the IronWord IAnyImageJsonConverter: register it on the serializer and Newtonsoft does the rest.`
- v3 (balanced): `Reference for the IronWord IAnyImageJsonConverter in C#: the Newtonsoft JsonConverter that reads and writes an IAnyImage during serialization.`

---

## Structured data

**TechArticle abstract**

> Serializing an IAnyImage to and from JSON in C# runs through the IronWord IAnyImageJsonConverter. It extends Newtonsoft's JsonConverter of IAnyImage and overrides WriteJson and ReadJson, which Newtonsoft invokes during serialization. Register it on the serializer settings so an image-bearing document element survives a JSON round trip; application code rarely calls the methods directly.

**FAQPage entries**

```json
[
  {
    "question": "Where does IAnyImageJsonConverter live in the IronWord API?",
    "answer": "IAnyImageJsonConverter is a class in the IronWord.Models namespace, shipped in IronWord.dll. It extends Newtonsoft.Json.JsonConverter of IAnyImage and overrides ReadJson and WriteJson."
  },
  {
    "question": "How do you use IAnyImageJsonConverter in C#?",
    "answer": "Register it as a converter on the Newtonsoft serializer settings, then serialize as usual. Newtonsoft calls WriteJson and ReadJson for you; you do not normally call them directly."
  }
]
```
