const Discord = require("discord.js");
let talkedRecently = [];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
var tship = {};
function ship(int) {
if (int <= 10) return "Vous n'êtes pas fait pour vous entendre.";
if (int <= 20) return "C'est pas trop fou fou entre vous deux.";
if (int <= 30) return "C'est toujours sa, mais vous pouvez mieux faire.";
if (int <= 50) return "C'est fifty fifty entre vous.";
if (int <= 60) return "Ha ha ! Vous vous entendez bien !";
if (int == 69) return "Beh alors :wink: On as trouver le chiffre porte bonheur ?!";
if (int <= 75) return "Vous feriez un beau couple... mais risque de Friendzone.";
if (int <= 99) return "Vous feriez un beau couple... mais sans risque de Frienzone.";
if (int == 100) return "Vous êtes fait l'un pour l'autre.";

};

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

var l1;
var l2;
if (message.mentions.users.size) {
if (message.mentions.users.size >= 2) {
var m = []
message.mentions.users.forEach(u => m.push(u.username));
l1 = m[0]
l2 = m[1]
} else {
l1 = message.author.username
l2 = message.mentions.users.first().username
}
} else {
if (args[1]) l2 = args[1]
else l2 = message.author.username
if (args[0]) l1 = args[0]
else l1 = message.author.username
}
  if(l1 == l2) return message.channel.send("Tu ne peux pas ship les deux mêmes personnes !")
if (!tship[l1 + l2]) tship[l1 + l2] = getRandomInt(0, 100)
message.channel.send("Vous shipez **" + l1 + "** et **" + l2 + "**.")
message.channel.send("`Lancement de la love machine....`")
  setTimeout(() => {
        message.channel.send("Vous obtenez: **" + tship[l1 + l2] + "%** de ship avec " + l1 + " et " + l2 + ". \n*" + ship(tship[l1 + l2]) + "*")}, 3000)




talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "ship"
}
