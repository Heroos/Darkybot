const Discord = require("discord.js");
let talkedRecently = [];

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")


let places = [
            "Lazy Links",
            "Dusty Divot",
            "Fatal Fields",
            "Flush Factory",
            "Greasy Grove",
            "Haunted Hills",
            "Junk Junction",
            "Lonely Lodge",
            "Loot Lake",
            "Lucky Landing",
            "Paradise Palms",
            "Pleasant Park",
            "Retail Row",
            "Risky Reels",
            "Salty Springs",
            "Shifty Shafts",
            "Snobby Shores",
            "Tilted Towers",
            "Tomato Temple",
            "Wailing Woods"
        ];

        let picker = Math.floor(Math.random() * places.length); 

        return message.channel.send("Mhhh... Pour moi, le meilleur endroit serait **" + places[picker] + "** pour se drop." );
    



talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "fndrop"
}