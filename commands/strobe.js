module.exports = {
    name: 'strobe',
    execute(message, args){
    const Discord = require('discord.js')
    const strobemk1 = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setTitle('Strobe Light!')
    message.channel.send(strobemk1).then(msg => {
        msg.edit(strobemk1.setColor(`#ff0000`))
        msg.edit(strobemk1.setColor(`#ffb000`))
        msg.edit(strobemk1.setColor(`#ffff00`))
        msg.edit(strobemk1.setColor(`#boff00`))
        msg.edit(strobemk1.setColor(`#00ff00`))
        msg.edit(strobemk1.setColor(`#00ffb0`))
        msg.edit(strobemk1.setColor(`#00ffff`))
        msg.edit(strobemk1.setColor(`#00b0ff`))
        msg.edit(strobemk1.setColor(`#0000ff`))
        msg.edit(strobemk1.setColor(`#b000ff`))
        msg.edit(strobemk1.setColor(`#ff00ff`))
        msg.edit(strobemk1.setColor(`#ff00b0`))
    })
    }
}