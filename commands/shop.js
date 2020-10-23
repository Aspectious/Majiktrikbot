module.exports = {
    name: 'shop',
    execute(message, args) {
        const Discord = require('discord.js')
        const client = message.client
        
        const shopbed = new Discord.MessageEmbed()
        .setColor('#ffd700')
        .setTitle('Global Store')
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription('This is the Global Store. Expensive.')
        .addField(`Nothing here :(`, `\u200b`, true)
        .setTimestamp()
        .setFooter('Globular Economy')
        message.channel.send(shopbed)
    }
}