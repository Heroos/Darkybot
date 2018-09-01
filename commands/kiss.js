const Discord = require("discord.js");
const ms = require("ms");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")


let toKiss = message.mentions.users.first() || client.users.get(args[0]);
 if (!toKiss) return message.channel.send("Embrasser le vent, pourquoi pas...");
 if (toKiss.id == message.author.id) return message.channel.send("Toi. Tu est sûrement célibataire.");
 if (toKiss.id == client.user.id) return message.channel.send("Non, je prèfère juste que on reste ami. *friendzoned*");
var replies = ["https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865", "https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif?itemid=10356314", "https://media1.tenor.com/images/896519dafbd82b9b924b575e3076708d/tenor.gif?itemid=8811697", "https://media1.tenor.com/images/632a3db90c6ecd87f1242605f92120c7/tenor.gif?itemid=5608449", "https://media1.tenor.com/images/0f2aac2ac7d18ee23c82890e617f3ae1/tenor.gif?itemid=7905645", "https://media1.tenor.com/images/356f5b06ce6bdb2c46a8c9c2685e18eb/tenor.gif?itemid=4797281", "https://media1.tenor.com/images/6bf4432cf7abbcce4896275b83b7135c/tenor.gif?itemid=10081644"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toKiss.username}**, tu reçois un bisous de la part de **${message.author.username}** !`)
 .setColor("#ffb5f0")
 .setImage(replies[result]);


 return message.channel.send(botembed);
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}

module.exports.help = {
    name: "kiss",
    commande: "db!kiss <mention>",
    desc: "Vous permet de diffuser de l'amour en lui faisant un bisous !"
}