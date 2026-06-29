<!--
Archetype N-Full, class — IronWebScraper. Frame C (when-fronted).
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.Request.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

When a scraper queues a URL to fetch, it travels as a `Request`. A developer rarely builds one directly; calling `WebScraper.Request(url, parse, ...)` from `Init` or `Parse` creates the `Request` and adds it to the crawl queue, where the base class fetches it and hands the result to the parse method named in the call.

A `Request` records what to fetch and how to handle it. `Url` is the target, `Action` is the `Action<Response>` parse callback to run when the page arrives, and `Method` reports whether the fetch is a GET or POST. `Identity` pins a specific `HttpIdentity` to this request, overriding the crawler's normal rotation, and `MetaData` attaches a bag of your own objects that the matching `Response` carries through, which is how per-request context (a category, a parent record, a page number) reaches the parser.

The `Method` reflects whether the fetch is a GET, queued through `Request`, or a POST, queued through the related `WebScraper.PostRequest` overloads that send form data, and `Action` holds the same parse callback the response will run. `Retries` reports how many times the request has been re-attempted after a failure, and the static `Request.Hash` produces a stable key for a request, useful for de-duplicating URLs across a large crawl. Set any `MetaData` at queue time, since the values are captured once the request enters the crawl queue and read back only when its response is parsed.

```csharp
public override void Init()
{
    var meta = new MetaData();
    meta["category"] = "books";
    Request("https://example.com/books", Parse, metaData: meta);
}
```

The [web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp/) queues requests from a parser, and the [blog web scraper tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/c-sharp-blog-web-scraper/) carries context through MetaData.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Request Class - IronWebScraper C# API`
- v2 (human): `Request: Queue Scraper Fetches in C#`
- v3 (balanced): `Request Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Queue a fetch in C# with the IronWebScraper Request class: set Url, the parse Action, a pinned HttpIdentity, and MetaData carried to the Response.`
- v2 (human): `Control how a scraper fetches a URL in C# with the IronWebScraper Request class: target URL, parse callback, identity, and per-request MetaData.`
- v3 (balanced): `Reference for the IronWebScraper Request class in C#: target URL, parse Action, pinned HttpIdentity, MetaData, retries, and request hashing.`

---

## Structured data

**TechArticle abstract**

> Queuing a fetch in C# runs through the IronWebScraper Request class, created when you call WebScraper.Request from Init or Parse. It records the Url, the Action parse callback, the Method, an optional HttpIdentity that overrides identity rotation, and a MetaData bag carried through to the matching Response so per-request context reaches the parser. Retries tracks re-attempts and the static Hash de-duplicates URLs.

**FAQPage entries**

```json
[
  {
    "question": "Where does Request live in the IronWebScraper API?",
    "answer": "Request is a class in the IronWebScraper namespace, shipped in IronWebScraper.dll. The WebScraper.Request method creates one and adds it to the crawl queue; you rarely construct it directly."
  },
  {
    "question": "How do you pass data to a scraper's parse method in C#?",
    "answer": "Attach a MetaData object when queuing a Request, for example Request(url, Parse, metaData). The matching Response carries the same MetaData, so the parser reads back the category, parent record, or page number you stored."
  },
  {
    "question": "How do you use a specific proxy for one scraper request?",
    "answer": "Set the Identity property to an HttpIdentity, or pass one to WebScraper.Request, to pin that request to a specific proxy and user agent, overriding the crawler's normal identity rotation."
  }
]
```
