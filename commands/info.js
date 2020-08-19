module.exports = {
    name: 'info',
    execute(message, args){
        const Discord = require('discord.js')
        const client = require ('../index.js')
        const infographic = new Discord.MessageEmbed()
		.setColor('#fefefe')
        .setTitle('Information')
        .setDescription('Bot and Server.')
        .addField('Members in Current Server', message.guild.members.cache.size)
        .addField(`Current Server Owner`, `It's ${message.guild.owner.toString()}! `)
        .addField(`Server Created on`, message.guild.createdAt)
        .setThumbnail(message.guild.iconURL())
        .setFooter('Information formation')
        .setTimestamp()
		message.channel.send(infographic);
    }
}