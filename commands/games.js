module.exports = {
    name: 'games',
    description: 'game list',
    execute(message, args) {
        const Discord = require('discord.js');
        const pgone = new Discord.MessageEmbed()
        .setTitle('Games List')
        .setDescription('Page **1** of **1**')
        .setTimestamp()
        .setFooter('Page 1 of 1')
        message.channel.send(pgone)
        .then(function (msg) {
            msg.react('➡️')
            const filter = (reaction) => reaction.emoji.name === '➡️';
            const collector = msg.createReactionCollector(filter, { max: 2 });
            collector.on('collect', r => {
            }
            );
          })
    }
}