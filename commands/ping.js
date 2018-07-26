const Discord = require("discord.js");
const client = new Discord.Client()  
      client.commands = new Discord.Collection();
const tu = require("../time-util.js")
let talkedRecently = [];



module.exports.run = async (client, message, args) => {
  let uptime = tu.formatTimestamp(client.uptime, true) //cc'est pas format ? Parceque tu as mis fotmat | faute de frappe | c'est des choses qui arrive x3
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }     

message.channel.send(`**Pong !** :ping_pong:\n
Mon ping est de **${client.ping}** ms.
Je suis debout depuis: **${uptime}**.`);

  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);

}

module.exports.help = {
    name: "ping"
}