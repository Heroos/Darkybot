const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


  
let botembed = new Discord.RichEmbed()
	.setTitle("Bonjour, je suis l'aide pour les administrateurs ! Et voici mes commandes ! :smiley:")
	.setColor("#00C1FF")
	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emoji_u1f4dd.svg/1000px-Emoji_u1f4dd.svg.png")
	.addField("kick <membre> <raison>","Pour l'exclure du serveur !")
  .addField("ban <membre> <raison>", "Pour le frapper avec le marteau du ban ! èwé")
  .addField("giverole <membre> <role>", "Pour donner a un membre le rôle choisi.")
  .addField("removerole <membre> <role>", "Pour retirer a un membre le rôle choisi.")
  .addField("mute <membre> <temps en ms>", "Pour pouvoir mute un membre trop dissident.")

return message.channel.send(botembed);
}

module.exports.help = {
    name: "adminhelp"
}