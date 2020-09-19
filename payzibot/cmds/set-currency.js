exports.run = (client, message, args) => {
        const Discord = require('discord.js')
  const Guild = require('../db/guild.js')
                let twarn = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle("Ошибка!")
    .setDescription(`${message.author}, у Вас недостаточно прав! Нужны права Управление сервером`)
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(twarn)
                    if(!args[0]) return message.reply(`Укажите валюту!`)
        if(args[0].length > 50) return message.reply(`Нельзя поставить валюту длиной более 50 символов`)
    Guild.findOne({guildID: message.guild.id}, (err,data) => {
        if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске сервера в базе-данных`) 
        
        if(!data){
            message.reply('Сервер отсутствует в базе данных!')
        }else if(args[0] == 'REMOVE'){
        data.currency = '<:payzi_coin:732516111442116658>'
        data.save()
        }else {
            data.currency = args[0]
            data.save()
        }
        })
}
       exports.help = {
    name: "set-currency",
    aliases: ['currency', 'set-curency', 'curency'],
    info: "settings",
    usage: "set-prefix (новай валюта или REMOVE для сброса валюты)",
    perm: "Manage Guild",
    description: "Сменить валюту бота"
    }