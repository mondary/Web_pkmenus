# Change: Persist Menu State

## Why
Currently, any changes made to the menu (swaps or accepting suggestions) are lost on page reload because they are only stored in memory. Users want their custom planning to persist.

## What Changes
- Save the `MENU` array to `localStorage` whenever it is modified (after a drag-and-drop swap or replacement).
- Load the `MENU` array from `localStorage` on page initialization, falling back to the hardcoded defaults if no saved state exists.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
