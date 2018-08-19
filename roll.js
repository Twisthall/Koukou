const Roll = require('roll');
roll = new Roll();

exports.run = (client, message, args) => {
  let userRoll = args[0]

  valid = roll.validate(userRoll);

  if (valid) {

    var dice = roll.roll(userRoll);
    var rollResult = dice.result

    let separators = ['d', '\\\+', '-', '\\*', '/']
    let tokens = userRoll.split(new RegExp(separators.join('|'), 'g'))
    let size = 100
    if (tokens[0] == '') size = tokens[1]
    if (tokens[0] != '') size = tokens[0] * tokens[1]

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
    );
    
    if (rollResult > size * 0.9) {
      message.channel.send("**ECHEC CRITIQUE**");
    }

    if (rollResult <= size * 0.1) {
      message.channel.send("**REUSSITE CRITIQUE**");
    }


    message.delete(1000);

    return
  } else

  if (!valid || userRoll === undefined) {
        message.delete(1000);
        message.channel.send('Le roll que vous avez entré n\'est pas valide.\nFaite `%help roll` pour plus d\'informations.')
        .then(message => {
            client.user.lastMessage.delete(5000);
        })
        .catch(error => console.log(error));

    return
  }
}