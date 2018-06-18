const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let messageArray = message.content.split(" ")


  var replies = ["https://purr.objects-us-west-1.dream.io/i/c9pLd.jpg","https://purr.objects-us-west-1.dream.io/i/YGb6f.jpg","https://purr.objects-us-west-1.dream.io/i/4VewR.jpg","https://purr.objects-us-west-1.dream.io/i/CnCkq.jpg","https://purr.objects-us-west-1.dream.io/i/unnamed-1.jpg","https://purr.objects-us-west-1.dream.io/i/IekT6.jpg","http://random.cat/view/1394","https://purr.objects-us-west-1.dream.io/i/dLIZu.jpg","https://purr.objects-us-west-1.dream.io/i/NaJaQ.jpg","https://purr.objects-us-west-1.dream.io/i/44jtgl.jpg","https://purr.objects-us-west-1.dream.io/i/img_20140920_145408.jpg","http://img-comment-fun.9cache.com/media/c81c59c9145641080812687141_700wa_0.gif", "https://reseauinternational.net/wp-content/uploads/2015/10/gifa-cat-surprised.gif", "http://img4.hostingpics.net/pics/113686catmousetabletpounce.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vslRfH69TDhw9to9dtiBi9fwtiOwjHJ7HRSvi7wYSCvqP6rl","https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw=="," http://www.ordanburdansurdan.com/wp-content/uploads/2017/06/oxgkvrvnd5o-1.jpg", "https://ichef.bbci.co.uk/news/660/cpsprodpb/71E1/production/_99735192_gettyimages-459467912.jpg", "https://cms.kienthuc.net.vn/zoom/500/Uploaded/ctvkhoahoc/2017_10_20/10_NMHD.jpg", "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg", "https://i2-prod.mirror.co.uk/incoming/article11812659.ece/ALTERNATES/s1200/The-Feline-World-Gathers-For-The-Supreme-Cat-Show-2017.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2017/11/minimalist-cat-art-subreddit-10.jpg", "https://metrouk2.files.wordpress.com/2017/11/capture16.png?w=748&h=706&crop=1"]

var result = Math.floor((Math.random() * replies.length));
  
  let botembed = new Discord.RichEmbed()
 .setDescription(`Miaou ! :cat:`)
 .setColor("#ff7070")
 .setImage(replies[result]);


 return message.channel.send(botembed);

}


module.exports.help = {
    name: "cat"
}