<!--
Archetype N-Full, abstract base class (primary, 59 members) — IronWebScraper. Frame D.
P7 bucketing (scope / politeness / output). Init, Parse, Request, Scrape, Css verified 2026-06-22.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.WebScraper.html
-->

## Injected overview (Markdown)

Building a web crawler in C# starts by extending `WebScraper` and overriding two methods. It is abstract, so a developer subclasses it and supplies the crawl logic while the base runs the request queue, threading, retries, and throttling. A single subclass becomes a complete, runnable scraper.

A subclass implements two abstract methods. `Init()` queues the starting URLs by calling `Request(url, Parse)`. `Parse(Response response)` receives each fetched page, pulls data from it, and queues any follow-up links with further `Request` calls. Calling `Start()`, or `StartAsync()` for the awaitable form, runs the crawl until the queue drains, and `Stop()` ends it early.

The configuration groups into three jobs. Scope is set with `AllowedDomains`, `AllowedUrls`, `BannedDomains`, and `BannedUrls`, each a `UrlMatchPatternCollection` of wildcard or regex rules that decide which links are followed. Politeness is set with `ObeyRobotsDotTxt`, `RateLimitPerHost`, `ThrottleMode`, `MaxHttpConnectionLimit`, and the `Identities` list that rotates `HttpIdentity` proxies and user agents. Output uses `Scrape(item, fileName)` to persist extracted objects as JSON and `UnScrape<T>()` to read them back, while `DownloadFile` and `DownloadImage` save linked assets. The base also manages concurrency and resilience: `MaxHttpConnectionLimit` and `OpenConnectionLimitPerHost` cap parallel fetches, `HttpRetryAttempts` and `HttpTimeOut` govern failures, and `WorkingDirectory` sets where JSON and downloads land. Override points such as `AcceptUrl` and `ChooseIdentityForRequest` let a subclass refine link filtering and identity selection beyond the pattern collections.

```csharp
using IronWebScraper;

public class BlogScraper : WebScraper
{
    public override void Init()
    {
        Request("https://blog.example.com", Parse);
    }

    public override void Parse(Response response)
    {
        foreach (HtmlNode title in response.Css("h2.post-title"))
            Scrape(new { Title = title.TextContentClean });
    }
}
```

The [web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp/) builds a first scraper, the [advanced tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp-advanced/) covers throttling and identities, and the [C# web scraper example](https://ironsoftware.com/csharp/webscraper/examples/c-sharp-web-scraper/) shows a complete class.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WebScraper Class - IronWebScraper C# API`
- v2 (human): `WebScraper: Build a C# Web Crawler`
- v3 (balanced): `WebScraper Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Build a web crawler in C# by extending the IronWebScraper WebScraper base class. Override Init and Parse, set scope and throttling, then Start.`
- v2 (human): `Create a C# web scraper by extending the IronWebScraper WebScraper class: queue URLs in Init, extract in Parse, control scope and rate, with examples.`
- v3 (balanced): `Reference for the IronWebScraper WebScraper base class in C#: override Init and Parse, set crawl scope and throttling, and save scraped data.`

---

## Structured data

**TechArticle abstract**

> Building a web crawler in C# runs through the abstract IronWebScraper WebScraper base class. Extend it and override Init to queue starting URLs with Request, and Parse to extract data from each Response and save it with Scrape. Set crawl scope with the AllowedDomains and BannedUrls pattern collections, and politeness with ObeyRobotsDotTxt, RateLimitPerHost, and rotating HttpIdentity instances. Run it with Start or StartAsync.

**FAQPage entries**

```json
[
  {
    "question": "Where does WebScraper live in the IronWebScraper API?",
    "answer": "WebScraper is an abstract class in the IronWebScraper namespace, shipped in IronWebScraper.dll. Extend it, override the abstract Init and Parse methods, and call Start to run the crawl."
  },
  {
    "question": "How do you create a web scraper in C#?",
    "answer": "Subclass WebScraper, override Init to queue start URLs with Request(url, Parse), and override Parse to extract data from the Response and store it with Scrape. Call Start or StartAsync to run the crawl."
  },
  {
    "question": "How do you make a C# scraper respect rate limits and robots.txt?",
    "answer": "Set ObeyRobotsDotTxt to true, set RateLimitPerHost and ThrottleMode to pace requests, and cap concurrency with MaxHttpConnectionLimit and OpenConnectionLimitPerHost. Rotate HttpIdentity instances through the Identities list to vary proxy and user agent."
  }
]
```
