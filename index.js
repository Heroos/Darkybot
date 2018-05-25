const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const superagent = require("superagent");
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const format = require("node.date-time");
const economy = require('discord-eco');
const ms = require("ms");
const prettyMs = require('pretty-ms');

let coins = require("./coins.json");
let xp = require("./xp.json");
var fs = require("fs");
let items = require("./items.json");
let talkedRecently = [];

function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}



var servers = {};


client.on('warn', console.warn);
client.on('error', console.error);
client.on("ready", () => {
  console.log("Darkybot a bien démarrer !");
  console.log(`${client.user.username} est en ligne sur ${client.guilds.size} serveurs !`);
  
     client.user.setStatus('Online')
     //client.user.setActivity(`Maintenance | Modif. bot.`)
     client.user.setActivity(`db!help  ■  ${client.guilds.size} serveurs !`)
});
const prefix = 'db!'


client.on('message', async (message) => {
 //var args = message.content.substring(prefix.length).split(" ");
 
let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

     if(message.author.bot) return;

if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}
  

//coins.json 
let coinAmt = Math.floor(Math.random() * 30) + 1;
let baseAmt = Math.floor(Math.random() * 30) + 1;

  
if(coinAmt === baseAmt){
  coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinAmt
  };
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if (err) console.log(err)
});
let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#2f7c2e")
.addField("Argent trouvé :moneybag:", ` Tu as trouver ${coinAmt} pièces en parlant !`);
  
  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)})
} 
  
 let xpAdd = Math.floor(Math.random() * 7) + 8; 
  
  
 if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
   };
 }
  
 let curxp = xp[message.author.id].xp;
 let curlvl = xp[message.author.id].level;
 let nxtLvl = xp[message.author.id].level * 500;
 xp[message.author.id].xp = curxp + xpAdd;
 if(nxtLvl <= xp[message.author.id].xp){
   xp[message.author.id].level = curlvl + 1;
   let lvlup = new Discord.RichEmbed()
   .setTitle("**LEVEL UP POUR " + (message.author.tag) + " !**")
   .setThumbnail("https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png")
   .setColor("RANDOM")
   .addField("Tu est maintenant:", "niveau " + curlvl + " !");
   
   message.channel.send(lvlup)
}
   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
   if(err) console.log(err)
});

///////
  
  if (!message.content.startsWith(prefix)) return;
    if (talkedRecently.indexOf(message.author.id) !== -1) {
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       return;
    }
//db!ping
if (message.content.startsWith(prefix + 'ping')) {

  var pingembed = new Discord.RichEmbed()
     
     .setColor("RANDOM")
     .addField("Pong ! :ping_pong:", "Mon ping est de " + client.ping + " ms")
     .setTimestamp();

message.channel.send(pingembed);

}

  
//db!8ball <question>
if (message.content.startsWith(prefix + "8ball")) {

var botmessage = args.slice(1).join(" ");
 if(!args[2]) return message.channel.send("**UNE QUESTION DOIT COMMENCER PAR UNE LETTRE ET FINIR PAR UN POINT D'INTERROGATION !** Alors fait un effort stp.");

/// rep positives: 6 | négative: 6 | mitigé: 6
var replies = ["Ouais !","Nan...","Peut-être.","Chais pas, demande a ta mère. :/","Compte la dessus !","Nan, oublie", "Re-demande moi plus tard. :sweat_smile:", "Euh... Tu n'as pas une meilleur question ?", "Je demanderais a mon cheval ! *PS: il a répondu oui.  :smirk:*","Alors là... Aucune idée frère","Je demanderais a mon cheval ! *PS: Il a répondu non cbatar...*", "Mouais...", "Je pense que ouais.", "OUAIS, OUAIS, OUAIS, OUAIIIS !", "Hahaha ! Non.", "Peut-être que oui, peut-être que non.", "C'est sûr et certaint !", "Même pas en rêve",];
var question = args.join(" ")
var result = Math.floor((Math.random() * replies.length));

   var ballembed = new Discord.RichEmbed()
     .setAuthor(message.author.tag)
     .setColor("RANDOM")
     .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/2000px-8-Ball_Pool.svg.png")
     .addField("Question:", question)
     .addField("Réponse à la question:", replies[result]);

message.channel.send(ballembed);
};


//db!infoserveur
if (message.content.startsWith(prefix + "infoserveur")){

	let sicon = message.guild.displayIconURL;
	let serverembed = new Discord.RichEmbed()
	.setDescription("Informations sur le serveur !")
	.setColor("#E82142")
	.setThumbnail(message.guild.iconURL)
	.addField("Nom du serveur:", message.guild.name)
	.addField("Rejoin le:", message.member.joinedAt.format("dd-MM-Y à HH:mm:SS"))
  .addField("Crée le:", message.guild.createdAt.format("dd-MM-Y à HH:mm:SS"))
  .addField("Membres total:", message.guild.memberCount)

	return message.channel.send(serverembed);
}

