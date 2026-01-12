# Change: Dashed Suggestion and Clock Layout

## Why
The user wants to visually distinguish the suggestion tile with a dashed border and ensure the clock remains strictly right-aligned even if the date text needs to wrap (e.g., year on a new line).

## What Changes
- **CSS**:
    - Add a dashed border to `#suggestionTile`.
    - Adjust `.side-bottom` flex container to allow `.today` (date) to wrap while keeping `.clock` strictly to the right (`flex-shrink: 0`).

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
