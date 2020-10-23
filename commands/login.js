module.exports = {
    name: 'login',
    description: 'Login to a Gateway of Magic!',
    execute(message, args) {
        const { ver } = require('../config.json');
        const { latest_log } = require('../config.json');
        const { latest_log_header } = require('../config.json');
        const dev1 = '637792429642088450'
        const Discord = require('discord.js');
    if ((message.author.id == dev1)||(message.author.id == dev2)) {
    message.channel.send(`Good Morning doctor <@` + message.author.id + `>, This is Majik. What would you like to do today?`);
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