//db!help
if (message.content.startsWith(prefix + "help")){

	let botembed = new Discord.RichEmbed()
	.setTitle("Bonjour, je suis l'aide ! Et voici mes commandes ! :smiley:")
	.setColor("#00C1FF")
	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emoji_u1f4dd.svg/1000px-Emoji_u1f4dd.svg.png")
  .addField("Fun: ", "`8ball`, `sayd`, `avatar`, `doggo`, `cat`, `oazo`, `poasson`, `pileouface`, `rps`")
  .addField("jeux d'argent: ", "**[+ bientôt]** mais en attendant, jouez avec `$rps`")
  .addField("Action/RP: ", "`hug`, `slap`, `kiss`, `bite`")
  .addField("Administration: ", "`report`, pour + de commandes, faites db!adminhelp")
  .addField("Musique: **[EN MAINTENANCE]**", "`play`, `skip`, `stop`")
  .addField("Argent: ", "`coins`, `pay`")
  .addField("Utilisateur: ", "`ui`, `level`")
  .addField("Autre:", "`ping`, `infoserveur`, `help`, `ui`")
  .addField("Owner bot seul.:", "`setgame`, `setstream`, `setwatch`, `eval`")
  .addField("Ajoute moi sur ton serveur !", "[Clique ici! ^-^](https://discordapp.com/api/oauth2/authorize?client_id=441409139294601216&permissions=8&scope=bot)")
  .addField("Des idées ? Bugs trouvé ? etc..." , "[Vien sur le serveur support !](https://discord.gg/Y97BY7k)");
  

return message.channel.send(botembed);
}

//db!adminhelp
if (message.content.startsWith(prefix + "adminhelp")){

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Non, tu ne peux pas ! *adminhelp run away*");
  
let botembed = new Discord.RichEmbed()
	.setTitle("Bonjour, je suis l'aide pour les administrateurs ! Et voici mes commandes ! :smiley:")
	.setColor("#00C1FF")
	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emoji_u1f4dd.svg/1000px-Emoji_u1f4dd.svg.png")
	.addField("kick <membre> <raison>","Pour l'exclure du serveur !")
  .addField("ban <membre> <raison>", "Pour le frapper avec le marteau du ban ! èwé")
  .addField("giverole <membre> <role>", "Pour donner a un membre le rôle choisi.")
  .addField("removerole <membre> <role>", "Pour retirer a un membre le rôle choisi.")
  .addField("mute <membre> <temps en ms>", "Pour pouvoir mute un membre trop dissident.")

return message.channel.send(botembed);
}

  

//db!setgame
if (message.content.startsWith(prefix + "setgame")){
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setgame run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var game = args.slice(1).join(" ");
        client.user.setActivity(game, {
        'type': 'PLAYING'

})};
  
//db!setstream
if (message.content.startsWith(prefix + "setstream")){
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setstream run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var stream = args.slice(1).join(" ");
        client.user.setActivity(stream, {
        'type': 'STREAMING',
        'url': "https://www.twitch.tv/thedarknightshoww"

})};
  
//db!setwatch  
if (message.content.startsWith(prefix + "setwatch")){
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setwatch run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var watch = args.slice(1).join(" ");
        client.user.setActivity(watch, {
        'type': 'WATCHING',

})};
  
//db!sayd <message>
if (message.content.startsWith(prefix + "sayd")){
var botmessage = args.join(" ");
if (!botmessage) return message.channel.send("Envoye un truc stp")
message.delete();
message.channel.send(botmessage);
}

//db!report <utilisateur> <raison>
if (message.content.startsWith(prefix + "report")){

	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:")
    if (rUser.id == message.author.id) return message.reply('Euh... Pourquoi tu veux te report toi même ? :thinking: ');
    if (rUser.id == client.user.id) return message.reply('Héhéhé... Tu as cru pouvoir me report ?! **IDIOT !**');
    if (rUser.id == 191272823170269184) return message.reply("Nop, tu peux pas le report. C'est l'owner du bot, c'est un peu bête, non ?");
    if (rUser.id == 334095574674571264) return message.reply("C'est Eni quand même, tu ne peut pas le report...")

      var reason = args.slice(1).join(" ")

    var reportEmbed = new Discord.RichEmbed()
    .setDescription("Caftage")
    .setColor("#DAF116")
    .setThumbnail("https://www.emojibase.com/resources/img/emojis/apple/x26a0.png.pagespeed.ic.DB5SxsN5FU.png")
    .addField("Membre rapporté: ", `${rUser} avec l'ID: ${rUser.id}`)
    .addField("Rapporté par: ", `${message.author} avec l'ID: ${message.author.id}`)
    .addField("Dans le salon: ", message.channel)
    .addField("Le :", message.createdAt)
    .addField("Raison: ", reason);

    let reportschannel = message.guild.channels.find(`name`, "rapports");
    if(!reportschannel) return message.channel.send("Je n'arrive pas a trouver le salon #rapports, demandez a votre administrateur d'en crée un !")

    message.delete();
    reportschannel.send(reportEmbed);

}

