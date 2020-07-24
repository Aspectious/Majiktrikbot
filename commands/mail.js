module.exports = {
	name: 'mail',
	description: 'sends a Letter! ;)',
	guildOnly: true,
	execute(message, args) {
            messageable = args.splice(1,args.length).join(" ")
            const reciever = message.mentions.members.first();
            reciever.send("**You've Got Mail from **" + message.author + "**! Heres Your Message: **" + messageable);
            message.channel.send(`✅ Mail Sent to ${reciever}`)
            message.delete()
    }
}