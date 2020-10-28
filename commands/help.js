module.exports = {
	name: 'help',
	description: 'Help Embed',
	execute(message, args) {
const { ver } = require('../config.json');
const Discord = require('discord.js');
function cover() {
	const title = new Discord.MessageEmbed()
		.setColor('#fefefe')
		.setImage('')
		.setTitle('**MAJIKTRIKBOT HELP**')
		.setAuthor('MajikTrikBot' + ver, 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256')
		.setDescription(`Our commands are listed after this page. If you would like to contact us, get the latest updates, report an error or bug, or just want to join our community, do so below or right here => [Join](https://discord.gg/Vqra7ZQ 'Majiktrikbot Official')`)
		.addField('\u200b', '\u200b')
		.addField(`Latest Update`, ver, true)
		.addField(`Join Our Community!`, `[Join](https://discord.gg/Vqra7ZQ 'Majiktrikbot Official')`, true)
		.addField(`Check out our Website!`, `[Website](https://sites.google.com/view/majiktrikbot 'Majiktrikbot Website(WIP)')`, true)
		.setTimestamp()
		.setFooter('Help Page 1 of 1', 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256')
		message.channel.send(title).then(covermsg => {
			covermsg.react('➡️')
			const filter = (reaction, user) => {
				return reaction.emoji.name === '➡️' && user.id === message.author.id;
			};
			const collector = covermsg.createReactionCollector(filter, { max: 1 });
			collector.on('collect', collected => {
				Sgeneral()
				covermsg.delete().catch(err =>{if (err) throw err})
				
			})
		}).catch(err =>{if (err) throw err})
	}
	function Sgeneral() {
		const S_general = new Discord.MessageEmbed()
	.setColor('#a3a3a3')
	.setTitle('General / Information')
	.setDescription(`Boooooooooooooooooring.`)
	.addField('>help', 'This Very Screen', true)
	.addField('>clear', 'Clears. add -s for silence', true)
	.addField('>ping', 'Pong!', true)
	.addField('>beep', 'Boop!', true)
	.addField('>args-info', 'test cmd', true)
	.addField('>mail', 'Wheeeeeeeeeeeeeeee', true)
	.addField('>announce', 'HEY YOU!', true)
	.addField('>ver', 'Version and Changelog', true)
	.addField('>vote', 'Starts a Poll', true)
	.addField('>poll', 'Starts a Poll', true)
	.addField('>get', 'Get the bot', true)
	.addField('>settings', 'Server Settings', true)
	.addField('>login', 'Dev Debug Command', true)
	.addField('>me', 'Gives Detailed Information about yourself', true)
	.addField('>who', 'Gives Detaied Inforamation about another user', true)
	.addField(`>info`, `Gives Detailed Server Information`, true)
	message.channel.send(S_general).then(generalmsg => {
	generalmsg.react('⬅️')
	generalmsg.react('➡️')
	const leftSgeneralfilt = (reaction, user) => {
		return reaction.emoji.name === '⬅️' && user.id === message.author.id;
	};
	const rightSgeneralfilt = (reaction, user) => {
		return reaction.emoji.name === '➡️' && user.id === message.author.id;
	};
	const leftSgeneralcoll = generalmsg.createReactionCollector(leftSgeneralfilt, { max: 1, time: 15000 });
	const rightSgeneralcoll = generalmsg.createReactionCollector(rightSgeneralfilt, { max: 1, time: 15000 });
	leftSgeneralcoll.on('collect', collected => {
		cover()
		generalmsg.delete().catch(err =>{if (err) throw err})
	})
	rightSgeneralcoll.on('collect', collected => {
		Sgames()
		generalmsg.delete().catch(err =>{if (err) throw err})
	})
	}).catch(err =>{if (err) throw err})
	}
	function Sgames() {
		const S_Games = new Discord.MessageEmbed()
		.setColor('#0000FF')
		.setTitle('Fun / Games')
		.setDescription(`WHIPEE!`)
		.addField('>games', 'Shows list of games', true)
		.addField('>claim', 'Mine Now', true)
		.addField('>flip', 'Flip it!', true)
		.addField('>8ball', 'THE HOLY MAJIKAL 8 BALL', true)
		.addField('>majiktrik', 'Shows You a Majik Trik', true)
		message.channel.send(S_Games).then(gamesmsg => {
			gamesmsg.react('⬅️')
			gamesmsg.react('➡️')
			const leftgamefilter = (reaction, user) => {
				return reaction.emoji.name === '⬅️' && user.id === message.author.id;
			};
			const leftgamecollector = gamesmsg.createReactionCollector(leftgamefilter, { max: 1, time: 60000 });
			leftgamecollector.on('collect', collected => {
				Sgeneral()
				gamesmsg.delete().catch(err =>{if (err) throw err})
			})
			const rightgamefilter = (reaction, user) => {
				return reaction.emoji.name === '➡️' && user.id === message.author.id;
			};
			const rightgamecollector = gamesmsg.createReactionCollector(rightgamefilter, { max: 1, time: 60000 });
			rightgamecollector.on('collect', collected => {
				Smoney()
				gamesmsg.delete().catch(err =>{if (err) throw err})
			})
		}).catch(err =>{if (err) throw err})
		}



function Smoney() {
const S_Money = new Discord.MessageEmbed()
.setColor('#00FF00')
.setTitle('Economy / Money')
.setDescription(`Money Printer go brrrrr`)
.addField(`>Money`, `Shows ya Money`, true)
.addField(`>work`, `Get a Job!`, true)
.addField(`>Pay`, `Coming Soon`, true)
.addField(`>leaderboard`, `Global Leaderboard`, true)
.addField(`>deposit`, `Put it in the bank`, true)
.addField(`>withdraw`, `Take it out of the bank`, true)
message.channel.send(S_Money).then(moneymsg => {
	moneymsg.react('⬅️')
	moneymsg.react('➡️')
	const leftmoneyfilter = (reaction, user) => {
		return reaction.emoji.name === '⬅️' && user.id === message.author.id;
	};
	const leftmoneycollector = moneymsg.createReactionCollector(leftmoneyfilter, { max: 1, time: 60000 });
	leftmoneycollector.on('collect', collected => {
		Sgames()
		moneymsg.delete().catch(err =>{if (err) throw err})
	})
	const rightmoneyfilter = (reaction, user) => {
		return reaction.emoji.name === '➡️' && user.id === message.author.id;
	};
	const rightmoneycollector = moneymsg.createReactionCollector(rightmoneyfilter, { max: 1, time: 60000 });
	rightmoneycollector.on('collect', collected => {
		spunish()
		moneymsg.delete().catch(err =>{if (err) throw err})
		
	})
}).catch(err =>{if (err) throw err})
}
function spunish() {
	const S_Punishment = new Discord.MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Punishment')
	.setDescription('I can do it for you!')
	.addField('>ban', 'You know what this does', true)
	.addField('>kick', 'A work in Progress.', true)
	.addField('>warn', 'A work in Progress.', true)
	message.channel.send(S_Punishment).then(punishmsg => {
		punishmsg.react('⬅️')
		const filter = (reaction, user) => {
			return reaction.emoji.name === '⬅️' && user.id === message.author.id;
		};
		const collector = punishmsg.createReactionCollector(filter, { max: 1 });
		collector.on('collect', collected => {
			Smoney()
			punishmsg.delete().catch(err =>{if (err) throw err})
			
		})
	})
	}	
cover()
	},
}