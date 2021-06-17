const Discord = require("discord.js");

module.exports = {
	name: '8ball',
	description: '8ball trik',
	guildOnly: true,
	execute(message, args) {
        const Discord = require('discord.js')
        const embeds = new Discord.MessageEmbed()
        .setTitle('8-Ball Results')
        .setColor('#fefefe')
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
                  var msg1 = Array(5); 
                  msg1[1] = "Yes";
                  msg1[2] = "No";
                  msg1[3] = "Maybe";
                  msg1[4] = "Without a doubt.";
                  msg1[5] = "I don't know..."
                  msg1[6] = "Highly Unlikely" 
                  var x = getRandomInt(0, 20);
                  if (x < 5){ 
                   if (x < 3){
                      message.channel.send(embeds.setDescription(msg1[1]));
                  }
                  else {
                         message.channel.send(embeds.setDescription(msg1[3]));
                  }
                  }
                  else if (x<= 9) {
                      if (x >= 7){
                      message.channel.send(embeds.setDescription(msg1[2])); }
                          else{
                             message.channel.send(embeds.setDescription(msg1[4]));
                          }
                  } 
                  else if (x <= 12 ) { 
                      message.channel.send(embeds.setDescription(msg1[5]));
                  }
                  else {
                      message.channel.send(embeds.setDescription(msg1[6]))
                  }
          
	},
};
