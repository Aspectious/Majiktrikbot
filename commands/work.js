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
        const respnumid = Math.floor(Math.random() * 5) + 1 
        if (respnumid === 1) var resp = `You Created $${newamount}`
        if (respnumid === 2) var resp = `You worked $${newamount} out of your corporation.`
        if (respnumid === 3) var resp = `$${newamount} Popped into Existence in front of you.`
        if (respnumid === 4) var resp = `$${newamount}.`
        if (respnumid === 5) var resp = `You 'borrowed' $${newamount} from <@292953664492929025>`
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
        .setDescription(resp)
        message.channel.send(embed)
    }
}