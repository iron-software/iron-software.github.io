<!--
Archetype N-Mid (override; static helper of homogeneous string[] arrays) — IronWebScraper. Frame E.
Target: https://ironsoftware.com/csharp/webscraper/object-reference/api/IronWebScraper.CommonUserAgents.html
Members verified 2026-06-22.
-->

## Injected overview (Markdown)

Ready-made browser user-agent strings for a scraper to send live in `CommonUserAgents`. Presenting a real browser's user agent, rather than a default library string, helps a crawler blend in with ordinary traffic. The static arrays are grouped by client: `ChromeDesktopUserAgents`, `FireFoxDesktopUserAgents`, `IE11DesktopUserAgents`, and `SafariDesktopUserAgents` for desktops, and `IPhoneUserAgents`, `IPadUserAgents`, and `WindowsTabletUserAgents` for mobile devices. The `All` property combines every list into one.

Assign a value to `HttpIdentity.UserAgent`, or pick from `All` at random across several identities so requests vary. Because each property is a plain `string[]`, indexing or random selection works directly. Real sites see a spread of browsers and devices, so drawing user agents from more than one of these lists across a pool of identities makes a crawl's traffic look ordinary rather than like a single robotic client. Each array holds several current strings, so even one category offers variety.

```csharp
identity.UserAgent = CommonUserAgents.ChromeDesktopUserAgents[0];
```

The [advanced web scraping tutorial](https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp-advanced/) varies user agents across identities, and the [movie-site how-to](https://ironsoftware.com/csharp/webscraper/how-to/scraping-from-an-online-movie-website/) applies them to a real crawl.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CommonUserAgents - IronWebScraper C# API`
- v2 (human): `CommonUserAgents: Browser Strings in C#`
- v3 (balanced): `CommonUserAgents | IronWebScraper C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use real browser user-agent strings in C# with the IronWebScraper CommonUserAgents helper: Chrome, Firefox, Safari, iPhone, iPad, and more.`
- v2 (human): `Disguise a C# scraper with the IronWebScraper CommonUserAgents helper: ready-made desktop and mobile browser strings for HttpIdentity.UserAgent.`
- v3 (balanced): `Reference for the IronWebScraper CommonUserAgents helper in C#: desktop and mobile browser user-agent string arrays for scraper identities.`

---

## Structured data

**TechArticle abstract**

> Setting a realistic user agent in C# runs through the IronWebScraper CommonUserAgents static helper. It lists desktop strings (ChromeDesktopUserAgents, FireFoxDesktopUserAgents, SafariDesktopUserAgents) and mobile strings (IPhoneUserAgents, IPadUserAgents, WindowsTabletUserAgents), with All combining them. Assign one to HttpIdentity.UserAgent, or pick at random to vary requests across identities.

**FAQPage entries**

```json
[
  {
    "question": "Where does CommonUserAgents live in the IronWebScraper API?",
    "answer": "CommonUserAgents is a static class in the IronWebScraper namespace, shipped in IronWebScraper.dll. Its members are static string arrays, so read them directly without constructing an instance."
  },
  {
    "question": "How do you set a realistic user agent for a C# scraper?",
    "answer": "Assign a value from CommonUserAgents, such as ChromeDesktopUserAgents[0], to HttpIdentity.UserAgent. Pick from the combined All array at random across several identities so requests do not all share one user agent."
  }
]
```
