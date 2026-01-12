# Menu TV Dashboard

A simple, beautiful web-based dashboard designed to be displayed on a TV screen (or tablet) to show the weekly family menu and a photo slideshow.

## Features

- **Weekly Menu Display**: Shows meals for the week (Monday to Sunday).
- **Interactive Drag & Drop**: Swap meals between days by dragging one tile onto another, or drag a **suggestion** onto a day to replace its meal and generate a new idea. Visual feedback shows potential drop targets.
- **Image Cycling & Choice**: Click on any dish to cycle through different photos fetched from 750g.com.
- **Persistence**: Your selected images are remembered across page reloads (stored locally in your browser).
- **Automatic Food Images**: Automatically fetches and displays high-quality background images for each dish from 750g.com.
- **Current Day Highlight**: Visually emphasizes the current day's meal with a prominent glow and scale effect.
- **Photo Slideshow**: A clean, borderless sidebar that cycles through your personal family photos.
- **Meal Suggestions**: Displays a dashed suggestion tile for next week that updates hourly.
- **TV-Optimized UI**: High contrast, massive typography (Bebas Neue), and full-screen layouts suitable for viewing from across a room.
- **Single File Architecture**: All logic (HTML, CSS, JS) is contained in `index.html` for easy deployment.

## Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/Web_pkmenus.git
    cd Web_pkmenus
    ```

2.  **Configuration**:
    Open `index.html` and edit the configuration section at the bottom of the script:

    ```javascript
    // Define your weekly meals
    const MENU = [
      { day: "Lundi", title: "...", details: "..." },
      // ...
    ];

    // Add your photos (path relative to index.html)
    const PHOTOS = [
      { src: "photos/photo1.jpg" }, // Captions are hidden by default for a cleaner look
      // ...
    ];

    // Add meal suggestions for the random generator
    const SUGGESTIONS = [
      "Lasagnes", "Pizza", ...
    ];
    ```

3.  **Run**:
    Simply open `index.html` in any modern web browser.
    *   **Tip**: Use your browser's full-screen mode (F11) for the best experience on a TV.

## Technical Details

-   **Frontend**: Vanilla HTML/CSS/JavaScript.
-   **Storage**: Uses `localStorage` to persist your image selections.
-   **Image Fetching**: Uses `api.codetabs.com` as a CORS proxy to scrape dish images from `750g.com` on the fly.
-   **Fonts**: Uses Google Fonts (Bebas Neue, Work Sans).

## OpenSpec

This project uses [OpenSpec](openspec/) for specification-driven development.
-   **Specs**: Defined in `openspec/specs/`.
-   **Changes**: Managed via `openspec/changes/`.