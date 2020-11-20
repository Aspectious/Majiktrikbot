module.exports = {
    name: 'reactionroles',
    execute(message, args) {
    const Discord = require('discord.js')

    if (!(args[0] === "add") && !(args[0] === "remove") && !(args[0] === "edit")) {
    const FIRSTARGNOTFOUND = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('❌ Incorrect Synatx')
    .setDescription('You did not use the Correct Syntax!')
    .addField(`Usage:`, `>reactionroles {add | remove | edit} [name] [channel] [message] [reaction]`)
    return message.channel.send(FIRSTARGNOTFOUND)
    }
    message.channel.send('ok')
}
}