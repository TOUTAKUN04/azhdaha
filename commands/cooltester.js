const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cooltester')
        .setDescription('Test how cool you are!'),
    async execute(interaction) {
        const cool = Math.floor(Math.random() * 101);

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('😎 Cool Tester 😎')
            .setDescription(`You are **${cool}%** cool!`);

        if (cool === 100) embed.setDescription(`You are **${cool}%** cool! THE COOLEST! 🧊`);
        if (cool === 0) embed.setDescription(`You are **${cool}%** cool... frozen solid? 🥶`);

        return interaction.reply({ embeds: [embed] });
    },
};
