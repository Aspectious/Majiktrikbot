const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, ver } = require('./config.json');
const { info } = require('console'); 

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
let SessionErrorPreventorCount = 0;
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);

}
function Startup(Status) {
	console.clear();
	console.log(`MajikTrikBot${ver}, Refreshing Files and (re)Booting`)
	setTimeout(() => {  console.log(""); }, 999);
	setTimeout(() => {  console.log("Aquiring Data... Done."); }, 1000);
	setTimeout(() => {  console.log("Establishing Connection To Client... Done."); }, 1100);
	setTimeout(() => {  console.log("Reading fs..."); }, 1200);
	setTimeout(() => {  console.log("Done! 584 ms"); }, 1300);
	setTimeout(() => {  console.log("Producing Neato Console Reboot.... Done."); }, 1400);
	setTimeout(() => {  console.log(""); }, 1501);
	setTimeout(() => {  console.log("- STATISTICS -"); }, 1502);
	setTimeout(() => {  console.log(`Now Online In ${client.guilds.cache.size} Guilds`); }, 2500);
	setTimeout(() => {  console.log(""); }, 2501);
	setTimeout(() => { console.log(`Setting Up listeners... Done.`); }, 3000);
	setTimeout(() => { console.log(`Logging In... Done!`); }, 3100);
	setTimeout(() => { console.log(`Checking if Listener is Listining... Listiner OK!`); }, 3200);
	setTimeout(() => { console.log(`Running Quick Debug... 173 Errors Detected!`); }, 3300);
	setTimeout(() => { console.log(`Checking Port Allignment... Done!`); }, 3400);
	setTimeout(() => { console.log(`Checking Connection... Connection OK!`); }, 3500);
	setTimeout(() => { console.log(`Checking Version and Updates... Running Version ${ver}. No New Updates.`); }, 3501);
	setTimeout(() => { console.log(`Starting up Debug Error logger... Done.`); }, 4000);
	setTimeout(() => { console.log(`Logged In and Logger is Ready!`); }, 5000);
	client.user.setStatus('Online')
	client.user.setActivity(Status);
}
client.once('ready', () => {
Startup(`Now Serving Server ${client.guilds.cache.size}`);
});

client.on('message', message => {
	if (message.content.startsWith('> ')) {
		console.log(`Saved 1 Error Mistake`)
		SessionErrorPreventorCount++;
		console.log(`Session Error Fixer now at ${SessionErrorPreventorCount}`)
		console.log("")
		console.log(`From "${message.author.username}", With an id of "${message.author.id}" In Guild "${message.guild.name}", With id of "${message.guild.id}" With Message "${message.content}", At ${new Date()}`)
		console.log("")
		return true;
	}

	if (message.content === '42') {
		message.channel.send('Congratulations! you have discovered the meaning of life!');
	}
	if (message.content === 'shut up') {
		message.channel.send('Yeah, Shut up!');
	}
	if (message.content === '>donotdothis.exe') {
		message.channel.send('>donotdothis.exe');
	}	
	if (message.content === '>reload') {
		message.channel.send('reloading...');
		
	}
	if (message.content === 'nice hat') {
		message.channel.send('Thanks. You also have a nice hat')
	}
	if (message.content === '>info') {
        const infographic = new Discord.MessageEmbed()
        .setTitle('Information')
        .setDescription('Bot and Server. guild')
		.addField('BOT GUILDS SIZE', client.guilds.cache.size, true)
		.addField('MEMBERS IN CURRENT GUILD', message.guild.members.cache.size, true)
		message.channel.send(infographic);
		return;
	}
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (command.guildOnly && message.channel.type !== 'text') {
	return message.reply('I can\'t execute that command inside DMs!');
}
try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	if (error instanceof TypeError) {
		if (error.message === `Cannot read property 'execute' of undefined`) {
			message.reply('Unknown Command. Do >help For help.')
			console.log('UH OH! A UNDEFINED EXECUTE ERROR JOINS THE BATTLE! ' + error.message);
			return;
		}
		message.reply(`An unknown Error Occured.`);
	}
	console.log(error.message);
	console.log("")
	console.log(`From "${message.author.username}", With an id of "${message.author.id}" In Guild "${message.guild.name}", With id of "${message.guild.id}" With Message "${message.content}", At ${new Date()}`)
	console.log("")
	message.reply(`An unknown Error Occured.`);
}
});
client.login(token);
