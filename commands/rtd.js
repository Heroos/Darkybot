const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));

        message.channel.send("`Lancement du dé...`").then(msg => {msg.delete(2900)})
            setTimeout(() => {
              message.reply(`et c'est le numéro \**${replies[result]}\** !`)
    
            }, 3000)
          
 
          

        
        }

module.exports.help = {
    name: "rtd"
}