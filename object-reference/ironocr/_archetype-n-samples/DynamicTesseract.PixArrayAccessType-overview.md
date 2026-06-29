<!--
N-Lite/enum. DynamicTesseract. Members verified 2026-06-23: Clone, Copy, CopyClone, Insert (value__ ignored).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.PixArrayAccessType.html
-->

## Injected overview (Markdown)

Control how a Leptonica pixel array takes ownership of images it holds with `PixArrayAccessType`. `Copy` stores an independent duplicate, `Clone` shares a reference-counted handle without duplicating pixel data, and `CopyClone` combines the two, copying the array structure while cloning its members. `Insert` places the supplied image directly, transferring ownership to the array. Choose `Clone` to avoid copying large images when the source stays valid, and `Copy` when the array must outlive the original.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PixArrayAccessType Enum - IronOCR C# API`
- v2 (human): `PixArrayAccessType: Pix Ownership in C#`
- v3 (balanced): `PixArrayAccessType Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set pixel-array ownership in C# with the IronOCR PixArrayAccessType enum: Copy, Clone, CopyClone, or Insert for Leptonica images.`
- v2 (human): `Decide how a Leptonica pixel array holds images in C# with PixArrayAccessType: copy the data, clone a handle, or insert it directly.`
- v3 (balanced): `Reference for the IronOCR PixArrayAccessType enum in C#: Copy, Clone, CopyClone, and Insert access modes for pixel arrays.`

---

## Structured data

**TechArticle abstract**

> Control how a Leptonica pixel array holds the images it contains with PixArrayAccessType in IronOCR for C#. Copy stores an independent duplicate, Clone shares a reference-counted handle without duplicating data, CopyClone copies the structure while cloning members, and Insert transfers ownership of the supplied image directly to the array.
