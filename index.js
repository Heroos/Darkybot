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
const ifunny = require("ifunny");
const randomPuppy = require('random-puppy');
const randomCat = require('random-cat');
const db = require('quick.db');
const meme = require('memejs');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
var opus = require('node-opus');
const teams = require('./teams.json');
let interval;
function getTeam(guild, id) {
let role1 = guild.roles.get("451420902857375745")
let role2 = guild.roles.get("451463313302224916")
if (role1.members.get(id)) return 1;
if (role2.members.get(id)) return 2;
  return false;
}
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
  
   // client.user.setStatus('dnd')
   // client.user.setActivity(`Maintenance. Risque de non-réponse.`)
    
  client.user.setStatus('Online')
  client.user.setActivity(`db!help  ■  ${client.guilds.size} serveurs !`)
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
    client.commands.set(props.help.name, props);
  });
});

client.on("guildCreate", guild => {
  let guildCreateChannel = client.channels.get("440512900873060362");
   
    let joinEmbed = new Discord.RichEmbed()
     .setTitle('Serveur rejoint !')
      .setColor('#00c61a')
     .setThumbnail(guild.iconURL)
     .addField('Info serveur', `Nom: **${guild.name}** \nID: **${guild.id}** \nMembres: **${guild.members.size}**`)
   
    guildCreateChannel.send(joinEmbed);
});
  

client.on("guildDelete", guild => {
  let guildCreateDelete = client.channels.get("440512900873060362");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Serveur quitté')
    .setColor("#ff0000")
    .setThumbnail(guild.iconURL)
    .addField('Info serveur', `Nom: **${guild.name}** \nID: **${guild.id}** \nMembres: **${guild.members.size}**`)
  
  guildCreateDelete.send(leaveEmbed);
});


