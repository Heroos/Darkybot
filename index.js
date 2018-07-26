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
const client = new Discord.Client() 
      client.commands = new Discord.Collection();
const format = require("node.date-time");
const economy = require('discord-eco');
const ms = require("ms");
const prettyMs = require('pretty-ms');
const randomPuppy = require('random-puppy');
const randomCat = require('random-cat');
const db = require('quick.db');
const meme = require('memejs');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
var opus = require('node-opus');
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dblTOKEN, client)

const teams = require('./teams.json');
let interval;
function getTeam(guild, id) {
let role1 = guild.roles.get("451420902857375745")
let role2 = guild.roles.get("451463313302224916")
if (role1.members.get(id)) return 1;
if (role2.members.get(id)) return 2;
  return false;
}
var team1 = "Héros",
    team2 = "Vilains"  
const xprecent = []
// Create the encoder.
// Specify 48kHz sampling rate and 10ms frame size.
// NOTE: The decoder must use the same values when decoding the packets.
var rate = 48000;
var encoder = new opus.OpusEncoder( rate );


let coins = require("./coins.json");
var fs = require("fs");
let items = require("./items.json");
let help = require("./ComHelp.json");
let talkedRecently = [];
var table = {};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

 function play(connection, message) {
   var server = servers[message.guild.id];
 server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
 server.queue.shift();
 server.dispatcher.on("end", function() {
   if(server.queue[0]){
     play(connection, message)
   }else{
     connection.disconnect()
   }
     });
 }


var servers = {};

let act;
let acts;
client.on('warn', console.warn);
client.on('error', console.error);
client.on("ready", () => {
  console.log("Darkybot a bien démarrer !");
  console.log(`${client.user.username} est en ligne sur ${client.guilds.size} serveurs !`);

  dbl.on('posted', () => {
  console.log('DBL => Le compteur de serveur a bien été mis à jour !');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
  
  
let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${hours}h. ${minutes}min. ${seconds}s.`; 
  
dbl.getVotes().then(votes => {
    if (votes.find(vote => vote.id == vote)) console.log(`${votes.username} has voted!!!`)
});  
  
    var index = 0
 
    client.user.setStatus('Online')
  var interval = setInterval(() => {
    let activities = [{game: {name: `db!help  ■  ${client.guilds.size} serveurs !`,  type: 0}}, {game: {name: `db!help  ■  ${client.users.size} membres total !`, type: 0}}, {game: {name: `Votez pour moi sur DBL !`, url: "https://www.twitch.tv/Thedarknightshoww", type: 1}}]
    if(index == activities.length) index = 0
      client.user.setPresence(activities[index])
      index++
  }, 30000)
  
  
  /*client.user.setStatus('dnd')
  var interval = setInterval(() => {
    let activities = [{game: {name: `Maintenance majeure en cours.`,  type: 0}}, {game: {name: `Risque de non-réponse.`, type: 0}}, {game: {name: `Retour vers: pas d'horaire fixe`, type: 0}}]
    if(index == activities.length) index = 0
      client.user.setPresence(activities[index])
      index++
  }, 10000)*/
  

    
    
  
     acts = ['Une belle nuit d\'hiver', 'Une douce Nuit d\'été', 'Lors d\'une puissante rafale', 'A la saint-valentin', 'Au restaurant', 'Au ciel', 'Dans un café a chandelles :heart:', 'A la plage', 'Sur la terasse', 'Dans la rue']
       act = acts[getRandomInt(0, acts.length)]
});

//PREFIX
var prefix = 'db!'



fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commande non trouver.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} bien chargé !`);
    client.commands.set(props.help.name, props, );
    client.commands.set(props.help.aliases, props, );
  });
});


  
client.on("guildCreate", guild => {
  let guildCreateChannel = client.channels.get("440512900873060362");
   
    let joinEmbed = new Discord.RichEmbed()
     .setTitle('Serveur rejoint !')
     .setColor('#00c61a')
     .setThumbnail(guild.iconURL)
     .addField('Info serveur', `Nom: **${guild.name}** (\`${guild.id}\`) \nMembres: **${guild.members.size}**\nOwner: **${guild.owner.user.tag}** (\`${guild.owner.user.id}\`)`)
     .setTimestamp()
   
    guildCreateChannel.send(joinEmbed);
  
  let ServerOwn = guild.owner.user
