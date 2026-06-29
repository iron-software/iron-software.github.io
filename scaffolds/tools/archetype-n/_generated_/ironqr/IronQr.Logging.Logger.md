<!--
N-Mid (static, 3 members). Frame D. IronQr. Members verified 2026-06-22. LoggingModes cross-ref verified.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Logging.Logger.html
-->

## Injected overview (Markdown)

Turning on IronQR's debug logging runs through the static `Logger`. When a read returns nothing or a write behaves unexpectedly, the log shows what the detector and native layer actually did, which is far faster than guessing. The members are static, so configure logging once at startup.

`LoggingMode` selects where output goes through a `LoggingModes` flags value, combining destinations such as console, the IDE debug window, a file, or a custom handler. `LogFilePath` sets the file target when `File` is among the modes. `ClearLogFiles()` deletes existing log files, useful at the start of a run so the output reflects only the current session. Leave logging off in production and enable it while diagnosing a specific issue. Because the modes are flags, a single run can log to both the console and a file at once, giving live feedback while preserving a record to attach to a bug report.

```csharp
using IronQr;
using IronQr.Logging;

Logger.LoggingMode = LoggingModes.Console;
```

The [detailed error messages how-to](https://ironsoftware.com/csharp/qr/how-to/detailed-error-messages/) turns logging on for diagnostics, and the [get started guide](https://ironsoftware.com/csharp/qr/get-started/) covers project setup.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Logger Class - IronQR C# API Reference`
- v2 (human): `Logger: Debug IronQR Reads in C#`
- v3 (balanced): `Logger Class | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure IronQR debug logging in C# with the static Logger class: set LoggingMode, LogFilePath, and clear old logs with ClearLogFiles.`
- v2 (human): `Diagnose IronQR reads and writes in C# with the static Logger class: route logs to console, file, or a custom handler and set the file path.`
- v3 (balanced): `Reference for the IronQR Logger class in C#: set LoggingMode and LogFilePath and clear logs with ClearLogFiles for diagnostics.`

---

## Structured data

**TechArticle abstract**

> The static IronQR Logger class turns on debug logging in C# for diagnosing reads and writes. LoggingMode routes output through a LoggingModes flags value to the console, debug window, a file, or a custom handler, LogFilePath sets the file target, and ClearLogFiles deletes existing logs. Configure it once at startup and leave it off in production.

**FAQPage entries**

```json
[
  {
    "question": "Where does Logger live in the IronQR API?",
    "answer": "Logger is a static class in the IronQr.Logging namespace, shipped in IronQr.dll. Its members are static, so set Logger.LoggingMode and Logger.LogFilePath directly without constructing an instance."
  },
  {
    "question": "How do you enable debug logging in IronQR for C#?",
    "answer": "Set Logger.LoggingMode to a LoggingModes value such as Console or File at startup, and set Logger.LogFilePath when logging to a file. Call ClearLogFiles to start from a clean log. Use it while diagnosing an issue, not in production."
  }
]
```
