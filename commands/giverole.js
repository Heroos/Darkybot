const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")



    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("Nop, tu n'as pas les droits pour cette commande ! *giverole run away* ")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Je n'ai pas trouver l'utilisateur :sweat:");
    let role = args.slice(1).join(" ");
    if(!role) return message.reply("Il faut préciser le nom d'un rôle, je suis pas devin moi ! :sweat_smile:");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Je n'ai pas trouver le rôle.");

   if(rMember.roles.has(gRole)) return message.channel.send("Il possède déja ce rôle.")
  

  try{

     var giveEmbed = new Discord.RichEmbed()
      .setColor("#00ff00")
      .addField("SUCCÈS !", `Le rôle "${gRole.name}" a bien été donner a **${rMember}**.`);
      rMember.addRole(gRole)

    }catch(e){}
    message.delete();
    return message.channel.send(giveEmbed);

}



module.exports.help = {
    name: "giverole"
}