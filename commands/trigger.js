const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  

let messageArray = message.content.split(" ")
var url;
if (message.attachments.first()) url = message.attachments.first().url
else if (message.mentions.users.first()) url = message.mentions.users.first().avatarURL
else url = (args[0] ? args[0] : message.author.avatarURL)
await require("http").get('http://api.takohell.com/v1/generate/triggered?url=' + url)
let triggered = new Discord.Attachment('http://api.takohell.com/v1/generate/triggered?url=' + url, 'trigg.gif')
 message.channel.send(triggered)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));

  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "trigger",
    aliases: "triggered"
}