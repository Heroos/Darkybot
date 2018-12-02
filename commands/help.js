const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
let owner = client.users.get("191272823170269184").tag
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }


	let botembed = new Discord.RichEmbed()
	.setTitle("Bonjour, je suis l'aide ! Et voici mes commandes ! :smile:")
	.setColor("#00C1FF")
	.setThumbnail("https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2FDarky%20chibis%20think.png?1529344203240")
  .setFooter("Bot crée par " + owner, "https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2FAvatar%20chaine%20HD.jpg?1529498072989")
  .addField(":soccer: Fun: ", "`8ball`, `sayd`, `avatar`, `doggo`, `cat`, `birdy`, `fishy`, `pof`, `rps`, `memes`, `rtd`, `emojifier`, `mc`, `trigger`, `google`, `fndrop`, `ascii`")
  .addField(":moneybag: jeux d'argent: ", "**[+ bientôt]** mais en attendant, jouez avec `$rps`")
  .addField(":open_hands::skin-tone-2: Jeux multijoueur: ", "`aov`")
  .addField(":cowboy: Action/RP: * = pas besoin de mentionner", "`hug`, `slap`, `kiss`, `bite`, `dab*`, `pat`, `nb*`")
  .addField("<:staff:314068430787706880> Administration: ", "`report`, `ban`, `kick`, `giverole`, `removerole`, `mute`, `clear`")
  .addField(":musical_note: Musique: [ALPHA]", "`play`, `skip`, `leave`, `pause`, `resume`")
  .addField(":underage: NSFW:", "`lewdneko`")
  .addField(":busts_in_silhouette: Utilisateur: ", "`ui`, `level`, `coins`, `pay`, `daily`, `top`, `profile`, `fortnite`")
  .addField(":file_folder: Autre:", "`ping`, `is`, `social`, `help`")
  .addField(":link: Liens utile: ", "[Website](https://darkybotdc.glitch.me) ● [Serveur support](https://discord.gg/fHsYrex) ● [Invite moi !](https://discordapp.com/api/oauth2/authorize?client_id=441409139294601216&permissions=8&scope=bot) ● [Votez pour moi !](https://discordbots.org/bot/441409139294601216/vote) ● [Soutenir !](https://donatebot.io/checkout/440166229894889472?buyer=191272823170269184) ● [Projet futur](https://trello.com/b/C5TPXYGc/update-darkybot) ● [Le collègue (づ◔ ͜ʖ◔)づ](https://discordbots.org/bot/407525785520308224)");
 

return message.channel.send(botembed)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));

    talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
  }

module.exports.help = {
    name: "help",
    commande: "db!help [commande]",
    desc: "Fait apparaitre l'intégralité des commandes du bot ou vous donnes une aide sur une commande précise si la commande est suivi du nom d'une commande."
}