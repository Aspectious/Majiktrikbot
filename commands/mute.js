module.exports = {
    name: 'mute',
    execute(message, args) {
        const Discord = require('discord.js')
        const fs = require('fs')
        const GuildData = require('../lib/data/guilddata.json')
        const GuildID = message.guild.id
        if (!message.member.hasPermission(['MANAGE_ROLES', { checkAdmin: true, checkOwner: true }])) {
         const nonoembed = new Discord.MessageEmbed()
         .setColor('#ff0000')
         .setTitle('Not Authorized')
         .setDescription('You are not authorized to peform this command.')
         return message.channel.send(nonoembed)
        }
        try {
        const Muterole = GuildData[GuildID].muterole
        } catch {
        const Muterole = message.guild.roles.create({ data: { name: 'Muted', permissions: ['VIEW_CHANNEL'] } }).then(role => {
            GuildData[GuildID] = {
                muterole: role.id
            }
            fs.writeFile('./lib/data/guilddata.json', JSON.stringify(GuildData, null, 4), function(err) {
                if(err) throw err
            })
        })
        message.channel.send('Muted Role not found. Creating role. you may edit the name, color, permissions and order, but you may not delete this role.')
        }

    }
}