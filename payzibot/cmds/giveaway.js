const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    let item = "",
        time,
        winnerCount,
        messageArray = message.content.split(" ");
    for (var i = 3; i < messageArray.length; i++){
        item += (messageArray[i] + " ");
    }
    winnerCount = Number(messageArray[1]);
    time = Number(messageArray[2]);
    var giveEmbed = new Discord.MessageEmbed()
        .setTitle("🎉 Розыгрыш 🎉")
        .setDescription(`\n**Приз: ${item}** \n\n**Создал розыгрыш: ${message.author}**`);
    let embedSent = await message.channel.send(giveEmbed);
    let react = await embedSent.react("🎉");
    setTimeout(async function() {
        var reactFetch = await react.fetch("🎉"),
            peopleReacted = reactFetch.users.cache.array().filter(us => !us.bot),
            winners = [];
        if (peopleReacted.length >= winnerCount) {
            winners = peopleReacted;
        } else {
            for (var i = 0; i < winnerCount; i++) {
                var index = Math.floor(Math.random() * peopleReacted.length);
                winners.push(peopleReacted[index]);
                peopleReacted.splice(index, 1);
            }
        }
        var winnerMsg = "Участник(и) ";
        for (var i = 0; i < winners.length; i++){
            if(!winners[i]) continue
            winnerMsg += ('<' + '@' + winners[i] + '>' + " ");
       }
       var Embed = new Discord.MessageEmbed()
           .setTitle("🎉 Розыгрыш завершён! 🎉")
           .setColor('RANDOM')
           .setDescription(`**${winnerMsg} выиграл(и) ${item}**`);
      message.channel.send(Embed); //мне нужно главное сообщение, едитировать на Embed
    }, time * 1000);
}
exports.help = {
    name: "giveaway",
    aliases: [],
    info: "g",
    usage: "giveaway () () ()",
    description: "Провести розыгрыш"
}
