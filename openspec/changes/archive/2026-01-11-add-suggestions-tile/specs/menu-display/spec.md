## ADDED Requirements
### Requirement: Meal Suggestions
The system SHALL display a meal suggestion tile in the empty space of the menu grid.

#### Scenario: Display suggestion
- **WHEN** the menu is rendered
- **THEN** an extra tile appears after Sunday labeled "Idée pour la suite" (or similar).
- **AND** it displays a dish name from a predefined list.
- **AND** it updates automatically every hour.
- **AND** it fetches a relevant background image.
