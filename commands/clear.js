const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: Pour éviter les lags dans les serveurs, veuillez patienter **5** secondes entre chaque clear, " + message.author + " !");
       
    }
  

let messageArray = message.content.split(" ")
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les permissions pour faire cela !");
  
  message.delete();


  if (isNaN(args[0])) return message.channel.send('Merci de rentrer un nombre valide.');
  if (args[0] > 100) return message.channel.send('Je ne peux pas suprimer plus de 100 messages. :confounded:');
  
setTimeout(() => {message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**${messages.size}/${args[0]} messages suprimmer avec succès !**`).then(msg => {msg.delete(10000)})
    )}, 500)
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 5000);

  
}

  module.exports.help = {
    name: "clear"
}