exports.run = (client, message, args) => {
        const Discord = require('discord.js')
        require('axios')('https://randomfox.ca/floof/?ref=apilist.fun').then(async res => {
      message.channel.send(
         new Discord.MessageEmbed().setColor('#064f3b').setTitle('**Рандомный лис**').setAuthor(message.author.tag, message.author.displayAvatarURL(), message.author.url).setImage(res.data.image)
      )
    })
        }
       exports.help = {
    name: "fox",
    aliases: [],
    info: "photo",
    usage: "fox",
    description: "Фото лисы/лиса"
    }