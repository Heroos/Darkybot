const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
let messageArray = message.content.split(" ")

if (message.author.id == 191272823170269184) {
///ZONE DE TEST, NE MODIFIER LE RESTE QUE EN CAS DE BESOIN !

 let online = message.guild.members.filter(m => m.presence.status === 'online').size;
 let offline = message.guild.members.filter(m => m.presence.status === 'offline').size;
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let total = online + offline + bots;
  let totalnobot = online + offline;

  
message.channel.send("")
///ZONE DE TEST, NE MODIFIER LE RESTE QUE EN CAS DE BESOIN !
  message.channel.send("```Test effectué sans echec.```")
}else {
  message.reply("non ! Tu n'as pas le droit d'utiliser les commandes en cours de dévelopement !")
}}

module.exports.help = {
    name: "test"
}