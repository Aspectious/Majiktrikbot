module.exports = {
	name: 'announce',
	description: 'Announces a Message.',
    execute(message, args) {
        if (args.length < 2) {
            return message.channel.send(`You didn't provide Enough arguments, ${message.author}! Usage: >announce {Channel} {Message}`);
        }
        const Discord = require('discord.js');
        messageable = args.slice(1,args.length).join(" ")
        const Announcement = new Discord.MessageEmbed()
            .setColor("#0000ff")
            .setTitle(`**Announcement**`)
            .setAuthor('MajikTrikBot', 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256', 'https://discord.gg/Vqra7ZQ')
            .setDescription(messageable);
        let taggedChannel = message.mentions.channels.first();
        let specifiedchannel = message.guild.channels.find(t => t.id == taggedChannel.id); 
        specifiedchannel.send(Announcement); 
	},
}; 