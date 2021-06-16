// Discord imports
const Discord = require('discord.js');

// Node Imports
const fs = require('fs');
const readline = require("readline");
const colors = require('colors');

// Internal Imports
rep = require('./lib/data/rep.json')
const { BOT_TOKEN } = require('../tokens.json');
const { version, botStatus, displayVersion } = require("./config.json")
const errorreport = require("./classes/errorreport");
const events = require("./events/events")

// Class
class Majiktrikbot {

constructor() {

// Var Declaration
var devmode;
var devmode = false;
this.majiktrikbot = {
	commandsProcessed: 0,
	errors: 0,
}
// Create Logger

fs.writeFile('./lib/data/latest.log', "///START OF LOG FILE ///", (err) => {
	if (err) throw err
})
fs.appendFile('./lib/data/latest.log', "///START OF LOG FILE ///", (err) => {
	if (err) throw err
})

function saveLog(msg) {
	var msgsave = "\n" + msg
	fs.appendFile('./lib/data/latest.log', msgsave, {encoding: "latin1", mode: 0o666, flag: "a"}, (err) => {
		if (err) throw err
	})
	}

// Console Stuff
console.clear();
console.log(`${displayVersion} ${version}, Refreshing Files and (re)Booting`)
saveLog(`${displayVersion} ${version}, Refreshing Files and (re)Booting`)

// Init Stage
const workcooldown = new Set()
const cprfxs = require('./lib/data/guilddata.json')
const client = new Discord.Client()
client.commands = new Discord.Collection();
const crimecooldown = new Set()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
let SessionErrorPreventorCount = 0;
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);

}
function updateStatus() {
	client.user.setPresence({ activity: { name: `${botStatus}`}, status: "dnd"})
}

new events(client)

client.on('shardDisconnect', (event, id) =>{
	console.log(colors.red('[Alert] ') + `Shard ${id} Websocket Connection Disconected and Will no longer Reconnect with Event ${JSON.stringify(event)}.`)
	saveLog(`[Alert] Shard ${id} Websocket Connection Disconected and Will no longer Reconnect with Event ${JSON.stringify(event)}.`)
})
client.on('warn', (info) => {
	console.log(color.yellow('[Warning] ' + info))
	saveLog(`[Warning] ${info}`)
})
client.on('debug', (info) => {
	if (info.toLowerCase().includes('heartbeat')) return;
		console.log(colors.yellow('[' + new Date() + '] [Debug] ') + info)
		saveLog(`[` + new Date() + `] [Debug] ${info}`)
})

client.on('guildDelete', (guild) => {
	console.log(colors.red('[Alert] ') + `Bot Kicked or Guild deleted in guild "${guild}"(${guild.id}). Client/Shard's Guild count is now ${client.guilds.cache.size}.`)
	saveLog(`[Alert] Bot Kicked or Guild deleted in guild "${guild}"(${guild.id}). Client/Shard's Guild count is now ${client.guilds.cache.size}.`)
})
client.on('guildCreate', (guild) => {	
	console.log(colors.red('[Alert] ') + `Majiktrikbot Joined Guild "${guild}"(${guild.id}). Client/Shard's Guild Count is now ${client.guilds.cache.size}`)
	saveLog(`[Alert] Majiktrikbot Joined Guild "${guild}"(${guild.id}). Client/Shard's Guild Count is now ${client.guilds.cache.size}`)
})


// Old code don't mind me

//function cmdprompt() {
//	const cmd = readline.createInterface({
//		input: process.stdin,
//		output: process.stdout
//	});
//	cmd.question('\n>', function(prompt) {
//		console.log('understood.')
//		cmd.close();
//		cmdprompt()
//		})
//}


client.once('ready', () => {
	updateStatus()
		console.log(colors.gray(`All Systems active at ${new Date}`))
		saveLog(`All Systems active at ${new Date}`)
		console.log(colors.bold('All Systems active, Marking as READY'))
		saveLog(`All Systems active, Marking as READY`)
});



function getServerCache(id) {
	return client.guilds.cache.get(id)
}
client.on('shardDisconnect', (event, id) => {
	console.log(colors.red('[ EMERGENCY ]') + ` Shard ${id} Has Disconected from Discord and will no longer attempt to reconnect.`)
	saveLog(`[ EMERGENCY ] Shard ${id} Has Disconected from Discord and will no longer attempt to reconnect.`)
	const WINDOWSloghook = new Discord.WebhookClient('735906374894223460','HsQALw2hCA-oB9_9d6xgsvKvWFioh-oYRPzb5-Lq5Sa6NPUVceKSL0LfOBITmcKj8TLq')
const emergencyebed = new Discord.MessageEmbed()
.setColor('#ff0000')
.setTitle('This is Majiktrikbot here, we have an Emergency shutdown. Repeat, Emergency Shutdown')
.setDescription(`Shard ${id} Has Disconected from Discord and will no longer attempt to reconnect.`)
WINDOWSloghook.send(emergencyebed)
	console.log('Cutting Connection... Done.')
	console.log('Stopping Listener From Listening... Done.')
	console.log('Unloading Files... Done.')
	console.log('Logging Out... Done.')
	console.log('Stopping Client... Done.')
	console.log(`Destroying Maager... Done.`)
	console.log('Have a Nice Day!');
	process.exit(0)
})


