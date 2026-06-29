<!--
N-Lite/exception. Declared: public class IronQrNativeException : Exception (direct from Exception, not IronQrException).
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Exceptions.IronQrNativeException.html
-->

## Injected overview (Markdown)

`IronQrNativeException` is raised when an error occurs in IronQR's native-level code, the lower layer that performs detection and image work. It usually points to an environment problem rather than a coding mistake: a missing native dependency, an unsupported platform, or a runtime that cannot load the bundled binaries. When it appears, confirm the deployment target and that `Installation.DeploymentPath` is writable so the native files can be staged. Unlike the other IronQR exceptions, it derives directly from `Exception`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronQrNativeException - IronQR C# API`
- v2 (human): `IronQrNativeException: Native QR Error in C#`
- v3 (balanced): `IronQrNativeException | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronQrNativeException is raised in C# for errors in IronQR native-level code, often a missing dependency, unsupported platform, or load failure.`
- v2 (human): `Handle native-layer failures in C# with IronQrNativeException: check the platform and a writable DeploymentPath when IronQR binaries fail to load.`
- v3 (balanced): `Reference for IronQrNativeException in C#: raised for IronQR native-code errors such as missing dependencies or unsupported runtimes.`

---

## Structured data

**TechArticle abstract**

> IronQrNativeException is raised in C# when an error occurs in IronQR's native-level code that performs detection and image work. It usually signals an environment problem, such as a missing native dependency, an unsupported platform, or binaries that cannot load. Confirm the deployment target and a writable Installation.DeploymentPath. It derives directly from Exception.
