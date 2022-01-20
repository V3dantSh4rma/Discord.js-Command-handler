# Discord.js-Command-handler

A better command handler template for shitcord bots. I added new configurations like dev commands and all that stuff.

Before doing all this, make sure you rename [config.example.json](./config.example.json) to "config.json".


Blank command template:
```javascript
const Command = require('../handlers/command');

module.exports = new Command({
    name: "hello", // Name of the command.
    description: "Sends a hello world message.", // The description of the command.
    nsfw: true, //Is this command Nsfw? Leave it to False if this command isnt in nsfw. (boolean)
    beta: false, // Is this command in beta? Leave it to command if it's not in beta. (boolean)
    permissions: ['ADMINISTRATOR'], // This is the command which will be required by the user. Leave it to null if you don't want it to be limited.
    dev: true, //If left on true. This comand will be only usable by the Bot dev.
    async run(message, args, client){
        // return message.reply("Hello world!")
        //Do some stuff here
    }
});
```

After coding this command, you can now add it into the Commands directory.
