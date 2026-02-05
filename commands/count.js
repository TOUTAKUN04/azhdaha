const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('count')
        .setDescription('Display the member count of the server.'),
    async execute(interaction) {
        const { guild } = interaction;
        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Member Count')
            .setDescription(`**${guild.name}** has **${guild.memberCount}** members!`)
            .setTimestamp();

        return interaction.reply({ embeds: [embed] });
    },
};
