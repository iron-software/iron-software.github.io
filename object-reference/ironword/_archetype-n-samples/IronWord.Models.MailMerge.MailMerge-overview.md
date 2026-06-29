<!--
N-Full (class, 11 members, bucketed). Frame D (task-gerund-fronted); abstract frame E (feature-fronted).
public class MailMerge : Object. Verified 2026-06-23:
Options (get-only -> MailMergeOptions); Execute(IDictionary<string,string>), Execute(IEnumerable<string>, IEnumerable<string>),
Execute(DataRow), Execute(DataTable); ExecuteWithRegions(DataSet), ExecuteWithRegions(DataTable), ExecuteWithRegions(string, DataTable);
GetFieldNames() -> IReadOnlyList<string>; GetFields() -> IReadOnlyList<MergeField>; GetRegionNames().
Obtained via WordDocument.MailMerge (get-only property, verified on WordDocument page). Namespace IronWord.Models.MailMerge, IronWord.dll.
Funnel: replace-words how-to, create-word-from-text example.
Target: IronWord.Models.MailMerge.MailMerge.html
-->

## Injected overview (Markdown)

Populating a Word template with data, names on a batch of letters, line items on an invoice, rows in a report, runs through `MailMerge`. It detects the merge fields already in a document, whether they were authored in Microsoft Word or another compatible library, and fills them from the data a developer supplies. It is the type behind a "C# mail merge" search, and it sits alongside `MergeField`, the read-only record describing one discovered field, and `MailMergeOptions`, the settings that govern the run.

A document hands back its merge facade through the get-only `WordDocument.MailMerge` property, so there is no separate object to construct. From there the members fall into four groups. **Discovery**: `GetFieldNames` lists every merge field name, `GetFields` returns the richer `MergeField` records, and `GetRegionNames` reports the repeating-region names. **Flat merge**: the `Execute` overloads fill the fields once, accepting an `IDictionary<string, string>`, a parallel pair of `IEnumerable<string>` names and values, a `DataRow`, or a `DataTable` (whose first row supplies the values). **Region merge**: the `ExecuteWithRegions` overloads repeat a block of the template per data row, accepting a `DataSet`, a `DataTable`, or a region name paired with a `DataTable`, driven by fields marked `TableStart:Region` and `TableEnd:Region`. **Configuration**: the `Options` property exposes a `MailMergeOptions` for null handling and unused-field removal.

The usual sequence is to read the field names, build matching data, then call one `Execute` overload for a single record or `ExecuteWithRegions` for a repeating section. Configure `Options` first if the defaults need adjusting, then save the document as usual.

```csharp
WordDocument document = new WordDocument("template.docx");
document.MailMerge.Execute(new Dictionary<string, string>
{
    ["FirstName"] = "Ada",
    ["Company"] = "Iron Software"
});
document.Save("letter.docx");
```

The [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) covers replacing field text, the [create word from text example](https://ironsoftware.com/csharp/word/examples/create-word-from-text/) builds a document to merge into, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the document model around it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MailMerge Class - IronWord C# API Reference`
- v2 (human): `MailMerge: Fill Word Templates in C#`
- v3 (balanced): `MailMerge Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Run a Word mail merge in C# with the IronWord MailMerge class: detect fields, then fill them with Execute or repeat regions with ExecuteWithRegions.`
- v2 (human): `Fill a Word template with data in C# using IronWord MailMerge: merge a dictionary, DataRow, or DataTable, and repeat regions from a DataSet.`
- v3 (balanced): `Reference for the IronWord MailMerge class in C#: discover merge fields, fill them with Execute, and repeat regions with ExecuteWithRegions.`

---

## Structured data

**TechArticle abstract**

> Mail merge in IronWord for C# runs through the MailMerge class, reached through the WordDocument.MailMerge property. It discovers merge fields with GetFieldNames, GetFields, and GetRegionNames, fills them with the Execute overloads (dictionary, name/value pairs, DataRow, or DataTable), repeats template blocks with ExecuteWithRegions, and exposes run settings through Options.

**FAQPage entries**

```json
[
  {
    "question": "Where does MailMerge live in the IronWord API?",
    "answer": "MailMerge is a class in the IronWord.Models.MailMerge namespace, shipped in IronWord.dll, with base type System.Object. A document exposes it through the get-only WordDocument.MailMerge property, so it is not constructed directly."
  },
  {
    "question": "How do you run a mail merge on a Word document in C#?",
    "answer": "Open the document, call GetFieldNames on its MailMerge to see the fields, then pass matching data to an Execute overload (a dictionary, name and value lists, a DataRow, or a DataTable). Save the document afterward."
  },
  {
    "question": "How do you repeat a region per data row in an IronWord mail merge?",
    "answer": "Mark the repeating block with TableStart:Region and TableEnd:Region fields, then call ExecuteWithRegions with a DataSet, a DataTable, or a region name and DataTable. Each supplied row produces one copy of the marked block."
  },
  {
    "question": "What is the difference between MailMerge and MergeField in IronWord?",
    "answer": "MailMerge performs the merge: it discovers fields and fills them with data. MergeField is the read-only record returned by GetFields describing one discovered field, with its Name, Instruction, Kind, and RegionName. MailMergeOptions holds the run settings."
  }
]
```