client.on('message', async (message) => {
  
let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);
     if (xprecent.indexOf(message.author.id) === -1) {
             xprecent.push(message.author.id);
  setTimeout(() => {
    xprecent.splice(xprecent.indexOf(message.author.id), 1);
  }, 30000);
   if (message.guild.id == '434832646896484352') {
if (getTeam(message.guild, message.author.id)) {
if (!teams[message.author.id]) teams[message.author.id] = {
point : 1,
rank : getTeam(message.guild, message.author.id)
}

  if (!teams[message.author.id].rank != getTeam(message.guild, message.author.id)) teams[message.author.id].rank = getTeam(message.guild, message.author.id)
  teams[message.author.id].point++
  
  fs.writeFile('./teams.json', JSON.stringify(teams));
}
}
     }
  //event message
let cmd = message.content.split(" ")[0].slice(prefix.length).toLowerCase();
  let commandfile = client.commands.get(cmd); 
  if(commandfile) {
    if (!message.content.startsWith(prefix)) return;
    commandfile.run(client,message,args);
  }
  
 //var args = message.content.substring(prefix.length).split(" ");
 
 /* if (message.channel == client.channels.get('446045762502000640')) {
  let num = parseInt(message.content)
if (isNaN(num)) {
  message.delete() 
  message.channel.send("Il faut compter, pas parler ! :p").then(msg => {message.delete(3000)});
    }
}*/

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
   let lvlup = new Discord.RichEmbed()
   .setTitle("**LEVEL UP POUR " + (message.author.tag) + " !**")
   .setThumbnail("https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png")
   .setColor("RANDOM")
   .addField("Tu est maintenant:", `niveau ${curlvl + 1} !`);
   
   message.channel.send(lvlup).then(msg => {msg.delete(3000)})
}
   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
   if(err) console.log(err)
});
  

  

                                                                                
              //Mention bot --> donne prefix
  if (message.content.startsWith('<@441409139294601216>')) {
  
  message.channel.send("Bonjour ! Mon préfix est `db!` !")
  } 
  
  // Citations.
  if (message.channel.id == '456478178240757775') {
if (message.content.startsWith('-')) return;
let cited = (message.mentions.users.first() ? message.mentions.users.first() : message.author)
let cite = (message.mentions.users.first() ? args.join(" ") : message.content)
let e = new Discord.RichEmbed()
  .setThumbnail(cite.avatarURL)
  .setDescription(`***"${cite}"***\n *~${cited.username} 2018*`)
  .setFooter("Citation deposée par " + message.author.username, message.author.avatarURL)
  .setColor('#f4a460')
message.channel.send(e)
message.delete()
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

  if (!message.content.startsWith(prefix)) return;
    if (talkedRecently.indexOf(message.author.id) !== -1) {
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       return;
    }
  
  
  
  
  
  
  /*
 $$$$$$\            $$\                   $$\                           $$\     
$$  __$$\           \__|                  $$ |                          $$ |    
$$ /  \__| $$$$$$\  $$\ $$$$$$$\        $$$$$$\    $$$$$$\   $$$$$$$\ $$$$$$\   
$$ |      $$  __$$\ $$ |$$  __$$\       \_$$  _|  $$  __$$\ $$  _____|\_$$  _|  
$$ |      $$ /  $$ |$$ |$$ |  $$ |        $$ |    $$$$$$$$ |\$$$$$$\    $$ |    
$$ |  $$\ $$ |  $$ |$$ |$$ |  $$ |        $$ |$$\ $$   ____| \____$$\   $$ |$$\ 
\$$$$$$  |\$$$$$$  |$$ |$$ |  $$ |        \$$$$  |\$$$$$$$\ $$$$$$$  |  \$$$$  |
 \______/  \______/ \__|\__|  \__|         \____/  \_______|\_______/    \____/ */
  
  
  
  
  //db!aov
/*if (message.content.startsWith(prefix + "aov")){
  
   let verite = (`Que penses-tu de ${y} `)
   var result1 = Math.floor((Math.random() * verite.length));
   let action = (``)
   var result2 = Math.floor((Math.random() * action.length));
  
message.reply("`Action` ou `vérité` ❓")
.then(() => {
  message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
})
  let user_choice;
if (args[0] == "vérité") { 
user_choice = 0 

} else
 if (args[0] == "action") {
user_choice = 1
} else {
message.channel.send("Tu doit choissir entre une `action` ou une `vérité` !")
return;
}
  
  
  
}*/
  
  
  
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
if (message.channel.id != '452960073367552001') return message.channel.send("Cette fonction est uniquement disponible dans ma classe :(")
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
let emit = client.channels.get('452961741605699594')
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
emit.send("ziwin aBr5eOsM " + message.author.id + " " + answer )
message.channel.send("<:Baldiconten:452980705761296385> | Tu gagne " + toWin + " pieces avec moi ! **HERE A SHINY QUARTER !!**")
      coins[message.author.id].coins += toWin

} else {
  message.channel.send("...")
  message.channel.send("<:Baldipaconten:452980706100903937> | Tu perd " + toWin + " pieces... c'est bien merité. **DETENTION FOR YOU !**")
  emit.send("ziwin rTsOiSuF " + message.author.id + " " + answer )
      coins[message.author.id].coins -= toWin


}
    })
    .catch(() => {
      message.reply('aucune reponse...?');

  emit.send("ziwin rTsOiSuF " + message.author.id + " " + answer )
      coins[message.author.id].coins -= toWin
    });
});
fs.writeFile("./coins.json", JSON.stringify(coins))
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
fs.writeFile('./toks.json', JSON.stringify(toks));
  message.channel.send("K")
}
if (message.content.startsWith(prefix + "delpoint")) {
  let toks = require('./toks.json');

if (message.author.id != '191272823170269184' && message.author.id != '334095574674571264') return  message.channel.send("Hein");
if (!toks[args[0]]) return message.channel.send("Il a pas de ticket wtf.");
if (!toks[args[0]].points) toks[args[0]].points = 0
toks[args[0]].points -= 1
fs.writeFile('./toks.json', JSON.stringify(toks));
  message.channel.send("RIP")
}
//db!chasson
if (message.content.startsWith(prefix + "chassons")) {
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

  if (message.content.startsWith(prefix + "moderne")){
    console.log("commande")
      let angeid = message.member;
     
  let demonrole = ("451420902857375745");

  if(angeid.roles.has(demonrole)) {
     message.reply("tu est déjà dans l'équipe rétro !")
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
   message.channel.send(`<@${angeid.id}> à rejoint les cartoons modernes !`);
   
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
  .addField("("+ fnumber + ") Team des Cartoons retros :", fnum + " points", true)
  .addField("("+ wnumber +") Team des Cartooons moderne :", wnum + " points", true)
  .addField("Meilleur retro, jusqu'ici : ", client.users.get(fboy).username)
  .addField("Meilleur moderne, jusque là :", client.users.get(wboy).username, true)
  .setColor(color)
message.channel.send(e)
  
}
  if (message.content.startsWith(prefix + "team")) {
var auth = message.mentions.users.first() || client.users.find('username', args.join(" ")) || message.author
if (!teams[auth.id]) return message.channel.send("J'ai pas eu le temps de referencier cet utilisateur ou il n'est pas encore inscrit dans l'un des teams, ressayez plus tard.")
var e = new Discord.RichEmbed()
  .setTitle("Carte team de de " + auth.username)
  .addField("Reconnu en tant que ", teams[auth.id].rank == 1 ? "Cartoon Retro": "Cartoon Moderne")
  .addField("Nombre de points : ", teams[auth.id].point + " points")
  .setColor(teams[auth.id].rank == 1 ? message.guild.roles.get('451420902857375745').color : message.guild.roles.get('451463313302224916').color)
message.channel.send(e)
}
  //db!leaveange
   if (message.content.startsWith(prefix + "leavemoderne")){
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
   message.channel.send(`<@${angeid.id}> à quitté les cartoons modernes !`);
   
      }}
    return;
 }
  
  /////db!quiz
 if (message.content.startsWith(prefix + "quiz")) {
if (message.channel.id != '452960073367552001') return message.channel.send("Commande temporairement desactivée.")
   if(!coins[message.author.id]){
  return message.reply("Tu n'a pas de pièces !")}
    if(coins[message.author.id].coins < 500) return message.reply("Il te faut minimum 500 pièces pour jouer");
let str =  message.guild.members.random(1)[0].user 
let randmem = str.username.substring(0, 2)
let ind = (str.bot ? "C'est un bot" : "ce n'est pas un bot");
let animals = [{animal : "Cat", trad : "Chat"}, {animal : "Dog", trad : "Chien"}, {animal : "Bird", trad : "Oiseau"}, {animal : "Lion", trad : "Lion"}]
let anilength = getRandomInt(0, animals.length)
let co = coins[message.author.id].coins
let caps = [{flag : "Maldives", cap : "Malé"},{flag : "Togo", cap: "Lomé"},{flag : "Guinée equatoriale", cap : "Malabo"},{flag : "Koweit", cap : "Koweït"},{flag : "Espagne", cap : "Madrid"}]
let capslength = getRandomInt(0, caps.length)
let own = client.users.get(message.guild.owner.id).username
let questions = [
  {
    question : "Tu t'appelle comment ?",
    answer : message.author.username,
    duration : 30000
  },
  {
    question : "Quel est le nom du createur du jeu Baldi's basic ?",
    answer : "Micah McGonigal",
    duration : 30000
  },
  {
    question : "Qui est le robot qui te vole tes données AkA le createur de FaceBook ?",
    answer : "Mark Zuckerberg",
    duration : 15000
  },
  {
    question : "Qui est mon createur ?",
    answer : "Darky",
    duration : 10000
  },
  {
    question : "Que veut dire " + animals[anilength].animal,
    answer : animals[anilength].trad,
    duration : 15000
  },
  {
    question : "Ta maman c'est un dinosaure ?",
    answer : "Ui",
    duration : 10000
  },
  {
    question : "J'ai un instrument très long que je tape souvent dans ma main. C'est quoi?",
    answer : "La règle",
    duration : 20000
  },
  {
    question : "Son nom commence avec " + randmem + " et " + ind,
    answer : str.username,
    duration : 20000
  },
  {
    question : "Je suis sur combien de serveur *(Ps : regarder mon statut = tapette)*",
    answer : `${client.guilds.size}`,
    duration : 15000
  },
  {
    question : "Qui est le createur de ce serveur ?",
    answer : own,
    duration : 15000
  },
  {
    question : "Tu possede combien de coins ?",
    answer : `${co}`,
    duration : 20000
  },
  {
    question : "Quelle est la capitale du " + caps[capslength].flag,
    answer : caps[capslength].cap,
    duration : 20000
  },
  {
    question : "Parmi les termes suivants, lequel est féminin ? \nEntête \nÉquivoque \nEntracte \nEmblème",
    answer : "Équivoque",
    duration : 15000
  },
  {
    question : "Qu'es qui est jaune, et qui attend ?",
    answer : "Jonathan",
    duration : 50000
  }, 
  {
    question : "Qui vit dans un ananas sous la mer ?",
    answer : "Ta merenculé",
    duration : 2000000
  }
]
let num = getRandomInt(0, questions.length)
let question = questions[num].question
let answer = questions[num].answer
let toWin = getRandomInt(1, 500)


let emit = client.channels.get('452961741605699594')

message.reply(`petite question H̺̏ͪȃ̷̚r͔͋̍d̛͊ͩc͈̙͢õ͖̒r҈̲͊e̡͗͂! Réponds a cette question **--> **${question} ❓`)
.then(() => {
  message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1,
    time: questions[num].duration,
    errors: ['time'],
  })
  .then((collected) => {
if (collected.first().content.toLowerCase() == answer.toLowerCase()) {
      message.channel.send(`C'est exact :)`);

emit.send("ziwin aBr5eOsM " + message.author.id + " " + answer )
message.channel.send("<:Baldiconten:452980705761296385> | Tu gagne " + toWin + " pieces avec moi ! **HERE A SHINY QUARTER !!**")
      coins[message.author.id].coins += toWin

} else {
  message.channel.send("...")
  message.channel.send("<:Baldipaconten:452980706100903937> | Tu perd " + toWin + " pieces... c'est bien merité. **DETENTION FOR YOU !**")
  emit.send("ziwin rTsOiSuF " + message.author.id + " " + answer )
      coins[message.author.id].coins -= toWin


}
    })
    .catch((err) => {
console.log(err)
      message.reply('aucune reponse...? Tu perds quand même ' + toWin + ' coins');
  emit.send("ziwin rTsOiSuF " + message.author.id + " " + answer )
      coins[message.author.id].coins -= toWin
    });
});
fs.writeFile("./coins.json", JSON.stringify(coins))
}
 
