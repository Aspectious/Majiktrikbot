module.exports = {
    name: 'crime',
    alpha: true,
    execute(message, args) {
        const Discord = require('discord.js')
        const fs = require('fs')
        const money = require('../lib/data/money.json')
        const moneyy = fs.readFileSync('./lib/data/money.json')
        const mlist = Object.keys(JSON.parse(moneyy))
        		const alphabed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle('Command in ALPHA Mode')
		.setDescription('This command has been Recognized as an ALPHA Command. This means it has a high chance of ruining something. So we send you this instead. Have a nice day!')
        return message.channel.send(alphabed)
        try {
        var moneylist = mlist.sort(function(a, b) { return money[b].total - money[a].total })
        const target = moneylist[Math.floor(Math.random() * moneylist.length) + 1]
        const amount = Math.floor(Math.random() * money[target].wallet) + 1
        var failchance = Math.round(Math.random())
        if (failchance === 1) {
        const failembd = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Crime Failed')
        .setDescription(`you lost $${amount}.`)
        money[message.author.id] = {
            wallet: money[message.author.id].wallet - amount,
            bank: money[message.author.id].bank,
            total: money[message.author.id].total - amount
        }
        fs.writeFile('./lib/data/money.json', JSON.stringify(money, null, 4), function(err) {
            if(err) throw err;
        })
        message.channel.send(failembd)
        return
        }
        if (money[target].wallet === 0) {
            const failembd = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Crime Failed')
            .setDescription(`Nothing Happened. 0 Dollars is a lot of money!`)
            message.channel.send(failembd)
            return
        }
        money[target] = {
            wallet: money[target].wallet - amount,
            bank: money[target].bank,
            total: money[target].total - amount
        }
        money[message.author.id] = {
            wallet: money[message.author.id].wallet + amount,
            bank: money[message.author.id].bank,
            total: money[message.author.id].total + amount
        }
        fs.writeFile('./lib/data/money.json', JSON.stringify(money, null, 4), function(err) {
            if(err) throw err;
        })
        message.channel.send(`You stole $${amount} from <@${target}>`)
    } catch {
        message.channel.send('An Internal Error Occured')
    }
    }
}