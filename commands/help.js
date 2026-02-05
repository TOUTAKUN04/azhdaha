const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List all available commands.'),
    async execute(interaction) {
        const categories = {
            'Admin & Utility': ['botinfo', 'count', 'poll', 'warn', 'server', 'clear', 'user-info'],
            'Wishing': ['gm', 'gn', 'eve', 'sday', 'bday', 'shoutout'],
            'Games': ['dice', 'lucktester', 'cooltester', 'coinflip', 'rps', '8ball', 'meme', 'table', 'goal', 'catch'],
            'Economy': ['dailycash', 'checkmybal', 'stealmoney']
        };

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('📖 Azhdaha Bot Help')
            .setDescription('Here are all the available commands:');

        for (const [category, cmds] of Object.entries(categories)) {
            embed.addField(category, cmds.map(c => `\`${c}\``).join(', '));
        }

        embed.addField('Core', '`ping`, `help`, `avatar`');

        return interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
