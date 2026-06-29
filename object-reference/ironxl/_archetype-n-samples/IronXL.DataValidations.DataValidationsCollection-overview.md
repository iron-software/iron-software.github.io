<!--
N-Full (collection, >10 members -> P7 bucketing applied; requested treatment=full). Frame C. IronXL.
Members verified 2026-06-23: Count, Item[Int32]; AddDateRule/AddDecimalRule/AddIntegerRule/AddTextLengthRule
(each x4 overloads: Cell/Range/RangeAddress/String), AddStringListRule, AddFormulaListRule;
GetRuleForCell, GetRulesForRange; Remove(DataValidation), RemoveAt(Int32), RemoveAllRulesFromRange,
RemoveRuleFromCell; GetEnumerator; RangeAlreadyHasDataValidation.
Add*Rule comparison operator typed IronXL.DataValidations.ComparisonOperator (verified by href).
Cross-ref: WorkSheet.DataValidations returns DataValidationsCollection (verified).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.DataValidations.DataValidationsCollection.html
-->

## Injected overview (Markdown)

When a worksheet needs input rules, the validations for a sheet are reached through `DataValidationsCollection`. It holds every `DataValidation` on the sheet and exposes the typed factory methods that create them, so adding, finding, and removing validation rules all happen through one object. It is the entry point behind a search like "C# Excel data validation".

A developer obtains the collection from the `DataValidations` property of a `WorkSheet`. From there the factory methods both build a rule and attach it to a range, returning the `DataValidation` for further configuration. The collection is enumerable, so a loop over it visits each rule, and `Count` and `Item[Int32]` give size and indexed access.

The members group by job. The creation bucket builds rules: `AddIntegerRule`, `AddDecimalRule`, `AddDateRule`, and `AddTextLengthRule` each take a range, an `IronXL.DataValidations.ComparisonOperator` such as `Between`, and bounds, while `AddStringListRule` and `AddFormulaListRule` build the drop-down list rules. Each factory has overloads accepting a `Cell`, a `Range`, a `RangeAddress`, or a string range. The lookup bucket finds rules: `GetRuleForCell` returns the rule covering a single cell, `GetRulesForRange` returns those across a range, and `RangeAlreadyHasDataValidation` tests whether a range is already constrained. The removal bucket clears rules: `Remove` takes a `DataValidation` back out, `RemoveAt` removes by index, `RemoveRuleFromCell` clears a single cell, and `RemoveAllRulesFromRange` clears a span. The iteration bucket exposes `Count`, the `Item[Int32]` indexer, and `GetEnumerator` for `foreach`.

```csharp
using IronXL;
using IronXL.DataValidations;

WorkSheet sheet = WorkBook.Create().DefaultWorkSheet;
DataValidationsCollection validations = sheet.DataValidations;
validations.AddIntegerRule("A1:A10", ComparisonOperator.Between, 1, 100);
validations.AddStringListRule("B1:B10", new[] { "Yes", "No" });
```

The [data validation example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows rule-driven cells in action, the [select range how-to](https://ironsoftware.com/csharp/excel/how-to/select-range/) covers the ranges rules target, and the [set cell data format how-to](https://ironsoftware.com/csharp/excel/how-to/set-cell-data-format/) covers related cell-formatting controls.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DataValidationsCollection - IronXL C# API`
- v2 (human): `DataValidationsCollection in C# | IronXL`
- v3 (balanced): `DataValidationsCollection | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Manage Excel input rules in C# with IronXL's DataValidationsCollection: AddIntegerRule, AddStringListRule, GetRuleForCell, Remove, and indexer access.`
- v2 (human): `Add, find, and remove data validation rules in C# with IronXL's DataValidationsCollection on a worksheet, including drop-down list rules.`
- v3 (balanced): `Reference for the IronXL DataValidationsCollection class in C#: the worksheet's data validation rules with factory, lookup, and removal methods.`

---

## Structured data

**TechArticle abstract**

> DataValidationsCollection holds and manages the data validation rules on a worksheet in IronXL for C#, reached through the WorkSheet DataValidations property. Factory methods such as AddIntegerRule, AddDecimalRule, AddDateRule, AddTextLengthRule, AddStringListRule, and AddFormulaListRule build rules and attach them to a range. Lookup methods find rules by cell or range, removal methods clear them, and the collection is enumerable through Count, an indexer, and GetEnumerator.

**FAQPage entries**

```json
[
  {
    "question": "Where does DataValidationsCollection live in the IronXL API?",
    "answer": "DataValidationsCollection is a class in the IronXL.DataValidations namespace, shipped in IronXL.dll, and it implements IEnumerable. A worksheet exposes it through the DataValidations property."
  },
  {
    "question": "How do you add a drop-down list validation in C#?",
    "answer": "Call AddStringListRule on the worksheet's DataValidations collection with a range and the allowed values. Use AddFormulaListRule to source the list from a formula. Both produce a DataValidation whose ShowDropDownList property controls the in-cell picker."
  },
  {
    "question": "How do you remove a validation rule from a range?",
    "answer": "Use RemoveAllRulesFromRange to clear a span, RemoveRuleFromCell to clear a single cell, RemoveAt to remove by index, or Remove to take a specific DataValidation back out of the collection."
  }
]
```
