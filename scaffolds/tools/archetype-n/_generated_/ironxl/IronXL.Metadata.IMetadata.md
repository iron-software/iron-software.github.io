<!--
N-Full / interface. Frame E. No concrete implementor in api dir; contract returned by WorkBook.Metadata. Members Author/Title/Subject/Keywords/Comments/Created/Modified/LastPrinted/Company/Manager/Category/Template/ApplicationName/CustomProperties verified. WorkBook.Metadata + IMetadata.CustomProperties (ICustomProperties) cross-ref verified 2026-06-23.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Metadata.IMetadata.html
-->

## Injected overview (Markdown)

Document-level details for a spreadsheet, including author, title, subject, keywords, and the dates a file was created or modified, live on `IMetadata`. A developer reads and writes these properties to stamp a workbook with authorship before it ships, to populate the descriptive fields a document-management system indexes, or to audit who and when a file reports. It is the contract that surfaces the same information Excel shows under File then Info, made available to code rather than the desktop dialog. Where `ICustomProperties` holds arbitrary application-defined key/value pairs, `IMetadata` covers the fixed, well-known fields every Office document carries.

A developer obtains an `IMetadata` from the workbook itself: `WorkBook.Metadata` returns the instance for the open file. There is no constructor to call, because the metadata always belongs to a specific workbook, and editing it in place is how changes are recorded. The values written through this contract are saved when the workbook is saved, so a typical flow loads or creates a `WorkBook`, sets the metadata fields, and writes the file out.

The writable fields cover the descriptive surface: `Author`, `Title`, `Subject`, `Keywords`, and `Comments` are the everyday ones, while `Category` and the nullable `Created`, `Modified`, and `LastPrinted` dates record classification and history. A few fields are read-only and reflect the originating application rather than developer input: `Company`, `Manager`, `Template`, and `ApplicationName` expose values without a setter. The `CustomProperties` property returns an `ICustomProperties` for any field outside this fixed set. Setting `Author` and `Title` before saving is the most common task; the nullable date fields accept a `DateTime` or stay unset.

```csharp
IMetadata metadata = workbook.Metadata;
metadata.Author = "Iron Software";
metadata.Title = "Quarterly Report";
```

The [edit Excel metadata example](https://ironsoftware.com/csharp/excel/examples/edit-excel-metadata-csharp/) sets the descriptive fields, the [edit workbook metadata how-to](https://ironsoftware.com/csharp/excel/how-to/edit-workbook-metadata/) walks through reading and updating them, and the [ICustomProperties reference](https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Metadata.ICustomProperties.html) covers application-defined fields beyond the fixed set.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IMetadata Interface - IronXL C# API Reference`
- v2 (human): `IMetadata: Edit Excel Author & Title in C#`
- v3 (balanced): `IMetadata Interface | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IMetadata is the IronXL contract for Excel document properties in C#: set Author, Title, Subject, Keywords, and the Created and Modified dates.`
- v2 (human): `Read and write spreadsheet document properties in C# through IronXL's IMetadata: author, title, subject, keywords, and creation and modified dates.`
- v3 (balanced): `Reference for the IronXL IMetadata interface in C#: the contract WorkBook.Metadata returns for editing an Excel file's author, title, and dates.`

---

## Structured data

**TechArticle abstract**

> IMetadata is the IronXL contract for a workbook's document properties in C#. WorkBook.Metadata returns it, and the writable Author, Title, Subject, Keywords, Comments, Category, and the nullable Created, Modified, and LastPrinted fields stamp a spreadsheet. Company, Manager, Template, and ApplicationName are read-only, and CustomProperties returns an ICustomProperties for fields outside the fixed set.

**FAQPage entries**

```json
[
  {
    "question": "Where does IMetadata live in the IronXL API?",
    "answer": "IMetadata is an interface in the IronXL.Metadata namespace, shipped in IronXL.dll. The WorkBook.Metadata property returns the IMetadata for an open workbook."
  },
  {
    "question": "What returns an IMetadata in IronXL?",
    "answer": "WorkBook.Metadata returns the IMetadata for the open workbook. There is no public constructor; the metadata always belongs to a specific workbook, so it is read from and written to in place and saved with the file."
  },
  {
    "question": "How do you set the author and title of an Excel file in C#?",
    "answer": "Get WorkBook.Metadata, then assign the Author and Title properties before saving the workbook. Subject, Keywords, Comments, and the nullable Created and Modified dates are writable too, while Company, Manager, and Template are read-only."
  }
]
```
