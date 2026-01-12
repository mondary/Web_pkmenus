# Change: Use FontAwesome Icons

## Why
The user wants a more professional look for the edit icon using FontAwesome instead of standard emojis.

## What Changes
- Include FontAwesome CDN in `index.html`.
- Replace the `✏️` emoji with `<i class="fas fa-pen"></i>`.
- Update CSS for `.edit-btn` to ensure FontAwesome icons are centered and sized correctly.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
