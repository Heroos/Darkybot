const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: Pour éviter les lags dans les serveurs, veuillez patienter **5** secondes entre chaque clear, " + message.author + " !");
       
    }

let prefix = "db!"
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Désolé, mais seul les personne ayant la permission de **gérer les messages** peuvent se servir de cette commande.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('Je n\'ai pas la permission **gérer les messages** sur ce serveur.');

    if (!args[0]) return message.channel.send('Tu doit donnée un nombre de messages a suprimmer.');
    if (args[0] < 1) return message.channel.send('Merci de mettre un chiffre plus grand que 1');
    if (args[0] > 99) return message.channel.send('Merci de mettre un chiffre plus petit que 99');
    if (isNaN(args[0])) return message.channel.send('Merci de mettre un chiffre valide.');
  var cmdTxt = message.content.split(' ')[0].substring(prefix.length);
  var suffix = message.content.substring(cmdTxt.length + prefix.length +1);
  var amount = Number(suffix);
  var adding = 1
  var newamount = amount + adding;
  
  let messagecount = newamount.toString();
  
  message.channel.fetchMessages({ 
    limit: messagecount 
  })
    .then(messages => {
    message.channel.bulkDelete(messages).then(() => {
    message.channel.send("🗑 J'ai bien supprimé **" + amount +"** messages.").then(message => message.delete(5000))
          }).catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !**:warning: \n`' + (e) + '`'));
 })
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 5000);
  
}


  module.exports.help = {
    name: "clear",
    commande: "db!clear <nombre entre 1-100>",
    desc: "Vous permet d'effacer un certains nombre de messages en un clin d'oeil !"
}