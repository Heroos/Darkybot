const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
  
let messageArray = message.content.split(" ")
var game = args.join(" ");
if (args[0] == "game" && !args[2]) game = `db!help  ■  ${client.guilds.size} serveurs !`
if (!args[0]) game = `db!help  ■  ${client.guilds.size} serveurs !`
 if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setgame run away.*")
 message.reply("C'est fait ! :thumbsup::skin-tone-2: *(jeu en cours: " + game +")*")
  
        client.user.setActivity(game, {
        'type': 'PLAYING'
          

})};

module.exports.help = {
    name: "setgame"
}