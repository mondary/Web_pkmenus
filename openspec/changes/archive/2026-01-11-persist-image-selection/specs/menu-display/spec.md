## ADDED Requirements
### Requirement: Image Selection Persistence
The system SHALL remember the user's selected image for a specific dish across browser sessions.

#### Scenario: Remember pizza image
- **WHEN** a user cycles to the 3rd image of "Pizza"
- **AND** reloads the page
- **THEN** the "Pizza" tile automatically displays that 3rd image (if still available in search results).
