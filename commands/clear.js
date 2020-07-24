module.exports = {
	name: 'clear',
	description: 'clears a heck of a whole lotta messages.',
	execute(message, args) {
		if (args.length < 1) {
			message.channel.send('You must specify an amount of messages to clear, <@' + message.author.id + '>.')
			return;
		}
	return message.channel.bulkDelete(args[0])
	},
};

//all bug fixed xD