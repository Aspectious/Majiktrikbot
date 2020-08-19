const { GuildMember } = require("discord.js");
const { setUncaughtExceptionCaptureCallback } = require("process");

module.exports = {
    name: 'ban',
    description: 'bans user',
    execute(message, args) {
        const colors = require('colors')
        const DIscord = require('discord.js')
        const errorb = new DIscord.MessageEmbed()
        .setTitle('❌ Unable to Ban Member')
        .setColor('#FF0000')
       if (args.length < 1){

       // Only running >ban message. btw doing // means dont execute this, in case u dont know.
       message.channel.send('Buddy, you have to at LEAST specify the person you would like to ban.')
       return;
       }
       if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
           message.channel.send('The Dope Nope Rope Says Nope to ur dumb Schennangans. NO PERMISSION.')
           return;
       }
       const tobanned = message.mentions.members.first();
       if (tobanned.id === message.author.id) {
        message.channel.send('Ah ha. haha. ha. haahah. ha. ah. ha. ha. haahhahaha. ha.')
        message.channel.send('That Makes me laugh. No, You Cannot Ban yourself.')
        return
       }
       if (tobanned.id === message.client.user.id){
        message.channel.send(`You should have been in the Movie **Inception**, <@${message.author.id}>. OR Avengers Endgame. "I used the Robot to Destroy the Robot". Ha. A staff member or another bot can ban me. ha.`)
           return
       }
       if (!message.guild.member(tobanned).bannable) return message.channel.send('The Nope Dope Slop Rope Pope says that this Person Cannot Be Banned!');
       if (args.length < 2) {
           message.channel.send('Are you sure you want to Ban this person without a reason?')
           const noreasonyesfilter = m => m.content.includes('yes');
           const noreasonyescollector = message.channel.createMessageCollector(noreasonyesfilter, { time: 15000 });
           noreasonyescollector.on('collect', m =>{
            noreasonyescollector.stop();
            message.channel.bulkDelete(2);
            tobanned.ban();
            const succssb = new DIscord.MessageEmbed()
            .setTitle('✅' + ' **Banned User **<@' + tobanned.id + '>**. for:** No Reason Given.')
            .setColor('#00FF00')
            message.channel.send(succssb)
           });
       } else {
           const reason = args.splice(1,args.length).join(" ")
           tobanned.ban({reason: reason});
           const succssb = new DIscord.MessageEmbed()
           .setTitle('✅' + ' **Banned User **<@' + tobanned.id + '>**. for:** ' + reason)
           .setColor('#00FF00')
           message.channel.send(succssb)

       }
    }
}