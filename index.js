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
const dbl = new DBL(process.env.dblTOKEN, {webhookPort: 9001, webhookAuth : "azerty1234567890", webhookPath : "https://darkybot.glitch.me:9001"}, client)
var secmap;
let interval;

const xprecent = []
// Create the encoder.
// Specify 48kHz sampling rate and 10ms frame size.
// NOTE: The decoder must use the same values when decoding the packets.
var rate = 48000;
var encoder = new opus.OpusEncoder( rate );
const fs = require("fs");
  // let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  // const db = require("quick.db");
  let coins = new db.table("COINS");
// let coins = require("./coins.json");
// var fs = require("fs");
let items = require("./items.json");
//let help = require("./ComHelp.json");
let talkedRecently = [];
  
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

 function play(connection, message) {
   var server = servers[message.guild.id];
 server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}), {volume: 0.125});
 server.queue.shift();
 server.dispatcher.on("end", function() {
   if(server.queue[0]){
     play(connection, message)
   }else{
     connection.disconnect()
   }
     });
   
 }
  function t(int) {
  if (int == 1) return "Assassins du Jour";
  else if (int == 2) return "Assassins d'Ombres"
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
  dbl.webhook.on("vote", user=>{
    console.log("webhook : " + user)
  })
  dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});//*/
  
    var index = 0
 
   client.user.setStatus('Online')
  var interval = setInterval(() => {
    let activities = [{game: {name: `db!help  ■  ${client.guilds.size} serveurs !`,  type: 0}}, {game: {name: `db!help  ■  ${client.users.size} membres total !`, type: 0}}, {game: {name: `Votez pour moi sur DBL !`, url: "https://www.twitch.tv/Thedarknightshoww", type: 1}}]
    if(index == activities.length) index = 0
      client.user.setPresence(activities[index])
      index++
  }, 30000)
  
  
