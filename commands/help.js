const Discord = require("discord.js");
let talkedRecently = [];



module.exports.run = async (client, message, args) => {
  
  
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

 // let darky = (message.author("191272823170269184").tag)
	let botembed = new Discord.RichEmbed()
	.setTitle("Bonjour, je suis l'aide ! Et voici mes commandes ! :smile:")
	.setColor("#00C1FF")
	.setThumbnail("https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2FDarky%20chibis%20think.png?1529344203240")
  .setFooter(`Bot crée par Darky#1234`, "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2FAvatar%20chaine%20HD.jpg?1529498072989")
  .addField(":soccer: Fun: ", "`8ball`, `sayd`, `avatar`, `doggo`, `cat`, `birdy`, `fishy`, `pof`, `rps`, `memes`, `rtd`, `emojifier`, `mc`, `trigger`")
  .addField(":moneybag: jeux d'argent: ", "**[+ bientôt]** mais en attendant, jouez avec `$rps`")
  .addField(":cowboy: Action/RP: ", "`hug`, `slap`, `kiss`, `bite`")
  .addField("<:staff:314068430787706880> Administration: ", "`report`, pour + de commandes, faites db!adminhelp")
  .addField(":musical_note: Musique: [ALPHA]", "`play`, `skip`, `leave`, `pause`, `resume`")
  .addField(":busts_in_silhouette: Utilisateur: ", "`ui`, `level`, `coins`, `pay`")
  .addField(":file_folder: Autre:", "`ping`, `is`, `clean`, `help`")
  .addField(":no_entry: Owner bot seul.:", "`setgame`, `setstream`, `setwatch`, `eval`, `guildlist`, `goto`")
  .addField(":link: Liens utile: ", "[Website](https://darkybotdc.glitch.me) ● [Serveur support](https://discord.gg/Y97BY7k) ● [Invite moi !](https://discordapp.com/api/oauth2/authorize?client_id=441409139294601216&permissions=8&scope=bot) ● [Votez pour moi !](https://discordbots.org/bot/441409139294601216/vote) ● [Projet futur](https://trello.com/b/C5TPXYGc/update-darkybot)");
 

return message.channel.send(botembed);

    talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
  }

module.exports.help = {
    name: "help"
}