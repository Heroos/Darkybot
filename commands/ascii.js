const Discord = require("discord.js");
let talkedRecently = [];
const figlet = require('figlet');

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

exports.run = async (client, message, args, tools) => {
  
  if(args.join(' ').length > 14) return message.channel.send(':warning: Texte trop long ! *(14 caract. maximum)*') 
  if (!args.join(' ')) return message.channel.send(':warning: Merci de bien vouloir mettre un texte.');
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data+'```')
    })
};




talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "ascii"
}