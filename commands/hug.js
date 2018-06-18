const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")



let toHug = message.mentions.users.first() || client.users.get(args[0]);
 if (!toHug) return message.channel.send("Alors, euh... Je ne sait pas si caliner l'air est la meilleur chose.");
 if (toHug.id == message.author.id) return message.channel.send("Te faire un calin toi même ? Pourquoi pas, c'est toi qui voit.");
 if (toHug.id == client.user.id) return message.reply("me faire a calin a moi et comme faire un calin a quelqu'un qui n'éxiste pas, enfaite...");
var replies = ["https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716", "https://media1.tenor.com/images/b87f8b1e2732c534a00937ffb24baa79/tenor.gif?itemid=9136391", "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589", "https://media1.tenor.com/images/a2b621c6c769eee24e03b97990c15699/tenor.gif?itemid=4631839", "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432", "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setDescription(`**${toHug.username}**, tu reçois un gros calin de la part de **${message.author.username}** ! :wink: `)
 .setColor("#ff30ce")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}


module.exports.help = {
    name: "hug"
}