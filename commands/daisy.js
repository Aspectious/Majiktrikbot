const { MessageManager } = require("discord.js")

module.exports = {
    name: 'daisy',
    execute(message, args) {
        setTimeout(() => { message.channel.send('**Daisy Bell**') }, 1000);
        setTimeout(() => { message.channel.send('Majiktrikbot Easter Egg and/or test') }, 1500);
        setTimeout(() => { message.channel.send('Daisy, Daisy,') }, 5000);
        setTimeout(() => { message.channel.send('Give me your answers do.') }, 7500);
        setTimeout(() => { message.channel.send(`I'm Half Crazy`) }, 10000);
        setTimeout(() => { message.channel.send('for the Love of you!') }, 12000);
        setTimeout(() => { message.channel.send('It won\'t be a stylish marrige,') }, 15000);
        setTimeout(() => { message.channel.send('I Can\'t Afford a Carrage') }, 20000);
        setTimeout(() => { message.channel.send('But you\'ll look sweet apon the seat') }, 24000);
        setTimeout(() => { message.channel.send('of  a bycycle built for 2!') }, 27000);

    } 
}