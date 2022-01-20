const Client = require("./client.js");
const Discord = require("discord.js");

/**
 * @param {Discord.Message | Discord.Interaction} message
 * @param {string[]} args
 * @param {Client} client
 */
function RunFunction(message, args, client) {}

class Command {
    /**
     * @typedef {{name: string, description: string, nsfw:boolean, beta: boolean, permissions: string[], dev: boolean, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.nsfw = options.nsfw;
        this.beta = options.beta;
        this.permissions = options.permissions;
        this.dev = options.dev;
        this.run = options.run;
    }
}

module.exports = Command;