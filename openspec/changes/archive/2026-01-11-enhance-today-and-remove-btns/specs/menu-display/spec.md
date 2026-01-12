## MODIFIED Requirements
### Requirement: Sidebar Display
The sidebar SHALL display the photo slideshow and current date/time information, without interactive control buttons.

#### Scenario: No controls
- **WHEN** the sidebar is rendered
- **THEN** it does NOT display "Plein ecran" or "Recharger" buttons.

### Requirement: Current Day Highlight
The system SHALL significantly highlight the menu tile corresponding to the current day to ensure it is the primary focus.

#### Scenario: Strong focus on today
- **WHEN** the current day tile is rendered
- **THEN** it has a high-contrast visual style compared to other days.
