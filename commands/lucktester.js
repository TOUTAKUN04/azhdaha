const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lucktester')
        .setDescription('Test your luck percentage!'),
    async execute(interaction) {
        const luck = Math.floor(Math.random() * 101);
        let color = '#00FF00'; // Green
        let text = 'Wow! Super lucky!';

        if (luck < 50) {
            color = '#FF0000'; // Red
            text = 'Oof... good luck next time.';
        } else if (luck < 80) {
            color = '#FFFF00'; // Yellow
            text = 'Not bad!';
        }

        const embed = new MessageEmbed()
            .setColor(color)
            .setTitle('🍀 Luck Tester 🍀')
            .setDescription(`You are **${luck}%** lucky today!`)
            .setFooter({ text: text });

        return interaction.reply({ embeds: [embed] });
    },
};
