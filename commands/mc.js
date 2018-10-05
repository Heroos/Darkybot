const snekfetch = require('snekfetch');
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
  let [title, contents] = args.join(" ").split(" | ");
  if(!contents) {
    [title, contents] = ["Succès déverrouillé !", title];
  }
  let random = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) random = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) random = 21;
  if(args.join(" ").toLowerCase().includes("cake")) random = 10;
  if(args.join(" ").toLowerCase().includes("diamond")) random = 29;

  if(title.length === 0 || contents.length === 0) return message.channel.send("Usage commmande `db!mc <titre>|<desc.>`.")
  if(title.length > 15) return message.channel.send("Titre trop long ! *(15 caract. maximum.)*")
  if(contents.length > 20) return message.channel.send("Description trop longue ! *(20 caract. maximum.)*")
  if(title.length === 1) return message.channel.send("Il faut mettre un titre ! *(2 caractères mini.)*")
  if(contents.length === 1) return message.channel.send("Il faut mettre une description ! *(2 caractères mini.)*")
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${random}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send(`**${message.author.username}** à reçu un nouveau succès !`, {files:[{attachment: r.body}]}))
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));

  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
};

module.exports.help = {
    name: "mc",
    aliases: "minecraft",
    commande: "db!mc <titre> | <desc.>",
    desc: "Pour crée un succès Minecraft de votre choix !"
}