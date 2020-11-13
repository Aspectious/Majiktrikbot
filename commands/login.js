module.exports = {
    name: 'login',
    description: 'Login to a Gateway of Magic!',
    execute(message, args) {
        const { latest_log_header, latest_log, ver, dev_id_list } = require('../../majikconfig.json');
        const Discord = require('discord.js');
        if (message.guild) return message.channel.send(`Please Peform this Command in a Dm, <@${message.author.id}>`)

        if (!dev_id_list.includes(message.author.id)) {
        const accessdenied = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('❌ Access Denied')
        .setDescription('Only Verified and Saved Majiktrikbot Developers may use this command!')
        console.log(`${message.author.username}[${message.author.id}] Attempted to access Command Interpreter. Attempt Failed.`)
        return message.channel.send(accessdenied)
        } else {
        const sessionstartembed = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(`Welcome, <@${message.author.id}>!`)
        .setDescription('Your Session with our Command Interpreter has now begun. You may stop the Interpreter at any time with STOP. Your session automatically ends in 30m.')
        console.log(`${message.author.username}[${message.author.id}] Successfully Began Command Interpreter Session.`)
        message.channel.send(sessionstartembed)
        }

        //Command Interpreter Code.

        //Message Collector Initalization.
        const cmdlist = ['help', 'stop', 'close', 'end', 'action']
        const collector = message.channel.createMessageCollector(msg => cmdlist.includes(msg.content), { time: 1800000 })

        collector.on('collect', msg => {
        if(msg.content === "help") {
            message.channel.send(`IAN Majiktrikbot Branch Terminal Command Interpreter [Version ${ver}]`)
            message.channel.send(`\nFor detailed desctiptions and uses of each command, do HELP (command)`)
            return
        }
        if((msg.content === "stop") || (msg.content === "end") || (msg.content === "close")) {
            const stopsesion = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Session Ended')
            .setDescription('Your Command Interpreter Session has ended due to MANUAL_EXIT.')
            collector.stop('MANUAL_END')
            return message.channel.send(stopsesion)
        }
        })

        collector.on('end', (collected, reason) => {
        if (reason === "time") {
        const sessionend = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Session Ended')
        .setDescription('Your Command Interpreter Session has ended due to TIME_OUT.')
        return message.channel.send(sessionend)
        }
        console.log(`${message.author.username}[${message.author.id}] Ended Command Interpreter Session with reason ${reason}. User Ordered ${collected.size} Commands to Interpreter.`)
        })





    return
    if ((message.author.id == dev1)||(message.author.id == dev2)) {
    message.channel.send(`Good Morning doctor <@` + message.author.id + `>, This is Majik. What would you like to do today? webhook client: ${message.client.ws.status}`);
    //First Collector Session, for u dum dums
    const updatefilter = m => m.content.includes('update');
    const updatecollector = message.channel.createMessageCollector(updatefilter, { time: 15000 });
    const debugfilter = m => m.content.includes('debug');
    const debugcollector = message.channel.createMessageCollector(debugfilter, { time: 15000 });
    const exitfilter = m => m.content.includes('stop');
    const exitcollector = message.channel.createMessageCollector(exitfilter, { time: 15000 });
    exitcollector.on('collect', m => {
        exitcollector.stop();
        message.channel.send('Goodbye doctor <@' + message.author.id + '>.');
        debugcollector.stop();
        console.log(`Developer ${message.author.username} Stopped Majiktrikbot. Stopping...`)
        console.clear();
        console.log('Cutting Connection... Done.')
        console.log('Stopping Listener From Listening... Done.')
        console.log('Unloading Files... Done.')
        console.log('Logging Out... Done.')
        console.log('Stopping Client... Done.')
        console.log('Have a Nice Day!');
        message.client.destroy();
        });
    updatecollector.on('collect', m =>{
        updatecollector.stop();
        message.channel.send('Ok doctor <@' + message.author.id + '>.');
        const updateannouncement = new Discord.MessageEmbed()
            .setColor("#0000ff")
            .setTitle(` < UPDATE > ${ver} - ${latest_log_header}`)
            .setAuthor('MajikTrikBot', 'https://cdn.discordapp.com/avatars/646441583176056842/3a225a4d8ea65147d1e7090555ba772d.png?size=256', 'https://discord.gg/Vqra7ZQ')
            .setDescription(latest_log);

        let specifiedchannel = message.guild.channels.get('687093306945044492')
        specifiedchannel.send(updateannouncement);
    });
    debugcollector.on('collect', m => {
    debugcollector.stop();
    message.channel.send('Ok doctor <@' + message.author.id + '>. What would you like to debug?');
    //Second Collector Session
    const debugpingfilter = m => m.content.includes('ping');
    const debugpingcollector = message.channel.createMessageCollector(debugpingfilter, { time: 15000 });
    debugpingcollector.on('collect', m => {
        debugpingcollector.stop();
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.send('Here are the debug results, doctor <@' + message.author.id + `>. My ping to Discord is currently at: ${ping}`);
    });
        });
    } else {
    message.channel.send(`I'm Sorry, But Only Verified IAN and Majiktrikbot Developers may use this Command, <@` + message.author.id + `>.`)
       }
    }
}