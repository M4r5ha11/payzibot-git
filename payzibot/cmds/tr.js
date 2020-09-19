exports.run = (client, message, args) => {
         const Discord = require('discord.js')
    /*    var translate = require('yandex-translate')('trnsl.1.1.20200603T114640Z.dd87c6d7e99afd3a.c347b7fda9da2f90a4c791a23a229d0b7a71bb9e');
      translate.translate(args.slice(1).join(" "), { to: args[0] }, function(err, res) {
    if(!args[0]) return message.reply('Укажите вопрос!')
        if(res.text === undefined) {
message.reply("Вы допустили ошибку! Пример: `p.tr en Привет мир!`");
          return
        }
        if(res.text.length > 1000) return message.reply('123')
    let embed = new Discord.MessageEmbed()
    .setTitle('Перевод на text'.replace('text', args[0]))
    .addField('Текст', res.text)
    .setColor('#064f3b')
    message.channel.send(embed)
    message.delete()
        });*/
        ErrorEmbed(`команда была отключена`, message)
       }
       exports.help = {
    name: "tr",
    aliases: ['translate'],
    info: "general",
    usage: "tr (язык) (текст)",
    description: "Перевод на определенный язык"
    }