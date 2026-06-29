<!--
Archetype N-Mid, class : List<Regex> (3 members) — IronWebScraper. Frame E.
Namespace IronWebScraper.Urls (from filename). Members verified 2026-06-22.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.Urls.UrlMatchPatternCollection.html
-->

## Injected overview (Markdown)

The wildcard and regex rules that decide which URLs a crawler may follow live in a `UrlMatchPatternCollection`. A `WebScraper` exposes four of them, `AllowedDomains`, `AllowedUrls`, `BannedDomains`, and `BannedUrls`, and a request is followed only when it passes the allow rules and matches none of the ban rules.

The collection extends `List<Regex>`, so rules can be added as full regular expressions, but the convenient form is the wildcard string. `Add("*.example.com/*")` accepts a single pattern using `*` and `?` wildcards, and the `params` overload, `Add("*/cart*", "*/login*")`, adds several at once. Patterns added to a `Banned` collection exclude matching URLs even when an `Allowed` rule would otherwise admit them. Keeping the allow and ban rules explicit is what stops a crawler from wandering off the target site, the most common cause of a runaway scrape, and rule order does not matter because a ban always takes precedence over an allow.

```csharp
AllowedDomains.Add("*.example.com");
BannedUrls.Add("*/cart*", "*/login*");
```

The [advanced web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp-advanced/) scopes a crawl with these collections, and the [shopping-site how-to](https://ironsoftware.com/csharp/webscraper/how-to/scraping-from-a-shopping-website/) limits which pages are visited.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `UrlMatchPatternCollection - IronWebScraper`
- v2 (human): `UrlMatchPatternCollection: Scope a Crawl in C#`
- v3 (balanced): `UrlMatchPatternCollection | IronWebScraper API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control which URLs a C# crawler follows with the IronWebScraper UrlMatchPatternCollection: add wildcard or regex allow and ban rules.`
- v2 (human): `Scope an IronWebScraper crawl in C# with UrlMatchPatternCollection: set AllowedDomains and BannedUrls using wildcard or regex patterns.`
- v3 (balanced): `Reference for the IronWebScraper UrlMatchPatternCollection in C#: wildcard and regex rules behind AllowedDomains, AllowedUrls, and BannedUrls.`

---

## Structured data

**TechArticle abstract**

> Scoping which URLs a C# crawler follows runs through the IronWebScraper UrlMatchPatternCollection, used by WebScraper's AllowedDomains, AllowedUrls, BannedDomains, and BannedUrls. It extends List<Regex>, so rules can be full regular expressions, but Add also accepts wildcard strings with * and ?, including a params overload for several at once. Ban rules exclude URLs that allow rules would otherwise admit.

**FAQPage entries**

```json
[
  {
    "question": "Where does UrlMatchPatternCollection live in the IronWebScraper API?",
    "answer": "UrlMatchPatternCollection is a class in the IronWebScraper.Urls namespace, shipped in IronWebScraper.dll. It derives from List<Regex> and backs the AllowedDomains, AllowedUrls, BannedDomains, and BannedUrls properties on WebScraper."
  },
  {
    "question": "How do you restrict which URLs an IronWebScraper crawl visits?",
    "answer": "Add wildcard patterns to the WebScraper collections: AllowedDomains and AllowedUrls admit URLs, BannedDomains and BannedUrls exclude them. Use Add(\"*.example.com\") for one pattern or the params overload for several, with bans taking precedence."
  }
]
```
