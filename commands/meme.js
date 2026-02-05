const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Get a random meme!'),
    async execute(interaction) {
        await interaction.deferReply();
        try {
            const res = await fetch('https://meme-api.com/gimme');
            const data = await res.json();

            if (!data.url) return interaction.editReply('Failed to fetch a meme. Try again!');

            const embed = new MessageEmbed()
                .setColor('#FF4500')
                .setTitle(data.title)
                .setURL(data.postLink)
                .setImage(data.url)
                .setFooter({ text: `👍 ${data.ups} | r/${data.subreddit}` });

            return interaction.editReply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            return interaction.editReply('Error fetching meme API.');
        }
    },
};
