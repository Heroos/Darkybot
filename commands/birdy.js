const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")


  var replies = ["https://pcenerelli.files.wordpress.com/2012/09/red-winged_blackbird-male_2-12-05-12-web.jpg","http://4.bp.blogspot.com/-SFSXd_pW6Ws/TfqLE45M5WI/AAAAAAAABLk/NwUN9qYMn7c/s400/birds_with_arms5.jpg","https://4.bp.blogspot.com/-nJEMY6QveKA/V6Ebd7DfHLI/AAAAAAAAFHk/wWLcWeo0ILw9xawqhwy3728djyhgFutzwCLcB/s1600/American%2BPygmy%2BKingfisher.jpg","https://i.pinimg.com/736x/b5/eb/86/b5eb863e6d0adcfbc047d8e771387b56.jpg","https://i1.wp.com/www.windycityparrot.com/images/assets/images/products/graphics/00000001/custom_budgies_many_stick_549w.jpg?w=840","https://i.ytimg.com/vi/KwORJU3Czws/maxresdefault.jpg","http://www.newhdwallpaper.in/wp-content/uploads/2014/09/Flying-bird-beautiful-wallpaper.jpg","http://feedinspiration.com/wp-content/uploads/2015/04/Some-Random-Bird.jpg","https://randomfunnypicture.com/wp-content/uploads/2011/06/bread-one-pigeon-zero.png",]

var result = Math.floor((Math.random() * replies.length));
  
  let oazoEmbed = new Discord.RichEmbed()
 .setDescription(`Cui cui ! :bird:`)
 .setColor("#38c600")
 .setImage(replies[result]);


 return message.channel.send(oazoEmbed);
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
  }
  



module.exports.help = {
    name: "birdy",
    commande: "db!birdy",
    desc: "Permet de faire apparaitre une image d'un oiseau random :3"
}