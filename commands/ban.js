const Discord = require("discord.js");
const ms = require("ms");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")


let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!args[0]) return message.channel.send("Va falloir choisir quelqu'un, je suis pas devin, et je ne vais pas deviner la personne pour toi.");
    if(!bUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:");
    if (bUser.id == message.author.id) return message.reply('Tu veux te bannir toi même ?! Tu est **vraiment** étrange... :cold_sweat: ');
    if (bUser.id == client.user.id) return message.reply('TU VEUX ME BANNIR !? :sob:')
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Non, tu ne peux pas ! *ban run away*");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nan, il a des privililèges qui m'empêche de faire sa. *ban run away*");
    let bReason = args.slice(1).join(" ") || "Aucune raison donnée."
  
    let banEmbed = new Discord.RichEmbed()
      .setDescription("**~|Bannissement|~**")
      .setColor("#bc0000")
      .setThumbnail("https://pbs.twimg.com/media/C9kEEmbXUAEX3r6.png")
      .addField("Utilisateur banni: ", `${bUser} avec l'ID \`${bUser.id}\``)
      .addField("Banni par: ", `<@${message.author.id}> avec l'ID \`${message.author.id}\``)
      .addField("Banni a partir du salon: ", message.channel)
      .addField("Le: ", message.createdAt.format("dd-MM-Y à HH:mm:SS"), true)
      .addField("Raison: ", bReason, true);

    /*let banChannel = message.guild.channels.find(`name`, "rapports");
    if(!banChannel) return message.channel.send("Je ne peux pas le bannir car le salon #rapports est inexistant, merci de le crée.");*/

    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);

}

module.exports.help = {
    name: "ban",
    commande: "db!ban <mention> [raison]",
    desc: "Permet de bannir un membre tout en affichant un rapport par la suite."
}