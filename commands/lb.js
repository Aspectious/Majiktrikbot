const { execute } = require("./money");

module.exports = {
    name: 'lb',
    execute(message, args) {
    const fs = require('fs')
    const Discord = require('discord.js')
    const money = require('../lib/data/money.json')
    const moneyy = fs.readFileSync('./lib/data/money.json')
    const mlist = Object.keys(JSON.parse(moneyy))
    var top10 = mlist.sort(function(a, b) { return money[b].total - money[a].total })
                .slice(0, 10);
    const top10bed = new Discord.MessageEmbed()
    .setColor('#fefefe')
    .setTitle('Top 10 (Global) Leaderboard')
    for (i = 0; i < 10; i++) {
        const usr = top10[i]
        try {
        var usrtotl = money[usr].total
        } catch {
        var usrtotl = null
        }
        top10bed.addField(`# ${i + 1}: $${usrtotl}`, `<@${usr}>`)
    }
    try {
    var authortotal = money[message.author.id].total
    } catch {
    var authortotal = 0
    }
    top10bed.addField('\u200b', '\u200b')
    top10bed.addField(`# ${top10.indexOf(message.author.id) + 1}: $${authortotal}`, `$<@${message.author.id}>`)
    message.channel.send(top10bed)
    }
}