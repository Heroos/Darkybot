const Discord = require('discord.js');
var Jimp = require("jimp");
module.exports.run = async (bot, message, args) => {


    if (message.channel.type === "dm") return;
    let content = message.content.split(" ").slice(1);
    let args1 = content.join(' ');
    let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
    if (!args1) {
        return message.channel.send(':x: **Merci de spécifier quelque chose !**');
    }
    if (content.length > 1) {
        return message.channel.send(':x: **Maximum 1 mots**');
    }
    const emb = new Discord.RichEmbed();
    emb.setAuthor("Trump a fait devenir " + '"' + content + '"' + " illégal !", "http://blog.adsy.me/wp-content/uploads/2016/11/angry-side-face-trump-transparent.png");
    emb.setImage(illegal);
    message.channel.send({
        embed: emb
    })
}

module.exports.help = {
    name: "illegal"
}