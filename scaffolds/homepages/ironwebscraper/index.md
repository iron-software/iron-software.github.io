# IronWebscraper - The C# Web Scraping Library

IronWebscraper is a C# web-scraper library, allowing developers to automate & simulate human browsing behavior to extract content, files & images from web applications as native .Net objects.

Iron Web Scraper manages politeness & multithreading in the background, leaving a developer's own application easy to understand & maintain.

Key Library Features:

Iron Web Scraper can be used to migrate content from existing websites as well as build search indexes and monitor website structure & content changes. It's functionality includes:

- Read & extract structured content from web pages using html DOM, Javascript, Xpath, jQuery Style CSS Selectors.
- Fast multi threading allows hundreds of simultaneous requests.
- Politely avoid over stalling remote servers using IP/domain level throttling & optionally respecting robots.txt
- Manage multiple identities, DNS, proxies, user agents, request methods, custom headers, cookies & logins.
- Data exported from websites becomes native C# objects which can be stored or used immediately.
- Exceptions managed in all but the developers own code. Errors and captchas auto retried on failure
- Save, pause, resume, autosave scrape jobs.
- Built in web cache allows for action replay, crash recovery, and querying existing web scrape data. Change scrape logic on the fly, then replay job without internet traffic.

Quickstart Guide: <https://ironsoftware.com/csharp/webscraper/>

## Further Documentation

- Code Samples : <https://ironsoftware.com/csharp/webscraper/examples/c-sharp-web-scraper>
- Tutorials : <https://ironsoftware.com/csharp/webscraper/tutorials/webscraping-in-c-sharp/>
- NuGet Package Manager : <https://www.nuget.org/packages/IronWebScraper/>
- Support : <developers@ironsoftware.com>
