# Change: Persist Image Selection

## Why
The user wants their choice of food image to be remembered across page reloads, so they don't have to cycle through images every time they open the dashboard.

## What Changes
- Use `localStorage` to store a mapping of `dish title` -> `selected image URL`.
- Update `handleTileClick` to save the selected image URL to `localStorage`.
- Update the image loading logic in `renderMenu` and `updateSuggestion` to prioritize the stored image URL if it exists in the fetched search results.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
