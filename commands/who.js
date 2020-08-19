const { writeHeapSnapshot } = require('v8')

module.exports = {
    name: 'who',
    execute(message, args){
        const Discord = require('discord.js')
        const client = require('../index.js')
        const Target = message.mentions.members.first()
        whos = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setAuthor(Target.user.tag, Target.user.avatarURL())
        .setTitle(`About ${Target.user.username}`)
        .setThumbnail(Target.user.avatarURL())
        .addField('Joined This Server on', Target.joinedAt)
        .addField(`They Joined DISCORD on `, Target.user.createdAt) 
        .addField(`What are their roles?`, Target.roles.cache.array())
        .setTimestamp()
        .setFooter('This is Someone. Yikes.')
        if (Target.user.bot) {
            whos.addField('Are they a Robo Person?', 'Yes. beep boop.')
        } else {
            whos.addField('Are they a Robo Person?', 'Nope.')
        }
        if (message.guild.owner.id === Target.id) {
            whos.addField(`Member Status`, `They're The Server Owner. Don't Mess Wtih them..`)
            message.channel.send(whos)
            return;
        } else  if (Target.hasPermission('ADMINISTRATOR')){
            whos.addField(`Member Status`, `They appear to be an Administrator, or at least they have the permission 'ADMINISTRATOR'.`)
        } else {
            whos.addField(`Member Status`, `Just Another Powerless member without the Adminstrator Permission.`)
        }
        const Hookd = new Discord.Guild()
        message.channel.send(whos)
    }
}