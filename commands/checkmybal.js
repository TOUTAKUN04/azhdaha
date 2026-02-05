const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { readJSON } = require('../utils/db');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('checkmybal')
        .setDescription('Check your balance.'),
    async execute(interaction) {
        const userId = interaction.user.id;
        const db = readJSON('economy.json');
        const balance = db[userId] ? db[userId].balance : 0;

        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('💳 Bank')
            .setDescription(`**${interaction.user.username}**, you have **$${balance}**.`);

        return interaction.reply({ embeds: [embed] });
    },
};
