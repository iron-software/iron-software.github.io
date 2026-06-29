<!--
Archetype N-Full, static class (primary gate) — IronPrint
Target page: https://ironsoftware.com/csharp/print/object-reference/api/IronPrint.Printer.html
Opener frame: A (subject-verb). API verified against the live docfx page 2026-06-22.
-->

## Injected overview (Markdown)

`Printer` sends a document to a physical printer from C#, and it does so on Windows, macOS, Linux, Android, and iOS through one API. Hand it a file path or a `byte[]` of file data and it queues the job on the default printer or on one named through `PrintSettings`. Jobs print silently by default, so a server or background service can print with no user present.

The members fall into three groups. Printing methods (`Print` and `PrintAsync`) send a job straight to the device. The interactive methods (`ShowPrintDialog` and `ShowPrintDialogAsync`) open the operating system print dialog so the user picks the printer and options. The discovery methods (`GetPrinterNames` and `GetPrinterTrays`) list the printers and trays available on the machine. Because the class is static, there is nothing to construct: call the methods directly after rendering or loading the file you want on paper. Every printing and dialog call takes an optional `PrintSettings`, and each has an asynchronous form that returns a `Task` to keep the operation off the calling thread.

A typical job builds a `PrintSettings`, sets the values that matter, and passes it to `Print`. When the target device is not known ahead of time, call `GetPrinterNames` first and assign the chosen name to `PrintSettings.PrinterName`, or call `ShowPrintDialog` and let the user choose. Where blocking the thread is a concern, prefer `PrintAsync` or `ShowPrintDialogAsync` and await the returned `Task`. The [print settings guide](https://ironsoftware.com/csharp/print/how-to/print-settings/) covers the options each call accepts.

```csharp
using IronPrint;

PrintSettings settings = new PrintSettings { NumberOfCopies = 2 };
Printer.Print("invoice.pdf", settings);
```

The [silent printing guide](https://ironsoftware.com/csharp/print/how-to/silent-printing/) walks through unattended jobs, the [print with dialog guide](https://ironsoftware.com/csharp/print/how-to/print-with-dialog/) covers interactive printing, and the [retrieve printer names guide](https://ironsoftware.com/csharp/print/how-to/retrieve-printer-names/) shows how to enumerate devices first.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Printer Class - IronPrint C# API Reference`
- v2 (human): `Printer: Print Files from C# with IronPrint`
- v3 (balanced): `Printer Class | IronPrint C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Print files to any printer from C# with the IronPrint Printer class. Reference its Print, ShowPrintDialog, and printer-discovery methods with examples.`
- v2 (human): `Send documents to a printer from C# with the IronPrint Printer class: print silently, show a dialog, or list printers and trays, with code examples.`
- v3 (balanced): `Reference for the IronPrint Printer class in C#: print files silently, show the print dialog, and enumerate printers and trays, with code examples.`

---

## Structured data

**TechArticle abstract**

> Printing a document from C# across desktop and mobile platforms runs through the static Printer class in IronPrint. Pass a file path or byte array to Print, with an optional PrintSettings to choose the printer, copies, paper, and quality. Use ShowPrintDialog to let the user pick a device, and GetPrinterNames or GetPrinterTrays to discover what is available first. Every printing and dialog call has an Async form that returns a Task.

**FAQPage entries**

```json
[
  {
    "question": "Where does Printer live in the IronPrint API?",
    "answer": "Printer is a static class in the IronPrint namespace, shipped in IronPrint.dll. Call its static Print, ShowPrintDialog, GetPrinterNames, and GetPrinterTrays methods directly; there is no instance to construct."
  },
  {
    "question": "How do you print a file silently in C#?",
    "answer": "Call Printer.Print with a file path or byte array. Printing is silent by default, so no dialog appears. Pass an optional PrintSettings to set the printer name, number of copies, and paper options."
  },
  {
    "question": "How do you list the available printers in C#?",
    "answer": "Call Printer.GetPrinterNames to get the installed printer names, or Printer.GetPrinterNamesAsync for the non-blocking form. Use Printer.GetPrinterTrays to list the trays for a named printer."
  }
]
```
