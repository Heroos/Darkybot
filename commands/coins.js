const Discord = require("discord.js");
var fs = require("fs");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
  
let coins = require("../coins.json");
let messageArray = message.content.split(" ")

 
  
let ment = message.mentions.users.first();
  if(!ment) {
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let uCoins = coins[message.author.id].coins;
  
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor("Porte monnaie de " + message.author.username)
  .setThumbnail("http://www.pngmart.com/files/3/Money-Bag-PNG-File.png")
  .setColor("#2f7c2e")
  .addField("Tu possède: ", uCoins + " pièces ! <:coins:443940640103858176>")
  
message.channel.send(coinEmbed)
  }else if(!coins[ment.id]){
    coins[ment.id] = {
      coins: 0
    };
  }
  
  let mentuCoins = coins[ment.id].coins;
  
  let mentcoinEmbed = new Discord.RichEmbed()
  .setAuthor("Porte monnaie de " + ment.username)
  .setThumbnail("http://www.pngmart.com/files/3/Money-Bag-PNG-File.png")
  .setColor("#2f7c2e")
  .addField("Tu possède: ", mentuCoins + " pièces ! <:coins:443940640103858176>")
  
message.channel.send(mentcoinEmbed)  

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