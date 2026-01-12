# Project Context

## Purpose
Display a weekly family menu on a TV with a fixed menu area and a photo slideshow sidebar for a home dashboard.

## Tech Stack
- HTML
- CSS
- JavaScript (vanilla)

## Project Conventions

### Code Style
Prefer a single self-contained HTML file with embedded CSS/JS and editable configuration sections.

### Architecture Patterns
Static UI with data-driven rendering for the menu and a client-side slideshow. Uses browser `localStorage` to persist user image preferences.

### Testing Strategy
Manual testing on desktop and Android TV/box browsers.

### Git Workflow
Not specified.

## Domain Context
Home TV display for a family menu with a fixed layout and a photo slideshow panel.

## Important Constraints
Must render fullscreen on Android TV/box browsers and remain readable from a distance.

## External Dependencies
- `750g.com` (for fetching food images)
- `api.codetabs.com` (CORS proxy for image fetching)
- Optional static hosting for serving the page.
