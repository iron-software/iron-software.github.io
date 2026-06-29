<!--
Archetype N-Full, class — IronWebScraper. Frame B (identity-by-role).
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.HtmlNode.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

`HtmlNode` is the DOM element you read when pulling data from a scraped page. Selector queries on a `Response` (`Css`, `QuerySelectorAll`, `XPath`, `GetElementById`) return `HtmlNode` instances or arrays, and each node exposes the element's text, markup, attributes, and position in the tree.

Text comes out in two grades: `InnerText` and `TextContent` keep the raw element text, while `InnerTextClean` and `TextContentClean` collapse whitespace for tidy field values. Markup is available as `InnerHtml` and `OuterHtml`. Attributes are read through the `Attributes` dictionary or, for one value, `GetAttribute("href")`, with `HasAtribute` testing presence. Element identity is on `NodeName` and `NodeType`.

Whitespace handling matters in practice: a title or price read from `InnerText` often carries newlines and indentation from the source markup, while the `Clean` variants return the trimmed, single-spaced value suited to a data field. `OuterHtml` includes the element's own tag, useful when storing a fragment, while `InnerHtml` returns only its contents, and `NodeName` reports the tag, such as `div` or `a`, when a selector matches mixed element types. When an attribute may be absent, guard with `HasAtribute` before `GetAttribute`, since a missing attribute returns null.

A node is also a query root, so extraction can drill down without returning to the response. `Css`, `QuerySelector`, `QuerySelectorAll`, and `XPath` run against the node's own subtree, and `ChildNodes` and `ParentNode` walk the tree directly. A common shape selects a container with one query, then reads child fields from each node in the result.

```csharp
foreach (HtmlNode card in response.Css("div.product"))
{
    string name = card.Css("h3").FirstOrDefault()?.TextContentClean;
    string price = card.GetAttribute("data-price");
    Scrape(new { name, price });
}
```

The [shopping-site how-to](https://ironsoftware.com/csharp/webscraper/how-to/scraping-from-a-shopping-website/) extracts fields from nodes this way, and the [web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp/) covers selecting and reading elements.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HtmlNode Class - IronWebScraper C# API`
- v2 (human): `HtmlNode: Read DOM Elements in C#`
- v3 (balanced): `HtmlNode Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read DOM elements in C# with the IronWebScraper HtmlNode class: InnerText, attributes, OuterHtml, and nested Css, QuerySelector, and XPath queries.`
- v2 (human): `Extract text and attributes from scraped pages in C# with the IronWebScraper HtmlNode class, and run nested selector queries on any node.`
- v3 (balanced): `Reference for the IronWebScraper HtmlNode class in C#: read element text and attributes and run Css and XPath queries on the node subtree.`

---

## Structured data

**TechArticle abstract**

> Reading a DOM element in C# runs through the IronWebScraper HtmlNode class, returned by Response selector queries. Read element text with InnerText or the whitespace-collapsed InnerTextClean, markup with InnerHtml and OuterHtml, and attributes through the Attributes dictionary or GetAttribute. Each node is also a query root, so Css, QuerySelector, XPath, ChildNodes, and ParentNode drill into its subtree.

**FAQPage entries**

```json
[
  {
    "question": "Where does HtmlNode live in the IronWebScraper API?",
    "answer": "HtmlNode is a class in the IronWebScraper namespace, shipped in IronWebScraper.dll. Response selector methods such as Css and QuerySelectorAll return HtmlNode instances representing DOM elements."
  },
  {
    "question": "How do you read an element's text and attributes in C#?",
    "answer": "Read the text from InnerText or TextContent, or use InnerTextClean and TextContentClean for whitespace-collapsed values. Read attributes from the Attributes dictionary or GetAttribute(name), and test presence with HasAtribute."
  },
  {
    "question": "Can you run a CSS selector on a single HtmlNode?",
    "answer": "Yes. HtmlNode is a query root, so Css, QuerySelector, QuerySelectorAll, and XPath run against the node's own subtree. Use ChildNodes and ParentNode to walk the tree directly."
  }
]
```
