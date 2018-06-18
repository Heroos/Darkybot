const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")
  
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setstream run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var stream = args.join(" ");
        client.user.setActivity(stream, {
        'type': 'STREAMING',
        'url': "https://www.twitch.tv/thedarknightshoww"

})};

module.exports.help = {
    name: "setstream"
}