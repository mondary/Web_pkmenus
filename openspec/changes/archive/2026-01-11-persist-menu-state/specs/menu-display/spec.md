## ADDED Requirements
### Requirement: Menu State Persistence
The system SHALL remember the current state of the weekly menu (dish assignments) across browser sessions.

#### Scenario: Remember replaced meal
- **WHEN** the user drags a suggestion onto "Lundi"
- **AND** reloads the page
- **THEN** "Lundi" still displays the meal taken from the suggestion.
