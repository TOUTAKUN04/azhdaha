const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		const user = interaction.user;
		const member = interaction.member;

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`${user.username}'s Information`)
			.setThumbnail(user.displayAvatarURL({ dynamic: true }))
			.addFields(
				{ name: 'Username', value: `${user.tag}`, inline: true },
				{ name: 'User ID', value: `${user.id}`, inline: true },
				{ name: 'Joined Server', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
				{ name: 'Account Created', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true },
			)
			.setFooter({ text: `Requested by ${user.username}`, iconURL: user.displayAvatarURL() })
			.setTimestamp();

		return interaction.reply({ embeds: [embed] });
	},
};