const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Non, tu ne peux pas ! *mute run away*");
  

  //vvvv Création role vvvvv
     let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
     if(!tomute) return message.reply("Je n'ai pas trouver l'utilisateur :sweat:");
     if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("je ne peux pas le mute, il a la permission de **gérer les messages**, m'interdisant donc de le mute !");
     let muterole = message.guild.roles.find(`name`, "mute");
     if(!muterole){
   try{
     message.channel.send('**Rôle "mute" inexistant. Création du rôle...**')
     muterole = await message.guild.createRole({
      name: "mute",
      color: "#464646",
      permissions: []
      })
   message.guild.channels.forEach(async (channel, id) => {
    await channel.overwritePermissions(muterole, {
       SEND_MESSAGES: false,
       ADD_REACTIONS: false
      });
     });
     message.channel.send('**Rôle "mute" crée avec succès !**')
    }catch(e){
   console.log(e.stack);
   }
  }
  
  
//^^^^ Création role ^^^^
 
 let mutetime = args[1];
// mutetime = mutetime.replace('s', 1000)
 if(!mutetime) return message.reply("il faut que tu donne un temps ! *1000ms = 1s; 60000 = 1min; 600000 = 10min; 3600000 = 1h*");
    if (isNaN(args[1])) return message.channel.send("Non, il faut des chiffres et uniquement des chiffres.")
  
   
   await(tomute.addRole(muterole.id));
   message.channel.send(`<@${tomute.id}> a été mute pendant ${ms(ms(mutetime))}`);
   
   setTimeout(function(){
     tomute.removeRole(muterole.id);
     message.channel.send(`<@${tomute.id}> n'est plus mute !`);
   }, ms(mutetime));
  
  
 
 }






module.exports.help = {
    name: "mute"
}