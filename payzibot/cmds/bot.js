exports.run = (client, message, args) => {
        const Discord = require('discord.js')
        const v = `0.4.51`
        const os = require('os')
        const tme =  require('parse-ms')
        const uptme = tme(client.uptime)
        let bremya;
        if (uptme.minutes === 0) bremya = `${uptme.minutes} м. ${uptme.seconds} сек.`
        else if (uptme.hours === 0) bremya = `${uptme.hours} ч. ${uptme.minutes} м.`
        else if (uptme.days === 0) bremya = `${uptme.days} д. ${uptme.hours} ч. ${uptme.minutes} м.`
        else bremya = `${uptme.days} д. ${uptme.hours} ч. ${uptme.minutes} м.`
        let status;
        if (Date.now()-message.createdTimestamp < 300) status = `<:status_3:738345696138100828>`
        else if (Date.now()-message.createdTimestamp > 299 && Date.now()-message.createdTimestamp < 1500) status = `<:status_2:738345615506800641>`
        else if (Date.now()-message.createdTimestamp > 1499) status = `<:status_1:738345451518033922>`
        let  embed = new Discord.MessageEmbed()
        .setTitle('Статистика')
        .addField ('Бот', `Серверов - ${client.guilds.cache.size}\nПользователей - ${client.users.cache.size}\nЭмодзи - ${client.emojis.cache.size}\nВерсия - ${v}\nБот работает - ${bremya}\nЗадержка - ${Date.now()-message.createdTimestamp} мс`)
        .addField ('Хостинг', `ОС - ${os.platform} ${os.arch}\nПроцессор - ${os.cpus()[0].model}`)
        .addField ('Другое', 'Статус - status\nРазработчик - `payz`'.replace('status', status).replace('payz', `Пэйз_2020#9087`))
        .setColor('#064f3b')
        message.channel.send(embed)
       }
       exports.help = {
    name: "stats",
    aliases: ['stat'],
    info: "stat",
    usage: "stats",
    description: "Статистика хостинга/бота"
    }