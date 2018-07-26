const Discord = require("discord.js");
const ms = require("ms");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")



	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:")
    if (rUser.id == message.author.id) return message.reply('Euh... Pourquoi tu veux te report toi même ? :thinking: ');
    if (rUser.id == client.user.id) return message.reply('Héhéhé... Tu as cru pouvoir me report ?! **IDIOT !**');
    if (rUser.id == 191272823170269184) return message.reply("Nop, tu peux pas le report. C'est l'owner du bot, c'est un peu bête, non ?");
    if (rUser.id == 334095574674571264) return message.reply("C'est Eni quand même, tu ne peut pas le report...")
    if (rUser.id == 234043341749092352) return message.reply("Tu peux pas report ironcaptain467 (dommage)")

      var reason = args.slice(1).join(" ")

    var reportEmbed = new Discord.RichEmbed()
    .setDescription("Caftage")
    .setColor("#DAF116")
    .setThumbnail("https://www.emojibase.com/resources/img/emojis/apple/x26a0.png.pagespeed.ic.DB5SxsN5FU.png")
    .addField("Membre rapporté: ", `${rUser} avec l'ID: \`${rUser.id}\``)
    .addField("Rapporté par: ", `${message.author} avec l'ID: \`${message.author.id}\``)
    .addField("Dans le salon: ", message.channel)
    .addField("Le :", message.createdAt.format("dd-MM-Y à HH:mm:SS"), true)
    .addField("Raison: ", reason, true);

    let reportschannel = message.guild.channels.find(`name`, "rapports");
    if(!reportschannel) return message.channel.send("Je n'arrive pas a trouver le salon #rapports, demandez a votre administrateur d'en crée un !")

    message.delete();
    reportschannel.send(reportEmbed);

  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}

module.exports.help = {
    name: "report"
}