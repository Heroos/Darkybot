const Discord = require("discord.js");
let db = require("quick.db");
let coinDB = new db.table("COINS");
let xp = require("../xp.json");
let fs = require("fs")

// let canvas = require("canvas")

module.exports.run = async (client, message, args) => {
  
let messageArray = message.content.split(" ")
if (message.author.id == 191272823170269184 || 361225964417449985) {

  
///ZONE DE TEST, NE MODIFIER LE RESTE QUE EN CAS DE BESOIN !
  const fsn = require ("fs-nextra");
  let { Canvas } = require("canvas-constructor");
  const snek = require("snekfetch");
  let pic;
  if (message.mentions.users.size < 1) pic = message.author.displayAvatarURL;
  else pic = message.mentions.users.first().displayAvatarURL;
  const profile = async (person)=> {
    const plate = await fsn.readFile('./images/Profile.jpg');
    const png = person.replace(".gif", ".png");
    const { body } = await snek.get(png);
    return new Canvas(707,723)
    .setColor(0x00A2E8)
    .addRect(707, 0, 0, 727)
    // .addImage(body, 423, 50, 168, 168)
    .addImage(plate,0,0,634,675)
    .addImage(body, 40, 61, 177, 185)
    .setTextFont('50px Impact')
    .addText("654654", 373,430)
    .setTextFont('40px Impact')
    .addText(message.author.tag, 230, 230)
    .toBuffer();
  }
 try {
    const result = await profile(pic);
    await message.channel.send({ files: [{ attachment: result, name: 'profile.png' }] });
  } catch (err) {
    throw err;
  }
  
///ZONE DE TEST, NE MODIFIER LE RESTE QUE EN CAS DE BESOIN !
  
  message.channel.send(profile(pic))
  message.channel.send("```Test effectué sans echec.```")
.catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'))
}else {
  message.reply("non ! Tu n'as pas le droit d'utiliser les commandes en cours de dévelopement !")
}}

module.exports.help = {
    name: "test"
}