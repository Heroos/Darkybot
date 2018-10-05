const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let lien = `https://www.google.com/search?q=` + google;
        if(!lien)return message.reply("Erreur avec db!google")
        if (args.length < 1) {
    message.channel.send('Merci de me demander quelque chose a rechercher.');
      }
  
  if (args[0] === "google") {
    message.channel.send('Wait... Rechercher Google... Dans Google ?! **SÉRIEUSEMENT ?!**');
      return;
  }
  if (args[0] === "Google") {
    message.channel.send('Wait... Rechercher Google... Dans Google ?! **SÉRIEUSEMENT ?!**');
      return;
  }
       
  let embed = new Discord.RichEmbed()
        
      
	
  .setColor("RANDOM")
  .setTimestamp()
  .setTitle(":mag: - Résultat de la recherche !")
	.addField("Tu as recherché:", `${args.slice(0).join(' ')}`)
	.addField('Lien:', `${lien}`)
	.setFooter("db!google", message.author.avatarURL);
          
	message.channel.send(embed)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
}



module.exports.help = {
    name: "google",
    commande: "db!google <argument>",
    desc: "Pour faire une recherche sur Google grâce au bot."
}
