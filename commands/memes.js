const Discord = require("discord.js");
const meme = require('memejs');
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

  
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("RANDOM")
  .setImage(data.url[0])
  message.channel.send({embed});
  })
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
};


module.exports.help = {
    name: "memes",
    commande: "db!memes",
    desc: "Les memes c'est important, faites la commande pour diffuser la sainte parole des memes."
}