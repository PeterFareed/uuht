const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("581813923376791553")
setInterval(function() {
channel.send(`ItzKillerLord ItzKillerLord ItzKillerLord ItzKillerLord ItzKillerLord ItzKillerLord ItzKillerLord ItzKillerLord`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
