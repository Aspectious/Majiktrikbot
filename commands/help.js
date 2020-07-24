module.exports = {
	name: 'help',
	description: 'Help Embed',
	execute(message, args) {

const { ver } = require('../config.json');
const Discord = require('discord.js');
const firstHelpEmbed = new Discord.MessageEmbed()
	.setColor('#4cb9ff')
	.setImage('')
	.setTitle('**MAJIKTRIKBOT HELP**')
	.setAuthor('MajikTrikBot' + ver, 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256')
	.setDescription('Yo Ho Ho It`s Majik! | The MajikTrik Bot')
	.addField('>help', 'This Very Screen', true)
	.addField('>majiktrik', 'Shows You a Majik Trik', true)
	.addField('>clear', 'Removes a LOT of messages', true)
	.addField('>ping', 'Pong!', true)
	.addField('>beep', 'Boop!', true)
	.addField('>args-info', 'test cmd', true)
	.addField('>8ball:', 'THE HOLY MAJIKAL 8 BALL', true)
	.addField('>mail', 'Wheeeeeeeeeeeeeeee', true)
	.addField('>announce', 'HEY YOU!', true)
	.addField('>claim', 'Mine Now', true)
	.addField('>ver', 'Version and Changelog', true)
	.addField('>vote', 'Starts a Poll', true)
	.addField('>games', 'Shows list of games', true)
	.addField('>login', 'Dev Debug Command', true)
	.addField('This is a Command:', 'Some value here', true)
	.addField('This is a Command:', 'Some value here', true)
	.addField('This is a Command:', 'Some value here', true)
	.addField('This is a Command:', 'Some value here', true)
	.setTimestamp()
	.setFooter('This is a Help Page', 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256')
  message.channel.send(firstHelpEmbed)
  .then(function (message) {
	message.react('➡️')
	const filter = (reaction) => reaction.emoji.name === '➡️';
	const collector = message.createReactionCollector(filter, { max: 2 });
	collector.on('collect', r => {});
	collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  }).catch(function() {
	message.channel.send("An internal Error Occured while performing this command")
   });
	},
};