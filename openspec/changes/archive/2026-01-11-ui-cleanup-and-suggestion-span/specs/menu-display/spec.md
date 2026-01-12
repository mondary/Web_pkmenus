## MODIFIED Requirements
### Requirement: Sidebar Display
The sidebar SHALL display the photo slideshow and current date/time information, without unnecessary status labels or captions.

#### Scenario: Clean sidebar
- **WHEN** the sidebar is rendered
- **THEN** it does NOT display photo captions (e.g., "Photo 1").
- **AND** it does NOT display "Diaporama actif".

### Requirement: Meal Suggestions
The system SHALL display a meal suggestion tile that fills the remaining space in the menu grid.

#### Scenario: Expanded suggestion
- **WHEN** the menu is rendered
- **THEN** the suggestion tile spans two columns in the grid.