ServerOwn.send("**Salut ! Merci de m'avoir inviter sur ton serveur ^-^**\n\nTu peux avoir un aperçu de toutes mes commandes en écrivant `db!help` dans un salon auquel j'ai accès.\nSi pendant que m'invitais tu as décocher la case \"Administrateur\", il serait donc possible que certaines de mes commandes ne fonctionne pas au mieux.\n\n**Lien utile:**\n\n**Mon site:** https://darkybotdc.glitch.me/ \n**Serveur support:** https://discord.gg/Y97BY7k")
  
  
});
  

client.on("guildDelete", guild => {
  let guildCreateDelete = client.channels.get("440512900873060362");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Serveur quitté')
    .setColor("#ff0000")
    .setThumbnail(guild.iconURL)
    .addField('Info serveur', `Nom: **${guild.name}** (\`${guild.id}\`) \nMembres: **${guild.members.size}**\nOwner: **${guild.owner.user.tag}** (\`${guild.owner.user.id}\`)`)
    .setTimestamp()
  
  guildCreateDelete.send(leaveEmbed);
});
/*function aov(message) {
if (message.content.startsWith(prefix + "aov") && message.channel.id = "465986283676893184"){
if (table.length) return message.channel.send("Une partie est déjà lancée !");
table.p = []
table.collecting = true
message.channel.send("Partie lancée, faites db!aj pour rejoindre la partie, une fois prêts, faites db!start")
}
  
if (message.content.startsWith(prefix + "aj") && message.channel.id = "465986283676893184") {
if (!table.collecting && table.start) return message.channel.send("La partie à déjà commencé!");
table.p.push(message.author.id);
message.channel.send("Inscrit dans le jeu, preparez vous!")
}
  
if (message.content.startsWith(prefix + "start") && message.channel.id = "465986283676893184") {
if (!table.length) return message.channel.send("Aucune partie n'est lancée.")
if (!table.p.length) return message.channel.send("Personne n'a rejoint la partie!")
if (!table.collecting) return message.channel.send("La partie à déjà commencé !");
table.collecting = false
table.start = true
message.channel.send("Lancement de la partie")
}*/
function confirmify(message, a1, a2) {
  var ans = ["confirm", "decline"]
message.channel.send("Alors?").then(() => {
  message.channel.awaitMessages(response => ans.includes(response.content) && a2.id == message.author.id, {
    max: 1,
    time: 1000000,
    errors: ['time'],
  })
  .then((collected) => {
      if (collected.first().content == "confirm") {
        message.channel.send("Parfait ! Tu gagne un point!")
      } else {
      message.channel.send("Bon bah pas de points pour chacun. ;-;")
      }
        message.channel.send("Preparez vous pour le prochain round...")
        setTimeout(() => {
          start(message, table)
        }, 10000)
    })
    .catch(() => {
      message.channel.send('Bon bah on refait une autre');
      start(message, table)
    });
});
}
function start(message, map) {
if (!table.start) return; // ==>
console.log(map)
var toAsk = client.users.get(map.p[getRandomInt(0, map.p.length)])
var asking = client.users.get(map.p[getRandomInt(0, map.p.length)])
console.log(toAsk + asking)
var v = ["son action", "sa verité"] //Ah bah c'est déjà fait
message.channel.send("Que **" + toAsk.username + "** se prepare pour avoir *" + v[getRandomInt(0, v.length)] + "*")
message.channel.send("Et que **" + asking.username + "** pose la question/action, \nt'as le droit de reflechir, mets juste un -- avant ton action pour la confirmer!").then(() => {
  message.channel.awaitMessages(response => response.author.id == asking.id && response.content.startsWith("--") , {
    max: 1,
    time: 1000000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`**${toAsk.username}**, À toi de faire : *${collected.first().content}*, quand à ${asking.username}, dites \`\`confirm\`\` s'il a effectué l'action/repondu à la question ou faites \`decline\` si vous êtes deçus de votre requête.`);
    confirmify(message, toAsk, asking)
    })
    .catch(() => {
      message.channel.send('Bref, il a passé trop de temps à poser la question, recommencons!');
    start(message, map)
    });
});
}
client.on('message', async (message) => {

  

     if(message.author.bot) return;
let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);
  // Citations.
  if (message.channel.id == '456478178240757775' || message.channel.id == '466959993418022951') {
if (message.content.startsWith('-')) return;
let cited = (message.mentions.users.first() ? message.mentions.users.first() : message.author)
let cite = (message.mentions.users.first() ? args.join(" ") : message.content)
let e = new Discord.RichEmbed()
if (message.attachments.size) e.setImage(message.attachments.first().url)
if (message.content) e.setDescription(`***"${cite}"***\n *~${cited.username} 2018*`)

  e.setFooter("Citation deposée par " + message.author.username)
  .setThumbnail(cited.avatarURL)
  .setColor('#f4a460')
message.channel.send(e)
message.delete()
}  
  if (!message.content.startsWith(prefix)) return;
    if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       return;
    }
  

     if (xprecent.indexOf(message.author.id) === -1) {
             xprecent.push(message.author.id);
  setTimeout(() => {
    xprecent.splice(xprecent.indexOf(message.author.id), 1);
  }, 30000);
   if (message.guild.id == '434832646896484352') {
var n1;
var n2;
for (let mes in teams) {
if (teams[mes].rank == 1) {
n1 += teams[mes].point
} else {
n2 += teams[mes].point
}
}
if (getTeam(message.guild, message.author.id)) {
if (!teams[message.author.id]) teams[message.author.id] = {
point : 1,
rank : getTeam(message.guild, message.author.id)
}

  if (teams[message.author.id].rank != getTeam(message.guild, message.author.id)) teams[message.author.id].rank = getTeam(message.guild, message.author.id)
  teams[message.author.id].point += (teams[message.author.id].rank == 1 && n1 > n2 ? 1 : 2)
  
  fs.writeFile('./teams.json', JSON.stringify(teams), (err) => {
  if (err) console.log(err)
  });
}
}
     }
  
 

  //event message

  
 //var args = message.content.substring(prefix.length).split(" ");
 
 /* if (message.channel == client.channels.get('446045762502000640')) {
  let num = parseInt(message.content)
if (isNaN(num)) {
  message.delete() 
  message.channel.send("Il faut compter, pas parler ! :p").then(msg => {message.delete(3000)});
    }
}*/

