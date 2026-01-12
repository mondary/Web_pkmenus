# Change: Suggestion to Menu Drag and Drop

## Why
To allow users to easily accept a suggestion by dragging it directly into their weekly schedule, replacing the current meal for that day.

## What Changes
- Make the suggestion tile draggable.
- Update the drag and drop logic to handle the suggestion tile specifically.
- Instead of swapping, dragging a suggestion to a day *replaces* the day's meal and triggers a new random suggestion.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
