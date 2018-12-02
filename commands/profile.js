const Discord = require("discord.js");
let talkedRecently = [];
let xp = require("../xp.json");


module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
  let ment = message.mentions.members.first();
  let user = message.mentions.users.first()
  let statusemote;
  let status;
  let MentStatus = message.mentions.members.first();

  
  if(message.author.presence.status === "online") {
       statusemote = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Fonline.png?1542388221955"
     } else
     if(message.author.presence.status === "idle") {
       statusemote = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Faway.png?1542388221826"
     } else
     if(message.author.presence.status === "dnd") {
       statusemote = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Fdnd.png?1542388221915"
     } else
     if(message.author.presence.status === "offline") {
       statusemote = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Foffline.png?1542388221687"
     } else
     if(message.author.presence.status === "streaming") {
       statusemote = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Fstreaming.png?1542388386636"
     }
  
  if(message.author.presence.status === "online") {
       status = "Actuellement en ligne !"
     } else
     if(message.author.presence.status === "idle") {
       status = "Absent..."
     } else
     if(message.author.presence.status === "dnd") {
       status = "Ne pas déranger."
     } else
     if(message.author.presence.status === "offline") {
       status = "Actuellement hors ligne"
     } else
     if(message.author.presence.status === "streaming") {
       status = "En streaming sur Twitch !"
     }
   
    if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
       level: 1
    };
  }
   
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;

let messageArray = message.content.split(" ")
const db = require("quick.db");
let coinDB = new db.table("COINS");
coinDB.fetch(`coins_${message.author.id}`).then(coinFETCH => {
  if (!coinFETCH) coinDB.set(`coins_${message.author.id}`, 0)
    
  if(!ment){
    coinDB.fetch(`coins_${message.author.id}`).then(coinFETCH => {
  if (!coinFETCH) coinDB.set(`coins_${message.author.id}`, 0)
var profileembed = new Discord.RichEmbed()
     .setTitle("Profile de **__" + message.author.username + "__**")
     .setColor(message.guild.members.get(message.author.id).highestRole.color)
     .setThumbnail(message.author.avatarURL)
     .addField("Niveau:", "**"+ curlvl+ "** " + "*(__"+ curxp +" XP__)*", true)
     .addField("Pièces:", "**" + coinFETCH + "** <:coins:443940640103858176>", true)
     .setFooter(status, statusemote)
     .setTimestamp()
 
message.channel.send(profileembed)
    .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
    })
    }else{  
      
      if(ment){
        coinDB.fetch(`coins_${ment.id}`).then(coinFETCH => {
  if (!coinFETCH) coinDB.set(`coins_${ment.id}`, 0)
      if(ment.presence.status === "online") {
       ment = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Fonline.png?1542388221955"
     } else
     if(ment.presence.status === "idle") {
       ment = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Faway.png?1542388221826"
     } else
     if(ment.presence.status === "dnd") {
       ment = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Fdnd.png?1542388221915"
     } else
     if(ment.presence.status === "offline") {
       ment = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Foffline.png?1542388221687"
     } else
     if(ment.presence.status === "streaming") {
       ment = "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Fstreaming.png?1542388386636"
     }
  
  if(MentStatus.presence.status === "online") {
       status = "Actuellement en ligne !"
     } else
     if(MentStatus.presence.status === "idle") {
       status = "Absent..."
     } else
     if(MentStatus.presence.status === "dnd") {
       status = "Ne pas déranger."
     } else
     if(MentStatus.presence.status === "offline") {
       status = "Actuellement hors ligne"
     } else
     if(MentStatus.presence.status === "streaming") {
       status = "En streaming sur Twitch !"
     }
      
      
      var mentprofileembed = new Discord.RichEmbed()
     .setTitle("Profile de **__" + user.username + "__**")
     .setColor(message.guild.members.get(user.id).highestRole.color)
     .setThumbnail(user.avatarURL)
     .addField("Niveau:", "**"+ curlvl+ "** " + "*(__"+ curxp +" XP__)*", true)
     .addField("Pièces:", "**" + coinFETCH + "** <:coins:443940640103858176>", true)
     .setFooter(status, ment)
     .setTimestamp()
      
  message.channel.send(mentprofileembed)
        })
    .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
    
      }}
      
    
  





talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
  });
 }

module.exports.help = {
    name: "profile",
}