module.exports = {
    name: 'work',
    execute(message, args) {
        const Discord = require('discord.js')
        const money = require('../lib/data/money.json')
        const fs = require('fs')
        var oldamount
        try {
        var oldamount = money[message.author.id].wallet
        } catch {
        var oldamount = 0
        }
        try {
        var bankmoney = money[message.author.id].bank
        } catch {
        var bankmoney = 0
        }
        const newamount = Math.floor(Math.random() * 15000) + 1  
            money [message.author.id] = {
                wallet: oldamount + newamount,
                bank: bankmoney,
                total: oldamount + newamount + bankmoney
            }
            fs.writeFile('./lib/data/money.json', JSON.stringify(money, null, 4), function(err) {
                if(err) throw err;
            })
        const embed = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle('Work Results')
        .setDescription(`You Gained $${newamount}`)
        message.channel.send(embed)
    }
}