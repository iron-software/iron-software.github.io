<!--
N-Full (EventArgs record, 6 read-only properties). Frame E. IronOcr.Events.
Members verified 2026-06-23: Duration (TimeSpan), EndTimeUTC (Nullable<DateTime>), PagesComplete (int), ProgressPercent (int), StartTimeUTC (DateTime), TotalPages (int).
Cross-ref verified: IronTesseract.OcrProgress event is EventHandler<OcrProgressEventsArgs>; sample uses e.ProgressPercent.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Events.OcrProgressEventsArgs.html
-->

## Injected overview (Markdown)

Progress on a long OCR job, percentage done, pages finished, and elapsed time, arrives in `OcrProgressEventsArgs`. The object is delivered to a handler each time IronOCR advances through a multi-page read, so an application can update a progress bar or log throughput instead of leaving the user waiting on an opaque call. It is what a developer reads when wiring feedback into batch recognition.

A developer never constructs one. It is handed to the `OcrProgress` event on `IronTesseract`, typed as `EventHandler<OcrProgressEventsArgs>`. Subscribe before calling `Read`, and the handler fires as the engine works through the input; the event argument carries a fresh snapshot on each callback. Because the read may run on a worker thread, marshal any UI update back to the UI thread inside the handler.

The snapshot exposes six read-only values. `ProgressPercent` is the headline figure for a progress bar, while `PagesComplete` and `TotalPages` give the same idea as a page count, so a 3-of-10 read reads naturally either way. `StartTimeUTC` records when the job began, `EndTimeUTC` is a `Nullable<DateTime>` that stays null until the job finishes, and `Duration` is the elapsed `TimeSpan` so far. Read `ProgressPercent` for a simple indicator, and pair `Duration` with `ProgressPercent` when reporting an estimated time remaining for a long batch. Every property is get-only, so treat the argument as an immutable report of that moment rather than something to modify, and capture only the values you intend to display since the next callback supplies a newer snapshot.

```csharp
using IronOcr;

var ocr = new IronTesseract();
ocr.OcrProgress += (sender, e) =>
    Console.WriteLine($"{e.ProgressPercent}% ({e.PagesComplete}/{e.TotalPages})");
ocr.Read(input);
```

The [progress tracking how-to](https://ironsoftware.com/csharp/ocr/how-to/progress-tracking/) wires the event to a progress display, the [progress tracking example](https://ironsoftware.com/csharp/ocr/examples/progress-tracking/) shows a working handler, and the [async OCR how-to](https://ironsoftware.com/csharp/ocr/how-to/async/) keeps the read off the calling thread.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrProgressEventsArgs Class - IronOCR C# API`
- v2 (human): `OcrProgressEventsArgs: Track OCR Progress in C#`
- v3 (balanced): `OcrProgressEventsArgs Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Track OCR progress in C# with the IronOCR OcrProgressEventsArgs class: read ProgressPercent, PagesComplete, TotalPages, and timing from OcrProgress.`
- v2 (human): `Report long OCR jobs in C# with the IronOCR OcrProgressEventsArgs class: get percent done, pages complete, and elapsed time from the OcrProgress event.`
- v3 (balanced): `Reference for the IronOCR OcrProgressEventsArgs class in C#: ProgressPercent, PagesComplete, TotalPages, and timing, delivered by OcrProgress.`

---

## Structured data

**TechArticle abstract**

> Progress on a long OCR job in C# arrives in IronOCR's OcrProgressEventsArgs class, delivered to the OcrProgress event on IronTesseract. Each callback exposes ProgressPercent, PagesComplete, TotalPages, StartTimeUTC, the nullable EndTimeUTC, and the elapsed Duration. All properties are read-only, so it is an immutable snapshot for updating a progress bar or log.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrProgressEventsArgs live in the IronOCR API?",
    "answer": "OcrProgressEventsArgs is a class in the IronOcr.Events namespace, shipped in IronOcr.dll. It derives from EventArgs and is delivered through the OcrProgress event on IronTesseract, typed as EventHandler<OcrProgressEventsArgs>."
  },
  {
    "question": "How do you track OCR progress in C# with IronOCR?",
    "answer": "Subscribe to the OcrProgress event on an IronTesseract instance before calling Read. The handler receives an OcrProgressEventsArgs on each callback; read ProgressPercent for a progress bar, or PagesComplete and TotalPages for a page count."
  },
  {
    "question": "What does the EndTimeUTC property return before a job finishes?",
    "answer": "EndTimeUTC is a Nullable<DateTime> that stays null until the OCR job completes. Use StartTimeUTC and Duration for elapsed time while the job is running, and read EndTimeUTC once the read has finished."
  }
]
```
