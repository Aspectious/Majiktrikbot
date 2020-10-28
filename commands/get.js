const { execute } = require("./vote");

module.exports = {
    name: 'get',
    execute(message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('fefefe')
        .setTitle('Oh, you want to get a copy of me?')
        .setDescription(`[Add to Discord](https://sites.google.com/view/majiktrikbot/invite 'Website')`)
        message.channel.send(embed)
    }
}