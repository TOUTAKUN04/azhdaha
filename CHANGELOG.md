# Changelog

## 2026-02-05
### Added
- `/meet` slash command with a help-panel embed.

### Changed
- `deploy-commands.js` now uses env vars only and always registers global commands.
- `index.js` now accepts `TKN_ID` and `DISCORD_TOKEN` as token aliases.
- `rps` choices updated to the tuple format required by `@discordjs/builders` v0.11.

### Removed
- Dependency on `config.json` (env-based config only).
