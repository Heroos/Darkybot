const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
    let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));

        message.channel.send("`Lancement du dé...`").then(msg => {msg.delete(2900)})
            setTimeout(() => {
              message.reply(`et c'est le numéro \**${replies[result]}\** !`)
    
            }, 3000)
          
 
          
talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
        
        }

module.exports.help = {
    name: "rtd"
}