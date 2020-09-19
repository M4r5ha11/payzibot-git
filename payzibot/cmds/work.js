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
      let mmm = Math.floor(Math.random() * 300) + 100
      let arr = ['сделал команду для PayziBot и получил', 'работал поваром и заработал', 'отмечал день рождения и ему подарили', 'переустановил Windows бабушке и она дала ему', 'продал свой телефон и получил', 'работал курьером и заработал за день', 'провел стрим на своем канале и заработал', 'выиграл в конкурсе', 'пропиарил друга и он заплатил', 'нашел кошелек в котором было', 'купил Б/У холодильник и нашел в нём', 'отметил Новый Год и ему подарили', 'поработал уборщиком и заработал'];
      let rand = Math.floor(Math.random() * arr.length);
     User.findOne({guildID: message.guild.id, userID: message.author.id},(err,res) => {
            if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске пользователя в базе-данных`)
          if(!res) return message.reply('123456789')
        if(res.work !== null && 1800000 - (Date.now() - res.work) > 0){
        let uptme = tme(1800000 - (Date.now() - res.work))
        WaitEmbed(`\`${uptme.minutes}\` м. \`${uptme.seconds}\` сек.`, message)
        }else{
        res.work = Date.now()
        res.coins += parseInt(mmm)
        res.save()
        let a = new Discord.MessageEmbed()
        .setTitle('Работа')
        .setDescription(`**${message.author.username}** ${arr[rand]} ${mmm} ${data.currency}`)
        .setColor('#054f3b')
        message.channel.send(a)
      }
    })
        }
        })

       }
       exports.help = {
    name: "work",
    aliases: [],
    info: "eco",
    usage: "work",
    description: "Заработать деньги"
    }