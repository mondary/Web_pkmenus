## MODIFIED Requirements
### Requirement: Meal Suggestions
The system SHALL display a meal suggestion tile that is visually distinct and fills the remaining space.

#### Scenario: Dashed border
- **WHEN** the suggestion tile is rendered
- **THEN** it has a dashed border to indicate it is a "suggestion" or "draft" idea.

### Requirement: Sidebar Display
The sidebar SHALL display the photo slideshow and current date/time, prioritizing the clock's visibility and position.

#### Scenario: Clock dominates layout
- **WHEN** the sidebar is rendered
- **THEN** the clock is positioned to the far right.
- **AND** if space is limited, the date text wraps to a new line (e.g., year under day) rather than shrinking the clock or pushing it off-screen.
