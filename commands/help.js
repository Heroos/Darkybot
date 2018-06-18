const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

	let botembed = new Discord.RichEmbed()
	.setTitle("Bonjour, je suis l'aide ! Et voici mes commandes ! :smile:")
	.setColor("#00C1FF")
	.setThumbnail("https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2FDarky%20chibis%20think.png?1529344203240")
  .addField("Fun: ", "`8ball`, `sayd`, `avatar`, `doggo`, `cat`, `oazo`, `poasson`, `pileouface`, `rps`, `rmemes`")
  .addField("jeux d'argent: ", "**[+ bientôt]** mais en attendant, jouez avec `$rps`")
  .addField("Action/RP: ", "`hug`, `slap`, `kiss`, `bite`")
  .addField("Administration: ", "`report`, pour + de commandes, faites db!adminhelp")
  .addField("Musique: ", "`play`, `skip`, `stop`")
  .addField("Argent: ", "`coins`, `pay`")
  .addField("Utilisateur: ", "`ui`, `level`")
  .addField("Autre:", "`ping`, `is`, `help`")
  .addField("Owner bot seul.:", "`setgame`, `setstream`, `setwatch`, `eval`, `guildlist`")
  .addField("Liens utile: ", "[Website](https://darkybotdc.glitch.me) ● [Serveur support](https://discord.gg/Y97BY7k) ● [Invite moi !](https://discordapp.com/api/oauth2/authorize?client_id=441409139294601216&permissions=8&scope=bot) ● [Votez pour moi !](https://discordbots.org/bot/441409139294601216)");
 

return message.channel.send(botembed);

    
  }

module.exports.help = {
    name: "help"
}