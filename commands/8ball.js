const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args, err) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
let messageArray = message.content.split(" ")



var botmessage = args.slice(1).join(" ");
 if(!args[2]) return message.channel.send("**UNE QUESTION DOIT COMMENCER PAR UNE LETTRE ET FINIR PAR UN POINT D'INTERROGATION !** Alors fait un effort stp.");

/// rep positives: 6 | négative: 6 | mitigé: 6
var replies = ["Ouais !","Nan...","Peut-être.","Chais pas, demande a ta mère. :/","Compte la dessus !","Nan, oublie", "Re-demande moi plus tard. :sweat_smile:", "Euh... Tu n'as pas une meilleur question ?", "Je demanderais a mon cheval ! *PS: il a répondu oui.  :smirk:*","Alors là... Aucune idée frère","Je demanderais a mon cheval ! *PS: Il a répondu non cbatar...*", "Mouais...", "Je pense que ouais.", "OUAIS, OUAIS, OUAIS, OUAIIIS !", "Hahaha ! Non.", "Peut-être que oui, peut-être que non.", "C'est sûr et certaint !", "Même pas en rêve",];
var question = args.join(" ")
var result = Math.floor((Math.random() * replies.length));

   var ballembed = new Discord.RichEmbed()
     .setAuthor(message.author.tag)
     .setColor("RANDOM")
     .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/2000px-8-Ball_Pool.svg.png")
     .addField(":grey_question: Question:", question)
     .addField(":exclamation: Réponse à la question:", replies[result]);

message.channel.send(ballembed)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));

  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
};


module.exports.help = {
    name: "8ball",
    commande: "db!8ball <question>",
    desc: "Pose moi une question et j'y réponderais !"
}