/* client.user.setStatus('dnd')
  var interval = setInterval(() => {
    let activities = [{game: {name: `Maintenance en cours !`,  type: 0}}, {game: {name: `Bot utilisable mais instable`, type: 0}}, {game: {name: `pas d'heure de retour prévue.`, type: 0}}]
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
    client.commands.set(props.help.commande, props, );
    client.commands.set(props.help.desc, props, );
  });
});

fs.readdir("./commands/nsfw", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commande non trouver.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/nsfw/${f}`);
    console.log(`${f} bien chargé !`);
    client.commands.set(props.help.name, props, );
    client.commands.set(props.help.aliases, props, );
    client.commands.set(props.help.commande, props, );
    client.commands.set(props.help.desc, props, );
  });
});


  
client.on("guildCreate", guild => {
  let guildCreateChannel = client.channels.get("440512900873060362");
   
 guildCreateChannel.send(`Je suis désormais sur ${client.guilds.size} serveurs ! :grinning:`)
    let joinEmbed = new Discord.RichEmbed()
     .setTitle('Serveur rejoint !')
     .setColor('#00c61a')
     .setThumbnail(guild.iconURL)
     .addField('Info serveur', `Nom: **${guild.name}** (\`${guild.id}\`) \nMembres: **${guild.members.size}**\nOwner: **${guild.owner.user.tag}** (\`${guild.owner.user.id}\`)`)
     .setTimestamp()
   
    guildCreateChannel.send(joinEmbed);
  
  let ServerOwn = guild.owner.user
ServerOwn.send("*Pour les possesseurs de serveur type\"test bot\" => https://pastebin.com/PyTxBSS3* \n\n**Salut ! Merci de m'avoir inviter sur ton serveur ^-^**\n\nTu peux avoir un aperçu de toutes mes commandes en écrivant `db!help` dans un salon auquel j'ai accès.\nSi pendant que m'as inviter tu as décocher la case \"Administrateur\", il serait donc possible que certaines de mes commandes ne fonctionne pas au mieux, __il est également possible que le bot ne réponde pas dû a des soucis de permissions qui rentre en conflit avec vos autres rôles, si tel est le cas, merci de me contacter sur le serveur support ci-dessous.__\n\nCi-dessous, une invitation pour rejoindre mon serveur support, la bas tu seras au courant des dernières mises à jours, maintenance, etc... Je n'oblige personne, mais sa peut être interrésant de venir :wink:\n\n**Lien utile:**\n\n**Mon site:** https://darkybotdc.glitch.me/ \n**Serveur support:** https://discord.gg/fHsYrex")
  
  
});
  
client.on("guildDelete", guild => {
  let guildCreateDelete = client.channels.get("440512900873060362");
  
  guildCreateDelete.send(`Je suis désormais sur ${client.guilds.size} serveurs ! :pensive:`)
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Serveur quitté')
    .setColor("#ff0000")
    .setThumbnail(guild.iconURL)
    .addField('Info serveur', `Nom: **${guild.name}** (\`${guild.id}\`) \nMembres: **${guild.members.size}**\nOwner: **${guild.owner.user.tag}** (\`${guild.owner.user.id}\`)`)
    .setTimestamp()
  
  guildCreateDelete.send(leaveEmbed);
});



function confirmify(message, ID, id) {
  if (!message.guild.table.start) return console.log("Arrêté la partie.");

  var ans = ["confirm", "decline"]
message.channel.send("Alors?").then(() => {
  message.channel.awaitMessages((response => ans.includes(response.content) && response.author.id == ID), {
    max: 1,
    time: 1000000,
    errors: ['time'],
  })
  .then((collected) => {
  if (!message.guild.table.start) return console.log("Arrêté la partie.");

      if (collected.first().content == "confirm") {
        message.channel.send("Parfait ! " + client.users.get(id).username + " perd aucune vie !")
        message.table.lives[id]++
      } else {
      message.channel.send("Bon bah une perte de vie pour vous deux. ;-;")
       message.guild.table.lives[id] = message.guild.table.lives[id] - 1
      message.guild.table.lives[ID] = message.guild.table.lives[ID] - 1
      }
      if (message.guild.table.lives[ID] <= 0) {
message.channel.send("<@" + ID +"> est mort X.X")
message.guild.table.p.splice(message.guild.table.p.indexOf(ID), 1)

}
      if (message.guild.table.lives[id] <= 0) {
message.channel.send("<@" + id +"> est mort X.X")
message.guild.table.p.splice(message.guild.table.p.indexOf(id), 1)

}
if (message.guild.table.p.length <= 1) {
message.guild.table = {}
console.log("Win state")
return message.channel.send("**" + client.users.get(message.guild.table.p[0]).username + "**, gagne la partie!")
}
        message.channel.send("Preparez vous pour le prochain round...")
          start(message, message.guildtable)
    })
    .catch(() => {
  if (!message.guild.table.start) return console.log("Arrêté la partie.");
      message.channel.send('Bon bah on refait une autre');
      start(message, message.guild.table)
    });
});
}
function start(message, map) {
if (!message.guild.table.start) return; // ==>
message.guild.table.toAsk = map.p[getRandomInt(0, map.p.length)]
/*secmap = map
secmap.p.splice(map.p.indexOf(table.toAsk), 1)*/
var num = getRandomInt(0, map.p.length)
message.guild.table.asking = (map.p[num] == message.guild.table.toAsk ? map.p[num + 1] || map.p[num - 1] : map.p[num])
var v = ["son action", "sa verité"] 
var type = v[getRandomInt(0, v.length)]
message.channel.send("Préparez-vous.")
let toAsk = client.users.get(message.guild.table.toAsk)
let asking = client.users.get(message.guild.table.asking) 
console.log(message.guild.table)
        setTimeout(() => {

message.channel.send("Que **" + toAsk + "** se prepare pour avoir **" + type + "**")
message.channel.send("Et que **" + asking + "** Pose " + type  + "\nT'as le droit de reflechir, mets juste un -- avant ton action pour la confirmer!").then(() => {
  if (!message.guild.table.start) return console.log("Arrêté la partie.");
  message.channel.awaitMessages(response => response.author.id == message.guild.table.asking && response.content.startsWith("--") , {
    max: 1,
    time: 1000000,
    errors: ['time'],
  })
  .then((collected) => {
  if (!message.guild.table.start) return console.log("Arrêté la partie.");

      message.channel.send(`**${toAsk.username}**, À toi de faire : *${collected.first().content.replace("--", "")}*, quand à ${asking.username}, dites \`\`confirm\`\` s'il a effectué l'action/repondu à la question ou faites \`decline\` si vous êtes deçus de votre requête.`);
    confirmify(message, asking.id, toAsk.id)
    })
    .catch(() => {
      message.channel.send('Bref, il a passé trop de temps à poser la question, recommencons!');
    start(message, map)
    });
});
        }, 2000)
}
client.on('message', async (message) => {

if (message.channel.id == "452961741605699594" && message.author.id == "407525785520308224") {
let s = message.content.split(" ");
if (!coins[s[1]]) return message.channel.send("f " + s[3]);

coins[s[1]].coins += parseInt(s[2])
message.channel.send("t " + s[2] + " " + s[1] + " " + s[3])
}
 

     if(message.author.bot) return;
let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

  
  /*
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
  
  /*
 let xpAdd = Math.floor(Math.random() * 7) + 8; 
  
  
 if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
   };
 }
  

 let curxp = xp[message.author.id].xp;
 let curlvl = xp[message.author.id].level;
 let nxtLvl = xp[message.author.id].level * (700 * 1.25 + (curxp / 30 + 1.25));
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
  
  */
  
  
  let xp = require("./xp.json");
  let xpAdd = Math.floor(Math.random() * 3)+1
  
  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp:0,
      level:1
    }
  }
  
  let curxp = xp[message.author.id].xp
  let curlvl = xp[message.author.id].level
  let nxtlvl = xp[message.author.id].level* (3 * 3 * 50 + 8) + ((curlvl / 2) * 1.25);
  xp[message.author.id].xp = curxp + xpAdd;
  
  if (nxtlvl <= xp[message.author.id].xp) {
    xp[message.author.id].level = curlvl + 1
    if (message.guild.id ==="264445053596991498" || message.guild.id === "110373943822540800") {
  return;
}else{

   let lvlup = new Discord.RichEmbed()
   .setTitle("**LEVEL UP POUR " + (message.author.tag) + " !**")
   .setThumbnail("https://cdn4.iconfinder.com/data/icons/arrows-2-9/32/double_arrow_up-256.png")
   .setColor("RANDOM")
   .addField("Tu est maintenant:", `niveau ${curlvl + 1} !`);
   
   message.channel.send(lvlup).then(msg => {msg.delete(3000)})
}
   fs.writeFileSync("./xp.json", JSON.stringify(xp), (err) => {
   if(err) console.log(err)
   });
  }  
  // Quizz multijoueur
