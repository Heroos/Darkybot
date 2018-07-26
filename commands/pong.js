const Discord = require("discord.js");
const client = new Discord.Client()  
      client.commands = new Discord.Collection();
const tu = require("../time-util.js")
let talkedRecently = [];



module.exports.run = async (client, message, args) => {
  let uptime = tu.formatTimestamp(client.uptime, true)
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }     

message.channel.send(`**Pon...** wait ?!`);
  
  setTimeout(() => {
   message.channel.send("Euh... C'était ping que tu aurait du écrire, normalement...")}, 2000)
  setTimeout(() => {
   message.channel.send("Donc euhm... J'ai été pertubé ;-;")}, 5000)
  setTimeout(() => {
   message.channel.send("Je suppose que tu veux quand même les infos ? Donc les voilà:")}, 7000)
  setTimeout(() => {
   message.channel.send(`Mon ping est de **${client.ping}** ms.
Je suis debout depuis: **${uptime}**.`)}, 8000)
  setTimeout(() => {
   message.channel.send("Et ne refait plus jamais sa, s'il te plait :sob:")}, 10000)

  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);

}

module.exports.help = {
    name: "pong"
}