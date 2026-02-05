const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
		const { guild } = interaction;

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle(guild.name)
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: 'Server Owner', value: `<@${guild.ownerId}>`, inline: true },
				{ name: 'Total Members', value: `${guild.memberCount}`, inline: true },
				{ name: 'Verification Level', value: `${guild.verificationLevel}`, inline: true },
				{ name: 'Boost Level', value: `${guild.premiumTier}`, inline: true },
				{ name: 'Created At', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>`, inline: true },
			)
			.setFooter({ text: `ID: ${guild.id}` })
			.setTimestamp();

		return interaction.reply({ embeds: [embed] });
	},
};
