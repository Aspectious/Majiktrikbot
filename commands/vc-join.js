module.exports = {
	name: 'vc-join',
	description: 'JOINDAVC',
	execute(message, args) {
        try {
        message.member.voice.channel.join()
        } catch {
        message.reply("Cannot join your VC!")
        }
	},
};