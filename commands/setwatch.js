const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")
var watch = args.join(" ");

  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setwatch run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2: *(jeu en cours: " + watch +")*")
  
        client.user.setActivity(watch, {
        'type': 'WATCHING',

})};

module.exports.help = {
    name: "setwatch"
}
          