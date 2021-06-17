const { execute } = require("./money");

module.exports = { 
    name: 'lb',
    execute(message, args) {
    const fs = require('fs')
    const Discord = require('discord.js')
    const money = require('../lib/data/money.json')
    const moneyy = fs.readFileSync('./lib/data/money.json')
    const mlist = Object.keys(JSON.parse(moneyy))
    message.client.users.fetch(message.author.id, true)
    var top10 = mlist.sort(function(a, b) { return money[b].total - money[a].total })
                .slice(0, 10);
    const top10Global = new Discord.MessageEmbed()
    .setColor('#fefefe')
    .addField('Top 10 Leaderboard', `in *Global*`)
    for (i = 0; i < money.length; i++) {
        message.client.users.fetch(money[i], true)
    }
    for (i = 0; i < 10; i++) {
        const usr = top10[i]
        message.client.users.fetch(usr, true)
        try {
        var usrtotl = money[usr].total
        } catch {
        var usrtotl = null
        }
        try {
            top10Global.addField(`# (Global) ${i + 1}: $${usrtotl}`, '`' + message.client.users.cache.get(usr).tag + '`')
        } catch {
            top10Global.addField(`# (Global) ${i + 1}: $${usrtotl}`, '`Unable to load User`')
        }
    }
    top10Global.addField('\u200b', '\u200b')
    top10Global.addField("Top 10 Leaderboard", `in *${message.guild.name}*`)
    for (i = 0; i < 10; i++) {
        const usr = top10[i]
        if (message.guild.members.cache.has(usr)) {
            try {
                var usrtotl = money[usr].total
                } catch {
                var usrtotl = null
                }
                try {
                    top10Global.addField(`# (${message.guild.name}) ${i + 1}: $${usrtotl}`, '`' + message.client.users.cache.get(usr).tag + '`')
                } catch {
                    top10Global.addField(`# (${message.guild.name}) ${i + 1}: $${usrtotl}`, '`Unable to load User`')
                }
        } else {

        }
    }
    try {
    var authortotal = money[message.author.id].total
    } catch {
    var authortotal = 0
    }
    top10Global.addField('\u200b', '\u200b')
    top10Global.addField(`# ${top10.indexOf(message.author.id) + 1}: $${authortotal}`, '```' + message.author.tag + '```')
    message.channel.send(top10Global)
    }
}
