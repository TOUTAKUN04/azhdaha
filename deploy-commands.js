const fs = require('fs');
require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const discordClientId = process.env.cid;
const discordToken = process.env.TKN_ID || process.env.tkn_id || process.env.DISCORD_TOKEN;

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(discordToken);

const route = Routes.applicationCommands(discordClientId);
const scope = 'global';
console.log(`Registering ${scope} application commands...`);

rest.put(route, { body: commands })
	.then(() => {
		console.log(`Successfully registered application commands (${scope}).`);
	})
	.catch(console.error);
