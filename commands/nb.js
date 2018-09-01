const Discord = require("discord.js");
let talkedRecently = [];

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

var replies = ["https://media1.tenor.com/images/385c7b4211ce6b251ef67e6f1737050c/tenor.gif?itemid=8882037", "https://media1.tenor.com/images/517ce864bbe954ee2aa0a5c02a49f6c4/tenor.gif?itemid=11233377", "https://media1.tenor.com/images/9d4d11f65f9faa9ee18ad361aec03adb/tenor.gif?itemid=5939995", "https://media1.tenor.com/images/9dbd860f873bc8d55770195cd31124a6/tenor.gif?itemid=9411114", "https://media1.tenor.com/images/c7663686b70a23e9666f86122ad3151a/tenor.gif?itemid=5725543", "https://media1.tenor.com/images/af974cb499560d429b4e2d9ac7114970/tenor.gif?itemid=5146985", "https://media1.tenor.com/images/2be7ccec26bac409e52ecc7cc27aaa4f/tenor.gif?itemid=5013979", "https://media1.tenor.com/images/ba10253165265489cb6075d0eaa29ced/tenor.gif?itemid=11098575"]
var result = Math.floor((Math.random() * replies.length));

 let dabembed = new Discord.RichEmbed()
 .setDescription(`**${message.author.username}** SAIGNE DU NEZ ! <:Nosebleed:473964261253709824>`)
 .setColor("#ff0000")
 .setImage(replies[result]);


 return message.channel.send(dabembed);


talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "nb",
    commande: "db!nb",
    desc: "Montrez que vous êtes sous le charme en saignant du nez !"
}