exports.run = (client, message, args) => {
        const Discord = require('discord.js')
        if(message.author.id === "439079453650321409") {
  const Guild = require('../db/guild.js')

                    if(!args[0]) return message.reply(`Укажите айди сервера!`)
                    if(!args[1]) return message.reply(`Укажите значение!`)
    Guild.findOne({guildID: args[0]}, (err,data) => {
        if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске сервера в базе-данных`) 
        
        if(!data){
            message.reply('Сервер отсутствует в базе данных!')
        }else{
        data.premium = args[1]
        data.save()
        }
        })
}
       }
       exports.help = {
    name: "set-premium",
    aliases: ['premium', 'prem', 'set-prem'],
    info: "owner",
    usage: "set-premium (ID сервера) (true/false)",
    perm: "Developer",
    description: "Изменить значение премиума на указанном сервере"
    }