# azhdaha

Discord bot with slash commands using `discord.js` v13 and `@discordjs/builders` v0.11.

**What’s inside**
- Command loader from `commands/`
- Slash-command deploy script (`deploy-commands.js`)
- `.env`-based configuration (no `config.json` required)
- Example help command: `/meet`

**Requirements**
- Node.js 16+ (v16 is recommended for discord.js v13)

**Setup**
1. Install dependencies:
```powershell
npm install
```
2. Create `.env`:
```
tkn_id=YOUR_BOT_TOKEN
cid=YOUR_APPLICATION_CLIENT_ID
```
3. Register slash commands globally:
```powershell
node deploy-commands.js
```
4. Start the bot:
```powershell
node index.js
```

**Environment variables**
- `tkn_id` (required): Bot token
- `cid` (required): Application client ID
- `TKN_ID` or `DISCORD_TOKEN` can also be used instead of `tkn_id`

**Notes**
- Commands are registered globally by default (no `gid` needed).
- Global commands can take some time to appear in Discord.
