# Change: Add Image Cycling

## Why
The user wants more control over the food images displayed. If an automatically fetched image is not appealing, they should be able to cycle through other available images for the same dish.

## What Changes
- Update `fetchImage750g` to return an array of image URLs instead of a single string.
- In `renderMenu`, store the array of images on the tile element.
- Add a `click` event handler to menu tiles that cycles the background image index and updates the `.tile-bg` source.

## Impact
- Affected specs: `menu-display`
- Affected code: `index.html`
