const Discord = require("discord.js");
const ms = require("ms");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")



let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!args[0]) return message.channel.send("Va falloir choisir quelqu'un, je suis pas devin, et je ne vais pas deviner la personne pour toi.");
if (!kUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:")
if (kUser.id == message.author.id) return message.reply('Tu veux te kick toi même ?! Étrange... :thinking: ');
if (kUser.id == client.user.id) return message.reply('Tu veux me kick ? :disappointed_relieved:')
if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Non, tu ne peux pas ! *kick run away*");
if (kUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Nan, il a des privililèges qui m'empêche de faire sa. *kick run away*");
let kReason = args.slice(1).join(" ") || "Aucune raison donnée."

let kickEmbed = new Discord.RichEmbed()
   .setDescription("**~|kick|~**")
   .setColor("#ff7700")
   .setThumbnail("http://www.emoji.co.uk/files/twitter-emojis/symbols-twitter/11144-double-exclamation-mark.png")
   .addField("Utilisateur kick: ", `${kUser} avec l'ID \`${kUser.id}\``)
   .addField("Kick par: ", `<@${message.author.id}> avec l'ID \`${message.author.id}\``)
   .addField("Kick a partir du salon: ", message.channel)
   .addField("Le: ", message.createdAt.format("dd-MM-Y à HH:mm:SS"), true)
   .addField("Raison: ", kReason, true);

   let kickChannel = message.guild.channels.find(`name`, "rapports");
   if(!kickChannel) return message.channel.send("Je ne peux pas le kick car le salon #rapports est inexistant, merci de le crée.");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));

  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}



module.exports.help = {
    name: "kick",
    commande: "db!kick <mention> [raison]",
    desc: "Permet de kick un membre tout en affichant un rapport par la suite."
}