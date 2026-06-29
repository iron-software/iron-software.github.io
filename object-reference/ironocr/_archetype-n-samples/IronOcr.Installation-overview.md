<!--
N-Full (static class, 12 members, >10 same-kind -> bucketed). Frame F (capped, used once in cluster). IronOcr.
Members verified 2026-06-23: CustomLogger, InstallationPath, IsLicensed, LanguagePackDirectory, LicenseKey, LinuxAndDockerDependenciesAutoConfig, LogFilePath, LoggingMode, MachineLearningModelsDirectory (properties); ClearLogFiles(), IsValidLicense(String), Log(String) (methods).
Disambiguation pair: License (licensing-only static class) shares LicenseKey/IsLicensed/IsValidLicense.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Installation.html
-->

## Injected overview (Markdown)

Configure how IronOCR is installed, licensed, and logged across an application through `Installation`. It is the single static place to set engine paths, apply a license, and turn on diagnostics, so application startup can settle every cross-cutting setting before the first read. The licensing members it carries are also available on the focused `License` class; reach for `Installation` when paths, logging, or dependency setup belong in the same configuration block.

Because the class is static, you assign and read its members directly, typically once at startup. Settings take effect for every subsequent OCR call in the process, which is why this is configured ahead of any `IronTesseract` read rather than per read.

Its members group into three buckets. **Paths**: `InstallationPath` is the IronOCR install location, `LanguagePackDirectory` points at custom `.ocrdata` language files, and `MachineLearningModelsDirectory` holds the ML files behind the advanced-scan reads. **Licensing**: set `LicenseKey` to remove the watermark, read `IsLicensed` to confirm the running instance is licensed, and call `IsValidLicense` to validate a key string. **Logging and environment**: `LoggingMode` selects how detailed developer messages are emitted, `LogFilePath` directs them to a file, `CustomLogger` swaps in your own logger, `Log` writes a message to the enabled outputs, and `ClearLogFiles` removes existing log files. `LinuxAndDockerDependenciesAutoConfig` lets IronOCR install the native packages it needs on Linux and Docker automatically.

```csharp
IronOcr.Installation.LicenseKey = "IRONOCR-MYLICENSE-KEY-1EF01";
IronOcr.Installation.LoggingMode = IronOcr.Installation.LoggingModes.All;
IronOcr.Installation.LinuxAndDockerDependenciesAutoConfig = true;
```

The [Iron Tesseract how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) sets up a configured read, the [debugging how-to](https://ironsoftware.com/csharp/ocr/how-to/debugging/) uses the logging members, and the [configure and set up Tesseract example](https://ironsoftware.com/csharp/ocr/examples/csharp-configure-setup-tesseract/) puts the options together.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Installation Class - IronOCR C# API Reference`
- v2 (human): `Installation: Configure IronOCR in C#`
- v3 (balanced): `Installation Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure IronOCR in C# with the static Installation class: set paths, LicenseKey, LoggingMode, LogFilePath, and Linux/Docker auto-config.`
- v2 (human): `Set up IronOCR installation, licensing, and logging in C# with the static Installation class: configure paths and diagnostics at startup.`
- v3 (balanced): `Reference for IronOCR's static Installation class in C#: installation paths, license key, logging modes, and Linux/Docker dependency setup.`

---

## Structured data

**TechArticle abstract**

> Configure how IronOCR is installed, licensed, and logged in C# through the static Installation class. Set engine and model paths (InstallationPath, LanguagePackDirectory, MachineLearningModelsDirectory), apply a license (LicenseKey, IsLicensed, IsValidLicense), and control diagnostics (LoggingMode, LogFilePath, CustomLogger, Log, ClearLogFiles). LinuxAndDockerDependenciesAutoConfig installs native packages automatically.

**FAQPage entries**

```json
[
  {
    "question": "Where does Installation live in the IronOCR API?",
    "answer": "Installation is a static class in the IronOcr namespace, shipped in IronOcr.dll. Assign and read its members directly without constructing an instance, typically once at application startup."
  },
  {
    "question": "What is the difference between Installation and License in IronOCR?",
    "answer": "Both are static and both expose LicenseKey, IsLicensed, and IsValidLicense. License is the licensing-only entry point, while Installation adds installation and model paths, logging configuration, and Linux/Docker dependency setup."
  },
  {
    "question": "How do you enable logging in IronOCR?",
    "answer": "Set LoggingMode to choose the detail level and LogFilePath to direct output to a file, or assign CustomLogger to use your own logger. Call Log to write a message and ClearLogFiles to remove existing logs."
  }
]
```
