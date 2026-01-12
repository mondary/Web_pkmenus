## ADDED Requirements
### Requirement: Drag Suggestion to Menu
The system SHALL allow dragging a meal suggestion onto a menu day to replace its current meal.

#### Scenario: Replace Monday with Suggestion
- **WHEN** the user drags the suggestion tile and drops it onto the "Lundi" tile
- **THEN** the meal on Monday is updated to match the suggestion.
- **AND** the suggestion tile immediately displays a new random meal suggestion.
- **AND** the Monday tile's background image is updated to match the new meal.