//db!kick <utilisateur> <raison>
if (message.content.startsWith(prefix + "kick")){

let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!args[0]) return message.channel.send("Va falloir choisir quelqu'un, je suis pas devin, et je ne vais pas deviner la personne pour toi.");
if(!kUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:")
if (kUser.id == message.author.id) return message.reply('Tu veux te kick toi même ?! Étrange... :thinking: ');
if (kUser.id == client.user.id) return message.reply('Tu veux me kick ? :disappointed_relieved:')
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Non, tu ne peux pas ! *kick run away*");
if (kUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Nan, il a des privililèges qui m'empêche de faire sa. *kick run away*");
   var kReason = args.join(" ").slice(26);

let kickEmbed = new Discord.RichEmbed()
   .setDescription("**~|kick|~**")
   .setColor("#ff7700")
   .setThumbnail("http://www.emoji.co.uk/files/twitter-emojis/symbols-twitter/11144-double-exclamation-mark.png")
   .addField("Utilisateur kick: ", `${kUser} avec l'ID ${kUser.id}`)
   .addField("Kick par: ", `<@${message.author.id}> avec l'ID ${message.author.id}`)
   .addField("Kick a partir du salon: ", message.channel)
   .addField("Le: ", message.createdAt)
   .addField("Raison: ", kReason);

   let kickChannel = message.guild.channels.find(`name`, "rapports");
   if(!kickChannel) return message.channel.send("Je ne peux pas le kick car le salon #rapports est inexistant, merci de le crée.");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed);

}

//db!ban <utilisateur> <raison>
if (message.content.startsWith(prefix + "ban")){

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!args[0]) return message.channel.send("Va falloir choisir quelqu'un, je suis pas devin, et je ne vais pas deviner la personne pour toi.");
    if(!bUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:");
    if (bUser.id == message.author.id) return message.reply('Tu veux te bannir toi même ?! Tu est **vraiment** étrange... :cold_sweat: ');
    if (bUser.id == client.user.id) return message.reply('TU VEUX ME BANNIR !? :sob:')
    let bReason = args.join(" ").slice(26);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Non, tu ne peux pas ! *ban run away*");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nan, il a des privililèges qui m'empêche de faire sa. *ban run away*");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**~|Bannissement|~**")
    .setColor("#bc0000")
    .setThumbnail("https://pbs.twimg.com/media/C9kEEmbXUAEX3r6.png")
    .addField("Utilisateur banni: ", `${bUser} avec l'ID ${bUser.id}`)
    .addField("Banni par: ", `<@${message.author.id}> avec l'ID ${message.author.id}`)
    .addField("Banni a partir du salon: ", message.channel)
    .addField("Le: ", message.createdAt)
    .addField("Raison: ", bReason);

    let banChannel = message.guild.channels.find(`name`, "rapports");
    if(!banChannel) return message.channel.send("Je ne peux pas le bannir car le salon #rapports est inexistant, merci de le crée.");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);

}


