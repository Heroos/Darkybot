const Discord = require("discord.js");
var fs = require("fs");
let talkedRecently = [];
let db = require("quick.db");
let coinDB = new db.table("COINS");

module.exports.run = async (client, message, args) => {
  
  coinDB.fetch(`coins_${message.author.id}`).then(coinFETCH => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
let coins = require("../coins.json");
let messageArray = message.content.split(" ")

 
if(!coinFETCH){
  return message.reply("Tu n'a pas de pièces !")
}
  
  let pUser = message.mentions.users.first() || message.guild.members.get(args[0])
  coinDB.fetch(`coins_${pUser.id}`).then(pFetch => {
  if (isNaN(args[1])) return message.channel.send("Veuillez mettre un numéro.")
  if (args[1].startsWith("-")) return message.channel.send("Un nombre négatif, Carrement ?")
  if(!pFetch) coinDB.set(`coins_${pUser.id}`, 0)
  
  let pCoins = pFetch;
  let sCoins = coinFETCH;
    if(sCoins < args[1]) return message.reply("tu n'as pas assez de pièces !");
    if (args[1] <= 0) return message.reply("tu ne peux pas donner aucune pièce :sweat_smile:")
    if (message.author === pUser) return message.reply("tu ne peux pas te donner des pièces a toi même...")
  

   let dcoins = sCoins - parseInt(args[1])
   
   coinDB.set(`coins_${message.author.id}`, dcoins);
  
  

 coinDB.add(`coins_${pUser.id}`, args[1]);
  
  
  
  message.channel.send(`${pUser} a reçu ${args[1]} pièces par ${message.author} !`)
  
  })
  })
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}

module.exports.help = {
    name: "pay"
}  