<!--
N-Full. Frame D. IronOcr. Verified 2026-06-23 against OcrReadTask.html.
Base: Task<OcrResult>. Members: ctors taking Func<OcrResult> + CancellationToken/TaskCreationOptions/state; Cancel().
OcrResult cross-ref verified on OcrResult.html.
-->

## Injected overview (Markdown)

Running an OCR read in the background, while the rest of an application stays responsive, runs through `OcrReadTask`. It represents one asynchronous recognition job and produces an `OcrResult` once the read finishes, so a UI app keeps painting and a web request stays free while Tesseract works. Because it derives from the standard `Task<OcrResult>`, it slots into the usual `async`/`await` patterns a developer already knows, while adding OCR-specific construction and cancellation.

A task is created around the synchronous OCR function it wraps. The constructors accept a `Func<OcrResult>` (the work to run), optionally with a `CancellationToken`, a `TaskCreationOptions` value, or a state object for the overloads that take `Func<object, OcrResult>`. Once started, awaiting the task yields the `OcrResult`, the same document model a direct `Read` call would return, with its text, page structure, and confidence intact.

In practice, most code reaches asynchronous OCR through the higher-level read methods rather than constructing this type by hand, but the task is what those methods return and what a developer awaits. The key members are the constructor overloads that bind the OCR function plus its cancellation and scheduling options, and `Cancel`, which requests that an in-flight read stop. Pair `Cancel` with a `CancellationToken` constructor overload so the wrapped function can observe the request and exit cleanly. Everything else, continuations, status, exceptions, comes from the `Task<OcrResult>` base, so the awaited result and any error handling behave exactly as they do for any other task.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput();
input.LoadImage("scan.png");
OcrResult result = await ocr.ReadAsync(input);
Console.WriteLine(result.Text);
```

The [async OCR how-to](https://ironsoftware.com/csharp/ocr/how-to/async/) walks through reading off the main thread, the [multithreading example](https://ironsoftware.com/csharp/ocr/examples/csharp-tesseract-multithreading-for-speed/) scales several reads across cores, and the [progress tracking how-to](https://ironsoftware.com/csharp/ocr/how-to/progress-tracking/) reports on a long-running read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrReadTask Class - IronOCR C# API Reference`
- v2 (human): `OcrReadTask: Async OCR Reads in C#`
- v3 (balanced): `OcrReadTask Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Run OCR asynchronously in C# with the IronOCR OcrReadTask class: a Task<OcrResult> that wraps a read, supports CancellationToken, and Cancel.`
- v2 (human): `Read images off the main thread in C# with the IronOCR OcrReadTask: an awaitable OCR job that returns an OcrResult and supports cancellation.`
- v3 (balanced): `Reference for the IronOCR OcrReadTask class in C#: the Task<OcrResult> an async OCR read returns, with cancellation and a Cancel method.`

---

## Structured data

**TechArticle abstract**

> Running an OCR read asynchronously in C# uses the IronOCR OcrReadTask class, a Task<OcrResult> that wraps a synchronous recognition function. Construct it with a Func<OcrResult> plus an optional CancellationToken, TaskCreationOptions, or state object, then await it to receive the OcrResult. Call Cancel to request that an in-flight read stop. Continuations, status, and exceptions behave as on any Task.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrReadTask live in the IronOCR API?",
    "answer": "OcrReadTask is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from System.Threading.Tasks.Task<OcrResult>, so it works with standard async and await."
  },
  {
    "question": "How do you run an OCR read asynchronously in C#?",
    "answer": "Await an asynchronous read, which returns an OcrReadTask, a Task<OcrResult>. The awaited result is an OcrResult with the recognized text and structure. Pass a CancellationToken when constructing the task to allow cancellation."
  },
  {
    "question": "How do you cancel an OcrReadTask?",
    "answer": "Call Cancel on the task to request that the in-flight read stop, and construct the task with a CancellationToken so the wrapped OCR function can observe the request and exit. The task then completes as cancelled."
  }
]
```