if (message.channel.id == "465986283676893184") {
if (message.content.startsWith(prefix + "aov")) {
if (table.collecting) return message.channel.send("Une partie est déjà lancée !");
table.p = []
table.collecting = true
message.channel.send("Partie lancée, faites db!aj pour rejoindre la partie, une fois prêts, faites db!start")
}
if (message.content.startsWith(prefix + "aj")) {
if (!table.collecting && table.start) return message.channel.send("La partie à déjà commencé!");
table.p.push(message.author.id);
message.channel.send("Inscrit dans le jeu, preparez vous!")
}
if (message.content.startsWith(prefix + "start")) {
if (!table.p.length) return message.channel.send("Personne n'a rejoint la partie!")
if (!table.collecting) return message.channel.send("La partie à déjà commencé !");
table.collecting = false
table.start = true
message.channel.send("Lancement de la partie")
start(message, table)
}
if (message.content.startsWith(prefix + "astop")) {
table.start = false
}
}
let cmd = message.content.split(" ")[0].slice(prefix.length).toLowerCase();
  let commandfile = client.commands.get(cmd); 
  if(commandfile) {
    if (!message.content.startsWith(prefix)) return;
    commandfile.run(client,message,args);
  }
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
}
  
let xp = require("./xp.json"); 
  
 /* let xpAdd = Math.floor(Math.random() * 5) + 2;


        if(!xp[message.author.id]){
          xp[message.author.id] = {
            xp: 0,
            level: 1
          };
        }
        let curxp = xp[message.author.id].xp;
        let curlvl = xp[message.author.id].level;
        let nxtLvl = xp[message.author.id].level * 600;
        xp[message.author.id].xp =  curxp + xpAdd;
        if(nxtLvl <= xp[message.author.id].xp){
          xp[message.author.id].level = curlvl + 1;


        }
          fs.writeFile("./xp2.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
          });

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
   };
}*/
  
  
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
 
