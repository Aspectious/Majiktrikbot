module.exports = {
    name: 'webhook',
    execute(message, args) {
        const Discord = require('discord.js')
        messageable = args.slice(2,args.length).join(" ")
        const webhook = new Discord.WebhookClient(args[0], args[1])
        webhook.send(messageable).catch(error => {return message.channel.send('an error occured')})
    }
}