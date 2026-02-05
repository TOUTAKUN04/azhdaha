const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('goal')
        .setDescription('Try to score a goal!'),
    async execute(interaction) {
        const result = Math.random() < 0.5;
        if (result) return interaction.reply('⚽ GOOOAAAALLLL! You scored! 🎉');
        return interaction.reply('⚽ Missed! The keeper saved it. ❌');
    },
};
