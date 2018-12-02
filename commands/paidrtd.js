const Discord = require("discord.js");
let talkedRecently = [];
// db!paidrtd <nombre> <pari>
  const db = require("quick.db");
  let coinDB = new db.table("COINS");

module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
  let pari;
  let nombre;
  
  
  /*if (args[0] && args[1]) {
    if (args[0] > 6) return message.reply("Le nombre doit être inférieur ou égal a 6 !");
    nombre = args[0];
    if (args[1] <= 10) pari = 10
    pari = args[1];
    
    let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));
    message.channel.send("`Lancement du dé...`")
            setTimeout(() => {
             
    if (replies[result] === nombre) {
      coinDB.fetch(`coins_${message.author.id}`).then(coinFETCH => {
      let win = pari * 2
      let coins = win + coinFETCH
      message.channel.send(`Felicitations, le bot a choisi ${nombre} et vous avez choisi ${nombre}, vous avez remporté le double de votre pari !\nCoins gagné : ${win} - Nombre de coins : ${coins}`)
    coinDB.set(`coins_${message.author.id}`, coins)
      })
    } else {
      coinDB.fetch(`coins_${message.author.id}`).then(coinFETCH => {
        let coins = coinFETCH - pari
        message.channel.send(`Dommage, le bot a choisi ${replies[result]} et vous avez choisi ${nombre}, vous avez donc perdu votre pari.. !\nCoins perdus : ${pari} - Nombre de coins : ${coins}`)
        coinDB.set(`coins_${message.author.id}`, coins)
        coinDB.add(`paidrtd_jackpot`, pari)
      });
    }
            }, 3000)
    
    return;
  } else {
  //jackpot
  }*/
  
  
  
  
  
  
   /* let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));

        message.channel.send("`Lancement du dé...`")
            setTimeout(() => {
              message.reply(`et c'est le numéro \**${replies[result]}\** !`)
    
            }, 3000)*/
          
        
      
 message.channel.send("Fonction en cours de développement !")

  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}
module.exports.help = {
    name: "$rtd"
}