if (message.guild.id == "264445053596991498" || message.guild.id == "110373943822540800") {
  return;
}else{

   let lvlup = new Discord.RichEmbed()
   .setTitle("**LEVEL UP POUR " + (message.author.tag) + " !**")
   .setThumbnail("https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png")
   .setColor("RANDOM")
   .addField("Tu est maintenant:", `niveau ${curlvl + 1} !`);
   
   message.channel.send(lvlup).then(msg => {msg.delete(3000)})
}}
   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
   if(err) console.log(err)
   });
  



                                                                                
              //Mention bot --> donne prefix
  if (message.content.startsWith('<@441409139294601216>')) {
  
  message.channel.send("Bonjour ! Mon préfix est `db!` !")
  } 
  

if (message.channel.id == '456579123050184714' || message.channel.id == '428954864706650123') {
if (message.content.startsWith('(')) return;

args = message.content.split(' ')

if (message.content == 'changelieu')  act = acts[getRandomInt(0, acts.length)]

let cited = (message.mentions.users.first()  ? message.mentions.users.first() : client.users.find('username', args[0]) || client.users.get(args[0]) || message.author)

let cite = (message.mentions.users.first() || client.users.find('username', args[0]) || client.users.get(args[0]) ? args.slice(1).join(" ") : message.content)

let e = new Discord.RichEmbed()
  .setAuthor(cited.username + " :", cited.avatarURL)
  .setDescription(cite)
  .setColor(message.guild.members.get(cited.id).highestRole.color)
  .setFooter(act)
if (message.content.includes('action:')) {

e.setDescription('***' + cited.username+' '+ args.slice(args.indexOf('action:') + 1).join(" ") + '***')
}
if(message.content.startsWith('rp:')) {
e.setDescription('***' + args.slice(args.indexOf('rp:')+ 1).join(" ") + '***')
   e.setAuthor('Narrateur', client.user.avatarURL)
}
message.channel.send(e)
message.delete()
}
//
// PARTIE TEAMMS
//

  
  
  
  
  
  
  
  /*
 $$$$$$\            $$\                   $$\                           $$\     
$$  __$$\           \__|                  $$ |                          $$ |    
$$ /  \__| $$$$$$\  $$\ $$$$$$$\        $$$$$$\    $$$$$$\   $$$$$$$\ $$$$$$\   
$$ |      $$  __$$\ $$ |$$  __$$\       \_$$  _|  $$  __$$\ $$  _____|\_$$  _|  
$$ |      $$ /  $$ |$$ |$$ |  $$ |        $$ |    $$$$$$$$ |\$$$$$$\    $$ |    
$$ |  $$\ $$ |  $$ |$$ |$$ |  $$ |        $$ |$$\ $$   ____| \____$$\   $$ |$$\ 
\$$$$$$  |\$$$$$$  |$$ |$$ |  $$ |        \$$$$  |\$$$$$$$\ $$$$$$$  |  \$$$$  |
 \______/  \______/ \__|\__|  \__|         \____/  \_______|\_______/    \____/ */
  
  
  

  // Action O Verité

