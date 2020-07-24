module.exports ={
    name: 'win7',
    execute(message, args) {
        const Discord = require('discord.js')
        const win7 = new Discord.WebhookClient('733735496911552522', '03T0SlT0LP-ow17gRwtJpUk4nv84puO6Zn0_Ju7EqsTo5lZ-p4jgGnlWlisKa-9EeHPt')
        win7.send('test')
    }
}