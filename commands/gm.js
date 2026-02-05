const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gm')
        .setDescription('Say Good Morning!'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('☀️ Good Morning! ☀️')
            .setDescription(`Good morning, **${interaction.user.username}**! Have a wonderful day ahead!`)
            .setImage('https://media.giphy.com/media/1xVmjw11zPP9v9S94a/giphy.gif');

        return interaction.reply({ embeds: [embed] });
    },
};
