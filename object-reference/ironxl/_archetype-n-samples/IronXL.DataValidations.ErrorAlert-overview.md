<!--
N-Lite/enum. Members verified 2026-06-23: Stop, Warning, Information. (value__ omitted.)
Ordered by salience: Stop (blocks the entry) first, then Warning, then Information.
Cross-ref: DataValidation.ErrorAlert property typed ErrorAlert (verified).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.DataValidations.ErrorAlert.html
-->

## Injected overview (Markdown)

`ErrorAlert` sets how strictly Excel reacts when an entry fails a validation rule, assigned to the `ErrorAlert` property on a `DataValidation`. `Stop` blocks the invalid entry and forces a correction, the strictest choice and the usual default for hard rules. `Warning` flags the problem but lets the user keep the value after confirming, and `Information` simply notifies without blocking. The style pairs with `ShowErrorBox`, `ErrorBoxTitle`, and `ErrorBoxText` to control the message a rejected entry shows. The [data validation example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows rules that report errors on bad input.

```csharp
rule.ErrorAlert = ErrorAlert.Warning;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ErrorAlert Enum - IronXL C# API Reference`
- v2 (human): `ErrorAlert: Validation Alert Styles in C#`
- v3 (balanced): `ErrorAlert Enum | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the validation alert style in C# with IronXL's ErrorAlert enum: Stop blocks the entry, Warning allows it after confirming, Information notifies.`
- v2 (human): `Choose how strictly IronXL reacts to invalid Excel input in C# with the ErrorAlert enum: block with Stop, allow with Warning, or just inform.`
- v3 (balanced): `Reference for the IronXL ErrorAlert enum in C#: the data validation alert severity (Stop, Warning, Information) on a DataValidation rule.`

---

## Structured data

**TechArticle abstract**

> ErrorAlert sets how strictly Excel reacts when an entry fails a validation rule in IronXL for C#, assigned to the ErrorAlert property on a DataValidation. Stop blocks the invalid entry, Warning flags it but lets the user keep the value after confirming, and Information notifies without blocking. The style pairs with ShowErrorBox, ErrorBoxTitle, and ErrorBoxText to control the rejection message.
