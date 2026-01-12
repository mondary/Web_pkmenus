# Change: Add Manual Recipe Edit

## Why
Sometimes the user wants to set a specific meal that isn't in the suggestions. Providing a manual edit button allows for total flexibility in menu planning.

## What Changes
- Add an edit button (icon) to each menu tile.
- Implement `handleEditClick` function that prompts for a new recipe name.
- Update the `MENU` array and re-render/save state on change.
- Ensure the edit button click doesn't trigger image cycling (stopPropagation).

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
