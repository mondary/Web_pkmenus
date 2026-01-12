# Change: Add Suggestions Tile

## Why
The menu grid has empty space after Sunday. The user wants to use this space to display meal suggestions for the following week to inspire future planning.

## What Changes
- Add a `SUGGESTIONS` list to the configuration.
- Render an extra tile in the `menuGrid` after the weekly menu.
- Configure this tile to behave as a slideshow, updating its content (dish title + image) every hour.
- Reuse the existing 750g image fetching logic for these suggestions.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
