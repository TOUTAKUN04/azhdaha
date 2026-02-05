const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { readJSON, writeJSON } = require('../utils/db');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stealmoney')
        .setDescription('Attempt to steal money from someone!')
        .addUserOption(option => option.setName('target').setDescription('The user to steal from').setRequired(true)),
    async execute(interaction) {
        const thiefId = interaction.user.id;
        const victim = interaction.options.getUser('target');
        const victimId = victim.id;

        if (thiefId === victimId) return interaction.reply({ content: "You can't steal from yourself!", ephemeral: true });

        const db = readJSON('economy.json');

        if (!db[thiefId]) db[thiefId] = { balance: 0, lastDaily: 0 };
        if (!db[victimId]) db[victimId] = { balance: 0, lastDaily: 0 };

        if (db[victimId].balance < 50) {
            return interaction.reply({ content: `${victim.username} is too poor to steal from.`, ephemeral: true });
        }

        const success = Math.random() < 0.4; // 40% chance

        if (success) {
            const stolen = Math.floor(Math.random() * (db[victimId].balance * 0.2)) + 1; // Steal up to 20%
            db[victimId].balance -= stolen;
            db[thiefId].balance += stolen;
            writeJSON('economy.json', db);

            return interaction.reply(`😈 **${interaction.user.username}** stole **$${stolen}** from **${victim.username}**!`);
        } else {
            const fine = 50;
            db[thiefId].balance = Math.max(0, db[thiefId].balance - fine);
            writeJSON('economy.json', db);

            return interaction.reply(`🚔 **${interaction.user.username}** got caught trying to steal from **${victim.username}** and paid a **$${fine}** fine!`);
        }
    },
};
