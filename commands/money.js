module.exports = {
    name: 'money',
    execute(message, args) {
    //Big PLans for big Whammo
    const Discord = require('discord.js')
    const money = require('../lib/data/money.json')
    const Client = message.Client
    //
    try {
var istheremoneylogged = money[message.author.id].wallet
    } catch {
        const nomoneyembed = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle('No Money Logged :(')
        message.channel.send(nomoneyembed)
        return
    }
    try {
    var bankmoney = money[message.author.id].bank
    } catch {
    var bankmoney = 0
    }
    const moneye = new Discord.MessageEmbed()
    .setColor('#fefefe')
    .setTitle('Global Balance')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .addField(`Cash in Wallet`, `$${money[message.author.id].wallet}`, true)
    .addField(`Cash in Bank`, `$${bankmoney}`, true)
    const WIPSign = new Discord.MessageEmbed()
    .setColor('#ffff00')
    .setTitle('Work In Progress')
    .setDescription('We are Working on this. rn. wip. lol. To Get the latest Updates, Click This Button! => ' + `[Join](https://discord.gg/Vqra7ZQ 'Majiktrikbot Official')` + ' <=')
    message.channel.send(moneye)
    }
}