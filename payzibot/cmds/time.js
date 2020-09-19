const Discord = require('discord.js')
const time = require("pretty-ms");
exports.run = (client, message, args) => {
          if (!args[0]) return message.reply("укажите текст!");
   var str = time(args.slice(0).join(" "), { keepDecimalsOnWholeSeconds: false });
   str = str.replace('h', ' часов').replace('y', ' лет').replace('d', ' дней').replace('s', ' секунд').replace('m', ' минут');
       }
       exports.help = {
    name: "timddde",
    aliases: [],
    usage: "time (время в милисекундах)",
    description: "Перевести милисекунды в часы, дни, минуты, секунды. годы"
    }