<!--
N-Lite/enum-pattern (sealed class : Enum, flags - nested in Installation). docfx title "Installation.LoggingModes".
Namespace IronOcr. Members: None, All, Console, Custom, DebugOutputWindow, File. Salience: None (off) first, then All.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Installation.LoggingModes.html
-->

## Injected overview (Markdown)

Choose where IronOCR writes its diagnostic logging by setting `Installation.LogMode` to a `LoggingModes` value. `None` disables logging, `All` enables every sink, and the targeted flags route output to a specific destination: `Console`, `DebugOutputWindow`, `File` (paired with a log file path), or `Custom` for your own logger. The flags combine, so bitwise-or them to log to more than one place at once.

```csharp
IronOcr.Installation.LogMode = IronOcr.Installation.LoggingModes.Console;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Installation.LoggingModes - IronOCR C# Reference`
- v2 (human): `LoggingModes: IronOCR Log Targets in C#`
- v3 (balanced): `Installation.LoggingModes | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Installation.LoggingModes selects IronOCR logging targets in C#: None, All, Console, DebugOutputWindow, File, or Custom, combinable as flags.`
- v2 (human): `Set where IronOCR logs in C# with LoggingModes: turn it off with None, on with All, or route to console, file, debug output, or a custom logger.`
- v3 (balanced): `Reference for IronOCR's Installation.LoggingModes in C#: flag values choosing log destinations, from None to Console, File, and Custom.`

---

## Structured data

**TechArticle abstract**

> Choose where IronOCR writes diagnostic logging in C# by setting Installation.LogMode to a LoggingModes value. None disables logging and All enables every sink, while Console, DebugOutputWindow, File, and Custom route output to a specific destination. The values are flags, so combine them to log to more than one place at once.
