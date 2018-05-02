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
  .addField("avatar <utilisateur>", "Pour voir son avatar en plus grand et pour pouvoir le lui voler. èwé")
  .addField("hug <utilisateur>", "Pour faire un gros calin !")
  .addField("adminhelp", "Pour afficher les commandes pour les administrateurs.")

return message.channel.send(botembed);
}

//db!setgame
if (message.content.startsWith(prefix + "setgame")){
if (message.author.id == 191272823170269184){
  message.reply("C'est fait ! :thumbsup::skin-tone-2:")
  var game = args.slice(1).join(" ")
        client.user.setActivity(game, {
        'type': 'PLAYING'

})}} else{
    if (message.content.startsWith(prefix + "setgame")){
    message.reply("**BINGO !** Tu as trouver une commande réservé a l'owner du bot, bravo ! Mais tu ne peux pas t'en servir. *setgame run away.*")
}};


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
if (message.content.startsWith(prefix + "kick")){

let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:")
if (kUser.id == message.author.id) return message.reply('Tu veux te kick toi même ?! Étrange... :thinking: ');
if (kUser.id == client.user.id) return message.reply('Tu veux me kick ? :disappointed_relieved:')
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Non, tu ne peux pas !");
if (kUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Nan, il a des privililèges qui m'empêche de faire sa.");
   var kReason = args.join(" ").slice(26);

let kickEmbed = new Discord.RichEmbed()
   .setDescription("**~|kick|~**")
   .setColor("#ff7700")
   .setThumbnail("http://www.emoji.co.uk/files/twitter-emojis/symbols-twitter/11144-double-exclamation-mark.png")
   .addField("Utilisateur kick: ", `${kUser} avec l'ID ${kUser.id}`)
   .addField("Kick par: ", `<@${message.author.id}> avec l'ID ${message.author.id}`)
   .addField("Kick a partir du salon: ", message.channel)
   .addField("Le: ", message.createdAt)
   .addField("Raison: ", kReason);

   let kickChannel = message.guild.channels.find(`name`, "rapports");
   if(!kickChannel) return message.channel.send("Je ne peux pas le kick car le salon #rapports est inexistant, merci de le crée.");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed);

}

//db!ban <utilisateur> <raison>
if (message.content.startsWith(prefix + "ban")){

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:");
    if (bUser.id == message.author.id) return message.reply('Tu veux te bannir toi même ?! Tu est **vraiment** étrange... :cold_sweat: ');
    if (bUser.id == client.user.id) return message.reply('TU VEUX ME BANNIR !? :sob:')
    let bReason = args.join(" ").slice(26);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Non, tu ne peux pas !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nan, il a des privililèges qui m'empêche de faire sa.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**~|Bannissement|~**")
    .setColor("#bc0000")
    .setThumbnail("https://pbs.twimg.com/media/C9kEEmbXUAEX3r6.png")
    .addField("Utilisateur banni: ", `${bUser} avec l'ID ${bUser.id}`)
    .addField("Banni par: ", `<@${message.author.id}> avec l'ID ${message.author.id}`)
    .addField("Banni a partir du salon: ", message.channel)
    .addField("Le: ", message.createdAt)
    .addField("Raison: ", bReason);

    let banChannel = message.guild.channels.find(`name`, "rapports");
    if(!banChannel) return message.channel.send("Je ne peux pas le bannir car le salon #rapports est inexistant, merci de le crée.");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);

}


//db!adminhelp
if (message.content.startsWith(prefix + "adminhelp")){

let botembed = new Discord.RichEmbed()
	.setDescription("Bonjour, je suis l'aide pour les administrateurs ! Et voici mes commandes ! :smiley:")
	.setColor("#00C1FF")
	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emoji_u1f4dd.svg/1000px-Emoji_u1f4dd.svg.png")
	.addField("kick <membre> <raison>","Pour l'exclure du serveur !")
  .addField("ban <membre> <raison>", "Pour le frapper avec le marteau du ban ! èwé")

return message.channel.send(botembed);
}

//db!hug <membre>
if (message.content.startsWith(prefix + "hug")){

let toHug = message.mentions.users.first() || client.users.get(args[0]);
 if (!toHug) return message.reply("Alors, euh... Je ne sait pas si caliner l'air est la meilleur chose.");
 if (toHug.id == message.author.id) return message.reply("Te faire un calin toi même ? Pourquoi pas, c'est toi qui voit.");
 if (toHug.id == client.user.id) return message.reply("Me faire a calin a moi et comme faire un calin a quelqu'un qui n'éxiste pas, enfaite...");
 message.channel.send(`<@${toHug.id}> tu reçois un gros calin de la part de <@${message.author.id}> :wink: `)
var replies = ["https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716", "https://media1.tenor.com/images/b87f8b1e2732c534a00937ffb24baa79/tenor.gif?itemid=9136391", "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589", "https://media1.tenor.com/images/a2b621c6c769eee24e03b97990c15699/tenor.gif?itemid=4631839", "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432", "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093"]
var result = Math.floor((Math.random() * replies.length));

 let botembed = new Discord.RichEmbed()
 .setColor("#FF8CFB")
 .setImage(replies[result]);

 return message.channel.send(botembed);

}

//db!avatar
if (message.content.startsWith(prefix + "avatar")){

let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let avatared = message.mentions.users.first();
if(!avatared) return message.channel.send("Je n'ai pas trouver l'utilisateur :sweat:");
if (user.id == message.author.id) return message.reply("Et bien... voici ton avatar. On va juste dire que tu as perdu l'image sur ton système et que tu souhaite la récup'. Okay ? " + message.author.avatarURL);
	message.channel.send("Ceci est l'avatar de " + avatared + ", magnifique n'est-ce pas ? Ci-dessous un lien pour le lui voler. *Tu vas pas faire sa quand même ?*" + avatared.avatarURL);

}

//db!


});

client.login(process.env.TOKEN)
///process.env.TOKEN
