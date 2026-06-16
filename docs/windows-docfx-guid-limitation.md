# Windows DocFX GUID-Marker Limitation

**Question (item 5):** Is there a way to generate the DocFX API documentation on a native
Windows machine despite the GUID markers DocFX emits, *without* Engineering Team involvement?

**Determination: No.** Native Windows cannot complete a DocFX build that emits GUID markers.
Generation must run on Linux — in practice, **WSL on its native (ext4) filesystem**. This matches
the existing devops.ironsoftware pipeline, which runs the build on Linux via `mono`.

## Why it fails

A known DocFX issue emits artifacts whose **file names and `href`s contain a GUID wrapped in
angle brackets**, e.g.:

```
IronPdf.Something<8e7c1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b>.html
```

`<` and `>` are **reserved characters in Windows file names** (Win32 naming rules forbid
`< > : " / \ | ? *`). When DocFX tries to *write* such a file during generation, the OS rejects
the path and the build fails. Reproduced directly while testing the post-generation cleanup:

```
OSError: [WinError 123] The filename, directory name, or volume label syntax is incorrect:
  '...\Iron.Pdf<8e7c1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b>'
```

The failure happens **at write time, during generation** — before any post-processing can run.

## Why the GUID-stripping post-task can't rescue native Windows

`update-apidocs.py`'s `strip_guid_markers()` (and the equivalent in
`devops.ironsoftware/docfx-dark/makedocs.common.sh`) removes the `<GUID>` markers from file names
and `href`s. But it can only operate on files that **already exist on disk**. On native Windows
those files were never created (the OS refused them), so there is nothing to clean up — the build
has already failed. The post-task is therefore effective only on Linux/WSL, where the files do get
written and can then be renamed.

## Workarounds evaluated

| Approach | Verdict |
|---|---|
| **WSL, native Linux filesystem** (e.g. `~/...` inside the distro) | ✅ Works. ext4 permits `<>` in names; the build completes and `strip_guid_markers()` cleans up afterward. This is the supported path. |
| WSL, but building under `/mnt/c/...` (DrvFs) | ❌ DrvFs enforces Windows naming rules, so `<>` is still rejected. Build must live on the distro's native FS. |
| Native Windows (cmd/PowerShell) | ❌ Blocked at write time (`WinError 123`). |
| Configure DocFX to not emit GUID markers | ❌ No known DocFX option; the markers come from how DocFX disambiguates certain members. Changing this is an upstream/Engineering concern, out of scope for the web team. |

## Recommendation

- Run `update-apidocs.py` (and any DocFX generation) under **WSL on its native filesystem**, not on
  a Windows mount and not on native Windows. Step-by-step setup:
  [`running-generation-in-wsl.md`](running-generation-in-wsl.md).
- The cross-platform Python/Node tooling otherwise runs fine on Windows (version checks, archive
  inspection, syncing committed output) — only the **DocFX generation step** carries this Windows
  limitation.
