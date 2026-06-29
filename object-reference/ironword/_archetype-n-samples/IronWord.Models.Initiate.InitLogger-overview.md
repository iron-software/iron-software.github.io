<!--
N-Mid (1 ctor, no other members; no docfx summary). Frame C (when-fronted).
public class InitLogger : Object. Verified 2026-06-23: ctor InitLogger(string logPath).
Namespace IronWord.Models.Initiate, IronWord.dll.
Target: IronWord.Models.Initiate.InitLogger.html
-->

## Injected overview (Markdown)

When a Word build needs a written record of what IronWord is doing, `InitLogger` starts logging to a file. Construct one with `new InitLogger(logPath)`, passing the path where the log should be written, and the library records its activity there as a document is assembled. The captured trace is a debugging aid: it shows how the object tree is built so a developer can spot a misplaced element, a missing run, or an inefficiency in the construction sequence.

The single argument, `logPath`, is the destination file for the output, so point it at a writable location and inspect that file after a run. Set the logger up early, before the document work begins, so the whole sequence is captured rather than a partial tail. The [log object tree example](https://ironsoftware.com/csharp/word/examples/log-object-tree/) shows the logged structure during document construction, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the elements that appear in that trace.

```csharp
var logger = new InitLogger("ironword.log");
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `InitLogger Class - IronWord C# API Reference`
- v2 (human): `InitLogger: Log Word Document Builds in C#`
- v3 (balanced): `InitLogger Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Log IronWord activity to a file in C# with the InitLogger class: construct it with a log path to record the object tree as a document is built.`
- v2 (human): `Capture a debug trace of a Word build in C# with IronWord InitLogger: pass a log path and inspect how the document object tree is assembled.`
- v3 (balanced): `Reference for the IronWord InitLogger class in C#: construct it with a file path to log document construction for debugging and verification.`

---

## Structured data

**TechArticle abstract**

> InitLogger writes a log of IronWord activity to a file in C#, helping a developer debug and verify how a Word document is built. Construct it with new InitLogger(logPath), passing the destination file, early in the build so the full object-tree construction sequence is captured for later inspection.

**FAQPage entries**

```json
[
  {
    "question": "Where does InitLogger live in the IronWord API?",
    "answer": "InitLogger is a class in the IronWord.Models.Initiate namespace, shipped in IronWord.dll, with base type System.Object. Construct it with new InitLogger(logPath), passing the file path where the log should be written."
  },
  {
    "question": "How do you log document construction in IronWord with C#?",
    "answer": "Create an InitLogger with a writable file path before building the document, then run the build. IronWord records its object-tree activity to that file, which you inspect afterward to find a misplaced element or an inefficiency."
  }
]
```
