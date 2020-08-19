module.exports = {
    name: 'ver',
    Description: 'Checks Version and Changelog',
    execute(message, args){
    const { ver } = require('../config.json');
    const { latest_log } = require('../config.json');
    const { latest_log_header } = require('../config.json');
    const Discord = require('discord.js');
    const Ver = new Discord.MessageEmbed()
	.setColor('#fefefe')
    .setTitle("Version and Changelog")
    .setAuthor('Majiktrikbot', 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256')
    .setImage('https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256')
    .addField('Version', ver, true)
    .addField(latest_log_header, latest_log, true)
    .setFooter('This is a Changelog')
    .setTimestamp()
    message.channel.send(Ver);
    },
};