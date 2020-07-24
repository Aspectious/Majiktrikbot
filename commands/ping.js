module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send("Pinging <@646441583176056842>...")
		.then((msg) => { // Resolve promise
			msg.edit("Pong! Ping: " + (Date.now() - msg.createdTimestamp))
		})
	},
};