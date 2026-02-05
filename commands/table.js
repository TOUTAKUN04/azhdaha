const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('table')
        .setDescription('Flip a table! (╯°□°）╯︵ ┻━┻'),
    async execute(interaction) {
        return interaction.reply('(╯°□°）╯︵ ┻━┻');
    },
};
