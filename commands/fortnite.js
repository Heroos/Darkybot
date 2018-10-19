const Discord = require("discord.js");
let talkedRecently = [];
const fortnite = require('fortnite');
const fortClient = new fortnite(process.env.ftAPI)
const fetch = require('node-fetch');


module.exports.run = async (client, message, args) => {
  
let erchannel = client.channels.get("455520859793391627");
if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")
    
    if (args[0] == "drop") {
        let places = [
            "Lazy Links",
            "Dusty Divot",
            "Fatal Fields",
            "Flush Factory",
            "Greasy Grove",
            "Haunted Hills",
            "Junk Junction",
            "Lonely Lodge",
            "Loot Lake",
            "Lucky Landing",
            "Paradise Palms",
            "Pleasant Park",
            "Retail Row",
            "Risky Reels",
            "Salty Springs",
            "Shifty Shafts",
            "Snobby Shores",
            "Tilted Towers",
            "Tomato Temple",
            "Wailing Woods"
        ];

        let picker = Math.floor(Math.random() * places.length); 

        return message.channel.send("Mhhh... Pour moi, le meilleur endroit serait **" + places[picker] + "** pour se drop." );
    } else return message.reply("Les statistiques ne sont pas disponibles !");
  /*
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
*/
}
                                     
module.exports.help = {
      name: "fortnite",
    commande: "db!fortnite [ pc | xbl | psn ] <pseudo>",
    desc: "Pour afficher vos stats Fortnite"
}


module.exports.help = {
    name: "fortnite",
  aliases: "fn"
};