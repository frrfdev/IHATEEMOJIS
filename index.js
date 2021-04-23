const Discord = require("discord.js");
const config = require("./config.js");

const client = new Discord.Client();

const prefix = "!e";
const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var enabled = true;

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
        
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(!command) return;
    
    enabled = command === "disable" ? false : command === "enabled" ? true : enabled
});

client.on("message", function(message) {
    if(!enabled) return;

    const match = emojiRegex.exec(message.content);
    if (!match) return;
    message.delete();
})
console.log(config)
client.login(config.BOT_TOKEN);