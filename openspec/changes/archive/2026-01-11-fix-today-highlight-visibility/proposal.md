# Change: Fix Today Highlight Visibility

## Why
The "Today" highlight (glow/border) disappears when the background image loads because the image (z-index: -1) sits on top of the tile's background and inset box-shadow in the stacking order.

## What Changes
- Move the `.is-today` highlight styles to a `::after` pseudo-element.
- Ensure this pseudo-element sits on top of the image (`z-index: 2`).

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
