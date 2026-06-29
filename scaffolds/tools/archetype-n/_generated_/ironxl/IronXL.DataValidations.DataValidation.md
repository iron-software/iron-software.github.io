<!--
N-Full (14 properties; requested treatment=full). Frame B. IronXL.
Members verified 2026-06-23: ComparisonOperator, ConstrainedRangeAddress, ConstraintType,
EmptyCellAllowed, ErrorAlert, ErrorBoxText, ErrorBoxTitle, Formula1, Formula2, PromptBoxText,
PromptBoxTitle, ShowDropDownList, ShowErrorBox, ShowPromptBox.
Disambiguation: DataValidation.ComparisonOperator is typed IronXL.DataValidations.ComparisonOperator (verified).
Cross-ref: DataValidationsCollection.Remove(DataValidation) and Add*Rule produce/consume this type (verified).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.DataValidations.DataValidation.html
-->

## Injected overview (Markdown)

`DataValidation` is the rule a developer reads back to see how a worksheet restricts what a user may type into a cell. It describes one validation constraint: the kind of data allowed, the comparison and bounds it must satisfy, and the prompt and error messages Excel shows. It is what a developer inspects behind a search like "C# Excel data validation rule".

A `DataValidation` is created indirectly. The worksheet's `DataValidations` collection exposes typed factory methods such as `AddIntegerRule`, `AddDecimalRule`, `AddDateRule`, `AddTextLengthRule`, `AddStringListRule`, and `AddFormulaListRule` that build the rule and attach it to a range. The properties on the resulting `DataValidation` then describe and refine that rule, and `Remove` takes the same object back out of the collection.

The properties fall into three groups. The constraint group sets what is valid: `ConstraintType` names the data kind (whole number, decimal, date, list, and similar), `ComparisonOperator` from the `IronXL.DataValidations.ComparisonOperator` set chooses the test such as `Between` or `GreaterThan`, and `Formula1` and `Formula2` carry the bounds, with `Formula2` used by range operators. `ConstrainedRangeAddress` reports the cells the rule covers and `EmptyCellAllowed` decides whether a blank passes. The prompt group, `ShowPromptBox`, `PromptBoxTitle`, and `PromptBoxText`, sets the hint shown when a cell is selected. The error group, `ShowErrorBox`, `ErrorBoxTitle`, `ErrorBoxText`, and `ErrorAlert`, sets the message and its severity when an entry is rejected, and `ShowDropDownList` toggles the in-cell picker for list rules. Note that this `ComparisonOperator` is the data validation type, separate from the same-named operator in `IronXL.Formatting.Enums` used for conditional formatting.

```csharp
using IronXL;
using IronXL.DataValidations;

WorkSheet sheet = WorkBook.Create().DefaultWorkSheet;
DataValidation rule =
    sheet.DataValidations.AddIntegerRule("A1:A10", ComparisonOperator.Between, 1, 100);
rule.ErrorBoxText = "Enter a value from 1 to 100.";
```

The [data validation example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows rule-driven cell handling, the [select range how-to](https://ironsoftware.com/csharp/excel/how-to/select-range/) covers the ranges a rule targets, and the [set cell data format how-to](https://ironsoftware.com/csharp/excel/how-to/set-cell-data-format/) covers related cell controls.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DataValidation Class - IronXL C# API Reference`
- v2 (human): `DataValidation: Restrict Cell Input in C#`
- v3 (balanced): `DataValidation Class | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Restrict Excel cell input in C# with IronXL's DataValidation class: set ConstraintType, ComparisonOperator, Formula1, and prompt and error messages.`
- v2 (human): `Control what users can type into Excel cells in C# with IronXL's DataValidation class: data kind, bounds, drop-down list, prompts, and errors.`
- v3 (balanced): `Reference for the IronXL DataValidation class in C#: a single validation rule with constraint, comparison, prompt, and error-message properties.`

---

## Structured data

**TechArticle abstract**

> DataValidation describes one rule that restricts what a user may type into Excel cells in IronXL for C#. ConstraintType names the data kind, ComparisonOperator from IronXL.DataValidations.ComparisonOperator chooses the test, and Formula1 and Formula2 carry the bounds. PromptBox and ErrorBox properties set the hint and rejection messages, and ShowDropDownList toggles the in-cell list. Create a rule through the worksheet's DataValidations factory methods.

**FAQPage entries**

```json
[
  {
    "question": "Where does DataValidation live in the IronXL API?",
    "answer": "DataValidation is a class in the IronXL.DataValidations namespace, shipped in IronXL.dll. It is created through the worksheet's DataValidations collection factory methods such as AddIntegerRule and AddStringListRule, and removed with Remove."
  },
  {
    "question": "How do you add a data validation rule in C#?",
    "answer": "Call a typed factory method on the worksheet's DataValidations collection, for example AddIntegerRule with a range, a ComparisonOperator, and bounds. Refine the returned DataValidation with its prompt and error properties such as ErrorBoxText."
  },
  {
    "question": "Which ComparisonOperator does DataValidation use?",
    "answer": "The ComparisonOperator property uses IronXL.DataValidations.ComparisonOperator, such as Between or GreaterThan. That is a different type from the ComparisonOperator in IronXL.Formatting.Enums, which applies to conditional formatting rules."
  }
]
```
