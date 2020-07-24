module.exports = {
	name: '8ball',
	description: '8ball trik',
	guildOnly: true,
	execute(message, args) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
                  var msg1 = Array(5); 
                  msg1[1] = "Yes";
                  msg1[2] = "No";
                  msg1[3] = "Maybe :wink:";
                  msg1[4] = "Without a doubt.";
                  msg1[5] = "I Honestly Have No Idea :neutral_face:"
                  msg1[6] = "Highly Unlikely" 
                  var x = getRandomInt(0, 20);
                  if (x < 5){ 
                   if (x < 3){
                      message.channel.send(msg1[1]);
                  }
                  else {
                         message.channel.send(msg1[3]);
                  }
                  }
                  else if (x<= 9) {
                      if (x >= 7){
                      message.channel.send(msg1[2]); }
                          else{
                             message.channel.send(msg1[4]);
                          }
                  } 
                  else if (x <= 12 ) { 
                      message.channel.send(msg1[5]);
                  }
                  else {
                      message.channel.send(msg1[6])
                  }
          
	},
};