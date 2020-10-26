exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    let argsUser = member.user || message.author
    let ava = argsUser.avatarURL({format: 'png', size: 1024})
    message.channel.send(new MessageEmbed()
        .setColor('#064f3b')
        .setTitle('**Magik-avatar**')
        .setAuthor(message.author.tag, message.author.avatarURL(), message.author.url)
        .setImage(await require('node-fetch')(`https://nekobot.xyz/api/imagegen?type=magik&image=${ava}&intensity=1`).then(r => r.json()).then(r => r.message)))
}
exports.help = {
    name: "magik",
    aliases: ['magic'],
    info: "photo",
    usage: "magik (пользователь)",
    description: "Помять аватарку упомянутого пользователя"
}
