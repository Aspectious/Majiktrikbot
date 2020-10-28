const { execute } = require("./vote");

module.exports = {
    name: 'settings',
    execute(message, args) {
    const Discord = require('discord.js')
    const fs = require('fs')
    const GuildData = require('../lib/data/guilddata.json')
    const GuildID = message.guild.id
    //Dependency Seperator, Don't mind me.

    const FetchingEmbed = new Discord.MessageEmbed()
    .setColor('#fefefe')
    .setTitle('⌛ Fetching...')
    .setDescription('Fetching your Saved Data...')

    const Data = new Discord.MessageEmbed()
    .setColor('#fefefe')
    .setTitle(`${message.guild.name} Saved Data`)


    //Embedd Initialization. codeing time.
    try {
        Data.addField('Prefix', GuildData[GuildID].prefix, true)
    } catch {
        Data.addField('Prefix', '>', true)
    }
    const replyMessage = message.channel.send(FetchingEmbed).then(msg => {
        msg.edit(Data)
    })
    }
}