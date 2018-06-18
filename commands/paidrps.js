const Discord = require("discord.js");
var fs = require("fs");

module.exports.run = async (client, message, args) => {

let coins = require("../coins.json");
let messageArray = message.content.split(" ")


    
    function rand(low, high) {
      return Math.random() * (high + 1 - low) + low | 0;
    }
  const rpsargs = message.content.split(" ").slice(1).join(" ");
     
     if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let uCoins = coins[message.author.id].coins;
    
      let computer_choice = rand(0,2);
let user_choice;
if (args[0] == "pierre") {
user_choice = 0 

} else
 if (args[0] == "feuille") {
user_choice = 1

} else 
if (args[0] == "ciseaux") {
user_choice = 2
} else {
message.channel.send("Il faut choisir entre `feuille`, `ciseaux` ou `pierre` !")
return;
}
      if (computer_choice == user_choice) {
       message.channel.send("**Égalité !** <:doggy:435146226527240213>")
        
      }
      if (computer_choice == 0 && user_choice == 2) {
         var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu 10 pièces!**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":scissors: | Ciseaux !")
        .addField("J'ai choisi: ", ":punch: | Pierre !")
        .addField("Ton porte monnaie actuel: ", uCoins - 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
    
        coins[message.author.id] = {
    coins: coins[message.author.id].coins - 10
      
        }}
      if (computer_choice == 2 && user_choice == 0) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e) 10 pièces !**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":punch: | Pierre !")
        .addField("J'ai choisi: ", ":scissors: | Ciseaux !")
        .addField("Ton porte monnaie actuel: ", uCoins + 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins + 10
          
      }}
      if (computer_choice == 1 && user_choice == 0) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu 10 pièces !**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":punch: | Pierre !")
        .addField("J'ai choisi: ", ":page_facing_up: | Feuille !")
        .addField("Ton porte monnaie actuel: ", uCoins - 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins - 10
        
      }}
      if (computer_choice == 0 && user_choice == 1) {
          var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e) 10 pièces !**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":page_facing_up: | Feuille !")
        .addField("J'ai choisi: ", ":punch: | Pierre !")
        .addField("Ton porte monnaie actuel: ", uCoins + 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins + 10
      }}
      if (computer_choice == 1 && user_choice == 2) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e) 10 pièces !**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":scissors: | Ciseaux !")
        .addField("J'ai choisi: ", ":page_facing_up: | Feuille !")
        .addField("Ton porte monnaie actuel: ", uCoins + 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins + 10
        
      }}
      if (computer_choice == 2 && user_choice == 1) {
       var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu 10 pièces !**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":page_facing_up: | Feuille !")
        .addField("J'ai choisi: ", ":scissors: | Ciseaux !")
        .addField("Ton porte monnaie actuel: ", uCoins - 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins - 10
        
        }}
  
}






module.exports.help = {
    name: "$rps"
}