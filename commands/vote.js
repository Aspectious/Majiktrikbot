module.exports = {
    name: 'vote',
    description: 'votess',
    execute(message, args){
        const Discord = require('discord.js');
        messageable = args.splice(2,args.length).join(" ");
        let taggedChannel = message.mentions.channels.first();
        let specifiedchannel = message.guild.channels.find(t => t.id == taggedChannel.id)
        const vote = new Discord.MessageEmbed()
            .setColor("#0000ff")
            .setTitle(`**Poll**`)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(messageable);
            specifiedchannel.send(vote)
            .then(function (msg) {
                msg.react('👍')
                msg.react('👎')
                const upfilter = (upreaction, upuser) => upreaction.emoji.name === '👍' && upuser.id === message.author.id;
                const upcollector = msg.createReactionCollector(upfilter, { time: args[1]*1000});
                const downfilter = (downreaction, downuser) => downreaction.emoji.name === '👎' && downuser.id === message.author.id;
                const downcollector = msg.createReactionCollector(downfilter, { time: args[1]*1000});
                upcollector.on('collect', upreaction => {});
                upcollector.on('end', upcollected =>{ 
                    specifiedchannel.send(`Recieved ${upcollected.size} 👍 Votes`)
                });
                downcollector.on('collect', downreaction => {});
                downcollector.on('end', downcollected => {
                    specifiedchannel.send(`Recieved ${downcollected.size} 👎 Votes`)

                });
              });
    }
}
