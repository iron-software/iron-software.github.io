<!--
Archetype N-Mid, class : Dictionary<string, object> (4 members) — IronWebScraper. Frame B.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.ScrapedData.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

`ScrapedData` is the key-value record a scraper fills with extracted fields and serializes as JSON. It extends `Dictionary<string, object>`, so each field is stored under a string key and the whole record converts to and from JSON for saving a crawl's results.

Set fields with the dictionary indexer, read a typed value with `Get<T>(key)`, write the record to a JSON string with `ToJson()`, and rebuild one from JSON with the static `ScrapedData.FromJson(json)`. In a `WebScraper`, passing an object to `Scrape` persists it, and `UnScrape<T>()` reads stored results back, so `ScrapedData` is the natural shape for both ends of that round trip. Because values are stored as `object`, a single record can mix strings, numbers, and nested data, and the JSON round trip through `ToJson` and `FromJson` makes a crawl's output easy to persist to disk and reload in a later run.

```csharp
var data = new ScrapedData();
data["title"] = node.TextContentClean;
data["price"] = node.GetAttribute("data-price");
Scrape(data);
```

The [web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp/) saves results as `ScrapedData`, and the [C# web scraper example](https://ironsoftware.com/csharp/webscraper/examples/c-sharp-web-scraper/) shows the JSON output.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ScrapedData Class - IronWebScraper C# API`
- v2 (human): `ScrapedData: Store Scraped Fields in C#`
- v3 (balanced): `ScrapedData Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Store extracted fields in C# with the IronWebScraper ScrapedData class: a string-keyed record with Get<T>, ToJson, and the static FromJson.`
- v2 (human): `Collect scraped fields in C# with the IronWebScraper ScrapedData class and save them as JSON, then read them back with UnScrape, with examples.`
- v3 (balanced): `Reference for the IronWebScraper ScrapedData class in C#: a string-keyed record of extracted fields with JSON serialization via ToJson and FromJson.`

---

## Structured data

**TechArticle abstract**

> Storing extracted fields in C# runs through the IronWebScraper ScrapedData class, a string-keyed record of objects built on Dictionary<string, object>. Set fields with the indexer, read typed values with Get<T>, serialize with ToJson, and rebuild from JSON with the static FromJson. WebScraper.Scrape persists these records and UnScrape reads them back, making ScrapedData the shape for both ends of the round trip.

**FAQPage entries**

```json
[
  {
    "question": "Where does ScrapedData live in the IronWebScraper API?",
    "answer": "ScrapedData is a class in the IronWebScraper namespace, shipped in IronWebScraper.dll. It derives from Dictionary<string, object> and adds Get<T>, ToJson, and the static FromJson for JSON serialization."
  },
  {
    "question": "How do you save scraped data as JSON in C#?",
    "answer": "Fill a ScrapedData with the indexer and pass it to WebScraper.Scrape, which persists it. Call ToJson on a record for the JSON string directly, and rebuild one with the static ScrapedData.FromJson."
  }
]
```
