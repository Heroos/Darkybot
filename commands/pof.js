const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let messageArray = message.content.split(" ")


 message.channel.send("`*Lance la pièce en l'air.*`")   
setTimeout(() => {
    let p = "et c'est pile !",
    f = "et c'est face !" 
    var x = getRandomInt(0, 8)
    if (x < 4) {
message.reply(p)
} else {
message.reply(f)
}}, 3000)
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}


module.exports.help = {
    name: "pof",
    aliases: "pileouface"
}