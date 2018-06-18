const Discord = require("discord.js");
const meme = require('memejs');

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")

  
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("RANDOM")
  .setImage(data.url[0])
  message.channel.send({embed});
  })
};


module.exports.help = {
    name: "rmemes"
}