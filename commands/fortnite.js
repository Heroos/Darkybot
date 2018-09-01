const Discord = require("discord.js");
let talkedRecently = [];
const fortnite = require('fortnite.js');
const fortClient = new fortnite(process.env.ftAPI)


module.exports.run = async (client, message, args) => {

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
  
  fortClient.get(username, `fortnite.${platform}`).then(u => console.log(u));
}                                                                                    
                                     
module.exports.help = {
      name: "fortnite",
    commande: "db!fortnite [ pc | xbl | psn ] <pseudo>",
    desc: "Pour afficher vos stats Fortnite"
}
                                               