const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")



    if (message.author.id == 191272823170269184) {
  
  client.guilds.get(args[0]).channels.first().createInvite().catch((e) => {
message.channel.send("Je n'ai pas reconnu le channel deso bb.")
let i2 = client.guilds.get(args[0]).channels.find("name", "general") || client.guilds.get(args[0]).channels.find("name", "général")
i2.createInvite().then(invite => message.channel.send('discord.gg/' + invite.code))
})
          .then(invite => message.channel.send("discord.gg/" + invite.code))
}else
  message.channel.send("Non tu ne peux pas ! Owner seulement !")
  }


module.exports.help = {
    name: "goto"
}