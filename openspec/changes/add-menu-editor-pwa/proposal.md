# Change: Add mobile PWA menu editor and remote menu source

## Why
Editing the weekly menu directly on the TV is inconvenient. A mobile-friendly PWA that writes to a server-hosted menu file keeps the TV display in sync and simplifies updates.

## What Changes
- Add a server-hosted `menu.json` as the source of truth for the TV menu (with fallback to embedded defaults).
- Add a mobile PWA editor under `/frontend` to update the menu list (day, title, details).
- Add a PHP endpoint under `/backend` to save `menu.json` on the OVH FTP server.
- Optional shared write token for basic protection of the save endpoint.

## Impact
- Affected specs: `menu-display` (modified), `menu-editor` (new)
- Affected code: `index.html`, new `menu.json`, new `/frontend` PWA files, new `/backend` PHP endpoint

## Open Questions
- Confirm where the PWA should live (suggested: `/frontend`).
- Confirm whether to require a shared write token for the save endpoint.
