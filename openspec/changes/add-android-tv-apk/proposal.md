# Change: Add Android TV kiosk APK for menu display

## Why
The TV should run a fullscreen, no-sleep app that always displays `https://menu.pouark.com` without browser chrome or navigation.

## What Changes
- Add an Android TV WebView app (APK) named **pkmenus**.
- Launch directly into a fullscreen WebView that loads `https://menu.pouark.com`.
- Prevent sleep and keep the screen on while the app is open.
- Optional auto-refresh interval for the WebView.

## Impact
- Affected specs: `menu-tv-app` (new)
- Affected code: new Android project under `APPS/android-tv/`

## Open Questions
- Refresh interval (default: 15 minutes)
