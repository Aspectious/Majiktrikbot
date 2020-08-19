module.exports = {
	name: 'mail',
	description: 'sends a Letter! ;)',
	execute(message, args) {
        const command = require('../index.js')
        if (command.guildOnly) {
            return message.reply('I can\'t execute that command inside DMs!');
        }
        if (args.length < 1) return message.channel.send('You Must Specify A Person to send mail to, <@' + message.author.id + '>!')
        const reciever = message.mentions.members.first()
        const Discord = require('discord.js')
        messageable = args.splice(1,args.length).join(" ")
        const Recieverembed = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle(`You've Got Mail!`)
        .setDescription(messageable)
        .setAuthor(message.author.tag, message.author.avatarURL())
        const Senderembed = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle(`✅ Mail Sent Successfully`)
            reciever.send(Recieverembed);
            message.channel.send(Senderembed)
            message.delete()
    }
}