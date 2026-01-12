# Change: Add Drag and Drop Swap

## Why
The user wants to easily reorder or swap meals between days using a drag-and-drop interface, making the menu planning more interactive and flexible.

## What Changes
- Make each menu tile draggable (`draggable="true"`).
- Implement `dragstart`, `dragover`, and `drop` event handlers.
- On drop, swap the meal data (title and details) between the source day and the target day in the `MENU` array.
- Re-render the menu grid to reflect the swap.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
