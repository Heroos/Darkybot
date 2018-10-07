const Discord = require("discord.js");
let talkedRecently = [];

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

message.channel.send("**Envie de suivre Darky sur un réseau social ? Alors les voici :**\n\n  **=>** <:TwitterIcon:498494239236423680> **Twitter:**      <http://bit.ly/2Ry0g9h> \n  **=>** <:YouTubeIcon:498494348711821342> **Youtube:**    <http://bit.ly/2PjIbKX> \n  **=>** <:TwitchIcon:498493952601882644> **Twitch:**        <http://bit.ly/2QztK5E> \n  **=>** <:DiscordIcon:498493910382018580> **Discord:**      <http://bit.ly/2Ntbgl2>")




talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "social"
}
