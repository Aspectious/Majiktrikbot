module.exports = {
    name: 'automod',
    execute(message, args) {
        const Discord = require('discord.js')
        const Guilddata = require('../lib/data/guilddata.json')
            const invalidsyntax = new Discord.MessageEmbed()
            .setTitle('❌ Incorrect Syntax')
            .setColor('#ff0000')
            .setDescription('List of all Arguements: <> = required, [] = optional')
            .addField(`>automod setchannel [Channel Mention]`, `Sets Automod Channel (WIP)`, true)
            .addField(`>automod edit [key] [value]`, `Edits automod Sesttings (WIP)`, true)
            .addField(`>automod trigger <event>`, `Triggers automod Event`, true)
            if(args[0] === "")
                return message.channel.send(invalidsyntax)
    }
}
