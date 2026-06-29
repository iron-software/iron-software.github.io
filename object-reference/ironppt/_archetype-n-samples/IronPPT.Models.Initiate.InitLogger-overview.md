<!--
N-Mid / class (1 member). Frame F (imperative). IronPPT. Namespace IronPPT.Models.Initiate. Base Object.
Member verified 2026-06-23: ctor InitLogger(string logPath).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Initiate.InitLogger.html
-->

## Injected overview (Markdown)

Turn on file logging for IronPPT when you need a record of what the library does during a run. `InitLogger` writes diagnostic output to a path you choose, which is useful while tracing a problem in development or capturing detail from a build or server process that has no console to watch.

Construct it with the single constructor, passing the `logPath` string for the file IronPPT should write to. Creating the logger establishes the destination, so the rest of a run's diagnostic output lands in that file. Point `logPath` at a writable location the process can reach, and prefer a per-run or per-environment path so logs from separate runs stay separate. Set the logger up early, before the presentation work whose behavior you want recorded, since output produced before the logger exists is not captured.

```csharp
var logger = new InitLogger("ironppt.log");
```

The [get started guide](https://ironsoftware.com/csharp/ppt/get-started/) introduces the library setup, and the [engineering request page](https://ironsoftware.com/csharp/ppt/troubleshooting/engineering-request-ppt/) explains what diagnostic detail to gather when reporting an issue.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `InitLogger - IronPPT C# API Reference`
- v2 (human): `InitLogger: Enable File Logging in C#`
- v3 (balanced): `InitLogger Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Enable file logging in C# with the IronPPT InitLogger class: construct it with a log path so IronPPT writes diagnostic output to that file.`
- v2 (human): `Capture IronPPT diagnostics in C# with the InitLogger class: pass a log path to the constructor to record what the library does during a run.`
- v3 (balanced): `Reference for the IronPPT InitLogger class in C#: construct it with a log path to direct diagnostic output to a file for tracing and support.`

---

## Structured data

**TechArticle abstract**

> Enabling file logging for IronPPT in C# runs through the InitLogger class. Its single constructor takes a log path string and directs the library's diagnostic output to that file, which helps trace a problem in development or capture detail from a build or server process. Create the logger early so output from the work you want recorded is captured.

**FAQPage entries**

```json
[
  {
    "question": "Where does InitLogger live in the IronPPT API?",
    "answer": "InitLogger is a class in the IronPPT.Models.Initiate namespace, shipped in IronPPT.dll. It derives from System.Object and is constructed with a single log path string."
  },
  {
    "question": "How do you enable IronPPT logging to a file in C#?",
    "answer": "Construct an InitLogger with the path of the file to write, for example new InitLogger(\"ironppt.log\"). Create it early, before the presentation work you want recorded, and point the path at a location the process can write to."
  }
]
```
