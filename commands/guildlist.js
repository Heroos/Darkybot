const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")


if (message.author.id == 191272823170269184) {
   
  let guildslist= ""
client.guilds.forEach(g => guildslist =  guildslist + "-> " + g.name +": " +  g.members.size  + " membres  (" + g.id + ")" + "\n")
  message.channel.send(guildslist.substring(0, 992))
  message.channel.send(guildslist.substring(992, 2500))
  message.channel.send(guildslist.substring(2500, 4500))
                    
}else
  message.channel.send("Non tu ne peux pas ! Owner seulement !")
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
} 


module.exports.help = {
    name: "guildlist",
    aliases: "gl"
}