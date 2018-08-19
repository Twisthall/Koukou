const Roll = require('roll')
roll = new Roll()

exports.run = (client, message, args) => {

    if (message.guild.id == "333359639385210881") {

    var numberB = ['-0', '-1', '-0', '-2', '-0', '-1', '-3','-0', '-4','-0', '-5','-0', '-0', '-0'];

    let userRoll = 'd100';
    let size = 100;


    let dplayer = message.mentions.members.first();

    let splayer = message.guild.roles.find("name", "PM : 0", "PM : 1", "PM : 2", "PM : 3", "PM : 4", "PM : 5", "PM : 6", "PM : 7", "PM : 8", "PM : 9", "PM : 10")

    if (!splayer) return message.delete(1000) + message.reply("Vous n\'avez pas de PM !")

    if (!dplayer) {
        let mplayer = message.member;
        var mplayerPM;
        
        if (mplayer.roles.find("name", "PM : 1")) mplayerPM = 1;
        if (mplayer.roles.find("name", "PM : 2")) mplayerPM = 2;
        if (mplayer.roles.find("name", "PM : 3")) mplayerPM = 3;
        if (mplayer.roles.find("name", "PM : 4")) mplayerPM = 4;
        if (mplayer.roles.find("name", "PM : 5")) mplayerPM = 5;
        if (mplayer.roles.find("name", "PM : 6")) mplayerPM = 6;
        if (mplayer.roles.find("name", "PM : 7")) mplayerPM = 7;
        if (mplayer.roles.find("name", "PM : 8")) mplayerPM = 8;
        if (mplayer.roles.find("name", "PM : 9")) mplayerPM = 9;
        if (mplayer.roles.find("name", "PM : 10")) mplayerPM = 10;

        if (mplayer.roles.find("name", "Né-Moldu")) {
            userRoll = userRoll += numberB[Math.floor(Math.random() * numberB.length)]
            console.log(`(NM) bonus = ` + userRoll)
        }


        if (mplayerPM == 1){
            userRoll = userRoll
        } else 
            if (mplayerPM == 2){
                userRoll = userRoll += -5
            } else 
                if (mplayerPM == 3){
                    userRoll = userRoll += -10
                } else 
                    if (mplayerPM == 4){
                        userRoll = userRoll += -15
                    } else 
                        if (mplayerPM == 5){
                            userRoll = userRoll += -20
                        } else 
                        if (mplayerPM == 6){
                                userRoll = userRoll += -25
                    } else 
                        if (mplayerPM == 7){
                            userRoll = userRoll += -30
                } else 
                    if (mplayerPM == 8){
                        userRoll = userRoll += -35
            } else 
                if (mplayerPM == 9){
                    userRoll = userRoll += -40
        } else 
            if (mplayerPM == 10){
                userRoll = userRoll += -45                                                                                                                                                                                      
        }
         else {
            message.delete(1000) + message.reply("Vous n\'avez pas de PM");
        }
    }
    else if (dplayer) {

        let oplayer = dplayer.roles.find( r => ["name", "PM : 0", "PM : 1", "PM : 2", "PM : 3", "PM : 4", "PM : 5", "PM : 6", "PM : 7", "PM : 8", "PM : 9", "PM : 10"].includes(r.name));
        let mplayer = message.author;
        if (!oplayer) {
            message.delete(1000)
            message.channel.send(`${dplayer.displayName}, Vous n'avez pas de PM !`)
        } else
        if (oplayer) {

            var mplayerPM;
            var dplayerPM;
            var dif;
            var bonus;


            if (message.member.roles.find("name", "PM : 1")) mplayerPM = 1;
            if (message.member.roles.find("name", "PM : 2")) mplayerPM = 2;
            if (message.member.roles.find("name", "PM : 3")) mplayerPM = 3;
            if (message.member.roles.find("name", "PM : 4")) mplayerPM = 4;
            if (message.member.roles.find("name", "PM : 5")) mplayerPM = 5;
            if (message.member.roles.find("name", "PM : 6")) mplayerPM = 6;
            if (message.member.roles.find("name", "PM : 7")) mplayerPM = 7;
            if (message.member.roles.find("name", "PM : 8")) mplayerPM = 8;
            if (message.member.roles.find("name", "PM : 9")) mplayerPM = 9;
            if (message.member.roles.find("name", "PM : 10")) mplayerPM = 10;

            if (message.member.roles.find("name", "Né-Moldu")) {
                userRoll = userRoll += numberB[Math.floor(Math.random() * numberB.length)]
                console.log(`(NM) bonus = ` + userRoll)
            }

            if (dplayer.roles.find("name", "PM : 1")) dplayerPM = 1;
            if (dplayer.roles.find("name", "PM : 2")) dplayerPM = 2;
            if (dplayer.roles.find("name", "PM : 3")) dplayerPM = 3;
            if (dplayer.roles.find("name", "PM : 4")) dplayerPM = 4;
            if (dplayer.roles.find("name", "PM : 5")) dplayerPM = 5;
            if (dplayer.roles.find("name", "PM : 6")) dplayerPM = 6;
            if (dplayer.roles.find("name", "PM : 7")) dplayerPM = 7;
            if (dplayer.roles.find("name", "PM : 8")) dplayerPM = 8;
            if (dplayer.roles.find("name", "PM : 9")) dplayerPM = 9;
            if (dplayer.roles.find("name", "PM : 10")) dplayerPM = 10;

            if (dplayer.roles.find("name", "Né-Moldu")) {
                userRoll = userRoll += numberB[Math.floor(Math.random() * numberB.length)]
                console.log(`(NM) bonus = ` + userRoll)
            }

            console.log("MPLayer = [" + mplayerPM + "]") + console.log("DPlayer = [" + dplayerPM + "]");

            if (mplayerPM > dplayerPM) {

              console.log("mplayerPM +");

              dif = mplayerPM - dplayerPM;
              bonus = dif * 5;

              let bonusString = '-' + bonus.toString();
              userRoll = userRoll + bonusString;

            } else

            if (dplayerPM > mplayerPM) {

                console.log("dplayerPM +");

                dif = dplayerPM - mplayerPM;
                bonus = dif * 2;

                let bonusString = '+' + bonus.toString();
                userRoll = userRoll + bonusString;

            }

                } else {
            message.delete(1000) + message.reply("**ERREUR**\nJe vient d'en informer mon créateur :3") + message.guild.channels.find("name", "rapport").send("<@!205067571127386113>,Un bug est apparue avec la commande `%spell`\n**Date :** " + message.createdAt.toString())
             }
    }

    let mplayer = message.author;

    var dice = roll.roll(userRoll)
    var rollResult = dice.result

    let embedColor = 0x0ddd0d

    if (rollResult <= size * 0.1) {
        embedColor = 0x0ddd0d
      } else
      if (rollResult <= size * 0.5 && rollResult > size * 0.1) {
        embedColor = 0x0ddd0d
      } else
      if (rollResult <= size * 0.9 && dice.result > size * 0.5) {
        embedColor = 0xFF0000
      } else
      if (rollResult > size * 0.9) {
        embedColor = 0xFF0000
      }

    if (rollResult <= size * 0.05) {
        message.delete(1000)
        message.channel.send('**[Le sort fonctionne]**\n**REUSSITE CRITIQUE**')
      } else
      if (rollResult <= size * 0.5 && rollResult >= size * 0.1) {
        message.delete(1000)
        message.channel.send('**[Le sort fonctionne]**')
      } else
      if (rollResult <= size * 0.9 && dice.result >= size * 0.5) {
        message.delete(1000)
        message.channel.send('**[Le sort échoue]**')
      } else
      if (rollResult >= size * 0.95) {
        message.delete(1000)
        message.channel.send('**[Le sort échoue]**\n**ECHEC CRITIQUE**')
      }

      message.channel.send(
        {
          embed: {
            title: message.author.username + ' a roll ' + userRoll + '.',
            description: 'Le résultat est de **' + rollResult + '**.',
            color: embedColor,
            footer: {
              text: '(' + dice.rolled + ')'
            }
          }
        }
      )

    } else
    return message.delete(1000) + message.reply("Vous ne pouvez pas utilisez cette commande ici.")
}