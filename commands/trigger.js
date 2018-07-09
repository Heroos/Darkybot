const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  

let messageArray = message.content.split(" ")
var url;
if (message.attachments.first()) url = message.attachments.first().url
else if (message.mentions.users.first()) url = message.mentions.users.first().avatarURL
else url = (args[0] ? args[0] : message.author.avatarURL)
await require("http").get('http://api.takohell.com/v1/generate/triggered?url=' + url)
let triggered = new Discord.Attachment('http://api.takohell.com/v1/generate/triggered?url=' + url, 'trigg.gif')
 message.channel.send(triggered);

 }

module.exports.help = {
    name: "trigger",
    aliases: "triggered"
}