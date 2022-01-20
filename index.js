const request = require("request");
const discord = require("discord.js");
const Command = require("./handlers/command");
const Client = require("./handlers/client");
const client = new Client()
const fs = require("fs");
const {
    prefix,
    token,
    devId
} = require("./config.json");
const {Collection} = require("discord.js");
fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
    /**
     * @type {Command}
     */
    const command = require(`./commands/${file}`);
    console.log(`Command ${command.name} loaded.`);
    client.commands.set(command.name, command);
});

client.on("messageCreate", message => {

    if (message.author.bot){
        return;
    }

    if (!message.content.startsWith(prefix)){
        return;
    }

    const args = message.content.substring(prefix.length).split(/ +/);
    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command){
        return message.reply(`${args[0]} is not a valid command!`);
    }

    if(command.nsfw === true){
        if(message.channel.type === 'nsfw'){
            command.run(message, args, client);
        } else {
            return message.reply("This command can only be used in a nsfw channel.")
        }
    }

    if(command.permissions){
        const perms = [
            "ADMINISTRATOR",
            "KICK",
            "BAN",
            "MANAGE_NICKNAMES"
        ];
        
        perms.forEach((perm) => {
            if(command.permissions.has(`${perm}`)){
                if(message.member.permissions.has(`${perm}`)){
                    command.run(message,args,client);
                }
            } else {
                return message.reply('You don\'t have the permissions to use this command.');
            }
        });
    }

    if(command.dev === true){
        if(message.member.id === `${devId}`){
            command.run(message,args,client);
        } else {
            return message.reply('This command is only accessible by the Dev.');
        }
    }

    if(command.beta === true){
        message.reply('This Command is currently beta.');
    }

    command.run(message,args,client);
});

client.login(`${token}`).then(_ => {
    console.log('Successfully logged into the Client!');
});