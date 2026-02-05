const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gn')
        .setDescription('Say Good Night!'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#191970')
            .setTitle('🌙 Good Night! 🌙')
            .setDescription(`Good night, **${interaction.user.username}**! Sweet dreams!`)
            .setImage('https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif');

        return interaction.reply({ embeds: [embed] });
    },
};
