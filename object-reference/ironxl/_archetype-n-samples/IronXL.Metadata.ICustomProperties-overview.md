<!--
N-Mid / interface (6 methods). Frame E. No concrete implementor in api dir; returned by IMetadata.CustomProperties. Members AddProperty(string,object)/Contains(string)/GetValue(string)/GetValue<T>(string)/Remove(string)/TryGetValue<T>(string,out T) verified. IMetadata.CustomProperties cross-ref verified 2026-06-23.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Metadata.ICustomProperties.html
-->

## Injected overview (Markdown)

Application-defined fields that a spreadsheet carries beyond the standard author and title, such as a project code, a review status, or a department tag, live behind `ICustomProperties`. A developer uses this contract to attach arbitrary named values to a workbook and read them back, the same custom properties Excel exposes under File, Info, Properties, Advanced. Where `IMetadata` covers the fixed Office fields, `ICustomProperties` holds the open-ended key/value pairs a team defines for itself.

A developer obtains an `ICustomProperties` from the metadata: `IMetadata.CustomProperties` returns it for the open workbook, and there is no constructor to call. The collection is edited in place and saved with the file. `AddProperty(string name, object value)` stores a named value of any type, `Contains(string name)` checks whether a key is present, and `Remove(string name)` deletes one. Reading offers two forms: `GetValue(string name)` returns an `object`, while the generic `GetValue<T>(string name)` returns the value typed, and `TryGetValue<T>(string name, out T value)` reads it safely without throwing when the key is missing. Prefer the `TryGetValue<T>` pattern for keys that may not exist.

```csharp
ICustomProperties properties = workbook.Metadata.CustomProperties;
properties.AddProperty("ProjectCode", "X-42");
```

The [edit Excel metadata example](https://ironsoftware.com/csharp/excel/examples/edit-excel-metadata-csharp/) writes document properties, and the [edit workbook metadata how-to](https://ironsoftware.com/csharp/excel/how-to/edit-workbook-metadata/) walks through reading and updating them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ICustomProperties Interface - IronXL C# API`
- v2 (human): `ICustomProperties: Custom Excel Fields in C#`
- v3 (balanced): `ICustomProperties Interface | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ICustomProperties is the IronXL contract for custom Excel fields in C#: AddProperty, Contains, Remove, GetValue, GetValue<T>, and TryGetValue<T>.`
- v2 (human): `Attach custom named values to a spreadsheet in C# with IronXL's ICustomProperties: add, check, read, and remove application-defined fields.`
- v3 (balanced): `Reference for the IronXL ICustomProperties interface in C#: the contract IMetadata.CustomProperties returns for custom workbook fields.`

---

## Structured data

**TechArticle abstract**

> ICustomProperties is the IronXL contract for a workbook's application-defined fields in C#. IMetadata.CustomProperties returns it. AddProperty stores a named value of any type, Contains checks a key, Remove deletes one, and GetValue, the generic GetValue<T>, and TryGetValue<T> read values back. The collection is edited in place and saved with the file.

**FAQPage entries**

```json
[
  {
    "question": "Where does ICustomProperties live in the IronXL API?",
    "answer": "ICustomProperties is an interface in the IronXL.Metadata namespace, shipped in IronXL.dll. The IMetadata.CustomProperties property returns it for an open workbook."
  },
  {
    "question": "What returns an ICustomProperties in IronXL?",
    "answer": "IMetadata.CustomProperties returns the ICustomProperties for a workbook. There is no public constructor; the collection belongs to the workbook's metadata, so it is edited in place with AddProperty and Remove and saved with the file."
  }
]
```
