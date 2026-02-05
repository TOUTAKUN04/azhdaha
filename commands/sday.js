const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sday')
        .setDescription('Celebrate a Special Day!')
        .addStringOption(option => option.setName('occasion').setDescription('What is the occasion?').setRequired(true))
        .addUserOption(option => option.setName('target').setDescription('User to celebrate (optional)')),
    async execute(interaction) {
        const occasion = interaction.options.getString('occasion');
        const target = interaction.options.getUser('target');
        const text = target ? `Happy **${occasion}** to ${target}!` : `Happy **${occasion}** everyone!`;

        const embed = new MessageEmbed()
            .setColor('#00FFFF')
            .setTitle('🎉 Special Day! 🎉')
            .setDescription(text)
            .setTimestamp();

        return interaction.reply({ content: target ? `${target}` : null, embeds: [embed] });
    },
};
