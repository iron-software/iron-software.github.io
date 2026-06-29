<!--
N-Mid (static, 1 member). Frame E. IronQr. Member verified 2026-06-22.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Installation.html
-->

## Injected overview (Markdown)

The writable directory where IronQR stages its setup and temporary files is set through `Installation.DeploymentPath`. IronQR ships native components for QR detection, and on first use it deploys them to a working folder. When the default location is not writable, which is common in containers, locked-down servers, and some hosting environments, point `DeploymentPath` at a folder the process can write to.

Set it once at application startup, before the first read or write, since the files are staged lazily on first use. A path on a persistent volume avoids re-deploying the native files on every cold start. A wrong or unwritable path is a frequent cause of native-layer failures, which surface as an `IronQrNativeException`. On a developer machine the default location usually works, so this property is mainly a deployment concern rather than something set during local development.

```csharp
Installation.DeploymentPath = "/app/ironqr";
```

The [get started guide](https://ironsoftware.com/csharp/qr/get-started/) covers first-run setup, and the [AWS guide](https://ironsoftware.com/csharp/qr/get-started/aws/) shows deployment on a restricted host.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Installation Class - IronQR C# API`
- v2 (human): `Installation: Set IronQR's Deploy Path in C#`
- v3 (balanced): `Installation Class | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set IronQR's writable deployment folder in C# with Installation.DeploymentPath, where native setup and temporary files are staged on first use.`
- v2 (human): `Fix IronQR native deployment in C# with Installation.DeploymentPath: point it at a writable folder on containers and locked-down servers.`
- v3 (balanced): `Reference for the IronQR Installation class in C#: set DeploymentPath to a writable folder for staging native files at runtime.`

---

## Structured data

**TechArticle abstract**

> Installation.DeploymentPath sets the writable directory where IronQR stages its native setup and temporary files in C#. When the default location is not writable, as in containers and locked-down servers, point DeploymentPath at a writable folder at startup. A wrong path is a common cause of the native-layer failures reported by IronQrNativeException.

**FAQPage entries**

```json
[
  {
    "question": "Where does Installation live in the IronQR API?",
    "answer": "Installation is a static class in the IronQr namespace, shipped in IronQr.dll. Its DeploymentPath property is static, so set it directly without constructing an instance."
  },
  {
    "question": "How do you fix IronQR native deployment errors in a container?",
    "answer": "Set Installation.DeploymentPath at startup to a folder the process can write to, ideally on a persistent volume. The native QR components stage there on first use; an unwritable path causes the failures seen as IronQrNativeException."
  }
]
```
