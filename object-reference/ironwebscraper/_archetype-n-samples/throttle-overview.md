<!--
Archetype N-Lite / enum (docfx "sealed class Throttle : Enum"), nested in WebScraper.
Members verified 2026-06-22: ByDomainHostName, ByIpAddress.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.WebScraper.Throttle.html
-->

## Injected overview (Markdown)

`Throttle` selects how a `WebScraper` groups its rate limiting, assigned to `WebScraper.ThrottleMode`. `ByDomainHostName` paces requests separately for each host name, which suits crawling several independent sites at once. `ByIpAddress` paces by the resolved server IP, so multiple host names served from one machine share a single rate limit, which is the polite choice when many subdomains sit behind one server. Pair the mode with `RateLimitPerHost` to set the actual pace. The [advanced web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp-advanced/) configures throttling on a live crawl.

```csharp
scraper.ThrottleMode = Throttle.ByIpAddress;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Throttle Enum - IronWebScraper C# API`
- v2 (human): `Throttle: Rate-Limit a C# Crawl`
- v3 (balanced): `Throttle Enum | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how a C# crawl groups rate limiting with the IronWebScraper Throttle enum: ByDomainHostName or ByIpAddress, via WebScraper.ThrottleMode.`
- v2 (human): `Choose how an IronWebScraper crawl is rate-limited in C# with the Throttle enum: pace by host name or by resolved server IP address.`
- v3 (balanced): `Reference for the IronWebScraper Throttle enum in C#: pace requests ByDomainHostName or ByIpAddress through WebScraper.ThrottleMode.`

---

## Structured data

**TechArticle abstract**

> Use Throttle in IronWebScraper to set how a crawl groups its rate limiting, through WebScraper.ThrottleMode. ByDomainHostName paces each host name separately, while ByIpAddress paces by the resolved server IP so host names sharing one server share a limit. Pair it with RateLimitPerHost to set the pace.
