
module.exports = {
    name: 'unban',
    description: 'xD',
    execute(message, args){
        const Discord = require(`discord.js`);
let User = args[0];
let Reason = args.slice(1).join(` `);
if (!User) return message.reply(`Who are we unbanning?`);
if (!Reason) Reason = `Unbanned by ${message.author.tag}`

message.guild.fetchBans()
.then(bans => {
if (bans.some(u => User.includes(u.username))) {
let user = bans.find(user => user.username === User);

message.guild.unban(user.id, Reason);
}
else if (bans.some(u => User.includes(u.id))) {

message.guild.unban(User, Reason);
}
else {
return message.reply(`This person is not banned`);
}
});
}
}