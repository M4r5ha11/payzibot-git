exports.run = async (client, message, args) => {
        const Discord = require('discord.js')
        if (!message.channel.nsfw) return message.reply('Данный канал не NSFW!')
  let embed = new Discord.MessageEmbed()
        .setColor('#064f3b')
        .setTitle('**Рандомное порно**')
        .setAuthor(message.author.tag, message.author.displayAvatarURL(), message.author.url)
        .setImage(await require('node-fetch')(`https://nekobot.xyz/api/image?type=pgif`).then(r => r.json()).then(r => r.message))
      message.channel.send(embed)
      
        }
       exports.help = {
    name: "porn",
    aliases: ['porno'],
    info: "nsfw",
    usage: "porn",
    description: "Рандомное порно"
    }