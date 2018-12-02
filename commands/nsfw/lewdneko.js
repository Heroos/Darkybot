const Discord = require("discord.js");
const superagent = require("snekfetch");
let talkedRecently = [];

module.exports.run = async (client, message, args) => {

if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")

if (!message.channel.nsfw) return message.channel.send(':underage: | **WOW WOW WOW !** Va faire sa dans un salon **__NSFW__** ! :underage: ')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const nsfwembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter("lewdneko")
      .setTimestamp();
  message.channel.send(nsfwembed);
    })


talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
 }

module.exports.help = {
    name: "lewdneko"
}