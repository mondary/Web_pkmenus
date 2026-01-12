# Change: Add Drag and Drop Placeholders

## Why
To make the drag and drop interaction more intuitive, the user wants to see all potential drop targets (placeholders) as soon as a drag operation begins.

## What Changes
- Add CSS for `.is-droppable` to show a dashed placeholder style.
- Update `handleDragStart` to apply `.is-droppable` to all other tiles.
- Update `handleDragEnd` and `handleDrop` to remove the style.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
