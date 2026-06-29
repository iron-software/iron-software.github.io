<!--
N-Lite/enum. Members verified 2026-06-23: Male ('M'), Female ('F'), Unspecified ('X'/'<'). value__ is the backing field, omitted.
Consumed by passport reading (MRZ Sex field). Frame: feature-fronted.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Gender.html
-->

## Injected overview (Markdown)

Read the sex field of a scanned passport in C# through `Gender`, which mirrors the value coded in the ICAO machine-readable zone. `Male` corresponds to `M` in the MRZ and `Female` to `F`. `Unspecified` covers `X` or `<`, used when the document leaves the field open or marks it non-binary. The value surfaces on a passport result after a passport read, so a project can store or branch on it without parsing the raw MRZ. The [read passport how-to](https://ironsoftware.com/csharp/ocr/how-to/read-passport/) extracts MRZ fields end to end.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Gender Enum - IronOCR C# API Reference`
- v2 (human): `Gender: Read the MRZ Sex Field in C#`
- v3 (balanced): `Gender Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR Gender enum in C# mirrors the ICAO MRZ sex field: Male (M), Female (F), and Unspecified (X or <), read from a passport result.`
- v2 (human): `Read a scanned passport's sex field in C# with IronOCR's Gender enum: Male, Female, or Unspecified, as coded in the ICAO machine-readable zone.`
- v3 (balanced): `Reference for IronOCR's Gender enum in C#: Male, Female, and Unspecified values matching the ICAO MRZ sex field on a passport read.`

---

## Structured data

**TechArticle abstract**

> Read the sex field of a scanned passport in C# with IronOCR's Gender enum, which mirrors the ICAO machine-readable zone. Male maps to M and Female to F, while Unspecified covers X or < for an open or non-binary field. The value is reported on a passport result after a passport read, so code can store or branch on it without parsing the raw MRZ.
