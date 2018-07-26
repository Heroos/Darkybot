const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")

let upchannel = client.channels.get("449695960269062145");
  
   if (message.author.id == 191272823170269184) {

upchannel.send("**Ma page Trello à été mis à jour !** https://trello.com/b/C5TPXYGc/update-darkybot \n<@&460085355207589930>")
  message.channel.send("Message bien envoyer :thumbsup::skin-tone-2:");
     
     }else
  message.channel.send("Non tu ne peux pas ! Owner seulement !")

}

module.exports.help = {
    name: "update"
}