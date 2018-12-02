const Discord = require("discord.js");
let talkedRecently = [];
const Fortnite = require('fortnite');
const fortnite = new Fortnite(process.env.FNAPI)
const fetch = require('node-fetch');


module.exports.run = async (client, message, args) => {
  
let erchannel = client.channels.get("455520859793391627");
if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }

let messageArray = message.content.split(" ")
    
 module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.users.first() || message.author

    let platform;
    let username;

    if(!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send(":x: **Erreur:** Veuillez indiquer la plateforme. `db!fortnite [pc ; xbl ; psn] <pseudo Epic>` :x: \n*ou `db!fndrop` pour lancer un drop random* :eyes:");
    if(!args[1]) return message.channel.send(":x: **Erreur:** Veuillez indiquer un pseudo. `db!fortnite [pc ; xbl ; psn] <pseudo Epic>` :x: ");

    platform = args.shift();
    username = args.join(' ');

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;

        let solostats = stats.solo
        let duostats = stats.duo
        let squadstats = stats.squad
        let lifetime = stats.lifetime;

        let sscore = solostats.score;
        let smatchesPlayed = solostats.matches;
        let swins = solostats.wins;
        let skills = solostats.kills;
        let skd = solostats.kd;

        let dscore = duostats.score;
        let dmatchesPlayed = duostats.matches;
        let dwins = duostats.wins;
        let dkills = duostats.kills;
        let dkd = duostats.kd;

        let escore = squadstats.score;
        let ematchesPlayed = squadstats.matches;
        let ewins = squadstats.wins;
        let ekills = squadstats.kills;
        let ekd = squadstats.kd;

        let score = lifetime[6]['Score'];
        let matchesPlayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let embed = new Discord.RichEmbed()
        .setTitle(`Statistiques Fortnite de ` + "`" + `${data.username}` + "`")
        .setAuthor(user.username, user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Fortnite stats", bot.user.avatarURL)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/0/07/Fortnite_Battle_Royale_Logo.png")
        .addField("```Solo```",`Top 1 : ${swins} \nKills : ${skills} \nScore : ${sscore} \nParties jouées : ${smatchesPlayed} \nK/D : ${skd}`, true)
        .addField("```Duo```", `Top 1 : ${dwins} \nKills : ${dkills} \nScore : ${dscore} \nParties jouées : ${dmatchesPlayed} \nK/D : ${dkd}`, true)
        .addField("```Squad```", `Top 1 : ${ewins} \nKills : ${ekills} \nScore : ${escore} \nParties jouées : ${ematchesPlayed} \nK/D : ${ekd}`, true)
        .addField("```Global```", `Top 1 : ${wins} \nKills : ${kills} \nScore : ${score} \nParties jouées : ${matchesPlayed} \nK/D : ${kd} \nPourcentage de victoire : ${winper}`, true);
        message.channel.send(embed);

    }).catch (e=> {
      message.channel.send(":warning: Utilisateur non trouvé...");
    })
    
}

   }
  

                                     
module.exports.help = {
      name: "fortnite",
      commande: "db!fortnite [ pc | xbl | psn ] <pseudo>",
      desc: "Pour afficher vos stats Fortnite",
      aliases: "fn"
};