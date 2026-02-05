const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { readJSON, writeJSON } = require('../utils/db');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Warn system.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Warn a user')
                .addUserOption(option => option.setName('target').setDescription('The user to warn').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('Reason for warning').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('list')
                .setDescription('List warnings for a user')
                .addUserOption(option => option.setName('target').setDescription('The user to check').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Remove a warning (by index)')
                .addUserOption(option => option.setName('target').setDescription('The user').setRequired(true))
                .addIntegerOption(option => option.setName('index').setDescription('Index of warning to remove').setRequired(true))),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        const target = interaction.options.getUser('target');
        const db = readJSON('warnings.json');

        if (!db[target.id]) db[target.id] = [];

        if (subcommand === 'add') {
            const reason = interaction.options.getString('reason');
            const warner = interaction.user.tag;
            const timestamp = Date.now();

            db[target.id].push({ reason, warner, timestamp });
            writeJSON('warnings.json', db);

            const embed = new MessageEmbed()
                .setColor('#FF0000')
                .setTitle('User Warned')
                .setDescription(`**${target.tag}** has been warned.`)
                .addFields(
                    { name: 'Reason', value: reason },
                    { name: 'Warned By', value: warner }
                );
            return interaction.reply({ embeds: [embed] });

        } else if (subcommand === 'list') {
            const warnings = db[target.id];

            if (!warnings || warnings.length === 0) {
                return interaction.reply({ content: `${target.tag} has no warnings.`, ephemeral: true });
            }

            const embed = new MessageEmbed()
                .setColor('#FFA500')
                .setTitle(`Warnings for ${target.tag}`)
                .setDescription(warnings.map((w, i) => `**${i + 1}.** ${w.reason} - by ${w.warner} (<t:${Math.floor(w.timestamp / 1000)}:R>)`).join('\n'));

            return interaction.reply({ embeds: [embed] });

        } else if (subcommand === 'remove') {
            const index = interaction.options.getInteger('index') - 1;
            const warnings = db[target.id];

            if (!warnings || !warnings[index]) {
                return interaction.reply({ content: 'Invalid warning index.', ephemeral: true });
            }

            const removed = warnings.splice(index, 1)[0];
            writeJSON('warnings.json', db);

            return interaction.reply({ content: `Removed warning for ${target.tag}: "${removed.reason}"`, ephemeral: true });
        }
    },
};
