module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  let str = args.join(" ");
  let webhook = new Discord.WebhookClient("518786328180031489", "M5D24rmhwJnuwN3h-hlfMbnp3eJmjFF5GxNTC8vbOJ0q36oXmEu4OsOv-mG1gKSGa3Zu")
  
  let res = str.slice(3,-3);
  var OnlineRegex = /\:online:/g;
var OfflineRegex = /\:offline:/g;
var IdleRegex = /\:idle:/g;
var LiveRegex = /\:live:/g;
var DndRegex = /\:dnd:/g;
  


  webhook.send(res.replace(OnlineRegex, "<a:online:517801995277697036>").replace(LiveRegex, "<a:live:518792000074678272>").replace(DndRegex, "<a:dnd:517801947118436362>").replace(IdleRegex, "<a:idle:517801981046423553>").replace(OfflineRegex, "<a:offline:518791982051622914>"))
}
module.exports.help = {
    name: "webhook"
}