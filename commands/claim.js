module.exports = {
	name: 'claim',
	description: 'claim device',
	guildOnly: true,
	execute(message, args) {
	 message.channel.bulkDelete(1)
	 message.channel.send('**THIS CONTENT HAS BEEN CLAIMED BY <@646441583176056842>**')
	
	},
};