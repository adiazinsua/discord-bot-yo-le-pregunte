const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();



client.on("message", function (message) {

    if (message.content === "alguien le preguntó?") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`yo le pregunté`);
    }
});



client.login(config.BOT_TOKEN);