const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message) => {

  if (!message.channel.nsfw) return message.channel.send(`Merci de faire cette commande dans un salon NSFW !!!`)
  
message.channel.send("Bientôt :eyes:")
  
}

module.exports.help = {
    name: "boobs"
}