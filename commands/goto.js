const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")



    if (message.author.id == 191272823170269184) {
  
  client.guilds.get(args[0]).channels.first().createInvite().catch((e) => {
message.channel.send("Je n'ai pas reconnu le channel deso bb.")
let i2 = client.guilds.get(args[0]).channels.find(c=>c.name.toLowerCase() == "general") || client.guilds.get(args[0]).channels.find(c=>c.name.toLowerCase() == "général")
i2.createInvite().then(invite => message.channel.send('discord.gg/' + invite.code))
})
          .then(invite => message.channel.send("discord.gg/" + invite.code))
}else
  message.channel.send("Non tu ne peux pas ! Owner seulement !")
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
  }


module.exports.help = {
    name: "goto"
}