/*  if (message.content.startsWith(prefix + "aov") && message.channel.id = "465986283676893184"){
if (table.length) return message.channel.send("Une partie est déjà lancée !");
table.p = []
table.collecting = true
message.channel.send("Partie lancée, faites db!aj pour rejoindre la partie, une fois prêts, faites db!start")
}
  
if (message.content.startsWith(prefix + "aj") && message.channel.id = "465986283676893184") {
if (!table.collecting && table.start) return message.channel.send("La partie à déjà commencé!");
table.p.push(message.author.id);
message.channel.send("Inscrit dans le jeu, preparez vous!")
}
  
if (message.content.startsWith(prefix + "start") && message.channel.id = "465986283676893184") {
if (!table.length) return message.channel.send("Aucune partie n'est lancée.")
if (!table.p.length) return message.channel.send("Personne n'a rejoint la partie!")
if (!table.collecting) return message.channel.send("La partie à déjà commencé !");
table.collecting = false
table.start = true
message.channel.send("Lancement de la partie")
}*/
  
  
  




  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
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

  
 //Bon je crois que je vais prendre l'val d'une ancienne version du bot x3

  
  
  
/*
 $$$$$$\            $$\                 $$\                                 $$\           $$\ 
$$  __$$\           \__|                $$ |                                $$ |          $$ |
$$ /  \__| $$$$$$\  $$\ $$$$$$$\        $$$$$$$\   $$$$$$\   $$$$$$\   $$$$$$$ | $$$$$$\  $$ |
$$ |      $$  __$$\ $$ |$$  __$$\       $$  __$$\ $$  __$$\ $$  __$$\ $$  __$$ |$$  __$$\ $$ |
$$ |      $$ /  $$ |$$ |$$ |  $$ |      $$ |  $$ |$$ /  $$ |$$ |  \__|$$ /  $$ |$$$$$$$$ |$$ |
$$ |  $$\ $$ |  $$ |$$ |$$ |  $$ |      $$ |  $$ |$$ |  $$ |$$ |      $$ |  $$ |$$   ____|$$ |
\$$$$$$  |\$$$$$$  |$$ |$$ |  $$ |      $$$$$$$  |\$$$$$$  |$$ |      \$$$$$$$ |\$$$$$$$\ $$ |
 \______/  \______/ \__|\__|  \__|      \_______/  \______/ \__|       \_______| \_______|\__|
*/
  
  
  
   
  
// db!maths
if (message.content.startsWith(prefix + "maths")) {
  if(!coins[message.author.id]){
  return message.reply("Tu n'a pas de pièces !")}
    if(coins[message.author.id].coins < 20) return message.reply("Il te faut minimum 20 pièces pour jouer");
let first = getRandomInt(1, 200);
let second = getRandomInt(1, 200);
let toWin = getRandomInt(10, 20);
let mathValue = getRandomInt(0,150);
let answer;
let operation;
if (mathValue < 50) {
   answer = first + second
  operation = "+"
} else 
if (mathValue < 100) {
first -= 50
second -= 50
   answer = first * second
  operation = "x"
} else {
    answer = first - second
  operation = "-"
}
  
message.reply(`faisons un petit calcul de maths ! Réponds a cette question **-->** ${first} ${operation} ${second} ❓`)
.then(() => {
  message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
if (collected.first().content == answer) {
      message.channel.send(`C'est exact :)`);
message.channel.send("<:Baldiconten:452980705761296385> | Tu gagne " + toWin + " pieces avec moi ! **HERE A SHINY QUARTER !!**")
      coins[message.author.id].coins += toWin

} else {
  message.channel.send("...")
  message.channel.send(`<:Baldipaconten:452980706100903937> | Tu perd ${toWin} pieces... c'est bien merité. **DETENTION FOR YOU !** (La réponse était ${answer}.)`)
      coins[message.author.id].coins -= toWin


}
    })
    .catch(() => {
      message.reply('aucune reponse...?');

      coins[message.author.id].coins -= toWin
    });
});
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
if (err) console.log(err)
})
}
  
  
  
