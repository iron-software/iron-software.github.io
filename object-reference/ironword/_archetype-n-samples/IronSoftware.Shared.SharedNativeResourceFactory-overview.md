<!--
N-Mid. Frame D (task-gerund). Shared cross-product type in IronSoftware.Shared.
Members verified 2026-06-23: protected ctor, static Get(string)->IntPtr, static Set(string, IntPtr).
Base Object; abstract class.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronSoftware.Shared.SharedNativeResourceFactory.html
-->

## Injected overview (Markdown)

Sharing one native resource handle across the Iron Software libraries in a process runs through `SharedNativeResourceFactory`. It keeps a small registry of native pointers under string keys, so several Iron components running side by side reuse a single underlying handle instead of each loading its own. Most application code never touches it directly; it backs the cross-product resource sharing that keeps memory and native-library loading in check when, for example, IronWord and another Iron library run together.

The surface is two static methods. `Set(string Name, IntPtr Value)` stores a native pointer under a name, and `Get(string Name)` retrieves the pointer registered under that name, returning `IntPtr.Zero` when nothing is registered. The class is abstract with a protected constructor, so it is used through these static entry points rather than instantiated. Because the values are raw `IntPtr` handles, the owning component is responsible for the lifetime of whatever each pointer references; the factory only brokers lookup by name.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) and the [Word to PDF how-to](https://ironsoftware.com/csharp/word/how-to/word-to-pdf/) show the higher-level IronWord APIs that sit above this shared layer.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SharedNativeResourceFactory - Iron C# API`
- v2 (human): `SharedNativeResourceFactory in C#`
- v3 (balanced): `SharedNativeResourceFactory | Iron C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Share native resource handles across Iron libraries in C# with SharedNativeResourceFactory: register an IntPtr with Set and retrieve it with Get.`
- v2 (human): `Reuse one native handle across Iron Software libraries in C# with SharedNativeResourceFactory, a keyed registry of IntPtr values via Set and Get.`
- v3 (balanced): `Reference for the SharedNativeResourceFactory class in C#: a keyed registry that brokers native IntPtr handles across Iron libraries with Get and Set.`

---

## Structured data

**TechArticle abstract**

> Sharing a native resource handle across Iron Software libraries in C# runs through the SharedNativeResourceFactory class. Set registers an IntPtr under a string name and Get retrieves it, returning IntPtr.Zero when none is registered. The class is abstract with a protected constructor, so the two static methods broker handle lookup by name rather than instantiation.

**FAQPage entries**

```json
[
  {
    "question": "Where does SharedNativeResourceFactory live in the IronWord API?",
    "answer": "SharedNativeResourceFactory is an abstract class in the IronSoftware.Shared namespace, shipped in IronWord.dll as a shared type used across Iron Software libraries. It derives from Object and exposes the static Get and Set methods for registering native IntPtr handles by name."
  }
]
```
