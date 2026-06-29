<!--
Archetype N-Full, class — IronWebScraper. Frame E (feature-fronted).
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.HttpIdentity.html
Members verified 2026-06-22. CommonUserAgents cross-ref verified.
-->

## Injected overview (Markdown)

The proxy, user agent, and credentials a scraper sends requests with are bundled into an `HttpIdentity`. Presenting a varied, realistic identity keeps a crawler from looking like a single robotic client, which is what most rate-limiting and blocking is tuned to catch.

Build one with `new HttpIdentity()` and set the fields that matter: `Proxy` routes the request through a proxy server, `UserAgent` sets the browser string (often taken from `CommonUserAgents`), and `NetworkUsername`, `NetworkPassword`, and `NetworkDomain` supply credentials for an authenticated proxy or site. `UseCookies` turns on the per-identity `Cookies` container so a session persists across requests, and `HttpRequestHeaders` adds custom headers.

With `UseCookies` enabled, the per-identity `Cookies` container persists session state across requests, so a login performed under one identity carries forward on its later fetches, and `NetworkLoginCredential` exposes the assembled credential. The static `DefaultHttpRequestHeaders` seeds the headers shared by new identities.

Identities are used through the `WebScraper.Identities` list. Add several and the crawler rotates among them, calling `ChooseIdentityForRequest` to pick one per fetch, which spreads load across proxies and user agents. A single request can also override the rotation by passing a specific `HttpIdentity` to `Request`. `ProxyFailureCount` tracks how often an identity's proxy has failed so unreliable ones can be retired. Spreading work across several identities is the core technique for crawling at volume without tripping the per-client rate limits and blocks that target a single repeated address.

```csharp
Identities.Add(new HttpIdentity
{
    Proxy = "http://10.0.0.1:8080",
    UserAgent = CommonUserAgents.ChromeDesktopUserAgents[0],
    UseCookies = true
});
```

The [advanced web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp-advanced/) sets up identity rotation, and the [movie-site how-to](https://ironsoftware.com/csharp/webscraper/how-to/scraping-from-an-online-movie-website/) uses identities against a real site.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HttpIdentity Class - IronWebScraper C# API`
- v2 (human): `HttpIdentity: Proxies & User Agents in C#`
- v3 (balanced): `HttpIdentity Class | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set a scraper's proxy, user agent, and credentials in C# with the IronWebScraper HttpIdentity class, and rotate identities through WebScraper.`
- v2 (human): `Disguise and rotate scraper requests in C# with the IronWebScraper HttpIdentity class: proxy, user agent, cookies, and credentials per request.`
- v3 (balanced): `Reference for the IronWebScraper HttpIdentity class in C#: configure proxy, user agent, cookies, and credentials, and rotate identities.`

---

## Structured data

**TechArticle abstract**

> Configuring how a scraper presents itself in C# runs through the IronWebScraper HttpIdentity class. Set Proxy, UserAgent (often from CommonUserAgents), network credentials, UseCookies, and HttpRequestHeaders, then add identities to the WebScraper.Identities list so the crawler rotates among them through ChooseIdentityForRequest. A single Request can override the rotation with a specific identity.

**FAQPage entries**

```json
[
  {
    "question": "Where does HttpIdentity live in the IronWebScraper API?",
    "answer": "HttpIdentity is a class in the IronWebScraper namespace, shipped in IronWebScraper.dll. Add instances to the WebScraper.Identities list, or pass one to a Request, to control proxy, user agent, and credentials."
  },
  {
    "question": "How do you rotate proxies and user agents in a C# scraper?",
    "answer": "Add several HttpIdentity instances to WebScraper.Identities, each with its own Proxy and UserAgent. The crawler calls ChooseIdentityForRequest to pick one per fetch, spreading requests across them. ProxyFailureCount helps retire unreliable proxies."
  },
  {
    "question": "How do you set a custom user agent for scraping in C#?",
    "answer": "Set the UserAgent property on an HttpIdentity, often to a value from CommonUserAgents such as ChromeDesktopUserAgents, then add the identity to the Identities list or pass it to Request."
  }
]
```
