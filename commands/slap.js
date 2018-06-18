const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")


let toSlap = message.mentions.users.first() || client.users.get(args[0]);
 if (!toSlap) return message.channel.send("**NE FRAPPE PAS L'AIR !! ELLE NE T'A RIEN FAIT !** :angry: ");
 if (toSlap.id == message.author.id) return message.reply("le masochisme est la recherche du plaisir dans la douleur. Cette douleur peut être psychologique (humiliation) ou physique. Le terme Masochisme dérive du nom de l'écrivain allemand Leopold von Sacher-Masoch. *Source: Wikipedia*");
 if (toSlap.id == client.user.id) return message.reply("pourquoi tu veux me taper ? ;-;");
var replies = ["https://media1.tenor.com/images/919b344fbd2afd7dd248174856fb04be/tenor.gif?itemid=5737764",  "https://media1.tenor.com/images/39217af96b95eb7d4e2df39b53b6597f/tenor.gif?itemid=5392081", "https://media1.tenor.com/images/aca6a67d2e00f8ca5a8a5b3083ea8982/tenor.gif?itemid=11586452", "https://media1.tenor.com/images/8de30b9881d46b6750cbd0ef7e0ed546/tenor.gif?itemid=5305087", "https://media1.tenor.com/images/b5e01b67aa9f5f499573f7d6ebe75c18/tenor.gif?itemid=5646326", "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956", "https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028", "https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif?itemid=4922649", "https://media.tenor.com/images/74b79a7dc96b93b0e47adab94adcf25c/tenor.gif"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toSlap.username}**, tu reçois une claque de la part de **${message.author.username}** !`)
 .setColor("#ff0000")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}  


module.exports.help = {
    name: "slap"
}