const Discord = require('discord.js')
const fs = require('fs')
const fileExists = require('file-exists')
const config = require('./config.json')

const client = new Discord.Client()
const verifG = client.guilds.get("333359639385210881")


client.on("ready", function () {
    console.log(`===========================================\nTous les systèmes sont opérationnels. Nous sommes connectés à ${client.channels.size} channels sur ${client.guilds.size} serveurs, pour un total de ${client.users.size} utilisateurs.`);
  });


  client.on('ready', () => {
    client.user.setGame('%help bot')
    console.log(`setGame OK`)
  });
  

  client.on("guildMemberAdd", function(member) {
      if (verifG) {
   member.sendMessage("**N'oublie pas de lire le règlement.**")
   console.log(`L'user ${member.user.tag} join`)
    member.addRole(member.guild.roles.find("name", "Sombral"));
    member.addRole(member.guild.roles.find("name", "→ [ACHIEVEMENT MdR] ←"));
        console.log("Les rôles on bien été ajouté")
      } else
      return console.log("Mauvais Guild Join !")
  })


  client.on('message', message => {
    if (message.guild === null) {
    console.log("Error")
    } else
  if (message.member.roles.find(r => ["AFK"].includes(r.name)) ) {
    if (message.content !== "%afk") {
      message.author.sendMessage(`**${message.author}` + " Tu es encore AFK !\nFais la commande %afk afin de signaler ton retour !**");
    }
  }
})


  client.on('message', message => {

    if (message.author.bot) return
    if (message.content.indexOf(config.prefix) !== 0) return
  
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
  
    if (message.channel.type === 'dm' && command != 'help') return
    if (command == 'boot') {
      if (message.member.id !== "205067571127386113") {
          message.delete(1000);
          message.reply("Vous ne disposez pas de la permission.")
            .then(message => {
              client.user.lastMessage.delete(5000)
                })
            .catch(error => console.log(error));
          }
      message.delete(1000) + message.channel.sendMessage('**Arrêt du bot !**')
      function reboot () {
        process.exit(1)
      }
      setTimeout(reboot, 1000)
    }    
    try {
      let commandFile = require(`./commands/${command}.js`)
      fileExists(`./commands/${command}.js`).then(exists => {
        if (exists) commandFile.run(client, message, args)
      })
    } catch(err) {
      if (command != 'boot'){
          message.delete(1000); 
          message.channel.send('Commande inconnue ou corrompue. Faites `' + config.prefix + 'help bot` pour la liste des commandes. Si la commande que vous avez entré existe bel et bien, informez un membre du staff du problème.')
           .then(message => {
            client.user.lastMessage.delete(5000)
              })
          .catch(error => console.log(error));
        }
    }
  })
  

  client.on("guildMemberRemove", (member) => {
    if (verifG) {
    client.channels.get("382913432573444096").send(`**${member.user.username}** vient de quitter le Discord, bonne continuation :wink:`);
    return console.log(`---------------------------------------------------\nL'user ${member.user.tag} vient de quitter le Discord\n---------------------------------------------------`);
    } else
    return console.log("Mauvais Guild Leave!")
  })
  

  client.login(config.token)