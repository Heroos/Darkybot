const Discord = require("discord.js");
let talkedRecently = [];
const fortnite = require('fortnite');
const fortClient = new fortnite(process.env.ftAPI)


module.exports.run = async (client, message, args) => {
  
let erchannel = client.channels.get("455520859793391627");
if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

        let platform;
        let username;

        if (!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send('**Merci de renseigner la plateforme de jeu: `db!fortnite [ pc | xbl | psn ] <pseudo>`**');
        if (!args[1]) return message.channel.send('**Merci de renseigner un nom d\'utilisateur: `!fortnite [ pc | xbl | psn ] <pseudo>`**');

        platform = args.shift();
        username = args.join(' ');
  
  fortClient.getInfo(username, platform).then(data => {
    console.log(data);
  }).catch().catch((e) => message.channel.send(':warning: **ERREUR 403:** Je n\'arrive pas a atteindre leurs serveurs... Réessaie plus tard. :warning: \n`' + (e) + '`'))
  .catch().catch((e) => erchannel.send("Une erreur est survenue: `" + (e) + "` ."));
}                                                                                    
                                     
module.exports.help = {
      name: "fortnite",
    commande: "db!fortnite [ pc | xbl | psn ] <pseudo>",
    desc: "Pour afficher vos stats Fortnite"
}
                                               