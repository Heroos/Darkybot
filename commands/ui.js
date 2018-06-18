const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")

    let ment = message.mentions.members.first();
    let userrrrrrr = message.mentions.users.first()
    let status;
    let mentstatus;

    if(message.author.presence.status === "online") {
       status = "<:online:313956277808005120>En ligne"
     } else
     if(message.author.presence.status === "idle") {
       status = "<:away:313956277220802560>Absent"
     } else
     if(message.author.presence.status === "dnd") {
       status = "<:dnd:313956276893646850>Ne pas déranger"
     } else
     if(message.author.presence.status === "offline") {
       status = "<:offline:313956277237710868>Hors ligne"
     } else
     if(message.author.presence.status === "streaming") {
       status = "<:streaming:313956277132853248>En streaming"
     } else
     if(message.author.presence.status === "invisible") {
       status = "<:invisible:313956277107556352>Invisible 👀"
     }
    
    if(!ment) {
    let nomentembed = new Discord.RichEmbed()
    .addField("Ton Tag:", message.author.tag, true)
		.addField("Ton ID", "`"+message.author.id+"`", true)
		.addField("Statut ", status, true)
		.addField("Sur Discord depuis", `${message.author.createdAt.format("dd-MM-Y à HH:mm:SS")}`, true)
    .addField("Jeu en cours:", `${message.author.presence.game ? message.author.presence.game.name : 'Aucun'}`, true)
    .addField("Ton meilleur role", message.member.highestRole.name, true)
    .setThumbnail(message.author.avatarURL)
    .setColor('RANDOM')
		message.channel.send(nomentembed)
  }else{
    if(ment) {
     if(ment.presence.status === "online") {                          
       mentstatus = "<:online:313956277808005120>En ligne"
     } else
     if(ment.presence.status === "idle") {
       mentstatus = "<:away:313956277220802560>Absent"
     } else
     if(ment.presence.status === "dnd") {
       mentstatus = "<:dnd:313956276893646850>Ne pas déranger"
     } else
     if(ment.presence.status === "offline") {
       mentstatus = "<:offline:313956277237710868>Hors ligne"
     } else
     if(ment.presence.status === "streaming") {
       status = "<:streaming:313956277132853248> En streaming<:invisible:313956277107556352>"
     } else
     if(ment.presence.status === "invisible") {
       status = "<:invisible:313956277107556352> Invisible 👀"
     }
    }
          
		let embed = new Discord.RichEmbed()
		.addField("Tag:", userrrrrrr.tag, true)
		.addField("ID:", ment.id, true)
		.addField("Statut :", mentstatus, true)
		.addField("Sur discord depuis le:", `${userrrrrrr.createdAt.format("dd-MM-Y à HH:mm:SS")}`, true)
    .addField("Jeu en cours:", `${ment.presence.game ? ment.presence.game.name : 'Aucun'}`, true)
    .addField("Son meilleur role:", ment.highestRole.name, true)
    .setThumbnail(userrrrrrr.avatarURL)
    .setColor('RANDOM')
		message.channel.send(embed)
    }
}


module.exports.help = {
    name: "ui"
}