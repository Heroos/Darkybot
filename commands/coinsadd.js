module.exports.run = async (client, message) => {
  
  const fs = require("fs");
  let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  const db = require("quick.db");
  let coinDB = new db.table("COINS");
  
  Object.keys(coins).forEach(function(key) {
    if (coinDB.fetch(`coins_${key}`)) return console.log("déja ajouté" + key);
  coinDB.set(`coins_${key}`, coins[key].coins);
  console.log(`${key} ajouté, ${coins[key].coins}`)
  });
}

module.exports.help = {
  name: "coinsadd"
}
