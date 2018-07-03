const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let xp = require("./xp.json");

let messageArray = message.content.split(" ")
   
    if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
       level: 1
    };
  }
  
  let ment = message.mentions.users.first();
    
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = curlvl * 500;
    let difference = nxtLvlXp - curxp;
    
   
  if(!ment) {
    let lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Niveau:", curlvl, true)
    .addField("XP:", curxp, true)
    .setFooter(`Il te reste ${difference} XP avant de passer au niveau ${curlvl + 1} !`, "https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png");
    
    message.channel.send(lvlEmbed)
  }else{
    let mentcurxp = xp[ment.id].xp;
    let mentcurlvl = xp[ment.id].level;
    let mentnxtLvlXp = curlvl * 500;
    let mentdifference = nxtLvlXp - curxp;
    
    let lvlEmbed = new Discord.RichEmbed()
    
    .setAuthor(ment.username)
    .setColor("RANDOM")
    .setThumbnail(ment.avatarURL)
    .addField("Niveau:", mentcurlvl, true)
    .addField("XP:", mentcurxp, true)
    
    message.channel.send(lvlEmbed)
  }
  
}


module.exports.help = {
    name: "level"
}