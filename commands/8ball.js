const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
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

message.channel.send(ballembed);
};


module.exports.help = {
    name: "8ball"
}