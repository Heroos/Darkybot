const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")



let toHug = message.mentions.users.first() || client.users.get(args[0]);
 if (!toHug) return message.channel.send("Alors, euh... Je ne sait pas si caliner l'air est la meilleur chose.");
 if (toHug.id == message.author.id) return message.channel.send("Te faire un calin toi même ? Pourquoi pas, c'est toi qui voit.");
 if (toHug.id == client.user.id) return message.reply("me faire a calin a moi et comme faire un calin a quelqu'un qui n'éxiste pas, enfaite...");
var replies = ["https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716", "https://media1.tenor.com/images/b87f8b1e2732c534a00937ffb24baa79/tenor.gif?itemid=9136391", "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589", "https://media1.tenor.com/images/a2b621c6c769eee24e03b97990c15699/tenor.gif?itemid=4631839", "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432", "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093", "https://media1.tenor.com/images/f855a0348c55a6d0469f34135510bcb2/tenor.gif?itemid=5690234", "https://media1.tenor.com/images/4be3396644e87d3c201f8965104e57b7/tenor.gif?itemid=7539851", "https://media1.tenor.com/images/3775bc385da2155adb7a48b9f0e5a49f/tenor.gif?itemid=5712895", "https://media1.tenor.com/images/bad83ace95c97af636ffa7b3f7e84b6a/tenor.gif?itemid=11984684", "https://media.tenor.com/images/bf8c5d93acfe2080ebf9bff49a410b46/tenor.gif", "https://media1.tenor.com/images/297de7a5f12241b308e4d0debd017395/tenor.gif?itemid=4832629", "https://media1.tenor.com/images/1059f68239cb86bd147c8cf745792433/tenor.gif?itemid=12011037"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toHug.username}**, tu reçois un gros calin de la part de **${message.author.username}** ! :wink: `)
 .setColor("#ff30ce")
 .setImage(replies[result]);


 return message.channel.send(botembed)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);

}


module.exports.help = {
    name: "hug",
    commande: "db!hug <mention>",
    desc: "Pour faire un gros calin a quelqu'un !"
}