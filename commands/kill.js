module.exports = {
	name: 'kill',
	description: 'Kills person',
	execute(message, args) {
		const MEMB =  message.mentions.members.first()
		message.member.removeRoles(MEMB)
	},
};