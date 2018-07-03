const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")


let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let avatared = message.mentions.users.first();
if(!avatared) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:");
if (user.id == message.author.id) return message.channel.send("Et bien... voici ton avatar. On va juste dire que tu as perdu l'image sur ton système et que tu souhaite la récup'. Okay ? " + message.author.avatarURL);
	message.channel.send("Ceci est l'avatar de " + avatared + ", magnifique n'est-ce pas ? Ci-dessous un lien pour le lui voler. *Tu vas pas faire ça quand même ?*" + avatared.avatarURL);

}


module.exports.help = {
    name: "avatar"
}