module.exports = {
	name: 'vc-leave',
	description: 'ABOTTDAVC',
	execute(message, args) {
        try {
        message.member.voice.channel.leave()
        } catch {
        message.reply("Cannot leave your VC!")
        }
	},
};