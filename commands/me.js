module.exports = {
    name: 'me',
    execute(message, args){
        const Discord = require('discord.js')
        const client = require('../index.js')
        const Page = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle('About Me')
        .setThumbnail(message.author.avatarURL())
        .addField('Joined This Server on', message.member.joinedAt)
        .addField('Are you a bot?', 'We have an auto-stopper if a bot runs a command. so you are not. duh.')
        .addField(`You Joined DISCORD on `, message.member.user.createdAt)
        .addField(`Your Roles`, message.member.roles.cache.array())
        .setTimestamp()
        .setFooter('This is you. Duh.')
        if (message.guild.owner.toString() === '<@' + message.author.id + '>') {
            Page.addField(`Member Status`, `You Are the Owner of this Server, <@${message.author.id}>.`)
            message.channel.send(Page)
            return;
        } else  if (message.member.hasPermission('ADMINISTRATOR')){
            Page.addField(`Member Status`, `You appear to be an Administrator, or at least you have the permission 'ADMINISTRATOR', <@${message.author.id}>.`)
        } else {
            Page.addField(`Member Status`, `You are a Member of this Guild, <@${message.author.id}>.`)
        }

        message.channel.send(Page)
    }
}