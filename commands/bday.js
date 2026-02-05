const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bday')
        .setDescription('Wish someone a Happy Birthday!')
        .addUserOption(option => option.setName('target').setDescription('The birthday person').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        const embed = new MessageEmbed()
            .setColor('#FF00FF')
            .setTitle('🎂 Happy Birthday! 🎂')
            .setDescription(`Everyone wish a very Happy Birthday to **${target}**! 🎉🎈`)
            .setImage('https://media.giphy.com/media/26FPIV12CYbDSBIRq/giphy.gif');

        return interaction.reply({ content: `${target}`, embeds: [embed] });
    },
};
