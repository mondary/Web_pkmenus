# Change: Add 750g Image Fetching

## Why
To enhance the visual appeal of the menu dashboard by automatically displaying photos of the planned meals.

## What Changes
- Add a mechanism to fetch recipe images from 750g.com based on the menu item title.
- Update the menu tiles to display these images.
- Use a CORS proxy to allow fetching from the client-side (browser).

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html` (JS logic and CSS)
