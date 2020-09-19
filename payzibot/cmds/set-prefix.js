exports.run = (client, message, args) => {
        const Discord = require('discord.js')
  const Guild = require('../db/guild.js')
                let twarn = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle("Ошибка!")
    .setDescription(`${message.author}, у Вас недостаточно прав! Нужны права Управление сервером`)
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(twarn)
                    if(!args[0]) return message.reply(`Укажите префикс!`)
        if(args[0].length > 10) return message.reply(`Нельзя поставить префикс длиной более 10 символов`)
    Guild.findOne({guildID: message.guild.id}, (err,data) => {
        if(err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске сервера в базе-данных`) 
        
        if(!data){
            message.reply('Сервер отсутствует в базе данных!')
        }else{
        data.prefix = args[0]
        data.save()
        }
        })
}
       exports.help = {
    name: "set-prefix",
    aliases: ['prefix', 'set-pref', 'pref'],
    info: "settings",
    usage: "set-prefix (новый префикс или REMOVE для сброса префикса)",
    perm: "Manage Guild",
    description: "Сменить префикс бота"
    }