//db!hug <membre>
if (message.content.startsWith(prefix + "hug")){

let toHug = message.mentions.users.first() || client.users.get(args[0]);
 if (!toHug) return message.channel.send("Alors, euh... Je ne sait pas si caliner l'air est la meilleur chose.");
 if (toHug.id == message.author.id) return message.channel.send("Te faire un calin toi même ? Pourquoi pas, c'est toi qui voit.");
 if (toHug.id == client.user.id) return message.reply("me faire a calin a moi et comme faire un calin a quelqu'un qui n'éxiste pas, enfaite...");
var replies = ["https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716", "https://media1.tenor.com/images/b87f8b1e2732c534a00937ffb24baa79/tenor.gif?itemid=9136391", "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589", "https://media1.tenor.com/images/a2b621c6c769eee24e03b97990c15699/tenor.gif?itemid=4631839", "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432", "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toHug.username}**, tu reçois un gros calin de la part de **${message.author.username}** ! :wink: `)
 .setColor("#ff30ce")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}

//db!avatar
if (message.content.startsWith(prefix + "avatar")){

let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let avatared = message.mentions.users.first();
if(!avatared) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:");
if (user.id == message.author.id) return message.reply("Et bien... voici ton avatar. On va juste dire que tu as perdu l'image sur ton système et que tu souhaite la récup'. Okay ? " + message.author.avatarURL);
	message.channel.send("Ceci est l'avatar de " + avatared + ", magnifique n'est-ce pas ? Ci-dessous un lien pour le lui voler. *Tu vas pas faire ça quand même ?*" + avatared.avatarURL);

}

//db!giverole
if (message.content.startsWith(prefix + "giverole")){

    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("Nop, tu n'as pas les droits pour cette commande ! *giverole run away* ")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Je n'ai pas trouver l'utilisateur :sweat:");
    let role = args.slice(2).join(" ");
    if(!role) return message.reply("Il faut préciser le nom d'un rôle, je suis pas devin moi ! :sweat_smile:");
    let gRole = message.guild.roles.find("name", role);
    if(!gRole) return message.reply("Je n'ai pas trouver le rôle.");

   if(!rMember.roles.has(gRole.id)) return message.reply("Il possède déja ce rôle.")
   (rMember.addRole(gRole.id));
try{

     var giveEmbed = new Discord.RichEmbed()
      .setColor("#00ff00")
      .addField("SUCCÈS !", `Le rôle "${gRole.name}" a bien été donner a **${rMember}**.`);


    }catch(e){}
    message.delete();
    return message.channel.send(giveEmbed);

  }


//db!removerole
if (message.content.startsWith(prefix + "removerole")){

    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("Nop, tu n'as pas les droits pour cette commande ! *removerole run away* ")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Je n'ai pas trouver l'utilisateur :sweat:");
    let role = args.slice(2).join(" ");
    if(!role) return message.reply("Il faut préciser le nom d'un rôle, je suis pas devin moi ! :sweat_smile:");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Je n'ai pas trouver le rôle.");

if(!rMember.roles.has(gRole.id)) return message.reply("Je ne peux pas retirer un rôle qu'il n'a pas !");
  (rMember.removeRole(gRole.id));

 try{
   var removeEmbed = new Discord.RichEmbed()
   .setColor("#ff0000")
   .addField("SUCCÈS !", (`Le rôle "${gRole.name}" a bien été retiré a **${rMember}**.`))

 }catch(e){}
  message.delete();
  return message.channel.send(removeEmbed);

}

//db!doggo
if (message.content.startsWith(prefix + "doggo")){
  
  let { body } = await superagent
  
  .get(`https://random.dog/woof.json`);  

  var dogembed = new Discord.RichEmbed()
   .setColor("#ffbb68")
   .setTitle("Ouaf ! :dog: *(Certaines images ne sont pas suportés.)*")
   .setImage(body.url);

  message.channel.send(dogembed)
}

//db!eval
if (message.content.startsWith(prefix + "eval")){  
  if (message.author.id == 191272823170269184 || message.author.id == 361225964417449985) {
   
  try {
        const code = args.join(" ");
    if(code.match("process.env.TOKEN")) return message.channel.send(":no_entry_sign: Besoin d'un coup de main ? Tu te crois chez ta maman a tenter de prendre mon token ? :smirk:");
 
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        message.channel.send(clean(evaled), {code:"xl"});
    
      } catch (err) {
        message.channel.send(`\`ERREUR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }  else {
message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *eval run away.*");
}
}
//db!coins
if (message.content.startsWith(prefix + "coins")){  
  
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let uCoins = coins[message.author.id].coins;
  
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor("Porte monnaie de " + message.author.username)
  .setThumbnail("http://www.pngmart.com/files/3/Money-Bag-PNG-File.png")
  .setColor("#2f7c2e")
  .addField("Tu possède: ", uCoins + " pièces ! <:coins:443940640103858176>")
  
message.channel.send(coinEmbed)  

}
  
//db!pay
if (message.content.startsWith(prefix + "pay")) {
 
if(!coins[message.author.id]){
  return message.reply("Tu n'a pas de pièces !")
}
  
  let pUser = message.mentions.users.first() || message.guild.members.get(args[0])
  if (isNaN(args[1])) return message.channel.send("Veuillez mettre un numéro.")
  if (args[1].startsWith("-")) return message.channel.send("Un nombre négatif, Carrement ?")
  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;
    if(sCoins < args[1]) return message.reply("Tu n'as pas assez de pièces !");
  
  coins[message.author.id]= {
    coins: sCoins - parseInt(args[1])
  
  }; 

       coins[pUser.id] = { 
    coins: pCoins + parseInt(args[1])
  };
  
  message.channel.send(`${pUser} a reçu ${args[1]} pièces par ${message.author} !`)
  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if(err) console.log(err)
});
}

//db!rps
  if (message.content.startsWith(prefix + "rps")){
    
    function rand(low, high) {
      return Math.random() * (high + 1 - low) + low | 0;
    }
  const rpsargs = message.content.split(" ").slice(1).join(" ");
    
      //choix
      let computer_choice = rand(0,2);
let user_choice;
if (args[0].toLowerCase() == "pierre") { 
user_choice = 0 

} else
 if (args[0].toLowerCase() == "feuille") {
user_choice = 1

} else 
if (args[0].toLowerCase() == "ciseaux") {
user_choice = 2
} else {
message.channel.send("Alors, il faut choisir entre `feuille`, `ciseaux` ou `pierre` et rien d'autres.")
return;
}
      if (computer_choice == user_choice) {
       message.channel.send("**Égalité !** <:doggy:435146226527240213>")
        
      }
      if (computer_choice == 0 && user_choice == 2) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu !**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":scissors: | Ciseaux !")
        .addField("J'ai choisi: ", ":punch: | Pierre !")
        
    message.channel.send(rpsEmbed);
        
      }
      if (computer_choice == 2 && user_choice == 0) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e) !**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":punch: | Pierre !")
        .addField("J'ai choisi: ", ":scissors: | Ciseaux !")
        
    message.channel.send(rpsEmbed);
      }
      if (computer_choice == 1 && user_choice == 0) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu !**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":punch: | Pierre !")
        .addField("J'ai choisi: ", ":page_facing_up: | Feuille !")
        
    message.channel.send(rpsEmbed);
      }
      if (computer_choice == 0 && user_choice == 1) {
          var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e)!**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":page_facing_up: | Feuille !")
        .addField("J'ai choisi: ", ":punch: | Pierre !")
        
    message.channel.send(rpsEmbed);
        
      }
      if (computer_choice == 1 && user_choice == 2) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e)!**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":scissors: | Ciseaux !")
        .addField("J'ai choisi: ", ":page_facing_up: | Feuille !")
        
    message.channel.send(rpsEmbed);
        
      }
      if (computer_choice == 2 && user_choice == 1) {
       var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu !**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":page_facing_up: | Feuille !")
        .addField("J'ai choisi: ", ":scissors: | Ciseaux !")
        
    message.channel.send(rpsEmbed);
        
      }
  
}

//db!slap
  if (message.content.startsWith(prefix + "slap")){

let toSlap = message.mentions.users.first() || client.users.get(args[0]);
 if (!toSlap) return message.channel.send("**NE FRAPPE PAS L'AIR !! ELLE NE T'A RIEN FAIT !** :angry: ");
 if (toSlap.id == message.author.id) return message.reply("le masochisme est la recherche du plaisir dans la douleur. Cette douleur peut être psychologique (humiliation) ou physique. Le terme Masochisme dérive du nom de l'écrivain allemand Leopold von Sacher-Masoch. *Source: Wikipedia*");
 if (toSlap.id == client.user.id) return message.reply("pourquoi tu veux me taper ? ;-;");
var replies = ["https://media1.tenor.com/images/919b344fbd2afd7dd248174856fb04be/tenor.gif?itemid=5737764",  "https://media1.tenor.com/images/39217af96b95eb7d4e2df39b53b6597f/tenor.gif?itemid=5392081", "https://media1.tenor.com/images/aca6a67d2e00f8ca5a8a5b3083ea8982/tenor.gif?itemid=11586452", "https://media1.tenor.com/images/8de30b9881d46b6750cbd0ef7e0ed546/tenor.gif?itemid=5305087", "https://media1.tenor.com/images/b5e01b67aa9f5f499573f7d6ebe75c18/tenor.gif?itemid=5646326", "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956", "https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028", "https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif?itemid=4922649", "https://media.tenor.com/images/74b79a7dc96b93b0e47adab94adcf25c/tenor.gif"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toSlap.username}**, tu reçois une claque de la part de **${message.author.username}** !`)
 .setColor("#ff0000")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}  
  
//db!kiss
  if (message.content.startsWith(prefix + "kiss")){

let toKiss = message.mentions.users.first() || client.users.get(args[0]);
 if (!toKiss) return message.channel.send("Embrasser le vent, pourquoi pas...");
 if (toKiss.id == message.author.id) return message.channel.send("Toi. Tu est sûrement célibataire.");
 if (toKiss.id == client.user.id) return message.channel.send("**0w0**");
var replies = ["https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865", "https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif?itemid=10356314", "https://media1.tenor.com/images/896519dafbd82b9b924b575e3076708d/tenor.gif?itemid=8811697", "https://media1.tenor.com/images/632a3db90c6ecd87f1242605f92120c7/tenor.gif?itemid=5608449", "https://media1.tenor.com/images/0f2aac2ac7d18ee23c82890e617f3ae1/tenor.gif?itemid=7905645", "https://media1.tenor.com/images/356f5b06ce6bdb2c46a8c9c2685e18eb/tenor.gif?itemid=4797281", "https://media1.tenor.com/images/6bf4432cf7abbcce4896275b83b7135c/tenor.gif?itemid=10081644"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toKiss.username}**, tu reçois un bisous de la part de **${message.author.username}** !`)
 .setColor("#ffb5f0")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}   
    
//db!bite
  if (message.content.startsWith(prefix + "bite")){

let toBite = message.mentions.users.first() || client.users.get(args[0]);
 if (!toBite) return message.channel.send("Tu veux mordre l'air ? Je te souhaite bonne chance.");
 if (toBite.id == message.author.id) return message.channel.send("Te mordre ? Futur vampire ?");
 if (toBite.id == client.user.id) return message.channel.send("Euh... Ouais, nan.");
var replies = ["https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627", "https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565", "https://media1.tenor.com/images/8a853337af58ee7c16d05d6e7c5ce31d/tenor.gif?itemid=4966068", "https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753", "https://media1.tenor.com/images/959e4c3712933367c0a553d7a124c925/tenor.gif?itemid=11546989", "https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif?itemid=9051585", "https://media1.tenor.com/images/3922be70bacbd804ee95792a4bd6bd61/tenor.gif?itemid=7748718"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toBite.username}**, tu te fait mordre part **${message.author.username}** !`)
 .setColor("#ff7070")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}   

//db!pileouface
  if (message.content.startsWith(prefix + "pileouface")) {
let p = "Et c'est pile !",
    f = "Et c'est face !" 
    var x = getRandomInt(0, 8)
    if (x < 4) {
message.reply(p)
} else {
message.reply(f)
}
}
 
//db!ui  
  if (message.content.startsWith(prefix + "ui")) {
    let ment = message.mentions.users.first();
  if(!ment) {
    let nomentembed = new Discord.RichEmbed()
    .addField("Ton Tag", message.author.tag)
		.addField("Ton ID", message.author.id)
		.addField("Statut ", message.author.presence.status)
		.addField("Sur Discord depuis", `${message.author.createdAt.format("dd-MM-Y à HH:mm:SS")}`)
    .addField("Ton meilleur role", message.member.highestRole.name)
    .setThumbnail(message.author.avatarURL)
    .setColor('RANDOM')
		message.channel.send(nomentembed)
  }
		let embed = new Discord.RichEmbed()
		.addField("Tag", ment.tag)
		.addField("ID", ment.id)
		.addField("Statut :", ment.presence.status)
		.addField("Sur discord depuis", `${ment.createdAt.format("dd-MM-Y à HH:mm:SS")}`)
    .addField("Son meilleur role", message.member.highestRole.name)
    .setThumbnail(ment.avatarURL)
    .setColor('RANDOM')
		message.channel.send(embed)
}

//db!$rps
   if (message.content.startsWith(prefix + "$rps")){
    
    function rand(low, high) {
      return Math.random() * (high + 1 - low) + low | 0;
    }
  const rpsargs = message.content.split(" ").slice(1).join(" ");
     
     if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let uCoins = coins[message.author.id].coins;
    
      let computer_choice = rand(0,2);
let user_choice;
if (args[0] == "pierre") {
user_choice = 0 

} else
 if (args[0] == "feuille") {
user_choice = 1

} else 
if (args[0] == "ciseaux") {
user_choice = 2
} else {
message.channel.send("Alors, il faut choisir entre `feuille`, `ciseaux` ou `pierre` et rien d'autres.")
return;
}
      if (computer_choice == user_choice) {
       message.channel.send("**Égalité !** <:doggy:435146226527240213>")
        
      }
      if (computer_choice == 0 && user_choice == 2) {
         var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu 10 pièces!**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":scissors: | Ciseaux !")
        .addField("J'ai choisi: ", ":punch: | Pierre !")
        .addField("Ton porte monnaie actuel: ", uCoins - 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
    
        coins[message.author.id] = {
    coins: coins[message.author.id].coins - 10
      
        }}
      if (computer_choice == 2 && user_choice == 0) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e) 10 pièces !**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":punch: | Pierre !")
        .addField("J'ai choisi: ", ":scissors: | Ciseaux !")
        .addField("Ton porte monnaie actuel: ", uCoins + 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins + 10
          
      }}
      if (computer_choice == 1 && user_choice == 0) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu 10 pièces !**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":punch: | Pierre !")
        .addField("J'ai choisi: ", ":page_facing_up: | Feuille !")
        .addField("Ton porte monnaie actuel: ", uCoins - 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins - 10
        
      }}
      if (computer_choice == 0 && user_choice == 1) {
          var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e) 10 pièces !**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":page_facing_up: | Feuille !")
        .addField("J'ai choisi: ", ":punch: | Pierre !")
        .addField("Ton porte monnaie actuel: ", uCoins + 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins + 10
      }}
      if (computer_choice == 1 && user_choice == 2) {
        var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as gagné(e) 10 pièces !**")
        .setColor("#60c435")
        .addField("Tu as choisi: ", ":scissors: | Ciseaux !")
        .addField("J'ai choisi: ", ":page_facing_up: | Feuille !")
        .addField("Ton porte monnaie actuel: ", uCoins + 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins + 10
        
      }}
      if (computer_choice == 2 && user_choice == 1) {
       var rpsEmbed = new Discord.RichEmbed()
        .setTitle("**Tu as perdu 10 pièces !**")
        .setColor("#e22500")
        .addField("Tu as choisi: ", ":page_facing_up: | Feuille !")
        .addField("J'ai choisi: ", ":scissors: | Ciseaux !")
        .addField("Ton porte monnaie actuel: ", uCoins - 10 + " pièces ! <:coins:443940640103858176>")
        
    message.channel.send(rpsEmbed);
        coins[message.author.id] = {
    coins: coins[message.author.id].coins - 10
        
        }}
  
}

