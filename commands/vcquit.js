const { execute } = require("./vcjoin");

module.exports = {
    name: 'vcquit',
    execute(message, args) {
        return message.channel.send('no.')
        const Discord = require('discord.js')
        if (!message.member.voice.channel) {
            return message.channel.send('no.')
            const notinvcerror = new Discord.MessageEmbed()
            .setTitle('Unable to Join Voice Channel')
            .setColor('#ff0000')
            .setDescription(':x: You need to be in a Voice Channel First.')
            return message.channel.send(notinvcerror)
        }
        const leaved = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(`left VC #` + "`" + `${message.member.voice.channel.name}` + "`" + `.`)
        message.channel.send(leaved)
    }
}