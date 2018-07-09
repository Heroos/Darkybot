const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les permissions pour faire cela !");
  
  message.delete();


  if (isNaN(args[0])) return message.channel.send('Merci de rentrer un nombre valide.');
  if (args[0] > 100) return message.channel.send('Je ne peux pas suprimer plus de 100 messages. :confounded:');
  
setTimeout(() => {message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**${messages.size}/${args[0]} messages suprimmer avec succès !**`).then(msg => {msg.delete(10000)})
    )}, 500)
  
}

  module.exports.help = {
    name: "clear"
}