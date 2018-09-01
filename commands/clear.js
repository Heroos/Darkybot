const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: Pour éviter les lags dans les serveurs, veuillez patienter **5** secondes entre chaque clear, " + message.author + " !");
       
    }


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Désolé, mais seul les personne ayant la permission de **gérer les messages** peuvent se servir de cette commande.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('Je n\'ai pas la permission **gérer les messages** sur ce serveur.');

    if (!args[0]) return message.channel.send('Tu doit donnée un nombre de messages a suprimmer.');
    if (args[0] < 1) return message.channel.send('Merci de mettre un chiffre plus grand que 1');
    if (args[0] > 100) return message.channel.send('Merci de mettre un chiffre plus petit que 100');
    if (isNaN(args[0])) return message.channel.send('Merci de mettre un chiffre valide.');

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`🗑 J'ai bien supprimé **${args[0]}** messages.`).then(message => message.delete(3000));
    }).catch().catch((e) => message.channel.send('Tu ne peux pas suprimmer des messages vieux de plus de 14 jours.'));

}


  module.exports.help = {
    name: "clear",
    commande: "db!clear <nombre entre 1-100>",
    desc: "Vous permet d'effacer un certains nombre de messages en un clin d'oeil ! *(La commande ne fonctionnera pas si vous vous apraitez a effacer des messages ancien de plus de 15 jours.)*"
}