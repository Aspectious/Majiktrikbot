module.exports = {
	name: 'magicmail',
	description: 'sends a Letter! ;)',
	guildOnly: true,
	execute(message, args) {
            messageable = args.splice(1,args.length).join(" ")
            const reciever = message.mentions.members.first();
            reciever.send("**You've Got Mail from **The Majik Trik Bot#0856**! Heres Your Message: **" + messageable);
    }
}