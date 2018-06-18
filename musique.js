//db!play
 if (message.content.startsWith(prefix + "play")){
 
  if (!args[1]) {
    message.channel.sendMessage(":musical_note: Merci de bien vouloir mettre un lien valide.");
 if (!args[1]) {
   message.channel.sendMessage(":musical_note: Merci de bien vouloir mettre un lien valide.");
     return;
   }
 
   if (!message.member.voiceChannel) {
     message.channel.sendMessage(":musical_note:  Tu doit être dans un salon vocal !");
     return;
   }
 
   if(!servers[message.guild.id]) servers[message.guild.id] = {
 
     queue: []
   };
 
   var server = servers[message.guild.id];
 
   server.queue.push(args[1]);
 
   if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
    play(connection, message);

 });
 }
 
 //db!skip
 if (message.content.startsWith(prefix + "skip")){
   var server = servers[message.guild.id];
 
   if (server.dispatcher) server.dispatcher.end();
 }
 
 //db!stop
 if (message.content.startsWith(prefix + "stop")){
    var server = servers[message.guild.id];
 
    if (!message.guild.voiceConnection) message.guild.voiceChannel.disconnect();
 }
 
   
 ///Fin partie bot musique 


   
   ///Je pense que c'est sa ce qui lisait les musiques:
   
   function play(connection, message) {
   var server = servers[message.guild.id];
 
   server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
 
   server.queue.shift();
 
   server.dispatcher.on("end", function() {
     if (server.queue[0]) play(connection, message);
     else connection.disconnect();
   });
 }
 
+function clean(text) {
+  if (typeof(text) === "string")
+    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
+  else
+      return text;
+}

//Mais je suis pas, sur
 