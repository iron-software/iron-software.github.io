<!--
Archetype N-Mid, static class (3 extension methods) — IronWebScraper. Frame D.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.HtmlNodeExtensions.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

Filtering a set of DOM nodes by text or by a further CSS selector runs through the `HtmlNodeExtensions` methods. They are extension methods on `IEnumerable<HtmlNode>`, so they chain directly onto the array a `Response.Css` or `HtmlNode.Css` query returns, narrowing a result set without a manual loop.

`ContainingText(search)` keeps only the nodes whose text contains the search string, and `ContainingTextCaseInsensitive(search)` does the same while ignoring case. `CSS(selector)` runs an additional CSS selector across every node in the set and returns the combined matches, acting as the set-level counterpart to the selector query on a single node. Because the text filters return a plain `IEnumerable<HtmlNode>`, several can be chained to narrow a large match set step by step before the fields are read, and they compose with LINQ operators such as `Where` and `Select`.

```csharp
HtmlNode[] saleItems = response.QuerySelectorAll("div.product").ContainingText("Sale").ToArray();
```

The [shopping-site how-to](https://ironsoftware.com/csharp/webscraper/how-to/scraping-from-a-shopping-website/) filters product nodes this way, and the [web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp/) covers selecting and narrowing elements.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HtmlNodeExtensions - IronWebScraper C# API`
- v2 (human): `HtmlNodeExtensions: Filter DOM Nodes in C#`
- v3 (balanced): `HtmlNodeExtensions | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Filter scraped DOM nodes in C# with the IronWebScraper HtmlNodeExtensions methods: ContainingText, ContainingTextCaseInsensitive, and CSS.`
- v2 (human): `Narrow a set of HtmlNode results in C# with the IronWebScraper HtmlNodeExtensions methods, chaining text and CSS filters onto a Css query.`
- v3 (balanced): `Reference for the IronWebScraper HtmlNodeExtensions methods in C#: filter IEnumerable<HtmlNode> by text or CSS selector, with examples.`

---

## Structured data

**TechArticle abstract**

> Filtering a set of scraped DOM nodes in C# runs through the IronWebScraper HtmlNodeExtensions methods, extension methods on IEnumerable<HtmlNode>. ContainingText and ContainingTextCaseInsensitive keep nodes whose text matches, and CSS runs a further selector across the set. They chain onto a Response.Css result and compose with LINQ.

**FAQPage entries**

```json
[
  {
    "question": "Where does HtmlNodeExtensions live in the IronWebScraper API?",
    "answer": "HtmlNodeExtensions is a static class in the IronWebScraper namespace, shipped in IronWebScraper.dll. Its methods are extension methods on IEnumerable<HtmlNode>, so they are called on the result of a Css query."
  },
  {
    "question": "How do you filter scraped nodes by their text in C#?",
    "answer": "Chain ContainingText, or ContainingTextCaseInsensitive for case-insensitive matching, onto a Css result to keep only nodes whose text contains the search string. Use the CSS extension to apply a further selector across the set."
  }
]
```
