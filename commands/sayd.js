const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")

var botmessage = args.join(" ");
if (!botmessage) return message.channel.send("Envoye un truc stp")
message.delete();
message.channel.send(botmessage);
}

module.exports.help = {
    name: "sayd"
}