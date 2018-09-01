const Discord = require("discord.js");
let talkedRecently = [];

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")






talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "  "
}


Verités
=======
T'aime ki mdrlol?  
Quel a été ton dernier plat ?  
Si tu devais obligatoirement lecher les pieds à quelqu'un sur ce serveur, ce serait qui?  
Quel a été la dernière musique que tu as écouter ?  
Combien de pas as tu fait de toute ta vie.  
C'est quoi ton taff/job ?  




Actions
========
Crée un serveur qui s'appelle prout et ajoute moi dessus. (Et t'es obligé de le garder pendant une semaine ***ET DE LE RENDRE ACTIF***.)
Envoye moi une photo de tes pieds.
Envoit nous la (nombre random généré par bot)ème photo de ta photo de ta galerie.
Envoye ton cul en mp. (ou tes pieds)



