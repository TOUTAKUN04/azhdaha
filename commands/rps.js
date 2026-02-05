const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Play Rock Paper Scissors!')
        .addStringOption(option =>
            option.setName('choice')
                .setDescription('Rock, Paper, or Scissors')
                .setRequired(true)
                .addChoices([
                    ['Rock', 'rock'],
                    ['Paper', 'paper'],
                    ['Scissors', 'scissors'],
                ])),
    async execute(interaction) {
        const userChoice = interaction.options.getString('choice');
        const choices = ['rock', 'paper', 'scissors'];
        const botChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (userChoice === botChoice) result = "It's a tie! 🤝";
        else if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) result = "You win! 🎉";
        else result = "I win! 🤖";

        const embed = new MessageEmbed()
            .setColor(result.includes('win') ? '#00FF00' : result.includes('tie') ? '#FFFF00' : '#FF0000')
            .setTitle('Rock Paper Scissors')
            .addFields(
                { name: 'Your Choice', value: userChoice, inline: true },
                { name: 'My Choice', value: botChoice, inline: true },
                { name: 'Result', value: result, inline: false }
            );

        return interaction.reply({ embeds: [embed] });
    },
};
