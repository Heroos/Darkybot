const Discord = require("discord.js");
var fs = require("fs");

module.exports.run = async (client, message, args) => {
  
let coins = require("../coins.json");
let messageArray = message.content.split(" ")

 
if(!coins[message.author.id]){
  return message.reply("Tu n'a pas de pièces !")
}
  
  let pUser = message.mentions.users.first() || message.guild.members.get(args[0])
  if (isNaN(args[1])) return message.channel.send("Veuillez mettre un numéro.")
  if (args[1].startsWith("-")) return message.channel.send("Un nombre négatif, Carrement ?")
  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;
    if(sCoins < args[1]) return message.reply("tu n'as pas assez de pièces !");
    if (args[1] <= 0) return message.reply("tu ne peux pas donner aucune pièce :sweat_smile:")
    if (message.author === pUser) return message.reply("tu ne peux pas te donner des pièces a toi même...")
  
  coins[message.author.id]= {
    coins: sCoins - parseInt(args[1])
  
  }; 

       coins[pUser.id] = { 
    coins: pCoins + parseInt(args[1])
  };
  
  message.channel.send(`${pUser} a reçu ${args[1]} pièces par ${message.author} !`)
  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if(err) console.log(err)
});
}


  
module.exports.help = {
    name: "pay"
}