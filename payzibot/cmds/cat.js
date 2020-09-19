exports.run = (client, message, args) => {
        const Discord = require('discord.js')
                require('axios')('http://aws.random.cat/meow').then(async res => {
       message.channel.send(
         new Discord.MessageEmbed().setColor('#064f3b').setTitle('**Рандомный кот**').setAuthor(message.author.tag, message.author.displayAvatarURL(), message.author.url).setImage(res.data.file)
      )
    })
        }
       exports.help = {
    name: "catупкрекпкр5е",
    aliases: [],
    info: "photаo",
    usage: "cat",
    description: "Фото кота/кошки"
    }