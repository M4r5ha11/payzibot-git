//86400000
exports.run = async (client, message, args) => {
        const Discord = require('discord.js')
        const ms = require("ms")
                const tme =  require('parse-ms')
          const User = require('../db/user.js')
          const Guild = require('../db/guild.js')
              Guild.findOne({guildID: message.guild.id}, (err,data) => {
        if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске сервера в базе-данных`) 
        
        if(!data){
            message.reply('Сервер отсутствует в базе данных!')
        }else{
     User.findOne({guildID: message.guild.id, userID: message.author.id},(err,res) => {
            if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске пользователя в базе-данных`)
          if(!res) return message.reply('123456789')
        if(res.daily !== null && 86400000 - (Date.now() - res.daily) > 0){
        let uptme = tme(1800000 - (Date.now() - res.work))
        WaitEmbed(`\`${uptme.hours}\` ч. \`${uptme.minutes}\` м. \`${uptme.seconds}\` сек.`, message)
        }else{
        res.work = Date.now()
        res.coins += parseInt(100)
        res.save()
        let a = new Discord.MessageEmbed()
        .setDescription(`Вы забрали ваш сегодняшний бонус. Вам было выдано \`100\` ${data.currency}`)
        .setColor('RANDOM')
        message.channel.send(a)
      }
    })
        }
        })

       }
       exports.help = {
    name: "daily",
    aliases: ['bonus'],
    info: "eco",
    usage: "daily",
    description: "Получить ежедневный бонус"
    }