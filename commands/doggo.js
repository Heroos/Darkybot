const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")


  
 randomPuppy()
.then(url => {

var dogembed = new Discord.RichEmbed()
   .setColor("#ffbb68")
   .setTitle("Ouaf ! :dog:")
   .setImage(url);

  message.channel.send(dogembed)
}).catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}




module.exports.help = {
    name: "doggo",
    commande:"db!doggo",
    desc:"Pour que je vous envoit une image d'un chien trop mignon. :dog:"
}