const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

let toBite = message.mentions.users.first() || client.users.get(args[0]);
 if (!toBite) return message.channel.send("Tu veux mordre l'air ? Je te souhaite bonne chance.");
 if (toBite.id == message.author.id) return message.channel.send("Avec toi, l'expression mange ta main et garde l'autre pour demain prend tout son sens...");
 if (toBite.id == client.user.id) return message.channel.send("Euh... Ouais, nan.");
var replies = ["https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627", "https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565", "https://media1.tenor.com/images/8a853337af58ee7c16d05d6e7c5ce31d/tenor.gif?itemid=4966068", "https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753", "https://media1.tenor.com/images/959e4c3712933367c0a553d7a124c925/tenor.gif?itemid=11546989", "https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif?itemid=9051585", "https://media1.tenor.com/images/3922be70bacbd804ee95792a4bd6bd61/tenor.gif?itemid=7748718"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toBite.username}**, tu te fait mordre part **${message.author.username}** !`)
 .setColor("#ff7070")
 .setImage(replies[result]);


 return message.channel.send(botembed)
    .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));

  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}  




module.exports.help = {
    name: "bite",
    commande: "db!bite <mention>",
    desc: "Vous permet de... mordre quelqu'un ?!"
}