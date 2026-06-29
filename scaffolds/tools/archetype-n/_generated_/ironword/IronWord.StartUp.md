<!--
N-Mid (2 members). Frame C (when-fronted). IronWord.
Members verified 2026-06-23: ctor, ConfigureServices(IServiceCollection) void. Base Object.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.StartUp.html
-->

## Injected overview (Markdown)

When an application wires IronWord into a .NET dependency-injection container, `StartUp` registers the services it needs. It is the integration hook for ASP.NET Core and other host-builder apps that resolve IronWord through the service provider rather than constructing types by hand, so the library participates in the same lifetime and configuration plumbing as the rest of the app.

The class exposes `ConfigureServices(IServiceCollection services)`, which adds IronWord's registrations to the collection a host passes during setup. Call it from your own startup path, the place where you build the service collection, and the container can then provide IronWord's services to anything that depends on them. An application that simply news up a `WordDocument` directly does not need this hook; it exists for the DI-driven composition root.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) cover the document APIs that become available once the services are registered.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StartUp Class - IronWord C# API`
- v2 (human): `StartUp: Register IronWord with DI in C#`
- v3 (balanced): `StartUp Class | IronWord C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Register IronWord with a .NET DI container in C# using the StartUp class: call ConfigureServices to add its services to your IServiceCollection.`
- v2 (human): `Wire IronWord into ASP.NET Core dependency injection in C# with the StartUp class: pass your IServiceCollection to ConfigureServices at setup.`
- v3 (balanced): `Reference for the IronWord StartUp class in C#: call ConfigureServices with an IServiceCollection to register IronWord in a .NET DI container.`

---

## Structured data

**TechArticle abstract**

> Registering IronWord with a .NET dependency-injection container in C# runs through the StartUp class. Its ConfigureServices method takes the IServiceCollection a host builds during setup and adds IronWord's service registrations, so an ASP.NET Core or host-builder application can resolve the library through the service provider instead of constructing types directly.

**FAQPage entries**

```json
[
  {
    "question": "Where does StartUp live in the IronWord API?",
    "answer": "StartUp is a class in the IronWord namespace, shipped in IronWord.dll. It derives from Object and exposes ConfigureServices(IServiceCollection), the hook for registering IronWord in a .NET dependency-injection container."
  }
]
```
