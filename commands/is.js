const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



  let online = message.guild.members.filter(m => m.presence.status === 'online').size;
  let offline = message.guild.members.filter(m => m.presence.status === 'offline').size;
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let total = online + offline + bots;
  let totalnobot = online + offline;
  let serverembed = new Discord.RichEmbed()
	.setDescription("Informations sur le serveur !")
	.setColor("#FF0000")
	.setThumbnail(message.guild.iconURL)
	.addField(":red_circle:  Nom du serveur: ", message.guild.name, true)
  .addField(":id: ID du serveur: ", "`" + message.guild.id + "`", true)
	.addField(":wave::skin-tone-2: Rejoin le: ", message.member.joinedAt.format("dd-MM-Y à HH:mm:SS"), true)
  .addField(":clock5: Crée le: ", message.guild.createdAt.format("dd-MM-Y à HH:mm:SS"), true)
  //.addField("Owner serveur: ", message.guild.owner.user.tag, true)
  .addField(":busts_in_silhouette: Membres: ","<:online:313956277808005120> " + online + " | <:offline:313956277237710868> " + offline + " | <:botTag:230105988211015680> " + bots + " | Total: " + total + " membres." + " (*total sans bots:* " + totalnobot + " )")
  .setTimestamp();
  
	return message.channel.send(serverembed);
}

module.exports.help = {
    name: "is"
}