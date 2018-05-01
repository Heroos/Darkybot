const Discord = require("discord.js");
const client = new Discord.Client();

client.on('warn', console.warn);
client.on('error', console.error);
client.on("ready", () => {
  console.log("Darkybot a bien démarrer !");

     client.user.setStatus('Online')
     client.user.setGame('db!help')
});
const prefix = 'db!'

client.on('message', message => {
	var args = message.content.substring(prefix.length).split(" ");
     if(message.author.bot) return;

//db!ping
if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send('Pong ! Mon ping est de ' + client.ping +  ' ms');
}

//db!8ball <question>
if (message.content.startsWith(prefix + "8ball")) {

var botmessage = args.slice(1).join(" ");
 if(!args[2]) return message.reply("**UNE QUESTION DOIT COMMENCER PAR UNE LETTRE ET FINIR PAR UN POINT D'INTERROGATION !** Alors fait un effort stp.");

var replies = ["Ouais !","Nan...","Peut-être.","Chais pas, demande a ta mère. :/","Compte la dessus !","Nan, oublie", "Re-demande moi plus tard. :sweat_smile:", "Euh... Tu n'as pas une meilleur question ?", "Je demanderais a mon cheval ! *PS: il a répondu oui.  :smirk:*","Alors là... Aucune idée frère","Je demanderais a mon cheval ! *PS: Il a répondu non cbatar...*"];
var question = args.slice(1).join(" ")
var result = Math.floor((Math.random() * replies.length));

var ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("RANDOM")
.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/2000px-8-Ball_Pool.svg.png")
.addField("Question:", question)
.addField("Réponse à la question:", replies[result]);

message.channel.send(ballembed);
};

//db!botinfo
if (message.content.startsWith(prefix + "infobot")){

	let bicon = client.user.displayAvatarURL;
	let botembed = new Discord.RichEmbed()
	.setDescription("Informations sur le bot !")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot:", "Darkybot#0140 :smiley:")
    .addField("Bot crée par:", "D𝓪𝓻𝓴𝔂#9258")
    .addField("Mon prefix","db!")
    .addField("Lien d'invitation:", "[Invite moi si tu veux ! ^-^](https://discordapp.com/oauth2/authorize?client_id=439775455537790976&scope=bot&permissions=3525696)");

    return message.channel.send(botembed);
}

//db!infoserveur
if (message.content.startsWith(prefix + "infoserveur")){

	let sicon = message.guild.displayIconURL;
	let serverembed = new Discord.RichEmbed()
	.setDescription("Informations sur le serveur !")
	.setColor("#E82142")
	.setThumbnail(message.guild.iconURL)
	.addField("Nom du serveur:", message.guild.name)
	.addField("Rejoin le:", message.member.joinedAt)
    .addField("Crée le:", message.guild.createdAt)
    .addField("Membres total:", message.guild.memberCount)

	return message.channel.send(serverembed);
}

//db!help
if (message.content.startsWith(prefix + "help")){

	let botembed = new Discord.RichEmbed()
	.setDescription("Bonjour, je suis l'aide ! Et voici mes commandes ! :smiley:")
	.setColor("#00C1FF")
	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emoji_u1f4dd.svg/1000px-Emoji_u1f4dd.svg.png")
	.addField("8ball <ta question>","Pose moi une question et j'y répondrais !")
	.addField("infobot", "Pour en savoir un peu plus sur moi")
	.addField("ping","Pour me tester !")
	.addField("infoserveur", "Pour avoir plus d'infos sur le serveur actuel !")
	.addField("sayd <message>", "Pour me faire répeter ce que tu souhaite dire.")
	.addField("report <utilisateur> <raison>", "pour rapporter un vilain membre :(")

return message.channel.send(botembed);
}

//db!setgame


//db!sayd <message>
if (message.content.startsWith(prefix + "sayd")){
var botmessage = args.slice(1).join(" ");
message.delete();
message.channel.send(botmessage);
}

//db!report <utilisateur> <raison>
if (message.content.startsWith(prefix + "report")){

	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:")
    if (rUser.id == message.author.id) return message.reply('Euh... Pourquoi tu veux te report toi même ? :thinking: ');
    if (rUser.id == client.user.id) return message.reply('Héhéhé... Tu as cru pouvoir me report ?! **IDIOT !**');
    if (rUser.id == 191272823170269184) return message.reply('Nop, tu peux pas le report. Même méchant, il est trop gentil.');
    if (rUser.id == 334095574674571264) return message.reply(`C'est Eni quoi, tu peux pas le report, il est trop gentil :heart:`);
      var reason = args.join(" ").slice(29);

    var reportEmbed = new Discord.RichEmbed()
    .setDescription("Caftage")
    .setColor("#DAF116")
    .setThumbnail("https://www.emojibase.com/resources/img/emojis/apple/x26a0.png.pagespeed.ic.DB5SxsN5FU.png")
    .addField("Membre rapporté: ", `${rUser} avec l'ID: ${rUser.id}`)
    .addField("Rapporté par: ", `${message.author} avec l'ID: ${message.author.id}`)
    .addField("Dans le salon: ", message.channel)
    .addField("Le :", message.createdAt)
    .addField("Raison: ", reason);

    let reportschannel = message.guild.channels.find(`name`, "rapports");
    if(!reportschannel) return message.channel.send("Je n'arrive pas a trouver le salon #rapports, demandez a votre administrateur d'en crée un !")

    message.delete();
    reportschannel.send(reportEmbed);

}

//db!kick <utilisateur> <raison>
if (message.content.startWith(prefix + "kick")){

let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:")
if (kUser.id == message.author.id) return message.reply('Tu veux te kick toi même ?! Étrange... :thinking: ');
if (kUser.id == member.hasPermission("MANAGE_MESSAGES")) return message.reply('Kick un collègue ?! Euh... Nan jpeux pas faire sa ! Débrouille toi.');
if (kUser.id == client.user.id) return message.reply('Tu veux me kick ? :disappointed_relieved:')
   var reason = args.join(" ").slice(29);
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return messsage.channel.send("Nop, tu n'as pas l'autorisation !")


   let kickEmbed = new Discord.RichEmbed()
   .setDescription("~|kick|~")
   .setColor("#ff7700")
   .addField("Utilisateur kick: ", `${kUser} avec l'ID ${kUser.id}`)
   .addField("Kick par: ", `<@${message.author.id}> avec l'ID ${message.author.id}`)
   .addField("Kick a partir du salon: ", message.channel)
   .addField("Le: ", message.createdAt)
   .addField("Raison: ", kReason);

   let kickChannel = message.guild.channels.find(`name`, "rapports");
   if(!kickChannel) return message.channel.send("Je ne peux pas kick car le salon #rapports est inexistant, merci de le crée.");

kickChannel.send(kickEmbed);
}


});

client.login(process.env.TOKEN)
