module.exports = {
    name: 'vcjoin',
    execute(message, args) {
        return message.channel.send('no.')
        const Discord = require('discord.js')
        const fs = require('fs')
        if (!message.member.voice.channel) {
        const notinvcerror = new Discord.MessageEmbed()
        .setTitle('Unable to Join Voice Channel')
        .setColor('#ff0000')
        .setDescription(':x: You need to be in a Voice Channel First.')
        return message.channel.send(notinvcerror)
        }
        message.member.voice.channel.join()
        .then(connection => {
            connection.play("https://wiki.teamfortress.com/w/images/2/2b/Spy_DominationScout01.wav");
            const success = new Discord.MessageEmbed()
            .setTitle('Success!')
            .setColor('#00ff00')
            .setDescription("Joined VC #" + "`" + `${message.member.voice.channel.name}` + "`" + `! Awating Input.`)
            message.channel.send(success)

        })
    }
}