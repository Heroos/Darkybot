const Discord = require("discord.js");
let talkedRecently = [];
let coins = require("../coins.json");
let fs = require("fs")
module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

if(!coins[message.author.id]) coins[message.author.id] = {coins : 0, cooldown : 0}
    if(new Date().getTime() - coins[message.author.id].cooldown < 1000*60*60*24) return message.channel.send(":clock1130: | Les petits elfes magiques n'ont pas encore fini de préparer tes pièces quotidienne, reviens plus tard.")
    message.channel.send("**CLING ! <:coins:443940640103858176>** Tu as reçu tes **250** coins quotidiens ! Reviens dans 24 heures !")
    coins[message.author.id].coins =  coins[message.author.id].coins + 250
    coins[message.author.id].cooldown = new Date().getTime()
fs.writeFileSync("../coins.json", JSON.stringify(coins))
  

talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "daily"
}