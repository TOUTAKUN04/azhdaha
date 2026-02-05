const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('Roll a die.')
        .addIntegerOption(option =>
            option.setName('sides')
                .setDescription('Number of sides (default 6)')
                .setRequired(false)),
    async execute(interaction) {
        const sides = interaction.options.getInteger('sides') || 6;
        const result = Math.floor(Math.random() * sides) + 1;

        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Dice Roll')
            .setDescription(`You rolled a **${result}** (1-${sides})`)
            .setThumbnail('https://www.clipartmax.com/png/middle/12-127116_dice-png-transparent-images-dice-clipart.png');

        return interaction.reply({ embeds: [embed] });
    },
};
