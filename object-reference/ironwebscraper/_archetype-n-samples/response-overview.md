<!--
Archetype N-Full, class — IronWebScraper. Frame A (subject-verb).
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.Response.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

`Response` carries the result of a fetched URL, including its content, status, and parsed DOM, into a scraper's `Parse` method. The `WebScraper` base hands one `Response` to `Parse` for every page it downloads, so this is the object a developer reads from to extract data and decide which links to follow next.

Content arrives in several forms. `Html` and `TextContent` give the raw markup and stripped text, `BinaryContent` gives the bytes for non-HTML resources, and `Document` exposes the parsed root as an `HtmlNode`. For targeted extraction, query helpers run selectors directly against the response: `Css` and `QuerySelectorAll` return matching `HtmlNode` arrays, `GetElementById` and `QuerySelector` return a single node, and `XPath` runs an XPath expression. `CssExists` tests for a match without returning nodes.

When the page structure is unknown, `Document` gives the parsed root node for manual walking, and `CssExists` tests for a selector match before extraction is attempted. Request context travels with the response. `StatusCode` and `WasSuccessful` report the outcome, `FinalUrl` reflects redirects, and `Request` links back to the originating `Request`. The `MetaData` carried from that request rides along on the response, so context queued with the fetch is available while parsing. The `ToAbsoluteUrl` helpers turn the relative links found on a page into absolute URLs ready to pass to a follow-up `Request`. Read the values inside `Parse`; the response is a snapshot of one fetch.

```csharp
public override void Parse(Response response)
{
    if (!response.WasSuccessful) return;
    foreach (HtmlNode link in response.Css("a.product"))
        Request(response.ToAbsoluteUrl(link.GetAttribute("href")), ParseProduct);
}
```

The [web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp/) reads responses end to end, and the [shopping-site how-to](https://ironsoftware.com/csharp/webscraper/how-to/scraping-from-a-shopping-website/) shows selector queries against real pages.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Response Class - IronWebScraper C# API`
- v2 (human): `Response: Read Scraped Pages in C#`
- v3 (balanced): `Response Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a fetched page in C# with the IronWebScraper Response class: Html, TextContent, Css and XPath queries, status, and absolute-URL helpers.`
- v2 (human): `Extract data from scraped pages in C# with the IronWebScraper Response class: run CSS and XPath selectors, read status, and resolve links.`
- v3 (balanced): `Reference for the IronWebScraper Response class in C#: query a page with Css and XPath, read content and status, and resolve relative URLs.`

---

## Structured data

**TechArticle abstract**

> Reading a fetched page in C# runs through the IronWebScraper Response class, which WebScraper passes to Parse for each download. Read Html, TextContent, or the parsed Document, and run Css, QuerySelectorAll, GetElementById, or XPath to pull matching HtmlNode results. Check StatusCode and WasSuccessful for the outcome, follow FinalUrl for redirects, and use ToAbsoluteUrl to resolve links for the next Request.

**FAQPage entries**

```json
[
  {
    "question": "Where does Response live in the IronWebScraper API?",
    "answer": "Response is a class in the IronWebScraper namespace, shipped in IronWebScraper.dll. The WebScraper base creates one per fetched URL and passes it to your Parse method."
  },
  {
    "question": "How do you select elements from a scraped page in C#?",
    "answer": "Call Response.Css or QuerySelectorAll with a CSS selector to get an HtmlNode array, QuerySelector or GetElementById for a single node, or XPath for an XPath expression. Read InnerText or GetAttribute on the returned nodes."
  },
  {
    "question": "How do you turn relative links on a page into absolute URLs?",
    "answer": "Call Response.ToAbsoluteUrl with a relative URL, or the overload that takes a collection, to resolve links against the page's FinalUrl. Pass the result to Request to queue the next fetch."
  }
]
```
