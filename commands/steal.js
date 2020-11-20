module.exports = {
    name: 'steal',
    execute(message, args) {
        const Discord = require('discord.js')
        const MoneyFile = require('../lib/data/money.json')
        const fs = require('fs')
        const authorbank = MoneyFile[message.author.id].bank
        const authoroldwallet = MoneyFile[message.author.id].wallet
        const oldtotal = MoneyFile[message.author.id].total
            const amount = Math.floor(Math.random() * 15000) + 1  
            const Chance = Math.floor(Math.random() * 2) + 1  
            const goodresponse = Math.floor(Math.random() * 5) + 1  
            const badresponse = Math.floor(Math.random() * 5) + 1  
            if (Chance == 1) {
                const Failembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Caught!')
                if (badresponse == 1) Failembed.setDescription(`Come on, Grandma! NEIN! She beats $${amount} out of you.`)
                if (badresponse == 2) Failembed.setDescription(`Why did you report yourself? Idiot. You were fined $${amount}.`)
                if (badresponse == 3) Failembed.setDescription(`The Tf2 spy came along and stole $${amount} of your earned money.`)
                if (badresponse == 4) Failembed.setDescription(`You stole someone's $${amount} purse with 300 people watching. Really?`)
                if (badresponse == 5) Failembed.setDescription(`God zapped $${amount} right out of your hand. That's a death omen if I've ever seen one.`)
                message.channel.send(Failembed)
                MoneyFile[message.author.id] = {
                    wallet: authoroldwallet - amount,
                    bank: authorbank,
                    total: authoroldwallet + authorbank - amount
                }
                fs.writeFile('./lib/data/money.json', JSON.stringify(MoneyFile, null, 4), function(err) {
                    if(err) throw err;
                })
                return
            } else {
                const Goodembed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Success!')
                if (goodresponse == 1) Goodembed.setDescription(`You sneakily ran away with $${amount}.`)
                if (goodresponse == 2) Goodembed.setDescription(`You break into someone's car. Instead of stealing the car, you steal $${amount}.`)
                if (goodresponse == 3) Goodembed.setDescription(`You beat $${amount} out of Grandma before she beats $${amount} out of you.`)
                if (goodresponse == 4) Goodembed.setDescription(`You "borrowed" $${amount} from a bunch of Economy Bots. They Don't know what hit them.`)
                if (goodresponse == 5) Goodembed.setDescription(`You dig up $${amount} from someone's couch at a party. It's yours now.`)
                if (goodresponse == 6) Goodembed.setDescription(`You managed to steal a giant gun that takes $${amount} to fire for Twelve seconds.`)
                message.channel.send(Goodembed)
                MoneyFile[message.author.id] = {
                    wallet: authoroldwallet + amount,
                    bank: authorbank,
                    total: authoroldwallet + authorbank + amount
                }
                fs.writeFile('./lib/data/money.json', JSON.stringify(MoneyFile, null, 4), function(err) {
                    if(err) throw err;
                })
                return
            }
    }
    
}