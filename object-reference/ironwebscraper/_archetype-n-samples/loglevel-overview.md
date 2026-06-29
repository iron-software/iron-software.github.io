<!--
Archetype N-Lite / enum (flags; docfx "sealed class LogLevel : Enum"), nested in WebScraper.
Members verified 2026-06-22: All, Critical, Decision, Http, None, ScrapedData.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.WebScraper.LogLevel.html
-->

## Injected overview (Markdown)

`LogLevel` sets how much a `WebScraper` writes to the console, assigned to `WebScraper.LoggingLevel`. It is a flags enum, so values combine with a pipe. `None` is silent and `All` logs everything, while `Critical`, `Http`, `Decision`, and `ScrapedData` each select one category: errors, HTTP traffic, crawl decisions, and saved data. Combine the categories you want, for example `LogLevel.Critical | LogLevel.Http`, to keep the console focused during a long crawl. The [advanced web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp-advanced/) tunes logging on a real crawl.

```csharp
scraper.LoggingLevel = LogLevel.Critical | LogLevel.Http;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LogLevel Enum - IronWebScraper C# API`
- v2 (human): `LogLevel: Control Scraper Logging in C#`
- v3 (balanced): `LogLevel Enum | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control scraper console logging in C# with the IronWebScraper LogLevel flags enum: None, All, Critical, Http, Decision, and ScrapedData.`
- v2 (human): `Set how much an IronWebScraper crawl logs in C# with the LogLevel flags enum: combine Critical, Http, Decision, and ScrapedData with a pipe.`
- v3 (balanced): `Reference for the IronWebScraper LogLevel flags enum in C#: combine Critical, Http, Decision, and ScrapedData via WebScraper.LoggingLevel.`

---

## Structured data

**TechArticle abstract**

> Use LogLevel in IronWebScraper to set how much a crawl writes to the console, through WebScraper.LoggingLevel. It is a flags enum: None is silent, All logs everything, and Critical, Http, Decision, and ScrapedData each select a category that can be combined with a pipe.
