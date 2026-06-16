# Running Documentation Generation on Windows via WSL

DocFX generation cannot run on native Windows — it emits file names containing `<…>` GUID markers,
which Windows forbids (see [`windows-docfx-guid-limitation.md`](windows-docfx-guid-limitation.md)).
A Windows operator who wants to **generate** docs locally (not just fetch already-built ones) must
run the generator inside **WSL on its native Linux filesystem**.

> If you don't need to generate locally, you don't need any of this: generate on any Linux/CI host,
> commit + push, then `git pull` and `npm run sync:docs` from Windows as usual (the committed output
> has its GUID markers stripped, so it is safe on Windows).

The one hard rule: **clone the repo into the WSL distro's own filesystem (e.g. `~/`), never under
`/mnt/c`.** The `/mnt/c` mount (DrvFs) enforces Windows file-name rules, so the `<…>` files still
can't be written there and the build will fail exactly as on native Windows.

## 1. Install WSL 2 + Ubuntu

In an **administrator** PowerShell:

```powershell
wsl --install
```

Reboot if prompted, then launch **Ubuntu** from the Start menu and create your Linux username/password.
(`wsl --install` installs WSL 2 + Ubuntu by default on current Windows 10/11.)

## 2. Install the toolchain (inside Ubuntu)

```bash
sudo apt update && sudo apt upgrade -y

# git + Git LFS (the DocFX/JDK toolchain under scaffolds/tools is stored in LFS)
sudo apt install -y git git-lfs unzip
git lfs install

# Mono — the runtime DocFX runs under on Linux
sudo apt install -y mono-complete

# Python tooling deps (apt packages avoid PEP 668 "externally-managed" pip errors)
sudo apt install -y python3 python3-requests python3-colorama

# Node.js 18+ (Ubuntu's default may be too old for the .mjs ports' built-in fetch)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

## 3. Clone the repo onto the WSL filesystem

```bash
cd ~                       # NOT /mnt/c — must be the native ext4 filesystem
git clone https://github.com/iron-software/iron-software.github.io.git
cd iron-software.github.io

git lfs pull               # fetch the bundled DocFX + JDK tools
chmod +x scaffolds/tools/jdk/linux/bin/*   # ensure the bundled JDK binaries are executable

# Keep line endings as LF inside WSL
git config core.autocrlf input

# Node generator dependency (only update-apidocs.mjs needs it)
npm install
```

## 4. Generate

Either port works (they read the same catalog and write the same `object-reference/` cache):

```bash
# Python
python3 update-apidocs.py

# …or Node
node update-apidocs.mjs
```

Check what would be built first with `python3 check-apidocs.py -p <code> -V -a` (or the `.mjs`).

## 5. Use the result from Windows

WSL files are reachable from Windows; you do **not** need to copy them onto the C: drive.

- **Browse / edit from Windows:** open `\\wsl.localhost\Ubuntu\home\<user>\iron-software.github.io`
  in Explorer, or run `code .` from the repo in WSL to open it in VS Code (WSL remote).
- **Commit + push:** easiest **from within WSL** (`git` is already configured there). Avoid running
  git against the repo over the `\\wsl.localhost\…` share from Windows — it works but is slow.
- **Fetch into the website from Windows without pushing:** point the website's `sync:docs` at the
  WSL checkout via its UNC path — Node reads `\\wsl.localhost\…` paths fine:

  ```
  # in the iron-websites repo's .env
  IRONSOFTWARE_GITHUBIO=\\wsl.localhost\Ubuntu\home\<user>\iron-software.github.io
  ```

  Then `npm run sync:docs -- --match-site` on Windows fetches the freshly generated trees. (The
  generated output has its GUID markers stripped, so it lives happily on the Windows side.)

## Recap

| Step | Where | Why |
|---|---|---|
| Generate (DocFX/JavaDoc) | **WSL native FS** (`~/…`) | only place `<…>` GUID files can be written |
| Commit + push | WSL | git is configured there; fast on ext4 |
| Edit / review | Windows via `\\wsl.localhost\…` | no copy needed |
| `sync:docs` (fetch) | Windows | output is GUID-stripped → safe on Windows |
