const Discord = require("discord.js");
function getTeam(guild, id) {
let role1 = guild.roles.get("451420902857375745")
let role2 = guild.roles.get("451463313302224916")
if (role1.members.get(id)) return 1;
if (role2.members.get(id)) return 2;
  return false;
}
module.exports.run = async (client, message, args) => {
  
/*  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

let messageArray = message.content.split(" ")

  if (message.author.id == 191272823170269184 || message.author.id == 334095574674571264) {
   
  try {
        const code = args.join(" ");
    if(code.match("process.env.TOKEN")) return message.channel.send(":no_entry_sign: Besoin d'un coup de main ? Tu te crois chez ta maman a tenter de prendre mon token ? :smirk:");
    if(code.match("client.token")) return message.channel.send(":no_entry_sign: Besoin d'un coup de main ? Tu te crois chez ta maman a tenter de prendre mon token ? :smirk:");
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        message.channel.send(clean(evaled), {code:"xl"});
    
      } catch (err) {
        message.channel.send(`\`ERREUR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }  else {
message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *eval run away.*");
}*/
}


module.exports.help = {
    name: "eval"
}