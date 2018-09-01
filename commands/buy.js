const Discord = require("discord.js");
const economy = require('discord-eco');
var fs = require("fs");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }
  
  let items = require("../items.json");
  let coins = require("../coins.json");

let messageArray = message.content.split(" ")

///embed liste
     let categories = []; 
  
  message.channel.send("**COMMANDE NON-FINI ET TRÈS INSTABLE ! NE POURSUIVEZ PAS L'ACHAT D'UN ROLE !**")
     if (!args.join(" ")) { 

        for (var i in items) { 
        if (!categories.includes(items[i].type)) {
           categories.push(items[i].type)
         }
        }
              const embed = new Discord.RichEmbed()
                .setDescription(`Items disponible à l'achat`)
                .setColor("RANDOM")

              for (var i = 0; i < categories.length; i++) { 
              var tempDesc = '';
              for (var c in items) { 
              if (categories[i] === items[c].type) {

                 tempDesc += `**${items[c].name}** - ${items[c].price} pieces - ${items[c].desc}\n`;

         }
        }
            embed.addField(categories[i], tempDesc);

        }

            return message.channel.send({
                embed
        }); 
       }

         

        
        let itemName = '';
        let itemPrice = 0;
        let itemDesc = '';

        for (var i in items) { 
            if (args.join(" ").trim().toUpperCase() === items[i].name.toUpperCase()) {
                itemName = items[i].name;
                itemPrice = items[i].price;
                itemDesc = items[i].desc;
            }
        }

        ///réponses
        if (itemName === '') {
            return message.channel.send(`L'item **${args.join(" ").trim()}** n'a pas été trouver.`)
        }

        
        economy.fetchBalance(message.author.id + message.guild.id).then((i) => { 
            if (i.coins <= itemPrice) { 
                
                return message.channel.send(`Tu n'as pas assez de pièces pour acheter cela.`);
            }
        
          
          
            economy.updateBalance(message.author.id + message.guild.id, parseInt(`-${itemPrice}`)).then((i) => {

                message.channel.send('**Tu as acheter ' + itemName + '!**');
              
              fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if (err) console.log(err)

            ///items en vente    
                let memberrole = message.member;
                if (itemName === 'rouge') {
                  let role = message.guild.roles.find("name", "rouge");
                  
                  if (!role){

                  message.guild.createRole({
                     name: "rouge",
                     color: "#ff0000",
                     permissions:[]
                     })
                  }
                  memberrole.addRole(role).catch(console.error);
                }
              if (itemName === 'bleu') {
                    message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "bleu"));
                  if (!itemName){
                  try{
                   itemName = message.guild.createRole({
                     name: "bleu",
                     color: "#0099ff",
                     permissions:[]
                     })                
                      message.guild.channels.ea()
                  }catch(e){
                     console.log(e.stack);
                  }
                }}
            if (itemName === 'blurple') {
                    message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "blurple"));
                  if (!itemName){
                  try{
                   itemName = message.guild.createRole({
                     name: "blurple",
                     color: "#7289DA",
                     permissions:[]
                     })                                  
                      message.guild.channels
                  }catch(e){
                     console.log(e.stack);
                  }
                }}
            
            })
          })});
  
  
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
           }






module.exports.help = {
    name: "buy"
}