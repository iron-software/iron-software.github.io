<!--
Archetype N-Mid, class : Dictionary<string, object> (2 members) — IronWebScraper. Frame B.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.MetaData.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

`MetaData` is the per-request bag a scraper uses to carry its own objects from a `Request` through to the matching `Response`. It extends `Dictionary<string, object>`, so any value can be stored under a string key and read back when the page is parsed, which is how context such as a category, a parent record, or a page number reaches the parser.

Store values with the dictionary indexer and read them with the typed `Get<T>(key)` helper, which casts the stored object for you. Attach a `MetaData` to a `WebScraper.Request` call; the resulting `Response.MetaData` exposes the same instance during parsing. Because the bag holds `object` values, a whole record or domain model can ride along rather than just strings, which keeps a multi-step crawl stateful without external storage, and the typed `Get<T>` removes the cast at the read site.

```csharp
var meta = new MetaData();
meta["pageType"] = "listing";
Request(url, Parse, meta);

// later, in Parse:
string type = response.MetaData.Get<string>("pageType");
```

The [blog web scraper tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/c-sharp-blog-web-scraper/) threads context through MetaData, and the [advanced tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp-advanced/) uses it across multi-step crawls.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MetaData Class - IronWebScraper C# API`
- v2 (human): `MetaData: Carry Context Between Requests in C#`
- v3 (balanced): `MetaData Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Carry context between a Request and Response in C# with the IronWebScraper MetaData class: store any object by key and read it with Get<T>.`
- v2 (human): `Pass data into a scraper's parser in C# with the IronWebScraper MetaData class: attach objects to a Request and read them back from the Response.`
- v3 (balanced): `Reference for the IronWebScraper MetaData class in C#: a string-keyed bag that carries objects from a Request to the matching Response.`

---

## Structured data

**TechArticle abstract**

> Carrying per-request context in C# runs through the IronWebScraper MetaData class, a string-keyed bag of objects built on Dictionary<string, object>. Store any object under a string key with the indexer and read it back with the typed Get<T> helper. Attach a MetaData to a Request, and the matching Response exposes the same instance so a category, parent record, or page number reaches the parser.

**FAQPage entries**

```json
[
  {
    "question": "Where does MetaData live in the IronWebScraper API?",
    "answer": "MetaData is a class in the IronWebScraper namespace, shipped in IronWebScraper.dll. It derives from Dictionary<string, object>, so it is used like a dictionary with an added typed Get<T> helper."
  },
  {
    "question": "How do you pass custom data into a scraper's parse method in C#?",
    "answer": "Create a MetaData, store values with the indexer, and pass it to WebScraper.Request. In Parse, read them from Response.MetaData with Get<T>, for example Get<string>(\"pageType\")."
  }
]
```
