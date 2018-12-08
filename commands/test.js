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
  
  function bioFunc(main_str, ins_str, pos) {
    if(typeof(pos) == 'undefined') {
      pos = 0;
    }
    if (typeof(ins_str) == 'undefined') {
      ins_str = '';
    }
    return main_str.slice(0, pos) + ins_str + main_str.slice(pos);
  }
  
  console.log(bioFunc('ceci est une biographie'));
console.log(bioFunc('ceci est une biographie','\n '));
console.log(bioFunc('ceci est une biographie','\n ',25));
  
  
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
    .addText("654654", 425, 430)
  //.setTextFont('80px DTM Sans')
    .addText("25", 55, 430)
    .setTextFont('48px DTM Sans')
    .addText(message.author.tag, 280, 250)
    .setTextFont('30px DTM Sans')
    .addText(bioFunc('ceci est une biographieeeeeeeeeeeeeeeeeeee'), 17,600)
    .toBuffer();
  }
 try {
    const result = await profile(pic);
    await message.channel.send({ files: [{ attachment: result, name: 'profile.png' }] });
  } catch (err) {
    throw err;
  }
  //message.channel.send(profile(pic))
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