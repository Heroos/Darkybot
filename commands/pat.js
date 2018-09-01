const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")



let toPat = message.mentions.users.first() || client.users.get(args[0]);
 if (!toPat) return message.channel.send("Tu caresse le vent. *\*But nobody came.*");
 if (toPat.id == message.author.id) return message.channel.send("Et **CRACK** ! Ton bras a claqué parceque tu as voulu te carresser seul.");
 if (toPat.id == client.user.id) return message.channel.send("Hum... " + message.author.username +", je suis pas un animal domestique.");
var replies = ["https://media1.tenor.com/images/ab18fc64a025f6a6cafe814f934fdf02/tenor.gif?itemid=12018872", "https://media1.tenor.com/images/70960e87fb9454df6a1d15c96c9ad955/tenor.gif?itemid=10092582", "https://media.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif", "https://media.tenor.com/images/54722063c802bac30d928db3bf3cc3b4/tenor.gif", "https://media1.tenor.com/images/d02dd6d55175f7ae5c2379fbfca394bd/tenor.gif?itemid=11098951", "https://media1.tenor.com/images/9fa1e50a657ea2ece043de6e0e93ac8e/tenor.gif?itemid=10361558", "https://media1.tenor.com/images/0cf73e99f7e58215b2deee3bdb158fe2/tenor.gif?itemid=12018811"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${message.author.username}** te carresse la tête, **${toPat.username}** ! :relieved:  `)
 .setColor("#ff30ce")
 .setImage(replies[result]);


 return message.channel.send(botembed);
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);


}

module.exports.help = {
    name: "pat"
}