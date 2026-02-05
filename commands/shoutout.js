const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shoutout')
        .setDescription('Give a shoutout to someone!')
        .addUserOption(option => option.setName('target').setDescription('The user to shoutout').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('Your shoutout message').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const message = interaction.options.getString('message');

        const embed = new MessageEmbed()
            .setColor('#FF69B4')
            .setTitle('📢 SHOUTOUT! 📢')
            .setDescription(`**${interaction.user.username}** gives a massive shoutout to **${target}**!`)
            .addFields({ name: 'Message', value: message })
            .setThumbnail(target.displayAvatarURL({ dynamic: true }));

        return interaction.reply({ content: `${target}`, embeds: [embed] });
    },
};
