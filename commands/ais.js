const Discord = require("discord.js");
let talkedRecently = [];

module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")
let online = message.guild.members.filter(m => m.presence.status === 'online').size;
 let offline = message.guild.members.filter(m => m.presence.status === 'offline').size;
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let total = online + offline + bots;
  let totalnobot = online + offline;

  
message.channel.send("```http\n                              INFORMATIONS SUR LE SERVEUR !\n   ===================================================================================\n\n● Nom du serveur => " + message.guild.name + "\n\n● ID du serveur => " + message.guild.id +"\n\n● Owner serveur => " + message.guild.owner.user.tag +"\n\n● Serveur crée le => " + message.guild.createdAt.format("dd/MM/Y à HH:mm:SS") + "\n\n● Membres:\nEn ligne => "+ online + "\nHors-ligne => " + offline + "\nBot => " + bots + "\nMembres total => " + total + " membres. (total sans bots = " + totalnobot + ")```")

talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}

module.exports.help = {
    name: "ais",
    aliases: "ainfoserver",
    commande: "db!ais",
    desc: "Fait apparaitre un embed allégée contenant différentes infos sur le serveur."
}