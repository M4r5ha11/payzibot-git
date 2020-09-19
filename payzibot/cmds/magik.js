 exports.run = async (client, message, args) => {
        const Discord = require('discord.js')
         let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
            let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author
   let ava = argsUser.displayAvatarURL({format: 'png', size: 1024})
  let embed = new Discord.MessageEmbed()
        .setColor('#064f3b')
        .setTitle('**Magik-avatar**')
        .setAuthor(message.author.tag, message.author.displayAvatarURL(), message.author.url)
        .setImage(await require('node-fetch')(`https://nekobot.xyz/api/imagegen?type=magik&image=${ava}&intensity=1`).then(r => r.json()).then(r => r.message))
      message.channel.send(embed)
        }
       exports.help = {
    name: "magik",
    aliases: ['magic'],
    info: "photo",
    usage: "magik (пользователь)",
    description: "Помять аватарку упомянутого пользователя"
    }