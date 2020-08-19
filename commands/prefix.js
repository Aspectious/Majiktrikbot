const { execute } = require("./mail");
const { fstat } = require("fs");

module.exports = {
    name: 'prefix',
    execute(message, args) {
        const cprfx  = require('../lib/data/guilddata.json')
        const fs = require('fs')
        const Discord = require('discord.js')
        if (args.length < 1) {
            const lembed = new Discord.MessageEmbed()
            .setColor('#fefefe')
            .setTitle('Custom Prefix')
            .setDescription(`Current Server Prefix is ${cprfx[message.guild.id].prefix}. do ${cprfx[message.guild.id].prefix}prefix to Change The Prefix. MANAGE SERVER permission Required.`)
            message.channel.send(lembed)
            return
        }
        if(!message.member.hasPermission(['MANAGE_GUILD', 'ADMINISTRATOR'])) {
            message.channel.send(`no. I(or you) don't Feel Like it`)
            return
        }
        cprfx [message.guild.id] = {
            prefix: args[0]
        }
        fs.writeFile('./lib/data/guilddata.json', JSON.stringify(cprfx, null, 4), function(err) {
            if(err) throw err;
            message.channel.send(`Server Prefix Now Set to ${args[0]}`)
        })
        }
    }