exports.run = (client, message, args) => {
        const Discord = require('discord.js')
        const mongoose = require('mongoose')
          const User = require('../db/user.js')
  const Guild = require('../db/guild.js')
             let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
            let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author
    Guild.findOne({guildID: message.guild.id}, (err,data) => {
        if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске сервера в базе-данных`) 
        
        if(!data){
            message.reply('Сервер отсутствует в базе данных!')
        }else{
   User.findOne({userID: argsUser.id, guildID: message.guild.id}, (err, res) => {
    if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске пользователя в базе-данных`)
    
    if (!res) {
      message.reply(argsUser.username + ` отсутствует в базе данных`)
    } else {
                  let profile = new Discord.MessageEmbed()
        .setTitle('Профиль пользователя user'.replace('user', argsUser.username))
        .setDescription(`**Баланс:** ${res.coins} ${data.currency}
**Биография:** ${res.bio}
**Репутация:** ${res.rep}
**Возраст:** ${res.age} лет
**Сообщений:** ${res.msg}`)
        message.channel.send(profile)
    }
  })
        }
        })
 
       }
       exports.help = {
    name: "profile",
    aliases: [],
    info: "eco",
    usage: "profile",
    description: "Профиль упомянутого пользователя"
    }