//db!cat
  
if (message.content.startsWith(prefix + "cat")){

  var replies = ["https://purr.objects-us-west-1.dream.io/i/c9pLd.jpg","https://purr.objects-us-west-1.dream.io/i/YGb6f.jpg","https://purr.objects-us-west-1.dream.io/i/4VewR.jpg","https://purr.objects-us-west-1.dream.io/i/CnCkq.jpg","https://purr.objects-us-west-1.dream.io/i/unnamed-1.jpg","https://purr.objects-us-west-1.dream.io/i/IekT6.jpg","http://random.cat/view/1394","https://purr.objects-us-west-1.dream.io/i/dLIZu.jpg","https://purr.objects-us-west-1.dream.io/i/NaJaQ.jpg","https://purr.objects-us-west-1.dream.io/i/44jtgl.jpg","https://purr.objects-us-west-1.dream.io/i/img_20140920_145408.jpg","http://img-comment-fun.9cache.com/media/c81c59c9145641080812687141_700wa_0.gif", "https://reseauinternational.net/wp-content/uploads/2015/10/gifa-cat-surprised.gif", "http://img4.hostingpics.net/pics/113686catmousetabletpounce.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vslRfH69TDhw9to9dtiBi9fwtiOwjHJ7HRSvi7wYSCvqP6rl","https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw=="," http://www.ordanburdansurdan.com/wp-content/uploads/2017/06/oxgkvrvnd5o-1.jpg", "https://ichef.bbci.co.uk/news/660/cpsprodpb/71E1/production/_99735192_gettyimages-459467912.jpg", "https://cms.kienthuc.net.vn/zoom/500/Uploaded/ctvkhoahoc/2017_10_20/10_NMHD.jpg", "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg", "https://i2-prod.mirror.co.uk/incoming/article11812659.ece/ALTERNATES/s1200/The-Feline-World-Gathers-For-The-Supreme-Cat-Show-2017.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2017/11/minimalist-cat-art-subreddit-10.jpg", "https://metrouk2.files.wordpress.com/2017/11/capture16.png?w=748&h=706&crop=1"]

var result = Math.floor((Math.random() * replies.length));
  
  let botembed = new Discord.RichEmbed()
 .setDescription(`Miaou ! :cat:`)
 .setColor("#ff7070")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}
  
