const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")



  var replies = ["https://thumbs-prod.si-cdn.com/c86on9yeBmn5_G7b4ng_ZQWjiII=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg","https://d2kwjcq8j5htsz.cloudfront.net/1970/01/30153329/clownfish.jpg","https://blog.auntybinnaz.com/wp-content/uploads/fish.jpg","https://pbs.twimg.com/profile_images/448238813773430784/w4lr82sW.jpeg","http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2017/10/23/berkeley-city-council-bans-use-fish-as-prizes-at-carnivals/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1508750077165.jpg?ve=1&tl=1&text=big-top-image","https://www.worldofbanter.com/wp-content/uploads/2017/06/funny-fish-photo-1.jpg","http://www.funnyjunksite.com/pictures/wp-content/uploads/2015/04/Funny-Man-Fish-Image.jpg","https://farm1.staticflickr.com/151/430446668_6ee8c2dc17_b.jpg"]

var result = Math.floor((Math.random() * replies.length));
  
  let botembed = new Discord.RichEmbed()
 .setDescription(`Bl bl bl ! :fish: `)
 .setColor("#0095c6")
 .setImage(replies[result]);


 return message.channel.send(botembed);

  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}


module.exports.help = {
    name: "fishy",
    commande: "db!fishy",
    desc: "Fait apparaitre des images de poisson. :fish:"
}