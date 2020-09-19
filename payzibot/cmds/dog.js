exports.run = (client, message, args) => {
        const Discord = require('discord.js')
        require('axios')('https://dog.ceo/api/breeds/image/random').then(async res => {
      message.channel.send(
         new Discord.MessageEmbed().setColor('#064f3b').setTitle('**Рандомный пёс**').setAuthor(message.author.tag, message.author.displayAvatarURL(), message.author.url).setImage(res.data.message)
      )
    })
        }
       exports.help = {
    name: "dog",
    aliases: [],
    info: "photo",
    usage: "dog",
    description: "Фото собаки"
    }