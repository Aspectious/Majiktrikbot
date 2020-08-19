module.exports = {
    name: 'warn',
    execute(message, args){
        const Discord = require('discord.js')
        const target = message.mentions.members.first()
        const Message = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Warning')
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setDescription(args.slice(1,args.length).join(" "))
        .setTimestamp()
        .setFooter('This is A Warning')
        const successembed = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(`✅ Warned User ${target.username}`)
        target.send(Message)
        message.channel.send(successembed)
    }
}