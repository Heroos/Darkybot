const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
  let xp = require("../xp.json");

let messageArray = message.content.split(" ")
   
    if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
       level: 1
    };
  }
  
  
    
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp1 = curlvl * (3 * 3 * 30 + 1.25);
    let nxtLvlXp = Math.round(nxtLvlXp1)
    let difference = nxtLvlXp - curxp;
    
  let ment = message.mentions.users.first();
  
  if(!ment) {
    let lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Niveau:", curlvl, true)
    .addField("XP:", curxp, true)
    .setFooter(`Il te reste ${difference} XP avant de passer au niveau ${curlvl + 1} !`, "https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png");
    
    message.channel.send(lvlEmbed)
    .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
  }else if (ment.id === client.user.id) {
     let lvlEmbed = new Discord.RichEmbed()
       .setAuthor(client.user.username)
       .setColor("#f6ff00")
       .setImage("https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2F4ba5f0d43cd2106459a164697dbe36c9.png?1531741824708")
       .addField("Niveau: ", "666", true)
       .addField("XP: ", "9999", true)
       .setFooter("Il lui reste 1 XP avant de passer au niveau 667 !", "https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png");
     
    message.channel.send(lvlEmbed)
    setTimeout(() => {
        message.channel.send("Alors ?")}, 5000)
    setTimeout(() => {
        message.channel.send("Tu t'attendais a quoi ? Tu pensais avoir trouver une chose exeptionnel ? `*rire diabolique*`")}, 8000)
    setTimeout(() => {
        message.channel.send("Et bien non. Mais pense a vérifier de temps en temps cette fiche, on ne sait jamais que des choses vienne à évoluer...")}, 11000)
    setTimeout(() => {
        message.channel.send("Et oui, oui...")}, 14000)
    setTimeout(() => {
        message.channel.send("J'ai mis mon image bien plus en avant que vous tous...")}, 16000)
    setTimeout(() => {
        message.channel.send("**Les robots vous domineront tous.**")}, 20000)
    
    
   }else{
    let mentcurxp = xp[ment.id].xp;
    let mentcurlvl = xp[ment.id].level;
    let mentnxtLvlXp = curlvl * (3 * 3 * 30 + 1.25)
    let mentdifference = nxtLvlXp - curxp;
    
    let lvlEmbed = new Discord.RichEmbed()
    
    .setAuthor(ment.username)
    .setColor("RANDOM")
    .setThumbnail(ment.avatarURL)
    .addField("Niveau:", mentcurlvl, true)
    .addField("XP:", mentcurxp, true)
    
    message.channel.send(lvlEmbed)
     .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
  }
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
  
}


module.exports.help = {
    name: "level",
    commande: "db!level [mention]",
    desc: "Vous permet de voirs votre level, ou celui de quelqu'un."
}