const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")


if (message.author.id == 191272823170269184) {
   
  let guildslist= ""
client.guilds.forEach(g => guildslist =  guildslist + "-> " + g.name +": " +  g.members.size  + " membres  (" + g.id + ")" + "\n")
message.channel.send(guildslist.substring(0, 992))
  message.channel.send(guildslist.substring(992, 2500))
                    
}else
  message.channel.send("Non tu ne peux pas ! Owner seulement !")
} 


module.exports.help = {
    name: "guildlist"
}