const Discord = require("discord.js");
// let coins = require("../coins.json");
let fs = require("fs")

module.exports.run = async (client, message, args) => {
  
let messageArray = message.content.split(" ")
if (message.author.id == 191272823170269184) {

  
///ZONE DE TEST, NE MODIFIER LE RESTE QUE EN CAS DE BESOIN !


 

///ZONE DE TEST, NE MODIFIER LE RESTE QUE EN CAS DE BESOIN !
  
  
  message.channel.send("```Test effectué sans echec.```")
.catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'))
}else {
  message.reply("non ! Tu n'as pas le droit d'utiliser les commandes en cours de dévelopement !")
}}

module.exports.help = {
    name: "test"
}