//db!oazo
  if (message.content.startsWith(prefix + "oazo")){

  var replies = ["https://pcenerelli.files.wordpress.com/2012/09/red-winged_blackbird-male_2-12-05-12-web.jpg","http://4.bp.blogspot.com/-SFSXd_pW6Ws/TfqLE45M5WI/AAAAAAAABLk/NwUN9qYMn7c/s400/birds_with_arms5.jpg","https://4.bp.blogspot.com/-nJEMY6QveKA/V6Ebd7DfHLI/AAAAAAAAFHk/wWLcWeo0ILw9xawqhwy3728djyhgFutzwCLcB/s1600/American%2BPygmy%2BKingfisher.jpg","https://i.pinimg.com/736x/b5/eb/86/b5eb863e6d0adcfbc047d8e771387b56.jpg","https://i1.wp.com/www.windycityparrot.com/images/assets/images/products/graphics/00000001/custom_budgies_many_stick_549w.jpg?w=840","https://i.ytimg.com/vi/KwORJU3Czws/maxresdefault.jpg","http://www.newhdwallpaper.in/wp-content/uploads/2014/09/Flying-bird-beautiful-wallpaper.jpg","http://feedinspiration.com/wp-content/uploads/2015/04/Some-Random-Bird.jpg","https://randomfunnypicture.com/wp-content/uploads/2011/06/bread-one-pigeon-zero.png",]

var result = Math.floor((Math.random() * replies.length));
  
  let oazoEmbed = new Discord.RichEmbed()
 .setDescription(`Cui cui ! :bird:`)
 .setColor("#38c600")
 .setImage(replies[result]);


 return message.channel.send(oazoEmbed);
  
  }
  
