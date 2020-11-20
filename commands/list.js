module.exports = {
    name: 'list',
    execute(message, args) {
        const { ver } = require('../../majikconfig.json')
        const Discord = require('discord.js')
        const serverlist = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle(`Majiktrikbot Developer Information`)
        .setDescription(`Currently in ${message.client.guilds.cache.size} Guilds`)
        .addField(`Version`, ver)
        .addField(`Client/Shard Uptime`, `${message.client.uptime / 100}ms`)
        .addField(`Start of latest Uptime`, message.client.readyAt)
        .addField(`Shard Number`, message.client.shard)

        message.channel.send(serverlist)
    }
}