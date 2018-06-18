const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")


  
 randomPuppy()
.then(url => {

var dogembed = new Discord.RichEmbed()
   .setColor("#ffbb68")
   .setTitle("Ouaf ! :dog:")
   .setImage(url);

  message.channel.send(dogembed)
})
}




module.exports.help = {
    name: "doggo"
}