coins.fetch(`coins_${message.author.id}`).then(coinFETCH => {
if (message.content.startsWith(prefix + "multiq")) {
let str =  message.guild.members.random(1)[0].user 
let randmem = str.username.substring(0, 2)
let ind = (str.bot ? "c'est un bot" : "ce n'est pas un bot");
let animals = [{animal : "Cat", trad : "Chat"}, {animal : "Dog", trad : "Chien"}, {animal : "Bird", trad : "Oiseau"}, {animal : "Lion", trad : "Lion"}]
let anilength = getRandomInt(0, animals.length)
let co = coinFETCH;
let caps = [{flag : "des Maldives", cap : "Malé"},{flag : "du Togo", cap: "Lomé"},{flag : "de la Guinée equatoriale", cap : "Malabo"},{flag : "du Koweit", cap : "Koweït"},{flag : "de l'Espagne", cap : "Madrid"}]
let capslength = getRandomInt(0, caps.length)
let own = client.users.get(message.guild.owner.id).username
var ono;
function multiplayer(q) {
var n = getRandomInt(0, q.length)

let qu = q[n].question
let a = q[n].answer
    message.channel.send("Question pour tout le monde : " + qu + ", react '✅' pour repondre en premier").then(sentMessage => {
    sentMessage.react("✅")
  let filter = (reaction, user) => (reaction.emoji.name == "✅" ) && !user.bot && message.guild.quizz[user.id]
  let collector = sentMessage.createReactionCollector(filter, {time: 100000})
    collector.on("collect", r => {
      r.users = r.users.filter(u => u.id != client.user.id)
      collector.stop();
      message.channel.send("On dirait bien que " + r.users.first().username + " possède la reponse!").then(() => {
    message.channel.awaitMessages(response => response.author.id === r.users.first().id , {
      max: 1,
      time: 50000,
      errors: ['time'],
    })
    .then((collected) => {
      if (collected.first().content.toLowerCase() == a.toLowerCase()) {
      message.channel.send("C'est exact mon p'ti pote, tu gagne 1 point!")
      message.guild.quizz[collected.first().author.id].points++
if (message.guild.quizz[collected.first().author.id].points > 4) return message.channel.send("Fin du game, tu atteint les 5 points.")
      multiplayer(q)
} else {
message.channel.send("Dommage mon p'ti pote.")
multiplayer(q)
}
    })
      })
    })
})
}

  let questions = [
  {
    question : "Comment s'appelle le lanceur de la partie ?",
    answer : message.author.username,
    duration : 30000
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
    question : "Son nom commence avec " + randmem + " et " + ind,
    answer : str.username,
    duration : 20000
  },
  {
    question : "Je suis sur combien de serveur",
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
    question : "Quelle est la capitale " + caps[capslength].flag,
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
    duration : 5000
  },
  {
    question : "2+2",
    answer : "4",
    duration : 3000
  },
  {
    question : "Vrai ou faux ? Le chat a été domestiqué avant le chien.",
    answer : "Faux",
    duration : 10000
  },
  {
    question : "Vrai ou faux ? Il existe plus de 330 races de chiens dans le monde.",
    answer : "Vrai",
    duration : 10000
  },
  {
    question : "Vrai ou faux ? Pour son record du monde, la vitesse moyenne d’Usain Bolt était de 37,58 km/h (23,35 mi/h)",
    answer : "Vrai",
    duration : 10000
  },
  {
    question : "Vrai ou faux ? Une tempête tropicale devient un ouragan lorsque la vitesse des vents dépasse 119 km/h (74 mi/h).",
    answer : "Vrai",
    duration : 10000
  }
]
let num = getRandomInt(0, questions.length)

let question = questions[num].question
let answer = questions[num].answer
let toWin = getRandomInt(100, 300)

if (message.guild.quizz) return message.channel.send("Un quizz est déjà lancé.");
message.guild.quizz = {}
message.channel.send("Oh, oh oh! On dirait bien que Môssieur ou Madame veut jouer avec plusieurs personnes ? Pas dé problème vous avez 10 secondes pour ecrire -j afin de rejoindre la partie ^-^");

 let collector = new Discord.MessageCollector(message.channel, m => m.author.bot === false && m.content == "-j", { time: 15000 });
        collector.on('collect', msg => {
          if (message.guild.quizz[msg.author.id]) message.channel.send("Tu es déjà prêt pour le quizz.")
          else {
          message.guild.quizz[msg.author.id] = {
          points : 0
          }
          message.channel.send("Inscrit au quizz..")

          }
        })
      collector.on('end', msg => {
      if (Object.keys(message.guild.quizz).length < 2) {
message.guild.quizz = undefined
return message.channel.send("[Erreur] Il doit avoir au moins 2 personnes pour pouvoir jouer le quizz en multi");
}
        multiplayer(questions)
        
      })


}


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
});
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
     }
  
 
