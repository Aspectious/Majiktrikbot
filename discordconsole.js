const Discord = require('discord.js');
export class DiscordConsole {
    constructor(BotClient) {
        this.BotClient = Discord.ClientUser()
    }
    output = new Array;
    addLine(message) {
    this.output.push(`${message}`)
    }
}