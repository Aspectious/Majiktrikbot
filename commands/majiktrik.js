module.exports = {
	name: 'majiktrik',
	description: 'sows u majik trik',
	guildOnly: true,
	execute(message, args) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
                  var magictrik = Array(10); 
                  magictrik[1] = "We apologize for the inconvience, but we dont have any majik triks to show you. please try again."
                  magictrik[2] = "**Ha HA!** (he levitates the ground around you, rotates it around in a circle, then puts them back down again.) How Was That, my friend?"
                  magictrik[3] = "**POOFY SHMOOFY ALOOFT!** (he turns you into a bird. you fly around a little, then he turns you back into a human again)"
                  magictrik[4] = "no. I dont feel like it. ";
                  magictrik[5] = "(whirring) **I SAWED THIS ** Human** IN HALF!"
                  magictrik[6] = "**MWAHAHAHHA!** (He removes all your roles, then gives them back to you before you can complain.)" 
                  var x = getRandomInt(0, 20);
                  if (x < 5){ 
                   if (x < 3){
                      message.channel.send(magictrik[1]);
                  }
                  else {
                         message.channel.send(magictrik[3]);
                  }
                  }
                  else if (x<= 9) {
                      if (x >= 7){
                      message.channel.send(magictrik[2]); }
                          else{
                             message.channel.send(magictrik[4]);
                          }
                  } 
                  else if (x <= 12 ) { 
                      message.channel.send(magictrik[5]);
                  }
                  else {
                      message.channel.send(magictrik[6])
                  }
	},
};