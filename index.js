const Discord = require("discord.js");
const config = require("./config.js");

const client = new Discord.Client();

const prefix = "!e";
const emojiRegex = /\p{Emoji}/gu;

var enabled = true;

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) {
        handleEmojis(message);       
    } else {
        handleCommand(message);
    }
});

function handleCommand(message) {
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(!command) return;
    
    enabled = command === "disable" ? false : command === "enable" ? true : enabled
}

function handleEmojis(message) {
    console.log(message)
    if(!enabled) return;
    const content = message.content;
    console.log(content)

    const match = content.match(emojiRegex)
    console.log("match:",match)

    if (!match) return;

    if(isNotMention(match)) return;

    message.delete();
}

function isNotMention(match) {
    for(let i = 0; i < match.length; i++) {
        const converted = parseInt(match[i]);

<<<<<<< HEAD
        if(isNaN(converted)) return false;
    }

    return true;
}


=======
>>>>>>> d8a6eb1650a6a2f34c507b92398f42a18f00335f
client.login(config.BOT_TOKEN);