if (message.content.startsWith(prefix + "infotoken")) {
  let toks = require('./toks.json');
if(!toks[message.author.id]) return message.channel.send("Tu n'as pas de tickets.");
let e = new Discord.RichEmbed()
  .setTitle("Info du token.")
  .addField("Code", toks[message.author.id].code)
  .addField("Points", toks[message.author.id].points ? toks[message.author.id].points : "Aucun point.")
message.channel.send(e)

}
  // Give et delpoint
if (message.content.startsWith(prefix + "givepoint")) {
  let toks = require('./toks.json');

if (message.author.id != '191272823170269184' && message.author.id != '334095574674571264') return  message.channel.send("Hein");
if (!toks[args[0]]) return message.channel.send("Il a pas de ticket wtf.");
if (!toks[args[0]].points) toks[args[0]].points = 0
toks[args[0]].points += 1
fs.writeFile('./toks.json', JSON.stringify(toks), (err) =>{if (err) console.log(err)});
  message.channel.send("K")
}
if (message.content.startsWith(prefix + "delpoint")) {
  let toks = require('./toks.json');

if (message.author.id != '191272823170269184' && message.author.id != '334095574674571264') return  message.channel.send("Hein");
if (!toks[args[0]]) return message.channel.send("Il a pas de ticket wtf.");
if (!toks[args[0]].points) toks[args[0]].points = 0
toks[args[0]].points -= 1
fs.writeFile('./toks.json', JSON.stringify(toks), (err) =>{if (err) console.log(err)});
  message.channel.send("RIP")
}
  
