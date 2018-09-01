const Discord = require("discord.js");
var fs = require("fs");
let talkedRecently = [];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.run = async (client, message, args) => {
  
if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: Merci de patienter **20 secondes** entre chaque quizz " + message.author + " !");
       
    } 
  
let coins = require("../coins.json");
let str =  message.guild.members.random(1)[0].user 
let randmem = str.username.substring(0, 2)
let ind = (str.bot ? "c'est un bot" : "ce n'est pas un bot");
let animals = [{animal : "Cat", trad : "Chat"}, {animal : "Dog", trad : "Chien"}, {animal : "Bird", trad : "Oiseau"}, {animal : "Lion", trad : "Lion"}]
let anilength = getRandomInt(0, animals.length)
let co = coins[message.author.id].coins
let caps = [{flag : "des Maldives", cap : "Malé"},{flag : "du Togo", cap: "Lomé"},{flag : "de la Guinée equatoriale", cap : "Malabo"},{flag : "du Koweit", cap : "Koweït"},{flag : "de l'Espagne", cap : "Madrid"}]
let capslength = getRandomInt(0, caps.length)
let own = client.users.get(message.guild.owner.id).username
var ono;
function multiplayer(q) {
var n = getRandomInt(0, q.length)

let qu = q[n].question
let a = q[n].answer
    message.channel.send("Question pour tout le monde : " + qu + ", react '✅' pour repondre en premier").then(sentMessage => {
  let filter = (reaction, user) => (reaction.emoji.name == "✅" ) && !user.bot && message.guild.quizz[user.id]
  let collector = sentMessage.createReactionCollector(filter, {time: 15000})
    collector.on("collect", r => {
      message.channel.send("On dirait bien que " + r.users.first().username + " possède la reponse!")
    })
})
}

  let questions = [
  {
    question : "Tu t'appelle comment ?",
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
let toWin = getRandomInt(10, 30)

let messageArray = message.content.split(" ")


   if(!coins[message.author.id]){
  return message.reply("Tu n'a pas de pièces !")}
    if(coins[message.author.id].coins < 10) return message.reply("Il te faut minimum **10 pièces** pour jouer");

message.reply(`réponds a cette question **--> **${question} ❓`)
.then(() => {
  message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1,
    time: questions[num].duration,
    errors: ['time'],
  })
  .then((collected) => {
if (collected.first().content.toLowerCase() == answer.toLowerCase()) {
      message.channel.send(`C'est exact :)`);

message.channel.send("<:Baldiconten:452980705761296385> | Tu gagne " + toWin + " pieces ! **HERE A SHINY QUARTER !!**")
      coins[message.author.id].coins += toWin

} else {
  message.channel.send("...")
  message.channel.send(`<:Baldipaconten:452980706100903937> | Tu perd ${toWin} pieces... c'est bien merité. **DETENTION FOR YOU !** (La réponse était ${answer}.)`)
      coins[message.author.id].coins -= toWin


}
    })
    .catch((err) => {
console.log(err)
      message.reply('Aucune reponse...? Tu perds quand même ' + toWin + ' coins');
      coins[message.author.id].coins -= toWin
    });
});
fs.writeFile("./coins.json", JSON.stringify(coins))

talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 20000);

}



module.exports.help = {
    name: "quizz"
}