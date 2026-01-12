# Change: Highlight Today and Large Titles

## Why
The user wants to easily identify the current day's meal and wants the interface to look more like a poster/card with large typography for the dish names.

## What Changes
- **CSS**:
    - Convert `.tile` to a flex container to align content to the bottom-left.
    - Move `.tile-day` to the top-left (absolute positioning).
    - Increase `.tile-title` font size significantly (using `Bebas Neue`).
    - Add `.is-today` style for the current day (border/glow).
- **JS**:
    - Update `renderMenu` to detect the current day and append the `is-today` class to the relevant tile.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