//db!chasson
if (message.content.startsWith(prefix + "chasse")) {
var duckcha = client.channels.get('459686672557277185')
/*val = getRandomInt(0, 100)
if (val < 50) val = 0 */
 let val = 1
let birbs = [{
  emo : ":bird:",
  value : 1
    },
    {
  emo : ":duck:" ,
  value : 2
     }   
        ]
 interval = setInterval(() => {
duckcha.send(birbs[val].emo).then((sentMessage) => {
duckcha.awaitMessages(response => response.content == "pan", {
      max: 1,
      time: 50000,
      errors: ['time'],
    }).then((collected) => {
  if (birbs[val].value == 1) {
  client.channels.get('460007735614898186').send("Shoot sur un oiseau de " + "**" + collected.first().author.username +"**")
  } else {
  client.channels.get('460007735614898186').send("Excellent shoot de " + "**"+ collected.first().author.username +"**")
  }
  sentMessage.delete();

}).catch(() => {
sentMessage.delete();
});


})
}, 50000/*getRandomInt(60000, 10000)*/)
message.channel.send("Lancement de la chasse.")
}
if (message.content.startsWith(prefix + "chasseoff")) {
client.clearInterval(interval)
message.channel.send("Arrêt.")
}
//db!ange

  if (message.content.startsWith(prefix + "guerrier")){
    console.log("commande")
      let angeid = message.member;
     
  let demonrole = ("451420902857375745");

  if(angeid.roles.has(demonrole)) {
     message.reply("tu est déjà dans l'équipe des dragons !")
    return;
  }else {
    if(!angeid.roles.has(demonrole)) {
    
     console.log("attribution role")
    let angerole = message.guild.roles.get("451463313302224916");
    console.log("attribution role2");       
    
    if(angeid.roles.has(angerole)) {
      message.reply("Tu as déjà ce rôle !");
      return;
    } else {
      if (!angeid.roles.has(angerole)){
    
    
    console.log("role attribué")
   angeid.addRole(angerole).catch(error => message.channel.send(error))
   message.channel.send(`<@${angeid.id}> à rejoint les guerriers !`);
   
      }}}}
    
 }
  //db!board 
  if (message.content.startsWith(prefix + "board")) {
let fnum = 0
let wnum = 0
let flimit = 0 
let wlimit = 0
var fboy;
var wboy;
var fnumber = 0
var wnumber = 0
 for (let mes in teams) {
if (teams[mes].rank == 1)  {
  fnumber++
  fnum += teams[mes].point
  if (teams[mes].point > flimit) { 
fboy = mes
flimit = teams[mes].point
}
}
if (teams[mes].rank == 2) {
  wnumber++
  wnum += teams[mes].point
  if (teams[mes].point > wlimit)  {
wboy = mes
wlimit = teams[mes].point
}
}
 }
var color = (fnum > wnum ? message.guild.roles.get('451420902857375745').color : message.guild.roles.get('451463313302224916').color)
var e = new Discord.RichEmbed()
  .setTitle("Totals de points des deux teams")
  .addField("("+ fnumber + ") Team " + team1 , fnum + " points", true)
  .addField("("+ wnumber +") Team " + team2,  wnum  + " points", true)
  .addField("Meilleur "+ team1 + ", jusqu'ici : ", client.users.get(fboy).username)
  .addField("Meilleur " + team2 + ", jusque là :", client.users.get(wboy).username, true)
  .setColor(color)
message.channel.send(e)
  
}
  if (message.content.startsWith(prefix + "team")) {
var auth = message.mentions.users.first() || client.users.find('username', args.join(" ")) || message.author
if (!teams[auth.id]) return message.channel.send("J'ai pas eu le temps de referencier cet utilisateur ou il n'est pas encore inscrit dans l'un des teams, ressayez plus tard.")
var e = new Discord.RichEmbed()
  .setTitle("Carte team de de " + auth.username)
  .addField("Reconnu en tant que ", teams[auth.id].rank == 1 ? team1: team2)
  .addField("Nombre de points : ", teams[auth.id].point + " points")
  .setColor(teams[auth.id].rank == 1 ? message.guild.roles.get('451420902857375745').color : message.guild.roles.get('451463313302224916').color)
message.channel.send(e)
}
  //db!leaveange
   if (message.content.startsWith(prefix + "leaveguerrier")){
    console.log("commande")
      
   let angeid = message.member;
    
    
     console.log("attribution role")
    let angerole = message.guild.roles.get("451463313302224916");
    console.log("attribution role2");            
    
    if(angeid.roles.has(angerole)) {
      message.reply("tu n'as pas ce role !");
      return;
    } else {
      if (!angeid.roles.has(angerole)){
    
    
    console.log("role attribué")
   angeid.removeRole(angerole).catch(error => message.channel.send(error))
   message.channel.send(`<@${angeid.id}> à quitté les guerriers !`);
   
      }}
    return;
 }
  
  /////db!quiz
 
 
//db!demon
  if (message.content.startsWith(prefix + "dragon")){
    console.log("commande")
      let demonid = message.member;

    let angerole = ("451463313302224916");
    
    
  if(demonid.roles.has(angerole)) {
     message.reply("tu est déjà déja dans l'équipe " + team1)
    return;
  }else {
    if(!demonid.roles.has(angerole)) {
    
     console.log("attribution role")
    let demonrole = message.guild.roles.get("451420902857375745");
    console.log("attribution role2");
    
    if(demonid.roles.has(demonrole)) {
      message.reply("Tu as deja ce role !");
      return;
    } else {
      if (!demonid.roles.has(demonrole)){
    
    
    console.log("role attribué")
   demonid.addRole(demonrole).catch(error => message.channel.send(error))
   message.channel.send(`<@${demonid.id}> à rejoint les dragon !`);
   
      }}}}
    
 }
 
  //db!leavedemon
 if (message.content.startsWith(prefix + "leavedragon")){
    console.log("commande")
      
   let demonid = message.member;
    
    
     console.log("attribution role")
    let demonrole = message.guild.roles.get("451420902857375745");
    console.log("attribution role2");
    
    if(demonid.roles.has(demonrole)) {
      message.reply("tu n'as pas ce role !");
      return;
    } else {
      if (!demonid.roles.has(demonrole)){
    
    
    console.log("role attribué")
   demonid.removeRole(demonrole).catch(error => message.channel.send(error))
   message.channel.send(`<@${demonid.id}> à quitté les dragons !`);
   
      }}
   return;
    
 }
 
  
  
  
  
  
  
  
  


  
