module.exports.run = async (client, message, args) => {
  const fs = require("fs"),
        Discord = require("discord.js");
  let dbxp = require("../xp.json");
  async function sortProperties(obj) {
   try {
     var sortable = [];
    for (var key in obj) 
      if (obj.hasOwnProperty(key)) 
        sortable.push([key, obj[key].level]);
      
    sortable.sort(function(a,b) {
      return b[1]-a[1];
    });
    
    let top1 = await client.fetchUser(sortable[0][0]).then(m => {
      return `:first_place: **${m.username}** - Niveau **${dbxp[m.id].level}** :first_place:`
    });
    
      let top2 = await client.fetchUser(sortable[1][0]).then(m => {
      return `:second_place: **${m.username}** - Niveau **${dbxp[m.id].level}**`
    });
    
      let top3 = await client.fetchUser(sortable[2][0]).then(m => {
      return `:third_place: **${m.username}** - Niveau **${dbxp[m.id].level}**`
    });
    
        let top4 = await client.fetchUser(sortable[3][0]).then(m => {
      return `:military_medal: **${m.username}** - Niveau **${dbxp[m.id].level}**`
    });
    
        let top5 = await client.fetchUser(sortable[4][0]).then(m => {
      return `:military_medal: **${m.username}** - Niveau **${dbxp[m.id].level}**`
    });
    
    let newEmbed = new Discord.RichEmbed()
    .setTitle("Top 5 des levels des membres:")
    .setDescription(`${top1}\n\n${top2}\n\n${top3}\n\n${top4}\n\n${top5}`)
    .setColor("#ffff00")
    .setThumbnail("https://cdn.glitch.com/4408aca9-8fbf-46d4-8142-5b4cd8c3059e%2Fpodium.png?1537899199887")
    .setTimestamp();
    
    message.channel.send(newEmbed)
     delete require.cache[require.resolve(`../xp.json`)];
   } catch (err) {
     message.reply("Une erreur est survenue, veuillez réessayer");
   }
  }
  sortProperties(dbxp);
}
module.exports.help = {
    name: "top",
    commande: "db!top",
    desc: "Permet d'afficher le classement"
}