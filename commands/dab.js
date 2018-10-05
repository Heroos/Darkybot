const Discord = require("discord.js");
let talkedRecently = [];

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

var replies = ["https://media2.giphy.com/media/A4R8sdUG7G9TG/giphy.gif", "https://media0.giphy.com/media/lae7QSMFxEkkE/giphy.gif", "https://media0.giphy.com/media/l0K4mbH4lKBhAPFU4/giphy.gif", "https://media3.giphy.com/media/bXvwCQglnTGKs/giphy.gif", "https://media1.giphy.com/media/3oz8xzgGdsIpE8kPBu/giphy.gif", "https://media2.giphy.com/media/mqwyAKjHz612w/giphy.gif"]
var result = Math.floor((Math.random() * replies.length));

 let dabembed = new Discord.RichEmbed()
 .setDescription(`**${message.author.username}** effectue le **dab**, dans des endroits innaproprié ! <a:dabgif:473871982153302026>`)
 .setColor("#ff0000")
 .setImage(replies[result]);


 return message.channel.send(dabembed)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));


talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "dab",
    commande: "db!dab",
    desc: "**FAITES UN DAB !**"
}