process.on("exit", (exitCode) => {
console.error(colors.bgBlue(colors.white(colors.bold(colors.underline((
	"                   IAN STUDIOS MAJIKTRIKBOT                        "
 + "\n                                                                   "
 + "\n     Oh dear. Something has gone Really, Really, REALLY Wrong.     "
 + "\n         If you are seeing this the process is exiting.            "
 + "\n                                                                   "
 + "\n  The discord client has been stopped. Please restart the client.  "
 + "\n                                                                   "
 + "\n                       Have a Nice day!                            "))))))
console.error(`Process ended with exit code: ${exitCode}             `)
})

//Anti-Dank memer
//Message Handeller. Big. CHunky. Lollable.
client.on('message', message => {
	if(message.author.id === client.user.id) return;
	if (message.bot) return
	if ((!message.guild) && (!message.content == ">login")) {
		console.log(`DM: ${message.author.username}[${message.author.id}] > ${message}`) 
	}
	if (message.content == ">login") {
		client.commands.get("login").execute(message, message.content.slice("1").split(/ +/));
	}
	try {
	var prefix = cprfxs[message.guild.id].prefix
	} catch (error) {
	new errorreport(error)
	var prefix = '>'
	}
	if (message.content.startsWith('>help') || message.content.startsWith('>prefix')) {
	var prefix = '>'
	}
	var prefix = ">>" // TEMP FOR DEBUGGING REMOVE
	updateStatus()
	if (message.channel.id === '737148941652459572') {
		var ai = require('./ai')
		ai.start(message)
	}
	if(message.author.id === client.user.id) return;
	//done done
		//Cooldowns. lol xd
		if (message.content.toLowerCase().startsWith('>work')) {
			if (workcooldown.has(`${message.author.id}`)) {
			const nono = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setTitle('⌛ Ah ah ah!')
			.setDescription('Not so fast. We have cooldowns, you know. You have 2 Minutes left from when you last used that command.')
			message.channel.send(nono)
			return
			} else {
			workcooldown.add(message.author.id)
			setTimeout(() =>{workcooldown.delete(message.author.id)}, 120000)
			}
		}
		if ((message.content.toLowerCase().startsWith('>crime')) || (message.content.toLowerCase().startsWith('>steal'))) {
			if (crimecooldown.has(`${message.author.id}`)) {
			const nono = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setTitle('⌛ Ah ah ah!')
			.setDescription('Not so fast. We have cooldowns, you know. You have 30 Minutes left from when you last used >crime.')
			message.channel.send(nono)
			return
			} else {
			crimecooldown.add(message.author.id)
			setTimeout(() =>{crimecooldown.delete(message.author.id)}, 1800000)
			}
		}
		//done done
	if (message.content.startsWith('>write')) {
		var newfilecontents = JSON.stringify(args, null, 2)
		fs.writeFileSync('./write.json', newfilecontents)
		message.channel.send('done done')
		return;
	}
	if (message.content.startsWith('>read')) {
		var filecontents = fs.readFileSync('./write.json')
		message.channel.send(JSON.parse(filecontents))
		return;
	}
	//if (message.content.startsWith('> ')) {                 // Old code, Don't mind me.
	//	return
	//	console.log(`Saved 1 Error Mistake`)
	//	SessionErrorPreventorCount++;
	//	console.log(`Session Error Fixer now at ${SessionErrorPreventorCount}`)
	//	console.log("")
	//	console.log(`From "${message.author.username}", With an id of "${message.author.id}" In Guild "${message.guild.name}", With id of "${message.guild.id}" With Message "${message.content}", At ${new Date()}`)
	//	console.log("")
	//}
	if (!message.content.startsWith(prefix) || message.author.bot) return;
try {
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	try {
	if (client.commands.get(command).dev == true) return message.channel.send("Sorry, but this command is in ALPHA mode. You cannot access this command right now.")
	} catch {
	}
	client.commands.get(command).execute(message, args);
		//Command Processed Counter
		this.majiktrikbot.commandsProcessed = this.majiktrikbot.commandsProcessed + 1;
		//fin
} catch (error) {
	if (error instanceof TypeError) {
		if (error.message === `Cannot read property 'execute' of undefined`) {
			return;
		}
	}
	var report = new errorreport(error)
	console.log(colors.red(report.log));
	message.reply("Something went wrong. Please check the error reporter or console for more details. Thank you.")
}
}); 
process.title = `Majiktrikbot ${version}`
client.login("NjQ2NDQxNTgzMTc2MDU2ODQy.XdRLow.W_10q-iNyb0xIREyf8trA08by34")
}

} // Class End

// Creates Instance
new Majiktrikbot()

module.exports = Majiktrikbot