//////////////////////////////////////////////// 
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
////////////////////////////////////////////////

  ///Partie bot musique
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  const searchString = args.slice(1).join(' ');
  const youtube = new YouTube(process.env.ytTOKEN);
  var server = servers[message.guild.id];
        
        
 
  
  //db!play
if (message.content.startsWith(prefix + "play")){
  
 if (!args[0]) {
  message.channel.send(":musical_note: Merci de bien vouloir mettre un lien.");
    return;
  }
  if (!message.member.voiceChannel) {
    message.channel.send(":musical_note: Tu doit être dans un salon vocal !");
    return;
  }
  
  let valide = await ytdl.validateURL(args[0]);
  if(!valide) return message.channel.send("Merci de vouloir mettre un lien **valide** !")
  
  let infovideo = await ytdl.getInfo(args[0]);
  
  if(!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
  };
  
  var server = servers[message.guild.id];
  server.queue.push(args[0]);
  message.channel.send("Musique ajoutée a la playlist !")
  if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
    play(connection, message);

});
  
  message.channel.send(`Actuellement joué: **${infovideo.title}**`);
}
  
                                              //[VV VERSION AMELIORER NON-FINI ET NON-FONCTIONNEL VV]
        
        
          /*  const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) return message.channel.send('');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, message, voiceChannel, true);
                }
                return message.channel.send(`✅ Playlist: **${playlist.title}** a été ajoutée a la file d'attente`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 10);
                        let index = 0;
                        message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Merci de rentrée une valeur entre 1 et 10 pour choisir parmis la liste.
					`);
                        try {
                            var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                                maxMatches: 1,
                                time: 10000,
                                errors: ['time']
                            });
                        } catch (err) {
                            console.error(err);
                            return message.channel.send('Valeur entrée non valide ou inexistante. Fermeture.');
                        }
                        const videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return message.channel.send('🆘 Je n'ai pas pu obtenir des résultats.');
                    }
                }
                return handleVideo(video, message, voiceChannel);
            }
}*/
  
  
  //db!pause
if (message.content.startsWith(prefix + "pause")){
if (!message.member.voiceChannel) {
                message.channel.send(":musical_note: Tu doit être dans un salon vocal !");
                return;
            }

            var server = servers[message.guild.id];
            if (server.dispatcher) server.dispatcher.pause();
            message.channel.send(':pause_button:  La musique est en pause !');
}
  
  //db!resume
if (message.content.startsWith(prefix + "resume")){
      if (!message.member.voiceChannel) {
                message.channel.send(":musical_note: Tu doit être dans un salon vocal !");
                return;
            }

            var server = servers[message.guild.id];
            if (server.dispatcher) server.dispatcher.resume();
            message.channel.send(':arrow_forward: La musique est relancée !');                         

}
 
 //db!skip
if (message.content.startsWith(prefix + "skip")){
  
  
var server = servers[message.guild.id];
  if (!message.guild.voiceConnection) return message.channel.send("Je suis pas en cours d'utilisation...")

 	 
if (server.dispatcher) server.dispatcher.end()
}
  
  //db!leave
if (message.content.startsWith(prefix + "leave")){
  if (!message.guild.voiceConnection) return message.channel.send("Je suis pas en cours d'utilisation...")
var server = servers[message.guild.id];
  server.queue = []
   message.channel.send(":stop_button: J'ai bien quitter le salon !")
 	 
message.guild.voiceConnection.disconnect();
}
  
 ///Fin partie bot musique
  
//////////////////////////////////////////////////////////////////////////////////////////////
});

client.login(process.env.TOKEN)
