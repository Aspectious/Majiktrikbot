const { GuildMember } = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'bans user',
    execute(message, args) {
       if (args.length < 1){

       // Only running >ban message. btw doing // means dont execute this, in case u dont know henry.
       message.channel.send('Buddy, you have to at LEAST specify the person you would like to ban.')
       return;
       }
       if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
           message.channel.send('The Dope Nope Rope Says Nope to ur dumb Schennangans. NO PERMISSION.')
           return;
       }
       const tobanned = message.mentions.members.first();
       if (!message.guild.member(tobanned).bannable) return message.channel.send('The Nope Dope Slop Rope Pope says that this Person Cannot Be Banned!');
       if (args.length < 2) {
           message.channel.send('Are you sure you want to Ban this person without a reason?')
           const noreasonyesfilter = m => m.content.includes('yes');
           const noreasonyescollector = message.channel.createMessageCollector(noreasonyesfilter, { time: 15000 });
           noreasonyescollector.on('collect', m =>{
            noreasonyescollector.stop();
            message.channel.bulkDelete(2);
            tobanned.ban();
            console.log('Guild ' + message.guild.name + ' with id of ' + message.guild.id + ' banned user with id of ' + tobanned.id + ' by ' + message.author.username + ' with id of ' + message.author.id + ' for: no reason given.')
            message.channel.send('**Banned User **<@' + tobanned.id + '>**. for:** No Reason Given.')
           });
       } else {
           const reason = args.splice(1,args.length).join(" ")
           tobanned.ban({reason: reason});
           console.log('Guild ' + message.guild.name + ' with id of ' + message.guild.id + ' banned user with id of ' + tobanned.id + ' by ' + message.author.username + ' with id of ' + message.author.id + ' for: ' + reason)
           message.channel.send('**Banned User **<@' + tobanned.id + '>**. for:** ' + reason)

       }
    }
}