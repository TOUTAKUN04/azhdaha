const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { readJSON, writeJSON } = require('../utils/db');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dailycash')
        .setDescription('Claim your daily cash!'),
    async execute(interaction) {
        const userId = interaction.user.id;
        const db = readJSON('economy.json');

        if (!db[userId]) {
            db[userId] = { balance: 0, lastDaily: 0 };
        }

        const now = Date.now();
        const cooldown = 24 * 60 * 60 * 1000; // 24 hours

        if (now - db[userId].lastDaily < cooldown) {
            const remaining = cooldown - (now - db[userId].lastDaily);
            const hours = Math.floor(remaining / (60 * 60 * 1000));
            const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
            return interaction.reply({ content: `You can claim your daily cash in ${hours}h ${minutes}m.`, ephemeral: true });
        }

        const amount = Math.floor(Math.random() * 401) + 100; // 100-500
        db[userId].balance += amount;
        db[userId].lastDaily = now;
        writeJSON('economy.json', db);

        const embed = new MessageEmbed()
            .setColor('#FFD700')
            .setTitle('💰 Daily Cash Claimed!')
            .setDescription(`You claimed **$${amount}**!\nCurrent Balance: **$${db[userId].balance}**`);

        return interaction.reply({ embeds: [embed] });
    },
};