coins.fetch(`coins_${message.author.id}`).then(coinFETCH => {
  //event message

  
 //var args = message.content.substring(prefix.length).split(" ");
 
 /* if (message.channel == client.channels.get('446045762502000640')) {
  let num = parseInt(message.content)
if (isNaN(num)) {
  message.delete() 
  message.channel.send("Il faut compter, pas parler ! :p").then(msg => {message.delete(3000)});
    }
}*/


  if (!coinFETCH) coins.set(`coins_${message.author.id}`, 0)


//coins.json 
let coinAmt = Math.floor(Math.random() * 30) + 1;
let baseAmt = Math.floor(Math.random() * 30) + 1;

  
if(coinAmt === baseAmt){
  coins.add(`coins_${message.author.id}`, coinAmt)

}
  

  


                                                                                
              //Mention bot --> donne prefix
  if (message.content.startsWith('<@441409139294601216>')) {
  
  message.channel.send("Bonjour ! Mon préfix est `db!` !")
  } 
  

if (message.channel.id == '456579123050184714' || message.channel.id == '428954864706650123') {
if (message.content.startsWith('(')) return;

args = message.content.split(' ')

if (message.content == 'changelieu')  act = acts[getRandomInt(0, acts.length)]

let cited = (message.mentions.users.first()  ? message.mentions.users.first() : client.users.find(u=> u.username.toLowerCase() === args[0].toLowerCase()) || client.users.get(args[0]) || message.author)

let cite = (message.mentions.users.first() || client.users.find(u=>u.username.toLowerCase() === args[0].toLowerCase()) || client.users.get(args[0]) ? args.slice(1).join(" ") : message.content)

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
  
  

  // Action Ou Verité
    if (message.content.startsWith(prefix + "aov")) {
if (message.guild.table && message.guild.table.collecting) return message.channel.send("Une partie est déjà lancée !");
message.guild.table = {
p : [],
collecting : true,
owner : message.author.id,
lives : {},
}
message.guild.table.lives[message.author.id] = 5
let aovhelp = new Discord.RichEmbed()
    .setTitle("Salle d'attente ouverte !")
    .setColor("RANDOM")
    .addField("db!aj", "Permet de rejoindre la partie actuel (seulement durant la phase d'attente).")
    .addField("db!start", "Pour lancer la partie.")
    .addField("db!table", "Pour voir la liste des joueurs présent dans la partie ainsi que leurs vies.")
    .addField("db!astop", "Pour arrêter une partie en cours.")
message.channel.send(aovhelp)
message.guild.table.p.push(message.author.id)
message.channel.send("**"+ message.author.username + "** se join a la partie !")

    }
   

    if (message.content.startsWith(prefix + "aj")) {
if (!message.guild.table.collecting && message.guild.table.start) return message.channel.send("La partie à déjà commencée !");
if (message.guild.table.p.includes(message.author.id)) return message.channel.send("Tu es déjà inscrit dans la partie !")
message.guild.table.p.push(message.author.id);
message.guild.table.lives[message.author.id] = 5
message.channel.send("**" + message.author.username + "** se join a la partie !")

    
    }

    if (message.content.startsWith(prefix + "start")) {
if (!message.guild.table.p.length) return message.channel.send("Personne n'a rejoint la salle d'attente !")
if (message.guild.table.p.length < 3) return message.channel.send("Il doit y avoir minimum 3 personnes pour pouvoir débuter.")
if (message.guild.table.start) return message.channel.send("La partie à déjà commencée !");
if (message.author.id != message.guild.table.owner) return message.channel.send("Seul le créateur de la partie peut lancer la partie. Merci de patienter.")
message.guild.table.collecting = false
message.guild.table.start = true
message.channel.send("**Lancement de la partie !**")
start(message, message.guild.table)

    
    }
  if (message.content.startsWith(prefix + "table")) {
if (message.guild.table == {}) message.channel.send(new Discord.RichEmbed().setDescription("Aucune partie."))
var c = ""
for (var item in message.guild.table.lives) {
c = c + "\n**" + client.users.get(item) + "** : **" + (message.guild.table.lives[item] ? message.guild.table.lives[item] : "Aucune")  + "** vies."
}
message.channel.send(new Discord.RichEmbed()
                     .setTitle("Table de la partie")
                     .setDescription(c + (message.guild.table.asking && message.guild.table.toAsk ? "\n\n" + client.users.get(message.guild.table.asking) + ">" + client.users.get(message.guild.table.toAsk) : "\n\nPartie pas encore lancée")))
  }

 

    if (message.content.startsWith(prefix + "astop")) {
if (message.author.id != message.guild.table.owner) return message.channel.send("Seul le créateur de la partie peut arrêter la partie.")
message.guild.table = {}
message.channel.send("La partie va bientôt être arrêté.");
    }

    
let cmd = message.content.split(" ")[0].slice(prefix.length).toLowerCase();
  let commandfile = client.commands.get(cmd); 
  if(commandfile) {
    if (!message.content.startsWith(prefix)) return;
    try{
      commandfile.run(client,message,args);
    }catch(error){
      //code pour dire s'il y a erreur
    }
  } else message.reply("la commande n'existe pas !");
  
  
  




  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}
  
  //db!eval
 if (message.content.startsWith(prefix + "eval")){  
 if (message.author.id == 191272823170269184 || message.author.id == 334095574674571264 ||message.author.id == 181732142210875393 || message.author.id == 234043341749092352 || message.author.id == 361225964417449985) {
     
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

   if (message.content.startsWith(prefix + "dm")){ 
   

    if (message.content.startsWith(prefix)) return message.channel.send(":x: Utilise la commande dans un vrais server ! :x:") 
    message.channel.send("**Flap flap** Le message part de ta main en s'envolant :incoming_envelope:");
    if (message.content.startsWith(prefix)) return
    if (args.length > 256) return message.reply("Ton message contient trop de caractères !") 
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Message en MP !")
        .addField(args, "Envoyé par: " + message.author.username + " avec l'id: " + message.author.id)
    client.guilds.get(440166229894889472).channels.get(440246550845849612).send(embed) 
}


if (message.content.startsWith(prefix + "reply")) {
    if (message.author.id !== 191272823170269184) return message.reply('Tu peux pas répondre !')
    
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("Ce n'est pas un ID !")
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Voici ta réponse de la part du staff!")
        .setDescription(Rargs)
        .setFooter("Ce message t'a été envoyer par: " + message.author.username + " !")
    client.users.get(userID).send(embed)
    message.channel.send("Send!").catch(console.error)
  
}
  
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
  if(!coinFETCH){
  return message.reply("Tu n'a pas de pièces !")}
    if(coinFETCH < 20) return message.reply("Il te faut minimum 20 pièces pour jouer");
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
      coins.add(`coins_${message.author.id}`, toWin)

} else {
  message.channel.send("...")
  message.channel.send(`<:Baldipaconten:452980706100903937> | Tu perd ${toWin} pieces... c'est bien merité. **DETENTION FOR YOU !** (La réponse était ${answer}.)`)
    let coin = coinFETCH - toWin  
    coins.set(`coins_${message.author.id}`, coin)


}
    })
    .catch(() => {
      message.reply('aucune reponse...?');

      let coin = coinFETCH - toWin  
    coins.set(`coins_${message.author.id}`, coin)
    });
});

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
});

  
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
        
        
  
