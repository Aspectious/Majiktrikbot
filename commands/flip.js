const { execute } = require("./magicmail");

module.exports = {
    name: 'flip',
    execute(message, args) {
    const Discord = require('discord.js')
    const coin = Math.round(Math.random())
    const headflipped = new Discord.MessageEmbed()
    .setTitle('Coin Flip Results')
    .setColor('#fefefe')
    .setDescription('Heads!')
    const Tailflipped = new Discord.MessageEmbed()
    .setTitle('Coin Flip Results')
    .setColor('#fefefe')
    .setDescription('Tails!')
    if (coin === 1) {
        message.channel.send(Tailflipped)
    } else {
        message.channel.send(headflipped)
    }
}
}