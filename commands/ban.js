const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Select a member and ban them (placeholder).')
        .addUserOption(option => option.setName('target').setDescription('The member to ban')),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        return interaction.reply({ content: `You wanted to ban: ${user.username} (Simulation only)`, ephemeral: true });
    },
};
