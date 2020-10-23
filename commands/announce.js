module.exports = {
	name: 'announce',
	description: 'Announces a Message.',
    execute(message, args) {
        const Discord = require('discord.js');
        try {
        const channelcheck = message.mentions.channels.first()
        const ch =  message.guild.channels.cache.get(channelcheck.id)
        messageable = args.slice(1,args.length).join(" ")
        if (!message.member.hasPermission(['MANAGE_MESSAGES'], true, true)) {
            message.channel.send('The Dope Nope Rope Says Nope to ur dumb Schennangans. NO PERMISSION.')
            return;
        }
        const Announcement = new Discord.MessageEmbed()
            .setColor("#fefefe")
            .setTitle(`**Announcement**`)
            .setAuthor('MajikTrikBot', 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256', 'https://discord.gg/Vqra7ZQ')
            .setDescription(messageable);
        ch.send(Announcement)
        message.delete()
    } catch {
        const lolurdumb = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Nope.')
        .setDescription('How about I Dont mention what channel I would like my Announcement in? Why not send an Empty Announcement? Ask Yourself again. Syntax: /announce #channelmention Message')
        message.channel.send(lolurdumb)
    }
	}
}; 