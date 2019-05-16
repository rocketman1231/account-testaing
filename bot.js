 const discord = require('discord.js');
 const client = new Discord.Client();
 
 
 client.on('ready', () => {
     var x = client.channels.get("id channels");
     if (x) x.join();
 });
 
 
 
 client.login(process.env.BOT_TOKEN); 
