const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eve')
        .setDescription('Say Good Evening!'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#FFA500')
            .setTitle('🌆 Good Evening! 🌆')
            .setDescription(`Good evening, **${interaction.user.username}**! Hope you had a great day!`)
            .setImage('https://media.giphy.com/media/l2JdZOvR1jB8iGL0A/giphy.gif');

        return interaction.reply({ embeds: [embed] });
    },
};