/*const voiceChannel = message.member.voiceChannel;
  
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
                        return message.channel.send('🆘 Je n\'ai pas pu obtenir des résultats.');
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
  
if (message.content.startsWith(prefix + "volume")){
  
      var server = servers[message.guild.id];
      
		if (!message.member.voiceChannel) return message.channel.send('Tu n\'est pas dans un salon vocal !');
		if (!server.queue) return message.channel.send('Aucune musique n\'est en cours de diffusion');
  server.queue.volume = args[0];
  if(!args[0]) return message.channel.send("Merci de bien vouloir entrer une valeur.")
  if(args[0] < 0) return message.channel.send("Merci de bien vouloir mettre une valeur supérieur à **0**.")
  if(args[0] > 200) return message.channel.send("Merci de bien vouloir mettre une valeur inférieur à **200**.")
    // message.guild.me.voiceChannel.setVolume(args[0] / 5);
		server.dispatcher.setVolume(args[0] / 110);
		return message.channel.send(`🔊 | J'ai mis le volume sur: **${args[0]} %**`);
  //if (!args[0]) return message.channel.send(`Le volume actuel est de: **${server.queue.volume} %**`);
  
}
 ///Fin partie bot musique
  
//////////////////////////////////////////////////////////////////////////////////////////////

});

client.login(process.env.TOKEN)
