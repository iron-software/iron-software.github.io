<!--
N-Lite/enum (flags), nested in Logger. Members verified 2026-06-22: All, Console, Custom, DebugOutputWindow, File, None.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Logging.Logger.LoggingModes.html
-->

## Injected overview (Markdown)

`LoggingModes` selects where `IronQR` writes its debug log, assigned to `Logger.LoggingMode`. It is a flags enum, so destinations combine with a pipe. `None` is silent and `All` writes everywhere, while `Console`, `DebugOutputWindow`, and `File` send output to the console, the IDE debug window, or a file at `Logger.LogFilePath`. `Custom` routes entries to your own handler for integration with an existing logging framework. Combine the destinations a build needs, for example `LoggingModes.Console | LoggingModes.File`. The [detailed error messages how-to](https://ironsoftware.com/csharp/qr/how-to/detailed-error-messages/) turns logging on for diagnostics.

```csharp
Logger.LoggingMode = LoggingModes.Console | LoggingModes.File;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LoggingModes Enum - IronQR C# API`
- v2 (human): `LoggingModes: Route IronQR Logs in C#`
- v3 (balanced): `LoggingModes Enum | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Route IronQR debug logging in C# with the LoggingModes flags enum: None, Console, DebugOutputWindow, File, Custom, or All, on Logger.LoggingMode.`
- v2 (human): `Choose where IronQR writes logs in C# with the LoggingModes flags enum: console, debug window, file, or a custom handler, combined with a pipe.`
- v3 (balanced): `Reference for the IronQR LoggingModes flags enum in C#: Console, DebugOutputWindow, File, and Custom log destinations via Logger.LoggingMode.`

---

## Structured data

**TechArticle abstract**

> Use LoggingModes in IronQR to route debug logging, set on Logger.LoggingMode. It is a flags enum: None is silent, All writes everywhere, and Console, DebugOutputWindow, File, and Custom select destinations that combine with a pipe, with File written to Logger.LogFilePath.
