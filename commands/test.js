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
    return new Canvas(727,707)
    .addTextFont("./fonts/DTM-Sans.otf", "DTM Sans")
    .setColor(0x00A2E8)
    .addRect(727, 0, 0, 707)
    .addImage(plate,0,0,727,707)
    .addImage(body, 45, 65, 204, 193)
    .setTextFont('50px DTM Sans')
    .addText("654654", 423, 430)
    //.setTextFont('80px DTM Sans')
    .addText("25", 55, 430)
    .setTextFont('42px DTM Sans')
    .addText(message.author.tag, 280, 230)
    .addText("ceci est une biographie", 40,300)
    .toBuffer();
  }
 try {
    const result = await profile(pic);
    await message.channel.send({ files: [{ attachment: result, name: 'profile.png' }] });
  } catch (err) {
    throw err;
  }
  message.channel.send(profile(pic))
  /*
  let { Canvas } = require("canvas-constructor");



function test() {
new Canvas(300,300)
.setTextFont("40px DTM Mono")
.addText("cc")
  .toBuffer()
}

const result = await test()
console.log(result);
return await message.channel.send({ files: [{ attachment: result, name: 'profile.png' }] });
  */
///ZONE DE TEST, NE MODIFIER LE RESTE QUE EN CAS DE BESOIN !
  
  message.channel.send("```Test effectué sans echec.```")
.catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'))
}else {
  message.reply("non ! Tu n'as pas le droit d'utiliser les commandes en cours de dévelopement !")
}}

module.exports.help = {
    name: "test"
}