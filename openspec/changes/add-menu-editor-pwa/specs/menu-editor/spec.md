## ADDED Requirements
### Requirement: Mobile Editing Interface
The system SHALL provide a mobile-friendly editor that allows updating the day, title, and details for each menu item.

#### Scenario: Edit menu items
- **WHEN** the editor is opened on a mobile device
- **THEN** the user can edit the list of days with titles and details.

### Requirement: Server Save Endpoint
The system SHALL provide a PHP endpoint that writes the menu data to a server-hosted JSON file.

#### Scenario: Save menu data
- **WHEN** the editor submits valid menu data
- **THEN** the server persists the JSON and returns a success response.

### Requirement: Save Error Feedback
The system SHALL display a clear error message when saving fails.

#### Scenario: Server error
- **WHEN** the save endpoint returns an error
- **THEN** the editor displays a failure message and preserves unsaved edits.

### Requirement: Installable PWA Shell
The system SHALL provide a manifest and service worker to enable installation and offline access to the editor shell.

#### Scenario: Install prompt available
- **WHEN** the editor is accessed on a supported mobile browser
- **THEN** it can be installed as a PWA.

### Requirement: Optional Write Protection
The system SHALL support an optional shared write token for save requests.

#### Scenario: Token required
- **WHEN** a write token is configured on the server
- **AND** the client does not provide the token
- **THEN** the save request is rejected.
