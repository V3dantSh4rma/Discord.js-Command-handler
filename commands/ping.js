const Command = require('../handlers/command');

module.exports = new Command({
    name: "ping",
    description: "replies with the bot ping.",
    nsfw: true,
    beta: false,
    permissions: ['ADMINISTRATOR'],
    async run(message, args, client){
        await message.reply(`Pong! ${client.ws.ping}ms.`);
    }
})