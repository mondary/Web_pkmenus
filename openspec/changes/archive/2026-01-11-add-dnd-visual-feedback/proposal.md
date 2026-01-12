# Change: Add Drag and Drop Visual Feedback

## Why
The Drag and Drop interaction is functional but lacks visual feedback, making it hard for users to see which item is being moved and where it will land.

## What Changes
- Add CSS for `.is-dragging` (the element being moved).
- Add CSS for `.is-drag-over` (the potential drop target).
- Update JS handlers (`dragenter`, `dragleave`, `dragend`) to toggle these classes.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
