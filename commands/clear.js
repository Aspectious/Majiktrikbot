module.exports = {
	name: 'clear',
	description: 'clears a heck of a whole lotta messages.',
	execute(message, args) {
		if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) {
			message.channel.send(`I'm Sorry, ${message.author.username}. I'm afraid I can't do that right now for you.`)
			return;
		}
		if (args.length === 2) {
			if (args[1] === '-s') {
				message.channel.bulkDelete(args[0]).catch(error =>{
					return message.reply('Something Went Wrong...');
				})
				console.log(`User ${message.author.username}[${message.author.id}] SILENTLY Cleared ${args[0]} Messages in Channel ${message.channel.name}[${message.channel.id}] in Guild ${message.guild.name}[${message.guild.if}]`)
				return;
			}
			return;
		}
		if (args.length < 1) {
			message.channel.send('You must specify an amount of messages to clear, <@' + message.author.id + '>.')
			return;
		}
		message.channel.bulkDelete(args[0]).catch(error =>{
			return message.reply('Something Went Wrong...')
		})
		message.channel.send(`Cleared ${args[0]} Messages in Channel #${message.channel.name}`)
		console.log(`User ${message.author.username}[${message.author.id}] Cleared ${args[0]} Messages in Channel ${message.channel.name}[${message.channel.id}] in Guild ${message.guild.name}[${message.guild.if}]`)
	},
};

//all bug fixed xD