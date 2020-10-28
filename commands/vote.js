module.exports = {
    name: 'vote', 
    description: 'votess',
    execute(message, args){
        const Discord = require('discord.js');
        messageable = args.slice(1,args.length).join(" ");
        const vote = new Discord.MessageEmbed()
            .setColor("#fefefe")
            .setTitle(`**Poll**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription(messageable);
            if (isNaN(args[0])){
                const Addtime = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('No time given.')
                .setDescription('You must give a time in seconds! Syntax: >vote {time/s} {question}')
                return message.channel.send(Addtime)
            }
        const results = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle('Poll Results')
        .setFooter(`Question: ${messageable}. Time: ${args[0]} seconds.`)
            message.channel.send(vote)
            .then(function (msg) {
                msg.react('👍')
                msg.react('👎')
                const upfilter = (upreaction, upuser) => upreaction.emoji.name === '👍' && upuser.id === message.author.id;
                const upcollector = msg.createReactionCollector(upfilter, { time: args[0]*1000});
                const downfilter = (downreaction, downuser) => downreaction.emoji.name === '👎' && downuser.id === message.author.id;
                const downcollector = msg.createReactionCollector(downfilter, { time: args[0]*1000});
                upcollector.on('collect', upreaction => {});
                upcollector.on('end', upcollected =>{ 
                    results.addField(`👍 Votes`, upcollected.size, true)
                    msg.edit(results)
                });
                downcollector.on('collect', downreaction => {});
                downcollector.on('end', downcollected => {
                    results.addField(`👎 Votes`, downcollected.size, true)
                    msg.edit(results)

                });
              });
    }
}
