module.exports = {
    name: 'vote',
    description: 'votess',
    execute(message, args){
        const Discord = require('discord.js');
        messageable = args.slice(1,args.length).join(" ");
        const vote = new Discord.MessageEmbed()
            .setColor("#fefefe")
            .setTitle(`**Poll**`)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(messageable);
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
                    message.channel.send(`Recieved ${upcollected.size} 👍 Votes`)
                });
                downcollector.on('collect', downreaction => {});
                downcollector.on('end', downcollected => {
                    message.channel.send(`Recieved ${downcollected.size} 👎 Votes`)

                });
              });
    }
}
