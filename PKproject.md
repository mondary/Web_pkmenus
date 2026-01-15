# PK Project Architecture

## When to Apply
- Use this base at project start (before initial scaffold or first commit).
- Reuse it when creating a new project under `WEB/`, `APPS/`, `EXTENSIONS/`, `SERVER/`, `TESTS/`, or `COMPONENTS/`.

## Root Layout

Top-level folders follow the global hierarchy:
- `WEB/` (all web UI + backend)
- `APPS/` (native apps)

## Web Tree (inside `WEB/`)

- `WEB/index.html` (TV UI)
- `WEB/pwa/` (mobile editor PWA)
- `WEB/backend/` (PHP save endpoint + menu.json)
- `WEB/release/` (web build outputs if any)

Data flow:
- TV UI (`WEB/index.html`) reads `WEB/backend/menu.json`
- TV UI writes to `WEB/backend/save-menu.php`
- PWA reads/writes `WEB/backend/menu.json`

## Android TV Tree (inside `APPS/`)

- `APPS/android-tv/` Android Studio project
- `APPS/release/` APK outputs

Build outputs:
- `pkmenus-debug.apk`
- `pkmenus-release.apk`

## Build Conventions

Android TV:
- All APKs are written to `APPS/release/`.
- Naming: `<project>-<os>-<build>.apk`
  - Example: `pkmenus-androidtv-debug.apk`
  - Example: `pkmenus-androidtv-release.apk`
