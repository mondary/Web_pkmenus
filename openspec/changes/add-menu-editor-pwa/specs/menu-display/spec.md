## ADDED Requirements
### Requirement: Remote Menu Source
The system SHALL load menu data from a JSON endpoint when configured and fall back to embedded defaults if the request fails.

#### Scenario: Remote menu available
- **WHEN** a remote menu URL is configured and responds with valid JSON
- **THEN** the menu tiles use the remote list.

#### Scenario: Remote menu unavailable
- **WHEN** the remote request fails or returns invalid JSON
- **THEN** the menu tiles use the embedded MENU list.

## MODIFIED Requirements
### Requirement: Menu State Persistence
The system SHALL remember the current state of the weekly menu across browser sessions, unless a remote menu source is configured.

#### Scenario: Persist local changes
- **WHEN** no remote menu URL is configured
- **AND** the user replaces a meal
- **THEN** the updated menu is stored locally and restored after reload.

#### Scenario: Remote menu configured
- **WHEN** a remote menu URL is configured
- **THEN** local menu persistence does not override the remote menu data.
