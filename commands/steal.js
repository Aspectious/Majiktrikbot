module.exports = {
    name: 'steal',
    execute(message, args) {
        const Discord = require('discord.js')
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
            } else {
                const Goodembed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Success!')
                if (goodresponse == 1) Goodembed.setDescription(`You sneakily ran away with $${amount}.`)
                if (goodresponse == 2) Goodembed.setDescription(`You break into someone's car. Instead of stealing the car, you steal $${amount}.`)
                if (goodresponse == 3) Goodembed.setDescription(`You beat $${amount} out of Grandma before she beats $${amount} out of you.`)
                if (goodresponse == 4) Goodembed.setDescription(`You stole a $${amount} computer from Bestest Buyers.`)
                if (goodresponse == 5) Goodembed.setDescription(`You dig up $${amount} from someone's couch at a party. It's yours now.`)
                message.channel.send(Goodembed)
            }
    }
    
}