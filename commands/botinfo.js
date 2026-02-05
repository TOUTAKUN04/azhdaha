const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Display information about the bot.'),
    async execute(interaction) {
        const client = interaction.client;
        const uptime = process.uptime();
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor(uptime / 3600) % 24;
        const minutes = Math.floor(uptime / 60) % 60;
        const seconds = Math.floor(uptime % 60);

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Azhdaha Bot Info')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Bot Version', value: version, inline: true },
                { name: 'Node.js Version', value: process.version, inline: true },
                { name: 'Discord.js Version', value: require('discord.js').version, inline: true },
                { name: 'Uptime', value: `${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true },
                { name: 'Ping', value: `${client.ws.ping}ms`, inline: true },
                { name: 'Server Count', value: `${client.guilds.cache.size}`, inline: true },
            )
            .setFooter({ text: 'Created by TOUTAKUN04' });

        return interaction.reply({ embeds: [embed] });
    },
};