//db!level
  if (message.content.startsWith(prefix + "level")){
    
    if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
       level: 1
    };
  }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = curlvl * 300;
    let difference = nxtLvlXp - curxp;
    
    
    let ment = message.mentions.users.first();
  if(!ment) {
    let lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Niveau:", curlvl - 1, true)
    .addField("XP:", curxp, true)
    .setFooter(`Il te reste ${difference} XP avant de passer au niveau ${curlvl} !`, "https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png");
    
    message.channel.send(lvlEmbed)
  }
    let mentcurxp = xp[ment.id].xp;
    let mentcurlvl = xp[ment.id].level;
    let mentnxtLvlXp = curlvl * 300;
    let mentdifference = nxtLvlXp - curxp;
    
    let lvlEmbed = new Discord.RichEmbed()
    
    .setAuthor(ment.username)
    .setColor("RANDOM")
    .setThumbnail(ment.avatarURL)
    .addField("Niveau:", mentcurlvl - 1, true)
    .addField("XP:", mentcurxp, true)
    
    message.channel.send(lvlEmbed)
  }
  
  //db!poasson
  
  if (message.content.startsWith(prefix + "poasson")){

  var replies = ["https://thumbs-prod.si-cdn.com/c86on9yeBmn5_G7b4ng_ZQWjiII=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg","https://d2kwjcq8j5htsz.cloudfront.net/1970/01/30153329/clownfish.jpg","https://blog.auntybinnaz.com/wp-content/uploads/fish.jpg","https://pbs.twimg.com/profile_images/448238813773430784/w4lr82sW.jpeg","http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2017/10/23/berkeley-city-council-bans-use-fish-as-prizes-at-carnivals/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1508750077165.jpg?ve=1&tl=1&text=big-top-image","https://www.worldofbanter.com/wp-content/uploads/2017/06/funny-fish-photo-1.jpg","http://www.funnyjunksite.com/pictures/wp-content/uploads/2015/04/Funny-Man-Fish-Image.jpg","https://farm1.staticflickr.com/151/430446668_6ee8c2dc17_b.jpg"]

var result = Math.floor((Math.random() * replies.length));
  
  let botembed = new Discord.RichEmbed()
 .setDescription(`Bl bl bl ! :fish: `)
 .setColor("#0095c6")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}
  
