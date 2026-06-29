<!--
N-Lite/exception. Declared: public class IronOcrAssemblyVersionMismatchException : Exception. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Exceptions.IronOcrAssemblyVersionMismatchException.html
-->

## Injected overview (Markdown)

Catching this signals that the loaded IronOCR assemblies do not match each other in version, typically when `IronOcr.dll` and its companion native or dependency packages were upgraded out of step. Update every IronOCR and IronSoftware package to the same release through NuGet, clear stale binaries from the output folder, then rebuild. It derives from `Exception`, so a general handler also catches it. The [debugging how-to](https://ironsoftware.com/csharp/ocr/how-to/debugging/) helps track down the offending reference.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronOcrAssemblyVersionMismatchException - C# API`
- v2 (human): `AssemblyVersionMismatch: Fix IronOCR Versions (C#)`
- v3 (balanced): `IronOcrAssemblyVersionMismatchException | IronOCR`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronOcrAssemblyVersionMismatchException is raised in C# when IronOCR assemblies have mismatched versions. Align every package and rebuild.`
- v2 (human): `Fix mismatched IronOCR assemblies in C#: IronOcrAssemblyVersionMismatchException means packages are out of step, so update them all and rebuild.`
- v3 (balanced): `Reference for IronOcrAssemblyVersionMismatchException in C#: raised when IronOCR assembly versions disagree; align packages to resolve it.`

---

## Structured data

**TechArticle abstract**

> IronOcrAssemblyVersionMismatchException is raised in C# when the loaded IronOCR assemblies disagree on version, usually after upgrading IronOcr.dll and its dependencies out of step. Align every IronOCR and IronSoftware package to one release, clear stale binaries, and rebuild. It derives from Exception.
