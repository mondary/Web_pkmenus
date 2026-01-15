## ADDED Requirements
### Requirement: Android TV Kiosk App
The system SHALL provide an Android TV APK named `pkmenus` that launches directly into a fullscreen WebView.

#### Scenario: App launch
- **WHEN** the user opens the app on an Android TV device
- **THEN** it displays the menu web page in fullscreen with no browser chrome.

### Requirement: Live Menu Display
The app SHALL load `https://menu.pouark.com` as its content source.

#### Scenario: Display content
- **WHEN** the WebView loads
- **THEN** the URL `https://menu.pouark.com` is displayed.

### Requirement: Screen On
The app SHALL keep the screen on to prevent sleep while the app is running.

#### Scenario: Prevent sleep
- **WHEN** the app is open
- **THEN** the screen does not dim or sleep.

### Requirement: Optional Auto-Refresh
The app SHALL support an optional auto-refresh interval for the WebView.

#### Scenario: Refresh
- **WHEN** a refresh interval is configured
- **THEN** the WebView reloads on that interval.