//db!buy
  ///embed liste
  if (message.content.startsWith(prefix + "buy")){
     let categories = []; 
     if (!args.join(" ")) { 

        for (var i in items) { 
        if (!categories.includes(items[i].type)) {
           categories.push(items[i].type)
         }
        }
              const embed = new Discord.RichEmbed()
                .setDescription(`Items disponible à l'achat`)
                .setColor("RANDOM")

              for (var i = 0; i < categories.length; i++) { 
              var tempDesc = '';
              for (var c in items) { 
              if (categories[i] === items[c].type) {

                 tempDesc += `**${items[c].name}** - ${items[c].price} pieces - ${items[c].desc}\n`;

         }
        }
            embed.addField(categories[i], tempDesc);

        }

            return message.channel.send({
                embed
        }); 
       }

         

        
        let itemName = '';
        let itemPrice = 0;
        let itemDesc = '';

        for (var i in items) { 
            if (args.join(" ").trim().toUpperCase() === items[i].name.toUpperCase()) {
                itemName = items[i].name;
                itemPrice = items[i].price;
                itemDesc = items[i].desc;
            }
        }

        ///réponses
        if (itemName === '') {
            return message.channel.send(`L'item **${args.join(" ").trim()}** n'a pas été trouver.`)
        }

        
        economy.fetchBalance(message.author.id + message.guild.id).then((i) => { 
            if (i.coins <= itemPrice) { 
                
                return message.channel.send(`Tu n'as pas assez de pièces pour acheter cela.`);
            }
        
          
          
            economy.updateBalance(message.author.id + message.guild.id, parseInt(`-${itemPrice}`)).then((i) => {

                message.channel.send('**Tu as acheter ' + itemName + '!**');
              
              fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if (err) console.log(err)

            ///items en vente    
                let memberrole = message.member;
                if (itemName === 'rouge') {
                  let role = message.guild.roles.find("name", "rouge");
                  
                  if (!role){

                  message.guild.createRole({
                     name: "rouge",
                     color: "#ff0000",
                     permissions:[]
                     })
                  }
                  memberrole.addRole(role).catch(console.error);
                }
              if (itemName === 'bleu') {
                    message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "bleu"));
                  if (!itemName){
                  try{
                   itemName = message.guild.createRole({
                     name: "bleu",
                     color: "#0099ff",
                     permissions:[]
                     })                
                      message.guild.channels.ea()
                  }catch(e){
                     console.log(e.stack);
                  }
                }}
            if (itemName === 'blurple') {
                    message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "blurple"));
                  if (!itemName){
                  try{
                   itemName = message.guild.createRole({
                     name: "blurple",
                     color: "#7289DA",
                     permissions:[]
                     })                                  
                      message.guild.channels
                  }catch(e){
                     console.log(e.stack);
                  }
                }}
            
            })
          })});
           }
       
//db!mute <membre> s/m/h/d
if (message.content.startsWith(prefix + "mute")){
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Non, tu ne peux pas ! *mute run away*");
  
  if (isNaN(args[1])){
    return message.channel.send("Non, il faut des chiffres et uniquement des chiffres.")
  }
  //vvvv Création role vvvvv
     let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
     if(!tomute) return message.reply("Je n'ai pas trouver l'utilisateur :sweat:");
     if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("je ne peux pas le mute, il a la permission de **gérer les messages**, m'interdisant donc de le mute !");
     let muterole = message.guild.roles.find(`name`, "muté");
     if(!muterole){
   try{
     message.channel.send('**Rôle "muté" inexistant. Création du rôle...**')
     muterole = await message.guild.createRole({
      name: "muté",
      color: "#464646",
      permissions: []
      })
   message.guild.channels.forEach(async (channel, id) => {
    await channel.overwritePermissions(muterole, {
       SEND_MESSAGES: false,
       ADD_REACTIONS: false
      });
     });
     message.channel.send('**Rôle "muté" crée avec succès !**')
    }catch(e){
   console.log(e.stack);
   }
  }
  
  
//^^^^ Création role ^^^^
 
 let mutetime = args[1];
 if(!mutetime) return message.reply("il faut que tu donne un temps ! *1000ms = 1s; 60000 = 1min; 600000 = 10min; 3600000 = 1h*");
  
   
   await(tomute.addRole(muterole.id));
   message.channel.send(`<@${tomute.id}> a été mute pendant ${ms(ms(mutetime))}`);
   
   setTimeout(function(){
     tomute.removeRole(muterole.id);
     message.channel.send(`<@${tomute.id}> n'est plus mute !`);
   }, ms(mutetime));
  
  
 
 }
  
 //db! 
  
  
//////////////////////////////////////////////// 
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
////////////////////////////////////////////////
 
  ///Partie bot musique qui reviendra un jour ;)
//db!play
if (message.content.startsWith(prefix + "play")){

 if (!args[0]) {
   message.channel.send(":musical_note: Merci de bien vouloir mettre un lien.");
    return;
  }
  if (!message.member.voiceChannel) {
    message.channel.send(":musical_note:  Tu doit être dans un salon vocal !");
    return;
  }

  if(!servers[message.guild.id]) servers[message.guild.id] = {

    queue: []
  };

  var server = servers[message.guild.id];

  server.queue.push(args[0]);

  if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
    play(connection, message);
message.channel.send("Musique ajoutée a la playlist !")
});
}

//db!skip
if (message.content.startsWith(prefix + "skip")){
  var server = servers[message.guild.id];
  message.channel.send(":track_next: Musique passée !")

  if (server.dispatcher) server.dispatcher.end();
}

//db!stop
if (message.content.startsWith(prefix + "stop")){
   var server = servers[message.guild.id];
   message.channel.send(":stop_button: J'ai bien quitter le salon !")

   if (!message.guild.voiceConnection) message.member.voiceChannel.leave();
}

  
///Fin partie bot musique  


});

client.login(process.env.TOKEN)
