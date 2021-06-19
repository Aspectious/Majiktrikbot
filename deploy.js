const fs = require("fs");
const Majiktrikbot = require("./index.js");

if (!process.env.TOKEN) {
    console.warn("NOTE: TOKEN Environment Variable has not been Declared! Deploy Failure Imminent! \n")
}

new Majiktrikbot(process.env.TOKEN)

// This is the Web Deploy Script. It requires an Environment Variable of TOKEN as the bot token.