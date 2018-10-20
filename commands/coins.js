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
  
  
//   let coins = require("../coins.json");
let messageArray = message.content.split(" ")

 
  
let ment = message.mentions.users.first();
  if(!ment) {
    let coinFETCH = coinDB.fetch(`coins_${message.author.id}`);
    
  if (!coinFETCH) coinDB.set(`coins_${message.author.id}`, 0)
  
  
  
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor("Porte monnaie de " + message.author.username)
  .setThumbnail("http://www.pngmart.com/files/3/Money-Bag-PNG-File.png")
  .setColor("#2f7c2e")
  .addField("Tu possède: ", coinFETCH + " pièces ! <:coins:443940640103858176>")
  
message.channel.send(coinEmbed)
  }else {
    let coinFETCH = coinDB.fetch(`coins_${ment.id}`);
   if (!coinFETCH) coinDB.set(`coins_${ment.id}`, 0)
  

  let mentcoinEmbed = new Discord.RichEmbed()
  .setAuthor("Porte monnaie de " + ment.username)
  .setThumbnail("http://www.pngmart.com/files/3/Money-Bag-PNG-File.png")
  .setColor("#2f7c2e")
  .addField("Tu possède: ", coinFETCH + " pièces ! <:coins:443940640103858176>")
  
message.channel.send(mentcoinEmbed) 
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
  }
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}


module.exports.help = {
    name: "coins",
    commande: "db!coins [mention]",
    desc: "Pour afficher votre porte monnaie."
}