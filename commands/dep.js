const { isNumber } = require('util')

module.exports = {
    name: 'dep',
    execute(message, args) {
        const Discord = require('discord.js')
        const money = require('../lib/data/money.json')
        const fs = require('fs')
        try {
        var oldwallet = money[message.author.id].wallet
        } catch {
        const nomoneyerremb = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`No Money :(`)
        message.channel.send(nomoneyerremb)
        return
        }
        try {
            var oldbank = money[message.author.id].bank
        } catch {
            var oldbank = 0
        }
        if (!isNumber(oldbank)) var oldbank = 0
        try {
            var amount = parseInt(args[0])
        } catch {
            const notanumbrembd = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Enter a Number')
            .setDescription(`Sorry, This isn't a Word Bank.`)
            message.channel.send(notanumbrembd)
            return
        }
        if (isNaN(amount)) {
            const notanumbrembd = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Enter a Number')
            .setDescription(`Sorry, This isn't a Word Bank.`)
            message.channel.send(notanumbrembd)
            return
        }
        money[message.author.id] = {
            wallet: oldwallet - amount,
            bank: oldbank + amount
        }
        fs.writeFile('./lib/data/money.json', JSON.stringify(money, null, 4), function(err) {
            if(err) throw err;
            const successembed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Deposit Complete')
            .setDescription(`Deposited $${amount} To your Bank.`)
            message.channel.send(successembed)
        })

    }
}