exports.run = (client, message, args) => {
        const Discord = require('discord.js')
        let  embed1 = new Discord.MessageEmbed()
        .addField ('Важные ссылки', `[Пригласить бота](https://discord.com/api/oauth2/authorize?client_id=576442351426207744&permissions=8&scope=bot)\n[Саппорт сервер](https://discord.gg/XuN4uhC)`)
        .addField ('Мониторинги', `[SD.C](https://bots.server-discord.com/576442351426207744)\n[Top.gg](https://top.gg/bot/576442351426207744)`)
        .setColor('#064f3b')
        message.channel.send(embed1)
       }
       exports.help = {
    name: "link",
    aliases: ['invite'],
    info: "general",
    usage: "link",
    description: "Ссылки бота"
    }