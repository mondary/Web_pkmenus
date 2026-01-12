# Change: Fix Image Fetch Proxy

## Why
The previous proxy (`allorigins.win`) is unreliable or blocked when accessing 750g.com, causing images not to load.

## What Changes
- Switch the CORS proxy to `api.codetabs.com`.
- Update the response handling logic (CodeTabs returns raw HTML, not wrapped in JSON).

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
