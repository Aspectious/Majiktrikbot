module.exports = {
    name: 'f',
    execute(message, args) {
        const Discord = require('discord.js')
        if (!args.length == 1) {
            const embedz = new Discord.MessageEmbed()
            .setColor('#fefefe')
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`Lets get an 🇫 in the chat for ${message.author.tag}`)
            .setFooter('F')
            .setTimestamp()
            message.channel.send(embedz).then(msg =>{
                msg.react('🇫')
            })
            return message.delete()
        } else {
            const target = message.mentions.members.first()
            const embedz = new Discord.MessageEmbed()
            .setColor('#fefefe')
            .setAuthor(target.user.tag, target.user.avatarURL())
            .setTitle(`Lets get an 🇫 in the chat for ${target.user.tag}`)
            .setFooter('F')
            .setTimestamp()
            message.channel.send(embedz).then(msg =>{
                msg.react('🇫')
            })
            return message.delete()
        }
    }
}