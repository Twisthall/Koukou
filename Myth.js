const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./Myth.json');
const token = process.env.token
const prefix = ( cfg.prefix);
bot.on('ready', function () {
    console.log("c'est partie !")
    bot.user .setActivity("Regarder Nathalie").catch(consol.error)
});



bot.login (token);
