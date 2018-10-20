const Discord = require("discord.js");
const fs = require("fs");
 // let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  const db = require("quick.db");
  let coinDB = new db.table("COINS");
  
let talkedRecently = [];
module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")
let pUser = message.mentions.users.first();

if(!pUser){
  let coinFETCH = coinDB.fetch(`coins_${message.author.id}`);
  let cooldownFETCH = coinDB.fetch(`coins_cooldown_${message.author.id}`);
  if(!coinFETCH) {
    coinDB.set(`coins_${message.author.id}`, 0);
    coinDB.set(`coins_cooldown_${message.author.id}`, 0);
  }
    if(new Date().getTime() - cooldownFETCH < 1000*60*60*24) return message.channel.send(":clock1130: | Les petits elfes magiques n'ont pas encore fini de préparer tes pièces quotidienne, reviens plus tard.")
    message.channel.send("**CLING ! <:coins:443940640103858176>** Tu as reçu tes **250** coins quotidiennes ! Reviens dans 24 heures !")
    coinDB.add(`coins_${message.author.id}`, 250)
    coinDB.set(`coins_cooldown_${message.author.id}`, 86400000)
  

}else{
let coinFETCH = coinDB.fetch(`coins_${pUser.id}`);
  let cooldownFETCH = coinDB.fetch(`coins_cooldown_${pUser.id}`);
  
if(!coinFETCH) {
    coinDB.set(`coins_${pUser.id}`, 0);
    coinDB.set(`coins_cooldown_${message.author.id}`, 0);
  }
  
if(message.author === pUser)return message.channel.send("Les elfes viennent de se figer... Ils te regardent et ne comprennent pas pourquoi tu veux donner un daily à toi-même.")
if(new Date().getTime() - cooldownFETCH < 1000*60*60*24) return message.channel.send(":clock1130: | Les petits elfes magiques n'ont pas encore fini de préparer tes pièces quotidienne, reviens plus tard.")
message.channel.send(`**CLING ! <:coins:443940640103858176>** ${message.author} a donner ses **250** pièces quotidiennes à ${pUser} !`)
coinDB.add(`coins_${pUser.id}`, 250);
coinDB.set(`coins_cooldown_${message.author.id}`, 86400000);

}
  
  
talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "daily"
}