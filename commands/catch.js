const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catch')
        .setDescription('Try to catch the ball!'),
    async execute(interaction) {
        const result = Math.random() < 0.5;
        if (result) return interaction.reply('⚾ You caught it! Nice catch! 🧢');
        return interaction.reply('⚾ You dropped it... butterfingers! 🧤');
    },
};
