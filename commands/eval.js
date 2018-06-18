const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

let messageArray = message.content.split(" ")

 
  if (message.author.id == 191272823170269184) {
   
  try {
        const code = args.join(" ");
    if(code.match("process.env.TOKEN")) return message.channel.send(":no_entry_sign: Besoin d'un coup de main ? Tu te crois chez ta maman a tenter de prendre mon token ? :smirk:");
 
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        message.channel.send(clean(evaled), {code:"xl"});
    
      } catch (err) {
        message.channel.send(`\`ERREUR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }  else {
message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *eval run away.*");
}
}


module.exports.help = {
    name: "eval"
}