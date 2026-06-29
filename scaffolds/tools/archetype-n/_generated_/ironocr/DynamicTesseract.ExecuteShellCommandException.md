<!--
N-Lite/exception. Declared: public class ExecuteShellCommandException : Exception. Verified 2026-06-23.
Namespace DynamicTesseract; assembly IronOcr.dll; base Exception. Phrasing varied from DynamicTesseractException.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ExecuteShellCommandException.html
-->

## Injected overview (Markdown)

`ExecuteShellCommandException` is raised when an external command the interop layer runs, such as a native Tesseract tool, exits with an error or cannot start. The message and inner exception report what the command returned, so check that the executable is on the path, that arguments and paths are valid, and that the process has permission to run it. Deriving from `Exception`, it is caught by a general handler too. The [debugging how-to](https://ironsoftware.com/csharp/ocr/how-to/debugging/) helps trace the call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ExecuteShellCommandException - IronOCR C# API`
- v2 (human): `ExecuteShellCommandException: Shell Errors C#`
- v3 (balanced): `ExecuteShellCommandException | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ExecuteShellCommandException reports a failed external command in IronOCR for C#. Check the executable path, arguments, and process permissions.`
- v2 (human): `Handle a failed shell command in C# with ExecuteShellCommandException: IronOCR raises it when a native tool exits with an error or cannot start.`
- v3 (balanced): `Reference for ExecuteShellCommandException in C#: raised when an external command run by IronOCR's interop layer fails or cannot start.`

---

## Structured data

**TechArticle abstract**

> ExecuteShellCommandException is raised when an external command run by IronOCR's interop layer fails or cannot start in C#, such as a native Tesseract tool that exits with an error. Read the message and inner exception, and verify the executable path, arguments, and process permissions. It derives from Exception, so a general handler also catches it.
