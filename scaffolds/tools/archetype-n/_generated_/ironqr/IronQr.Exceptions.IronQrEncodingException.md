<!--
N-Lite/exception. Declared: public class IronQrEncodingException : IronQrException.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Exceptions.IronQrEncodingException.html
-->

## Injected overview (Markdown)

`IronQrEncodingException` is raised when IronQR cannot encode a value into a QR code. It typically signals that the input is too large for the chosen `QrEncoding` and `QrErrorCorrectionLevel`, or that the data does not fit the selected symbol type. When it appears, lower the error-correction level, raise the QR version, or shorten the payload, then write again. It derives from `IronQrException`, so a broad catch on the base type also handles it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronQrEncodingException - IronQR C# API`
- v2 (human): `IronQrEncodingException: QR Encoding Error`
- v3 (balanced): `IronQrEncodingException | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronQrEncodingException is raised in C# when IronQR cannot encode a value into a QR code, often because the payload is too large for the settings.`
- v2 (human): `Handle QR encoding failures in C# with IronQrEncodingException: the payload is too large for the chosen encoding or error-correction level.`
- v3 (balanced): `Reference for IronQrEncodingException in C#: raised when IronQR cannot encode a value; lower error correction or shorten the payload.`

---

## Structured data

**TechArticle abstract**

> IronQrEncodingException is raised in C# when IronQR cannot encode a value into a QR code, usually because the data is too large for the chosen QrEncoding and QrErrorCorrectionLevel. Lower the error-correction level, raise the version, or shorten the payload and write again. It derives from IronQrException.
