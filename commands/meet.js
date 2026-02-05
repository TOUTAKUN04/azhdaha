const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meet')
    .setDescription('Show the help panel.'),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor('#2B6CB0')
      .setTitle('Help Pannel')
      .setDescription(
        [
          '**Admin**',
          'botinfo, count, ping, avatar, av, userinfo, del, warn, kick, ban, poll.',
          '',
          '**Wishing**',
          'gm, eve, gn, sday, bday, shoutout.',
          '',
          '**Games**',
          'dice, lucktester, cooltester, cointoss, goal, catch, table, rps, rps(advance), ask(8ball), meme, dailycash, checkmybal, stealmoney.',
          '',
          '**Roleplay**',
          'slap, hug, bonk, hit.',
        ].join('\n')
      )
      .setThumbnail(
        'https://images-ext-1.discordapp.net/external/6E49kpZm-7U6YlD5o9_pChvIB8DZ11uE1GQwbudRMSo/https/cdn.discordapp.com/avatars/821740134306283530/14c1ca874a2f13403fe2f290bdb8ae2c.png?format=webp&quality=lossless'
      );

    return interaction.reply({ embeds: [embed] });
  },
};
