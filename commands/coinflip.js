const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Flip a coin!'),
    async execute(interaction) {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        const embed = new MessageEmbed()
            .setColor('#FFD700')
            .setTitle('Coin Flip')
            .setDescription(`The coin landed on: **${result}**`)
            .setThumbnail(result === 'Heads'
                ? 'https://content.invisioncic.com/Mfantap/monthly_2016_11/ccs.thumb.png.82d815fac95c6b6534927cbcd4076e01.png'
                : 'https://content.invisioncic.com/Mfantap/monthly_2016_11/ccs.thumb.png.82d815fac95c6b6534927cbcd4076e01.png'); // Placeholder coins

        return interaction.reply({ embeds: [embed] });
    },
};