//db!token
  if (message.content.startsWith(prefix + "token")) {
  var c = "aDf54Er"
  var toks = require("./toks.json")
  if (coins[message.author.id].coins < 50) return message.channel.send("Vous n'avez pas assez de coins. :smirk:");
  if (toks[message.author.id]) {
  if (toks[message.author.id].code == c) return message.channel.send("Vous possedez déjà un ticket valable.");
  }
  toks[message.author.id] = {
  code : c
  }
  coins[message.author.id].coins -= 50
fs.writeFile('./coins.json', JSON.stringify(coins), 'utf8', (error) => console.log(error));
fs.writeFile('./toks.json', JSON.stringify(toks), 'utf8', (error) => console.log(error));
  message.channel.send("Vous venez d'acheter un ticket a 50 coins.")
}


//db!verif 
  if (message.content.startsWith(prefix + "verif")) {
    var c = "aDf54Er"
  var toks = require("./toks.json")
  let verif = message.mentions.users.first()
  if (!toks[verif.id]) return message.channel.send("Circulez, cette personne n'a pas de tickets.")
  if (toks[verif.id].code != c) return message.channel.send("Tu crois nous douiller avec un vieux ticket ? Malin.")
  message.channel.send("Mh...OK, son ticket est valable.")
  
  }
