const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  var pingembed = new Discord.RichEmbed()
     
     .setColor("RANDOM")
     .addField("Pong ! :ping_pong:", "Mon ping est de " + client.ping + " ms")
     .setTimestamp();

message.channel.send(pingembed);

}
module.exports.help = {
    name: "ping"
}