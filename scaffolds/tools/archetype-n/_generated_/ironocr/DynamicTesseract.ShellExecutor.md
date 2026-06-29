<!--
N-Mid (static class, base Object). Member verified 2026-06-23: ExecuteCommand(string fileName, string arguments, int exitCode = 0).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ShellExecutor.html
-->

## Injected overview (Markdown)

`ShellExecutor` is the internal helper IronOCR uses to run an external process while setting up or driving its native Tesseract tooling. It wraps the work of launching a command-line program and waiting for it to finish, so the surrounding loader code does not repeat process-handling boilerplate.

The type exposes one static method, `ExecuteCommand`, which takes the program to run as `fileName`, the command-line `arguments` to pass it, and an optional expected `exitCode` that defaults to `0`. The call runs the process to completion and treats a return code other than the expected value as a failure, surfacing it to the caller. Because the class is static, there is nothing to instantiate. This is plumbing for the engine's native setup rather than a recognition API, so most projects never call it directly and instead work through IronOCR's higher-level reading methods. The [IronTesseract how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) walks through configuring and running the engine.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ShellExecutor Class - IronOCR C# Reference`
- v2 (human): `ShellExecutor: Run a Process in C#`
- v3 (balanced): `ShellExecutor Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Run an external process in C# with the IronOCR ShellExecutor static class: ExecuteCommand takes a fileName, arguments, and an expected exitCode.`
- v2 (human): `Launch a command-line program from IronOCR in C# with the ShellExecutor static class, an internal helper used while setting up native Tesseract.`
- v3 (balanced): `Reference for the IronOCR ShellExecutor static class in C#: ExecuteCommand runs a process and checks its exit code during native engine setup.`

---

## Structured data

**TechArticle abstract**

> Run an external command-line process in IronOCR for C# with the ShellExecutor static class, an internal helper used while setting up native Tesseract tooling. ExecuteCommand launches a program with the given arguments and treats an unexpected exit code as a failure, so most projects never call it directly.

**FAQPage entries**

```json
[
  {
    "question": "Where does ShellExecutor live in the IronOCR API?",
    "answer": "ShellExecutor is a static class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from System.Object and exposes a single static method, ExecuteCommand, used internally while configuring the native Tesseract engine."
  },
  {
    "question": "What does the ExecuteCommand method do in C#?",
    "answer": "ExecuteCommand launches the program named by fileName, passes it the supplied arguments, and waits for it to finish. The optional exitCode parameter sets the return code expected on success, defaulting to 0, and any other code is reported as a failure."
  }
]
```
