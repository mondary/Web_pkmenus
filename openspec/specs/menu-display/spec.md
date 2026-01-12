# menu-display Specification

## Purpose
Defines the behavior and visual requirements for the main menu display dashboard, including meal tiles, image fetching, and the sidebar slideshow.
## Requirements
### Requirement: Automatic Food Images
The system SHALL fetch and display a relevant food image from 750g.com for each menu item.

#### Scenario: Display image for known dish
- **WHEN** the menu item is "Tagliatelles"
- **THEN** an image of tagliatelles from 750g is displayed in the corresponding menu tile (using a reliable proxy)

### Requirement: Menu Item Display
The system SHALL display each menu item with its day, title, and optional details.

#### Scenario: Visual Emphasis
- **WHEN** the menu is rendered
- **THEN** the dish title is the dominant visual element (large font, bottom alignment).
- **AND** the day name is positioned discreetly (e.g., top corner).

### Requirement: Meal Suggestions
The system SHALL display a meal suggestion tile that fills the remaining space in the menu grid.

#### Scenario: Expanded suggestion
- **WHEN** the menu is rendered
- **THEN** the suggestion tile spans two columns in the grid.
- **AND** it features a dashed border to distinguish it from fixed days.

### Requirement: Sidebar Display
The sidebar SHALL display the photo slideshow and current date/time information, with a clean visual style (no inner borders/frames).

#### Scenario: Clean photo display
- **WHEN** the slideshow is rendered
- **THEN** the photo appears directly within the sidebar container, without an inner black frame or extra padding.

### Requirement: Current Day Highlight
The system SHALL significantly highlight the menu tile corresponding to the current day, ensuring visibility even over background images.

#### Scenario: Visible highlight
- **WHEN** the current day tile has a background image
- **THEN** the high-contrast visual style (border/glow) remains visible on top of the image.

### Requirement: Menu Header
The menu section SHALL display a clear title for the week, without technical status information like slideshow speed.

#### Scenario: Clean header
- **WHEN** the menu stage is rendered
- **THEN** it displays the "Menu de la semaine" title.
- **AND** it does NOT display "Vitesse diapo".

### Requirement: Drag and Drop Swapping
The system SHALL allow users to swap meals between days using drag and drop, providing clear visual feedback and indicating potential drop targets.

#### Scenario: Placeholders visibility
- **WHEN** the user starts dragging a tile
- **THEN** all other eligible tiles in the grid display a "placeholder" style (e.g., dashed border) to indicate they are valid drop zones.

### Requirement: Image Cycling
The system SHALL allow users to cycle through different images for a menu item by clicking on its tile.

#### Scenario: Cycle through pizza images
- **WHEN** a user clicks on the "Pizza" tile
- **THEN** the background image changes to the next available image from the search results.
- **AND** it loops back to the first image after the last one.

### Requirement: Image Selection Persistence
The system SHALL remember the user's selected image for a specific dish across browser sessions.

#### Scenario: Remember pizza image
- **WHEN** a user cycles to the 3rd image of "Pizza"
- **AND** reloads the page
- **THEN** the "Pizza" tile automatically displays that 3rd image (if still available in search results).

### Requirement: Drag Suggestion to Menu
The system SHALL allow dragging a meal suggestion onto a menu day to replace its current meal.

#### Scenario: Replace Monday with Suggestion
- **WHEN** the user drags the suggestion tile and drops it onto the "Lundi" tile
- **THEN** the meal on Monday is updated to match the suggestion.
- **AND** the suggestion tile immediately displays a new random meal suggestion.
- **AND** the Monday tile's background image is updated to match the new meal.

### Requirement: Menu State Persistence
The system SHALL remember the current state of the weekly menu (dish assignments) across browser sessions.

#### Scenario: Remember replaced meal
- **WHEN** the user drags a suggestion onto "Lundi"
- **AND** reloads the page
- **THEN** "Lundi" still displays the meal taken from the suggestion.

### Requirement: Manual Recipe Editing
The system SHALL allow users to manually edit the name of a dish using a professional edit icon (FontAwesome).

#### Scenario: Icon style
- **WHEN** the menu is rendered
- **THEN** each tile displays a FontAwesome pen icon for editing.

