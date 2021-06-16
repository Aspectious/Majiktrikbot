module.exports = {
	name: 'help',
	description: 'Help Embed',
	execute(message, args) {
const { ver } = require('../config.json');
const Discord = require('discord.js');

// Embed messages

//title
const title = new Discord.MessageEmbed()
	.setColor('#fefefe')
	.setImage('')
	.setTitle('**MAJIKTRIKBOT HELP**')
	.setAuthor('MajikTrikBot ' + ver, message.client.user.avatarURL())
	.addField("Hello There!", `Use the ⬅️ and ➡️ Reactions below to navigate through our Help list.`)
	.addField('\u200b', '\u200b')
	.addField(`Latest Update`, ver, true)
	.addField(`Join Our Community!`, `[Join](https://discord.gg/7WMfHHBmSW 'Majiktrikbot Official')`, true)
	.addField(`Check out our Website!`, `[Website](https://sites.google.com/view/majiktrikbot 'Majiktrikbot Website(WIP)')`, true)
	.setTimestamp()
	.setFooter('Help Page 1 of 1', message.client.user.avatarURL())

//general
const S_general = new Discord.MessageEmbed()
	.setColor('#a3a3a3')
	.setTitle('General / Information', message.client.user.avatarURL())
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

//fun
const S_Games = new Discord.MessageEmbed()
	.setColor('#0000FF')
	.setTitle('Fun / Games', message.client.user.avatarURL())
	.setDescription(`WHIPEE!`)
	.addField('>games', 'Shows list of games', true)
	.addField('>claim', 'Mine Now', true)
	.addField('>flip', 'Flip it!', true)
	.addField('>8ball', 'THE HOLY MAJIKAL 8 BALL', true)
	.addField('>majiktrik', 'Shows You a Majik Trik', true)

//economy
const S_Money = new Discord.MessageEmbed()
	.setColor('#00FF00')
	.setTitle('Economy / Money', message.client.user.avatarURL())
	.setDescription(`Money Printer go brrrrr`)
	.addField(`>Money`, `Shows ya Money`, true)
	.addField(`>work`, `Get a Job!`, true)
	.addField(`>Pay`, `Coming Soon`, true)
	.addField(`>leaderboard`, `Global Leaderboard`, true)
	.addField(`>deposit`, `Put it in the bank`, true)
	.addField(`>withdraw`, `Take it out of the bank`, true)

//punishment
const S_Punishment = new Discord.MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Punishment', message.client.user.avatarURL())
	.setDescription('I can do it for you!')
	.addField('>ban', 'You know what this does', true)
	.addField('>kick', 'A work in Progress.', true)
	.addField('>warn', 'A work in Progress.', true)

//fin Embed constructors

// Embed Constructor ID Assigner
const embedRegistry = [{id:"1",page:title},{id:"2",page:S_general},{id:"3",page:S_Games},{id:"4",page:S_Money},{id:"5",page:S_Punishment}];
//
var currentpage = 0;

function changepage(newpage, instance) {
currentpage = newpage
if (newpage <= 0) {
	newpage = 0
}
if (newpage >= 4) {
	newpage = 4
}
const newEmbed = embedRegistry[newpage].page
instance.edit(newEmbed);
addreactions(instance);
return;
}

function addreactions(instance) {
	if (currentpage == 0) {
		instance.react('➡️');	
	}
	if (currentpage == 4) {
		instance.react('⬅️');	
	}
	if ((currentpage != 4) && (currentpage != 0)) {
		instance.react('⬅️');
		instance.react('➡️');
	}
	const leftfilter = (reaction, user) => {
		return reaction.emoji.name === '⬅️' && user.id === message.author.id;
	};
	const rightfilter = (reaction, user) => {
		return reaction.emoji.name === '➡️' && user.id === message.author.id;
	};
	const leftcollector = instance.createReactionCollector(leftfilter, { max: 1, time: 60000 });
	leftcollector.on('collect', collected => {
		instance.reactions.removeAll()
		changepage(currentpage - 1, instance);	
	})
	const rightcollector = instance.createReactionCollector(rightfilter, { max: 1, time: 60000 });
	rightcollector.on('collect', collected => {
		instance.reactions.removeAll();
		changepage(currentpage + 1, instance);	
	})
}

function init() {
	message.channel.send(embedRegistry[0].page).then(msg => {
		addreactions(msg);
	})
}


//The Following is old code. Please Ignore.

var helpmsg;
function cover() {
	const title = new Discord.MessageEmbed()
		.setColor('#fefefe')
		.setImage('')
		.setTitle('**MAJIKTRIKBOT HELP**')
		.setAuthor('MajikTrikBot ' + ver, message.client.user.avatarURL())
		.addField("Hello There!", `Use the ⬅️ and ➡️ Reactions below to navigate through our Help list.`)
		.addField('\u200b', '\u200b')
		.addField(`Latest Update`, ver, true)
		.addField(`Join Our Community!`, `[Join](https://discord.gg/7WMfHHBmSW 'Majiktrikbot Official')`, true)
		.addField(`Check out our Website!`, `[Website](https://sites.google.com/view/majiktrikbot 'Majiktrikbot Website(WIP)')`, true)
		.setTimestamp()
		.setFooter('Help Page 1 of 1', message.client.user.avatarURL())
		message.channel.send(title).then(covermsg => {
			var helpmsg = covermsg;
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
	.setTitle('General / Information', message.client.user.avatarURL())
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
	helpmsg.edit(S_general).then(generalmsg => {
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
		.setTitle('Fun / Games', message.client.user.avatarURL())
		.setDescription(`WHIPEE!`)
		.addField('>games', 'Shows list of games', true)
		.addField('>claim', 'Mine Now', true)
		.addField('>flip', 'Flip it!', true)
		.addField('>8ball', 'THE HOLY MAJIKAL 8 BALL', true)
		.addField('>majiktrik', 'Shows You a Majik Trik', true)
		helpmsg.edit(S_Games).then(gamesmsg => {
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
.setTitle('Economy / Money', message.client.user.avatarURL())
.setDescription(`Money Printer go brrrrr`)
.addField(`>Money`, `Shows ya Money`, true)
.addField(`>work`, `Get a Job!`, true)
.addField(`>Pay`, `Coming Soon`, true)
.addField(`>leaderboard`, `Global Leaderboard`, true)
.addField(`>deposit`, `Put it in the bank`, true)
.addField(`>withdraw`, `Take it out of the bank`, true)
helpmsg.edit(S_Money).then(moneymsg => {
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
	.setTitle('Punishment', message.client.user.avatarURL())
	.setDescription('I can do it for you!')
	.addField('>ban', 'You know what this does', true)
	.addField('>kick', 'A work in Progress.', true)
	.addField('>warn', 'A work in Progress.', true)
	helpmsg.edit(S_Punishment).then(punishmsg => {
		punishmsg.react('⬅️')
		punishmsg.react('➡️')
		const punishfilter = (reaction, user) => {
			return reaction.emoji.name === '⬅️' && user.id === message.author.id;
		};
		const rightpunishfilter = (reaction, user) => {
			return reaction.emoji.name === '➡️' && user.id === message.author.id;
		};
		const punishcollector = punishmsg.createReactionCollector(punishfilter, { max: 1 });
		punishcollector.on('collect', collected => {
			Smoney()
			punishmsg.delete().catch(err =>{if (err) throw err})
		})
		const rightpunishcollector = punishmsg.createReactionCollector(rightpunishfilter, { max: 1, time: 60000 });
		rightpunishcollector.on('collect', collected => {
			sgov()
			punishmsg.delete().catch(err =>{if (err) throw err})
			
		})
	})
	}
function sgov() {
const S_GOVERNMENT = new Discord.MessageEmbed()
.setColor('#fefefe')
.setTitle('Server Government (WIP)')
.setDescription('Manage your server the way YOU and THEY want it.')
helpmsg.edit(S_GOVERNMENT).then(govmsg => {
	govmsg.react('⬅️')
	const LEFTGOVFILTER = (reaction, user) => {
		return reaction.emoji.name === '⬅️' && user.id === message.author.id;
	};
	const leftgovcollector = govmsg.createReactionCollector(LEFTGOVFILTER, { max: 1 });
		leftgovcollector.on('collect', collected => {
			spunish()
			govmsg.delete().catch(err =>{if (err) throw err})
		})
})


}





// End of old Code



//cover() // Old Code Init
init() // New Init (more efficient)
	},
}