module.exports = {
    name: "kick",
    execute(message, args) {
        const Discord = require('discord.js')
        const Target = message.mentions.members.first()
        if (!message.member.hasPermission('KICK_MEMBERS', { checkAdmin: true, checkOwner: true })) {
            const nonoembed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Not Authorized')
            .setDescription('You are not authorized to peform this command.')
            return message.channel.send(nonoembed)
           }
        if (Target.id === message.author.id) {
            const neinu = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle("Don't kick yourself, that's not fun.")
            return message.channel.send(neinu)
        }
        if (Target.id === message.client.user.id) {
            const neinme = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle("Don't. You know what you did. That's not fun.")
            return message.channel.send(neinme)
        }
        Target.kick().then((Target) => {
        const okidoki = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Okie Dokie')
        .setDescription(`User <@${Target.id}> Left the Game (Kicked by Server)`)
        message.channel.send(okidoki)
        }).catch(() => {
            const uhoh = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle("An error Occured, or they cannot be kicked.")
             message.channel.send(uhoh)
        })
    }
}