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

let coins = require("./coins.json");
var fs = require("fs");

function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
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
     client.user.setActivity('db!help')
});
const prefix = 'db!'

client.on('message', async (message) => {
	var args = message.content.substring(prefix.length).split(" ");
     if(message.author.bot) return;

if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}
 
//coins.json 
let coinAmt = Math.floor(Math.random() * 20) + 1;
let baseAmt = Math.floor(Math.random() * 20) + 1;

  
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
///////
  
  
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
var question = args.slice(1).join(" ")
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
	.addField("Rejoin le:", message.member.joinedAt)
  .addField("Crée le:", message.guild.createdAt)
  .addField("Membres total:", message.guild.memberCount)

	return message.channel.send(serverembed);
}

//db!help
if (message.content.startsWith(prefix + "help")){

	let botembed = new Discord.RichEmbed()
	.setTitle("Bonjour, je suis l'aide ! Et voici mes commandes ! :smiley:")
	.setColor("#00C1FF")
	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emoji_u1f4dd.svg/1000px-Emoji_u1f4dd.svg.png")
  .addField("Fun: ", "`8ball`, `sayd`, `avatar`, `doggo`")
  .addField("Action/RP: ", "`hug`, `slap`, `kiss`, `bite`")
  .addField("Administration: ", "`report`, pour + de commandes, faites db!adminhelp")
  .addField("Musique: **[EN MAINTENANCE]**", "`play`, `skip`, `stop`")
  .addField("Autre:", "`ping`, `infoserveur`, `coins`, `help`")
  .addField("Owner bot seul.:", "`setgame`, `setstream`, `setwatch`, `eval`")
  .addField("Ajoute moi sur ton serveur !", "[Clique ici! ^-^](https://discordapp.com/api/oauth2/authorize?client_id=441409139294601216&permissions=8&scope=bot)");
  

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
  .addField("giverole <membre> <role>", "Pour donner a un membre le rôle choisi. *[INSTABLE]*")
  .addField("removerole <membre> <role>", "Pour retirer a un membre le rôle choisi.")

return message.channel.send(botembed);
}

  

//db!setgame
if (message.content.startsWith(prefix + "setgame")){
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setgame run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var game = args.slice(1).join(" ")
        client.user.setActivity(game, {
        'type': 'PLAYING'

})};
  
//db!setstream
if (message.content.startsWith(prefix + "setstream")){
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setstream run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var game = args.slice(1).join(" ")
        client.user.setActivity(game, {
        'type': 'STREAMING',
        'url': "https://www.twitch.tv/thedarknightshoww"

})};
  
//db!setwatch  
if (message.content.startsWith(prefix + "setwatch")){
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setstream run away.*")
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var game = args.slice(1).join(" ")
        client.user.setActivity(game, {
        'type': 'WATCHING',

})};
  
//db!sayd <message>
if (message.content.startsWith(prefix + "sayd")){
var botmessage = args.slice(1).join(" ");
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

      var reason = args.join(" ").slice(29);

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
  if (message.author.id != 191272823170269184) return message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *eval run away.*");
   
  try {
        const code = args.slice(1).join(" ");
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERREUR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
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
  
//db!pay [INSTABLE]
//if (message.content.startsWith(prefix + "pay")) {
 
//if(!coins[message.author.id]){
//  return message.reply("Tu n'a pas de pièces !")
//}
  
//  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  
//  if(!coins[pUser.id]){
//    coins[pUser.id] = {
//      coins: 0
//    };
//  }

//  let pCoins = coins[pUser.id].coins;
//  let sCoins = coins[message.author.id].coins;
  
//  if(sCoins < args[0]) return message.reply("Tu n'as pas assez de pièces !");
  
//  coins[message.author.id]= {
//    coins: sCoins - parseInt(args[1])
  
//  };        
//        coins[pUser.id] = {
//    coins: pCoins + parseInt(args[1])
//  };
  
//  message.channel.send(`${pUser} a reçu ${args[2]} pièces par ${message.author} !`)
  
//fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
//  if(err) console.log(err)
//});
//}
  
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
  
///Partie bot musique
//db!play
//if (message.content.startsWith(prefix + "play")){

// if (!args[1]) {
//   message.channel.sendMessage(":musical_note: Merci de bien vouloir mettre un lien valide.");
//    return;
//  }

//  if (!message.member.voiceChannel) {
//    message.channel.sendMessage(":musical_note:  Tu doit être dans un salon vocal !");
//    return;
//  }

//  if(!servers[message.guild.id]) servers[message.guild.id] = {

//    queue: []
//  };

//  var server = servers[message.guild.id];

//  server.queue.push(args[1]);

//  if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
//    play(connection, message);

//});
//}

//db!skip
//if (message.content.startsWith(prefix + "skip")){
//  var server = servers[message.guild.id];

//  if (server.dispatcher) server.dispatcher.end();
//}

//db!stop
//if (message.content.startsWith(prefix + "stop")){
//   var server = servers[message.guild.id];

//   if (!message.guild.voiceConnection) message.guild.voiceChannel.disconnect();
//}

  
///Fin partie bot musique  


});

client.login(process.env.TOKEN)

///process.env.TOKEN
