const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:',
  '.': '<:point:468100800598638615>',
  ',': '<:virgule:468100822409150464>',
  "'": '<:apostrophe:468103028264927232>',
  'é': '<:e_accent_aigu:468107965421977611>',
  'ê': '<:e_chapeau:468107999764807691>',
  'ë': '<:e_2_points:468108014206058517>',
  'è': '<:e_accent_graves:468107985026285578>',
  'ù': '<:u_accent:468114070634102786>',
  'û': '<:u_chapeau:468114119963181056>',
  'ü': '<:u_point:468114142700634114>',
  'à': '<:a_accent:468113946499612682>'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    } 
  if (args.length < 1) {
    message.channel.send('Tu doit rentrer un text !');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
).catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
};

exports.help = {
  name: "emojifier",
  aliases: "etxt",
  commande: "db!emojifier <votre message>",
  desc: "Pour que votre messages est plus de visibilité, mais genre vraiment..."
}