const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a simple poll.')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('The question for the poll')
                .setRequired(true)),
    async execute(interaction) {
        const question = interaction.options.getString('question');

        const embed = new MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('📊 Poll')
            .setDescription(question)
            .setFooter({ text: `Asked by ${interaction.user.tag}` })
            .setTimestamp();

        const message = await interaction.reply({ embeds: [embed], fetchReply: true });
        await message.react('👍');
        await message.react('👎');
    },
};