//db!demon
  if (message.content.startsWith(prefix + "retro")){
    console.log("commande")
      let demonid = message.member;

    let angerole = ("451463313302224916");
    
    
  if(demonid.roles.has(angerole)) {
     message.reply("tu est déjà déja dans l'équipe moderne !")
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
   message.channel.send(`<@${demonid.id}> à rejoint les cartoons retro !`);
   
      }}}}
    
 }
 
  //db!leavedemon
 if (message.content.startsWith(prefix + "leaveretro")){
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
   message.channel.send(`<@${demonid.id}> à quitté les cartoons rétro !`);
   
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
                message.channel.send(":musical_note: Merci de bien vouloir mettre un lien.");
                return;
            }

            var server = servers[message.guild.id];
            if (server.dispatcher) server.dispatcher.pause();
            message.channel.send(':pause_button:  La musique est en pause !');
}
  
  //db!resume
if (message.content.startsWith(prefix + "resume")){
      if (!message.member.voiceChannel) {
                message.channel.send(":musical_note:  Tu doit être dans un salon vocal !");
                return;
            }

            var server = servers[message.guild.id];
            if (server.dispatcher) server.dispatcher.resume();
            message.channel.send(':arrow_forward: La musique est relancée !');                         

}
 
 //db!skip
if (message.content.startsWith(prefix + "skip")){
var server = servers[message.guild.id];
 message.channel.send(":track_next: Musique passée !")
 	 
if (server.dispatcher) server.dispatcher.end()
  message.channel.send("Playlist vide, je m'en vais !");
}
  
  //db!leave
if (message.content.startsWith(prefix + "leave")){
  if (!message.guild.voiceConnection) message.channel.send("Je suis pas en cours d'utilisation...") 
  return;
var server = servers[message.guild.id];
   message.channel.send(":stop_button: J'ai bien quitter le salon !")
 	 
if (message.guild.voiceConnection) message.member.voiceChannel.leave();
}
  
 ///Fin partie bot musique
  
//////////////////////////////////////////////////////////////////////////////////////////////
});

client.login(process.env.TOKEN)
