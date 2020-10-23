module.exports = {
    name: 'download',
    execute(message, args) {
        const Discord = require('discord.js')
        const progressbar = new Array;
        progressbar[1] = '[🟩⬛⬛⬛⬛⬛⬛⬛⬛⬛]'
        progressbar[2] = '[🟩🟩⬛⬛⬛⬛⬛⬛⬛⬛]'
        progressbar[3] = '[🟩🟩🟩⬛⬛⬛⬛⬛⬛⬛]'
        progressbar[4] = '[🟩🟩🟩🟩⬛⬛⬛⬛⬛⬛]'
        progressbar[5] = '[🟩🟩🟩🟩🟩⬛⬛⬛⬛⬛]'
        progressbar[6] = '[🟩🟩🟩🟩🟩🟩⬛⬛⬛⬛]'
        progressbar[7] = '[🟩🟩🟩🟩🟩🟩🟩⬛⬛⬛]'
        progressbar[8] = '[🟩🟩🟩🟩🟩🟩🟩🟩⬛⬛]'
        progressbar[9] = '[🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛]'
        progressbar[10] = '[🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩]'
        if (args[0] === 'filelist') {
            const Filelist = new Discord.MessageEmbed()
            .setColor('#fefefe')
            .setTitle('Available Files')
            .addField(`Internet.zip`, `23,993,564,998 MB`, true)
            .addField(`./Majiktrikbot`, `53.8 MB`, true)
            return message.channel.send(Filelist)
        } else if (args[0] === 'internet.zip') {
            const rusure = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Are you Sure?')
            .setDescription('Files from the internet can be dangerous, especially .ZIP Files. Are you sure you want to download internet.zip?')
            message.channel.send(rusure).then(msg => {
            msg.react('❌')
            msg.react('✅')
            const nofilter = (reaction, user) => {
                return reaction.emoji.name === '❌' && user.id === message.author.id;
            };
            const nocollector = msg.createReactionCollector(nofilter, { max: 1 });
            nocollector.on('collect', collected => {
                msg.delete().catch(err =>{if (err) throw err})
                const cancelled = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Are you Sure?')
                .setDescription('❌ Cancelled.')
                message.channel.send(cancelled)
            })
            const yesfilter = (reaction, user) => {
                return reaction.emoji.name === '✅' && user.id === message.author.id;
            };
            const yescollector = msg.createReactionCollector(yesfilter, { max: 1 });
            yescollector.on('collect', collected => {
                msg.delete().catch(err =>{if (err) throw err})
                const preparing = new Discord.MessageEmbed()
                .setColor('#fefefe')
                .setTitle('Downloading internet.zip...')
                .setDescription('Preparing...')
                message.channel.send(preparing).then(dmsg => {
                setTimeout(() =>{
                    const discovering = new Discord.MessageEmbed()
                    .setColor('#fefefe')
                    .setTitle('Downloading internet.zip...')
                    .setDescription('Discovering... (Est 60s)')
                    dmsg.edit(discovering)
                    setTimeout(() => {
                        const discovered = new Discord.MessageEmbed(discovering)
                        .setDescription('Discovered 23,993,564,998 MB Worth of files.')
                        dmsg.edit(discovered)
                        setTimeout(() => {
                        const downloading = new Discord.MessageEmbed(discovering)
                        .setDescription(`Downloading... 0% [⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛]`)
                        dmsg.edit(downloading)
                            setTimeout(() => {
                                const errorend = new Discord.MessageEmbed()
                                .setColor('#ff0000')
                                .setTitle('Fatal Error')
                                .setDescription('Could Not Download file "INTERNET.ZIP" From the Internet. Cause: Not enough Space on Disc C:/(2TB) to hold file "INTERNET.ZIP"(23993.5 TB)')
                                dmsg.edit(errorend)
                            }, 5000)
                        }, 5000)
                    }, 60000)
                    }, 15000)
                })
            })
        });
        } else {
            return message.channel.send('Unknown File. do >download filelist for a complete list of availible files.')
        }
    }
}