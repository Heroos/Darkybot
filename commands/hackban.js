const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const fs = require("fs");
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  let prefix = prefixes[message.guild.id].prefixes
 if (message.author === client.user) return;
  
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);    
   let mid = args[0]
  
  let reason;
       reason = args.slice(1).join(' ');
if(!mid) return message.channel.send("Veuillez indiquer l'ID d'un utilisateur.")
  if (reason.length < 1) reason = "Aucune raison"
    if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send("Vous n'avez pas la permission.");
    client.fetchUser(mid).then(id => {
      message.delete(30)
      if (id.id === message.author.id) return message.reply("Tu ne peux pas te bannir.");
      // if (id.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas le bannir.");
      if (id.id === client.user.id) return message.reply("Serieusement ? Tu veux me bannir ? :(")
      message.guild.ban(id, reason).catch(err => {
        message.channel.send("Je n'ai pas reussi a ban l'utilisateur avec l'id "+id)
        console.log(err)
      })
      message.channel.send(`J'ai banni l'utilisateur **${id.username}#${id.discriminator}**. (id : ${mid})`)
    }).catch(() => {
      message.channel.send(`Il n'y a pas d'utilisateur avec l'ID ${mid}, veuillez rééssayer. :face_palm:`)
})
  // bot.channels.get('439804143356346408').send(`\`\`\`${message.author.tag} - ${message.content} (${message.guild.name}\`\`\``) //logs
  // bot.channels.get('454736766344364032').send(`\`\`\`${message.author.tag} - ${message.content} (${message.guild.name}\`\`\``) //admlogs


}
module.exports.help = {
name: "hackban",
desc: "Bannir quelqu'un n'étant pas sur votre serveur.",
commande: "db!hackban <id>",
}